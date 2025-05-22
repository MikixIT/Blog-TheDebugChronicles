<template>
  <div class="login-hero">
    <div class="matrix-bg"></div>
    <form class="login-form" @submit.prevent="onLogin">
      <h2 class="gradient-text">Sign In</h2>
      <div class="input-group">
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          required
          autocomplete="username"
        />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          autocomplete="current-password"
        />
      </div>
      <button class="cta-btn" type="submit">Login</button>
      <p class="login-hint">
        Pro tip: <span class="typewriter">Debug your way in 🚀</span>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
const password = ref("");

function onLogin() {
  // Qui puoi aggiungere la logica di autenticazione
  alert(`Welcome, ${username.value}! 🚀`);
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css");

.login-hero {
  min-height: 100vh;
  background: #0f2027;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.matrix-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: repeating-linear-gradient(
    to bottom,
    rgba(0, 255, 70, 0.07) 0px,
    rgba(0, 255, 70, 0.07) 2px,
    transparent 2px,
    transparent 20px
  );
  animation: matrixRain 2s linear infinite;
}

@keyframes matrixRain {
  0% {
    background-position-y: 0;
  }
  100% {
    background-position-y: 20px;
  }
}

.login-form {
  position: relative;
  z-index: 2;
  background: rgba(20, 20, 30, 0.92);
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  padding: 2.5rem 2rem 2rem 2rem;
  min-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gradient-text {
  background: linear-gradient(90deg, #00c6ff, #0072ff, #00ffb4, #ff00c8);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 3s linear infinite;
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 2rem;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.input-group {
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-group label {
  color: #b2ffb2;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
}

.input-group input {
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: none;
  background: #23272e;
  color: #fff;
  font-size: 1.1rem;
  outline: none;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 255, 180, 0.07);
}

.input-group input:focus {
  box-shadow: 0 0 0 2px #00ffb4;
}

.cta-btn {
  margin-top: 0.5rem;
  padding: 0.8rem 2.2rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, #00c6ff, #0072ff, #00ffb4, #ff00c8);
  background-size: 200% 200%;
  border: none;
  border-radius: 30px;
  box-shadow: 0 4px 16px rgba(0, 255, 180, 0.15);
  cursor: pointer;
  text-decoration: none;
  transition: background-position 0.5s, box-shadow 0.3s;
  animation: gradientMove 3s linear infinite;
}
.cta-btn:hover {
  background-position: 100% 0;
  box-shadow: 0 6px 24px rgba(0, 255, 180, 0.25);
}

.login-hint {
  margin-top: 1.5rem;
  color: #b2ffb2;
  font-size: 1rem;
  text-align: center;
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  border-right: 0.15em solid #00ffb4;
  white-space: nowrap;
  animation: typing 2.5s steps(30, end), blink-caret 0.75s step-end infinite;
  font-family: "Fira Mono", "Consolas", monospace;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #00ffb4;
  }
}
</style>
