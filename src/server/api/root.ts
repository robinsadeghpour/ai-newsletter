import { newsRouter } from "lotti/server/api/routers/news";
import { createTRPCRouter } from "lotti/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  news: newsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
