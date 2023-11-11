import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { hashSync } from "bcrypt";
import { emailService } from "../services/email";
import { env } from "process";
import { render } from "@react-email/components";
import VerifyEmail from "~/emails/verifyMail";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  update:protectedProcedure
  .input(z.object({
    password: z.string(),
    id: z.string()
  })
  )
  .mutation(async ({ctx, input}) => {
    const user = await ctx.prisma.user.update({
      where: {
        id: input.id
      },
      data: {
        password: hashSync(input.password, 10)
      }
    })
  })

  ,
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
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
});
