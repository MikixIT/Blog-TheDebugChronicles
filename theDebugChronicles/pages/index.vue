<template>
  <div class="welcome-hero">
    <div class="matrix-bg"></div>
    <div class="welcome-content">
      <h1>
        <span class="gradient-text">Welcome, Developer!</span>
      </h1>
      <p class="subtitle">
        <span class="typewriter">
          Unlock the secrets of code. Build. Break. Debug. Repeat.
        </span>
      </p>
      <div class="terminal">
        <div class="terminal-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <div class="terminal-body">
          <pre>
<span class="prompt">$</span> <span class="cmd">npx create-awesome-life</span>
<span class="output">✨ Coding is not just a job, it's a superpower.</span>
<span class="prompt">$</span> <span class="cmd">git commit -m "Dream in code"</span>
<span class="output">[main] 1 file changed, 42 insertions(+), 0 deletions(-)</span>
<span class="prompt">$</span> <span class="cmd">npm run debug-chronicles</span>
<span class="output">🚀 Welcome to The Debug Chronicles!</span>
<span class="prompt">$</span>
<input
  v-model="userCommand"
  @keyup.enter="submitCommand"
  class="terminal-input"
  placeholder="Type a command..."
  autocomplete="off"
/>
<span v-if="userOutput" class="output">{{ userOutput }}</span>
          </pre>
        </div>
      </div>
      <NuxtLink to="/posts" class="cta-btn">Explore Posts</NuxtLink>
    </div>
    <div class="floating-icons">
      <i class="devicon-vuejs-plain colored"></i>
      <i class="devicon-typescript-plain colored"></i>
      <i class="devicon-github-original"></i>
      <i class="devicon-javascript-plain colored"></i>
      <i class="devicon-nuxtjs-plain colored"></i>
      <i class="devicon-css3-plain colored"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const userCommand = ref("");
const userOutput = ref("");

function submitCommand() {
  if (!userCommand.value.trim()) return;
  switch (userCommand.value.trim().toLowerCase()) {
    case "help":
      userOutput.value =
        "Available commands: help, about, clear, coffee, debug, hello";
      break;
    case "about":
      userOutput.value =
        "This is The Debug Chronicles. Made for developers, by developers!";
      break;
    case "coffee":
      userOutput.value = "☕ Brewing virtual coffee... Done!";
      break;
    case "debug":
      userOutput.value = "Debugging... All bugs have been magically fixed! 🪄";
      break;
    case "hello":
      userOutput.value = "Hello, developer! 👋";
      break;
    case "clear":
      userOutput.value = "";
      userCommand.value = "";
      break;
    default:
      userOutput.value = `Command not found: ${userCommand.value}`;
  }
  if (userCommand.value.trim().toLowerCase() !== "clear") {
    userCommand.value = "";
  }
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css");

.welcome-hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: #0f2027;
  display: flex;
  align-items: center;
  justify-content: center;
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

.welcome-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 3rem 2rem;
  background: rgba(20, 20, 30, 0.85);
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
}

.gradient-text {
  background: linear-gradient(90deg, #00c6ff, #0072ff, #00ffb4, #ff00c8);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 3s linear infinite;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 2px;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.subtitle {
  font-size: 1.3rem;
  margin: 1.5rem 0 2.5rem 0;
  color: #b2ffb2;
  min-height: 2.5rem;
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  border-right: 0.15em solid #00ffb4;
  white-space: nowrap;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
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

.terminal {
  background: #181c20;
  border-radius: 10px;
  margin: 0 auto 2.5rem auto;
  max-width: 580px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.4);
  font-family: "Fira Mono", "Consolas", monospace;
  font-size: 1rem;
  overflow: hidden;
}

.terminal-header {
  background: #23272e;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.terminal-header .dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}
.terminal-header .red {
  background: #ff5f56;
}
.terminal-header .yellow {
  background: #ffbd2e;
}
.terminal-header .green {
  background: #27c93f;
}

.terminal-body {
  padding: 1rem 1.5rem;
  color: #b2ffb2;
  text-align: left;
}

.terminal-body .prompt {
  color: #00ffb4;
}
.terminal-body .cmd {
  color: #fff;
  font-weight: bold;
}
.terminal-body .output {
  color: #b2ffb2;
  margin-left: 1.5rem;
}

.cta-btn {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.9rem 2.2rem;
  font-size: 1.2rem;
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

.floating-icons {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  z-index: 0;
  pointer-events: none;
  animation: floatIcons 6s ease-in-out infinite alternate;
}

.floating-icons i {
  font-size: 2.5rem;
  opacity: 0.7;
  filter: drop-shadow(0 2px 8px #00ffb4);
  animation: iconSpin 8s linear infinite;
}

@keyframes floatIcons {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}
@keyframes iconSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.terminal-input {
  background: transparent;
  border: none;
  color: #fff;
  font-family: "Fira Mono", "Consolas", monospace;
  font-size: 1rem;
  outline: none;
  width: 80%;
  margin-left: 0.5rem;
  caret-color: #00ffb4;
  padding: 0;
}

.terminal-input::placeholder {
  color: #00ffb4;
  opacity: 0.6;
}

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 900px) {
  .welcome-content {
    padding: 2rem 1rem;
    font-size: 0.95rem;
  }
  .gradient-text {
    font-size: 2.1rem;
  }
  .terminal {
    max-width: 98vw;
    font-size: 0.95rem;
  }
  .terminal-body {
    padding: 0.7rem 0.5rem;
  }
  .cta-btn {
    font-size: 1rem;
    padding: 0.7rem 1.5rem;
  }
  .floating-icons i {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .welcome-hero {
    align-items: flex-start;
    padding-top: 1.5rem;
  }
  .welcome-content {
    padding: 1.2rem 0.3rem;
    border-radius: 14px;
    font-size: 0.92rem;
    min-width: unset;
    max-width: 98vw;
  }
  .gradient-text {
    font-size: 1.3rem;
    letter-spacing: 1px;
  }
  .subtitle {
    font-size: 1rem;
    margin: 1rem 0 1.5rem 0;
    min-height: 1.5rem;
  }
  .terminal {
    max-width: 99vw;
    font-size: 0.85rem;
    margin-bottom: 1.2rem;
  }
  .terminal-header {
    padding: 0.3rem 0.5rem;
  }
  .terminal-body {
    padding: 0.5rem 0.2rem;
  }
  .terminal-input {
    font-size: 0.9rem;
    width: 95%;
  }
  .cta-btn {
    font-size: 0.95rem;
    padding: 0.6rem 1.1rem;
    margin-top: 1rem;
  }
  .floating-icons {
    gap: 1.2rem;
    bottom: 0.2rem;
  }
  .floating-icons i {
    font-size: 1.2rem;
  }
}

@media (max-width: 400px) {
  .welcome-content {
    padding: 0.7rem 0.1rem;
    border-radius: 8px;
    font-size: 0.85rem;
  }
  .gradient-text {
    font-size: 1rem;
  }
  .terminal {
    font-size: 0.7rem;
  }
  .terminal-input {
    font-size: 0.7rem;
  }
  .cta-btn {
    font-size: 0.8rem;
    padding: 0.4rem 0.7rem;
  }
}
</style>
