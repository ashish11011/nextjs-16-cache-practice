import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name"),
  viewCount: integer("viewCount").default(0),
});
