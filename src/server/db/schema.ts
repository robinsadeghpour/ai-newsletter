// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  bigint,
  mysqlTableCreator,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator(
  (name) => `ai-newsletter_${name}`,
);

export const newsSubscriptionList = mysqlTable("newsSubscriptionList", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  email: varchar("email", { length: 255 }).unique().notNull(),
});

export const news = mysqlTable("news", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
});
