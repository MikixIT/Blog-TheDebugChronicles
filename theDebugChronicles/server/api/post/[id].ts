import { createClient } from "@supabase/supabase-js";
import type { Post } from "~/types/post";

const supabase = createClient(
  process.env.NUXT_SUPABASE_URL!,
  process.env.NUXT_SUPABASE_KEY!
);

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const { data, error } = await supabase
    .from("post")
    .select("id, title, excerpt, content, created_at, author")
    .eq("id", id)
    .single();

  if (error || !data) {
    throw createError({ statusCode: 404, statusMessage: "Post not found" });
  }

  return data as Post;
});
