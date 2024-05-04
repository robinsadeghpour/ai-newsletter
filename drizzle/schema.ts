import {bigint, mysqlTable, primaryKey, text, unique, varchar} from "drizzle-orm/mysql-core"


export const aiNewsletter = mysqlTable("ai-newsletter", {
    id: bigint("id", {mode: "number"}).autoincrement().notNull(),
    title: varchar("title", {length: 255}).notNull(),
    content: text("content").notNull(),
  },
  (table) => {
    return {
      aiNewsletterId: primaryKey(table.id),
    }
  });

export const aiNewsletterCategories = mysqlTable("ai-newsletter_newsCategories", {
    id: varchar("id", {length: 255}).notNull(),
    name: varchar("name", {length: 255}).notNull(),
    newsId: bigint("newsId", {mode: "number"}),
  },
  (table) => {
    return {
      aiNewsletterCategoriesId: primaryKey(table.id),
      aiNewsletterCategoriesNewsIdUnique: unique("ai-newsletter_newsCategories_newsId_unique").on(table.newsId),
    }
  });

export const aiNewsletterSubscriptionList = mysqlTable("ai-newsletter_newsSubscriptionList", {
    id: bigint("id", {mode: "number"}).autoincrement().notNull(),
    email: varchar("email", {length: 255}).notNull(),
  },
  (table) => {
    return {
      aiNewsletterSubscriptionListId: primaryKey(table.id),
    }
  });