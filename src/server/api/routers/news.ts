import { eq } from "drizzle-orm";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { news, newsSubscriptionList } from "@/server/db/schema";
import { z } from "zod";

type NewSubscription = typeof newsSubscriptionList.$inferInsert;

export const newsRouter = createTRPCRouter({
  getNews: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.news.findMany();
  }),
  getNewsById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.query.news.findFirst({
        where: eq(news.id, input.id),
      });
    }),
  subscribeNews: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ ctx, input }) => {
      const newSubscription: NewSubscription = {
        email: input.email,
      };

      await ctx.db.insert(newsSubscriptionList).values(newSubscription);
    }),
});
