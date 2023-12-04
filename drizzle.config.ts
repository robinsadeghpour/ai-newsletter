import { type Config } from "drizzle-kit";

import { env } from "lotti/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["lotti-ai-content-magic_*"],
} satisfies Config;
