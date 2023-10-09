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
        title: z.string(),
        files: z.array(fileName),
        content: z.string(),
        communityId: z.string().cuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.$transaction(async (prisma) => {
        const post = await prisma.post.create({
          data: {
            title: input.title,
            content: input.content,
            communityId: input.communityId,
            userId: ctx.session.user.id,
          },
        });

        for (const file of input.files) {
          console.log(file, post);
        }
      });
    }),
  list: publicProcedure.query(async ({ ctx }) => {
    const communities = await ctx.prisma.community.findMany();

    if (!communities) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Nenhuma comunidade encontrada",
      });
    }

    return communities;
  }),
  listAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany();

    if (!posts.length) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Post não encontrados",
      });
    }

    return posts;
  }),
});
