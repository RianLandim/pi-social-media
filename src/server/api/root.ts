import { createTRPCRouter } from "~/server/api/trpc";
import { communityRouter } from "./routers/community";
import { postsRouter } from "./routers/posts";
import { userRouter } from "./routers/users";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  communities: communityRouter,
  post: postsRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
