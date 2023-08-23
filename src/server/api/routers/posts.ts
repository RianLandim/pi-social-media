import { File } from "@phosphor-icons/react";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const postsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        files: z.array(z.custom<File>()),
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

        for (const file of input.files) {
          console.log(file.name);
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
});
