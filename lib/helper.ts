"use server";
import { user } from "@/app/schema";
import db from "./db";
import { eq, sql } from "drizzle-orm";
import { refresh, revalidatePath, revalidateTag } from "next/cache";

export async function increaseValue(id: string) {
  await db
    .update(user)
    .set({ viewCount: sql`${user.viewCount} + 1` })
    .where(eq(user.name, id));
  revalidateTag("user-viewcount-" + id, "max");
  //   revalidatePath("/");
  refresh();
}
