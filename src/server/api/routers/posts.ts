import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { prisma } from "~/server/db";
import { s3 } from "../services/object";

export const postsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        file: z
          .object({ filename: z.string(), mimetype: z.string() })
          .optional(),
        content: z.string(),
        communityId: z.string().cuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const post = await prisma.post.create({
        data: {
          content: input.content,
          communityId: input.communityId,
          userId: ctx.session.user.id,
        },
      });

      if (input.file) {
        const imageKey = `/posts/${post.id}/${input.file.filename}`;

        const presignedPost = await s3.getUploadUrl(imageKey);
        const servicePostURL = await s3.getFileUrl(imageKey);

        await ctx.prisma.post.update({
          where: {
            id: post.id,
          },
          data: {
            file: {
              create: {
                url: servicePostURL,
              },
            },
          },
        });

        return presignedPost;
      }
    }),
  list: protectedProcedure
    .input(
      z
        .object({
          tab: z
            .enum(["followeds", "communities"])
            .default("followeds")
            .optional(),
        })
        .optional()
    )
    .query(async ({ ctx, input }) => {
      const posts = await ctx.prisma.post.findMany({
        ...(input?.tab === "followeds" && {
          where: {
            user: {
              OR: [
                {
                  id: ctx.session.user.id,
                },
                {
                  followers: {
                    some: {
                      id: ctx.session.user.id,
                    },
                  },
                },
              ],
            },
          },
        }),
        include: {
          liked: {
            select: {
              id: true,
            },
          },
          replyed: {
            select: {
              _count: true,
            },
          },
          reply: {
            select: {
              id: true,
              content: true,
            },
          },
          file: {
            select: {
              id: true,
              url: true,
            },
          },
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      if (!posts.length) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Post não encontrados",
        });
      }

      return posts;
    }),

  like: protectedProcedure
    .input(z.object({ postId: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      const isAlreadyLike = await ctx.prisma.post.findFirst({
        where: {
          liked: {
            some: {
              id: ctx.session.user.id,
            },
          },
        },
      });

      if (isAlreadyLike) {
        await ctx.prisma.post.update({
          where: {
            id: input.postId,
          },
          data: {
            liked: {
              disconnect: {
                id: ctx.session.user.id,
              },
            },
          },
        });
        return;
      }

      await ctx.prisma.post.update({
        where: {
          id: input.postId,
        },
        data: {
          liked: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),
});
