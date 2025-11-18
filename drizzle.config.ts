// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/schema/index.ts",
  dbCredentials: {
    url: process.env.DB_URL!,
  },
});
