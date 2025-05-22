<template>
  <div class="posts-page">
    <h1 class="title">All the Posts</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error Loading Post.</div>
    <div v-else class="posts-container">
      <PostCard v-for="post in posts ?? []" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Post } from "~/types/post";

const { data: posts, pending, error } = await useFetch<Post[]>("/api/post");
</script>

<style scoped>
.posts-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  color: #fff;
}

.title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #00bcd4;
}

.posts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
}

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
