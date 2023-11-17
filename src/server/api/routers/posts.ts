import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

const fileName = z.string().refine((val) => {
  const extension = val.split(".").pop();

  return (
    extension === "png" ||
    extension === "jpeg" ||
    extension === "mp4" ||
    extension === "mp3"
  );
});

export const postsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        files: z.array(fileName).optional(),
        content: z.string(),
        communityId: z.string().cuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.$transaction(async (prisma) => {
        const post = await prisma.post.create({
          data: {
            content: input.content,
            communityId: input.communityId,
            userId: ctx.session.user.id,
          },
        });
      });
    }),
  list: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
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
