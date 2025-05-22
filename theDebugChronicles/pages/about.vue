<template>
  <div class="about-page">
    <h1 class="title">About The Debug Chronicles</h1>
    <p class="description">
      <strong>The Debug Chronicles</strong> is a blog born out of a passion for
      software development and a desire to share experiences, tips, and
      practical guides. Here, you'll find articles ranging from technical
      tutorials to personal reflections on the world of programming. Whether
      you're a beginner or an expert, our goal is to provide you with valuable
      content and inspire you to improve every day.
    </p>
    <p class="description">
      We believe programming is not just about writing code but also about
      solving problems, continuously learning, and collaborating with a
      community of passionate people. Through
      <strong>The Debug Chronicles</strong>, we aim to create a space where
      every developer can feel part of something bigger.
    </p>
    <p class="final-message" v-show="showFinalMessage">
      Thank you for being part of our journey. 🚀
    </p>
  </div>
</template>

<script setup lang="ts">
const showFinalMessage: Ref<Boolean> = ref(false);

onMounted(() => {
  setTimeout(() => {
    showFinalMessage.value = true;
  }, 2000);
});
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  color: #fff;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #00bcd4;
}

.description {
  max-width: 800px;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #ccc;
}

.final-message {
  font-size: 1.25rem;
  font-weight: bold;
  color: #00bcd4;
  opacity: 0;
  transition: opacity 4s ease-in-out;
}

.final-message:not([style*="display: none"]) {
  opacity: 1;
}
</style>
