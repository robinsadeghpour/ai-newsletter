import { type ExecutedQuery } from "@planetscale/database";
import { db } from "lotti/server/db";
import { news } from "lotti/server/db/schema";
import {
  magicNewsTemplate,
  type MagicNews,
} from "lotti/server/magic-mail.prompt";
import { createChatCompletion, Prompt } from "lotti/server/openai";

type NewNews = typeof news.$inferInsert;

export async function generateMagicNews() {
  const prompt = new Prompt(magicNewsTemplate);
  const result = await createChatCompletion(prompt);

  if (!result) throw new Error("Could not generate magic mail");

  return mapResponseToMagicMail(result);
}

export const mapResponseToMagicMail = (responseString: string): MagicNews => {
  return JSON.parse(responseString) as MagicNews;
};

export const saveMagicNews = async (
  magicNews: MagicNews,
): Promise<ExecutedQuery> => {
  const newsToAdd: NewNews = {
    title: magicNews.title,
    content: magicNews.content,
  };

  return db.insert(news).values(newsToAdd);
};
