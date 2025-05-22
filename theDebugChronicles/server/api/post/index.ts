import { createClient } from "@supabase/supabase-js";
import type { Post } from "~/types/post";
const supabaseUrl = process.env.NUXT_SUPABASE_URL!;
const supabaseKey = process.env.NUXT_SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default defineEventHandler(async () => {
  const { data, error } = await supabase
    .from("post")
    .select("id, title, excerpt, content, created_at, author")
    .order("created_at", { ascending: false });

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return data as Post[];
});
