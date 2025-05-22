<template>
  <div class="single-post-container">
    <h2 class="single-author">Author: {{ post?.author }}</h2>
    <h1 class="single-post-title">{{ post?.title }}</h1>
    <p class="single-post-content">{{ post?.content }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types/post";

const route = useRoute();
const postId = route.params.id as string;

const {
  data: post,
  pending,
  error,
} = await useFetch<Post>(() => `/api/post/${postId}`, { server: true });
</script>

<style scoped>
.single-post-container {
  max-width: 700px;
  margin: 2rem auto;
  background: #23272f;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  padding: 2rem 1.5rem;
  color: #fff;
}

.single-author {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
  text-align: center;
}

.single-post-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
  color: #00bcd4;
  letter-spacing: 1px;
  text-align: center;
}

.single-post-content {
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: #e0e0e0;
  text-align: center;
}

@media (max-width: 600px) {
  .single-post-container {
    padding: 1.2rem 0.5rem;
  }
  .single-post-title {
    font-size: 1.4rem;
  }
  .single-post-content {
    font-size: 1rem;
  }
}
</style>
