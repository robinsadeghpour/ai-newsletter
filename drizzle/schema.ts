import {bigint, mysqlTable, primaryKey, text, unique, varchar} from "drizzle-orm/mysql-core"


export const lottiAiContentMagicNews = mysqlTable("lotti-ai-content-magic_news", {
    id: bigint("id", {mode: "number"}).autoincrement().notNull(),
    title: varchar("title", {length: 255}).notNull(),
    content: text("content").notNull(),
  },
  (table) => {
    return {
      lottiAiContentMagicNewsId: primaryKey(table.id),
    }
  });

export const lottiAiContentMagicNewsCategories = mysqlTable("lotti-ai-content-magic_newsCategories", {
    id: varchar("id", {length: 255}).notNull(),
    name: varchar("name", {length: 255}).notNull(),
    newsId: bigint("newsId", {mode: "number"}),
  },
  (table) => {
    return {
      lottiAiContentMagicNewsCategoriesId: primaryKey(table.id),
      lottiAiContentMagicNewsCategoriesNewsIdUnique: unique("lotti-ai-content-magic_newsCategories_newsId_unique").on(table.newsId),
    }
  });

export const lottiAiContentMagicNewsSubscriptionList = mysqlTable("lotti-ai-content-magic_newsSubscriptionList", {
    id: bigint("id", {mode: "number"}).autoincrement().notNull(),
    email: varchar("email", {length: 255}).notNull(),
  },
  (table) => {
    return {
      lottiAiContentMagicNewsSubscriptionListId: primaryKey(table.id),
    }
  });