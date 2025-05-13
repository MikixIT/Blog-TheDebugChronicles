<template>
  <div class="layout">
    <Navbar />
    <main class="content">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style>
body {
  background-color: #000;
  color: #fff;
  margin: 0;
  font-family: "Inter", Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
