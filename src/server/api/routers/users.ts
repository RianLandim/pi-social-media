import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { hashSync } from "bcrypt";
import { emailService } from "../services/email";
import { env } from "process";
import { render } from "@react-email/components";
import VerifyEmail from "~/emails/verifyMail";
import { TRPCError } from "@trpc/server";
import { s3 } from "../services/object";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const isAlreadyUser = await ctx.prisma.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (isAlreadyUser) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Usuário já registrado",
        });
      }

      const user = await ctx.prisma.user.create({
        data: {
          email: input.email,
          name: input.name,
          password: hashSync(input.password, 10),
        },
      });

      emailService.send({
        from: env.MAIL_FROM ?? "",
        html: render(VerifyEmail()),
        subject: "Verify Mail",
        to: user.email ?? "",
      });
    }),
  listPossibleFolloweds: protectedProcedure
    .input(z.object({ search: z.string().optional() }).optional())
    .query(async ({ ctx, input }) => {
      const users = await ctx.prisma.user.findMany({
        where: {
          name: {
            contains: input?.search,
          },
          id: {
            not: ctx.session.user.id,
          },
          followers: {
            none: {
              id: ctx.session.user.id,
            },
          },
        },
        take: 5,
      });

      return users;
    }),
  listById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      return user;
    }),

  listLikedPosts: protectedProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
      select: {
        likedPosts: {
          select: {
            id: true,
          },
        },
      },
    });

    return posts;
  }),
  follow: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const alreadyFollow = await ctx.prisma.user.findFirst({
        where: {
          followeds: {
            some: {
              id: input.userId,
            },
          },
        },
      });

      if (alreadyFollow) {
        await ctx.prisma.user.update({
          where: {
            id: ctx.session.user.id,
          },
          data: {
            followeds: {
              disconnect: {
                id: input.userId,
              },
            },
          },
        });

        return;
      }

      await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          followeds: {
            connect: {
              id: input.userId,
            },
          },
        },
      });
    }),

  listMyFollowers: protectedProcedure.query(async ({ ctx }) => {
    const followers = await ctx.prisma.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
      select: {
        followers: true,
      },
    });

    return followers?.followers;
  }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        email: z.string().optional(),
        avatar: z
          .object({
            filename: z.string(),
            mimetype: z.string(),
          })
          .optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { avatar, id, email, name } = input;

      await ctx.prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
          email,
        },
      });

      if (avatar) {
        const imageKey = `${input.id}/avatar/${avatar.filename}`;

        const presignedPost = await s3.getUploadUrl(imageKey);
        const serviceLogoURL = await s3.getFileUrl(imageKey);

        await ctx.prisma.user.update({
          where: {
            id,
          },
          data: {
            image: serviceLogoURL,
          },
        });

        return presignedPost;
      }
    }),

  listMe: protectedProcedure.query(async ({ ctx }) => {
    const me = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });

    if (!me) {
      throw new TRPCError({
        code: "BAD_REQUEST",
      });
    }

    return me;
  }),
});
