import { type ExecutedQuery } from "@planetscale/database";
import { db } from "@/server/db";
import { news } from "@/server/db/schema";
import {
  aiNewsletterTemplate,
  type aiNewsletter,
} from "@/server/magic-mail.prompt";
import { createChatCompletion, Prompt } from "@/server/openai";

type NewNews = typeof news.$inferInsert;

export async function generateMagicNews() {
  const prompt = new Prompt(aiNewsletterTemplate);
  const result = await createChatCompletion(prompt);

  if (!result) throw new Error("Could not generate magic mail");

  return mapResponseToMagicMail(result);
}

export const mapResponseToMagicMail = (responseString: string): aiNewsletter => {
  return JSON.parse(responseString) as aiNewsletter;
};

export const saveMagicNews = async (
  magicNews: aiNewsletter,
): Promise<ExecutedQuery> => {
  const newsToAdd: NewNews = {
    title: magicNews.title,
    content: magicNews.content,
  };

  return db.insert(news).values(newsToAdd);
};
