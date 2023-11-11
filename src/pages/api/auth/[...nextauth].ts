import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";

import { prisma } from "../../../server/db";

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, token, user }) {
      if (session.user) {
        session.user.id = token.sub ?? "";
      }

      return session;
    },
    jwt({ token }) {
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (!user) {
          return null;
        }

        const password = credentials?.password ?? "";
        const userPassword = user.password ?? "";

        const passwordMatches = await bcrypt.compare(password, userPassword);

        if (!passwordMatches) {
          return null;
        }

        return {
          ...user,
        };
      },
      type: "credentials",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/entrar",
  },
};

export default NextAuth(authOptions);
