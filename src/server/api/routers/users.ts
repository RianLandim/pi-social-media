import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { hashSync } from "bcrypt";
import { emailService } from "../services/email";
import { env } from "process";
import { render } from "@react-email/components";
import VerifyEmail from "~/emails/verifyMail";

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
});
