import db from "@/lib/db";
import { unstable_cache } from "next/cache";
import { eq } from "drizzle-orm";
import Datatable from "./dataTable";
import { user } from "../schema";

// export const revalidate = 3600;
export const dynamic = "force-static";
export const revalidate = 86400;

export default async function Home({ params }: any) {
  const slug = (await params).slug;
  const userId = slug;
  const getCashedUser = unstable_cache(
    async (userId) => await db.select().from(user).where(eq(user.name, userId)),
    [userId],
    { tags: ["user-viewcount-" + userId, "max"] }
  );
  const data = await getCashedUser(userId);
  return <Datatable data={data} />;
}
