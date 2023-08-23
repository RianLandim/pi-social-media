import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const communityRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.community.create({
        data: {
          name: input.name,
          createdBy: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
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
