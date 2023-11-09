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
});
