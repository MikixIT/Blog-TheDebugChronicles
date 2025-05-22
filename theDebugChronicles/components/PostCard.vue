<template>
  <div class="post-card">
    <h2 class="post-title">{{ post.title }}</h2>
    <p class="post-excerpt">{{ post.excerpt }}</p>
    <NuxtLink :to="`/posts/${post.id}`" class="read-more">Read More</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types/post";

defineProps<{
  post: Post;
}>();
</script>

<style scoped>
.post-card {
  background-color: #333;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.post-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.post-excerpt {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #ccc;
}

.read-more {
  text-decoration: none;
  color: #00bcd4;
  font-weight: bold;
  transition: color 0.3s;
}

.read-more:hover {
  color: #fff;
}
</style>
