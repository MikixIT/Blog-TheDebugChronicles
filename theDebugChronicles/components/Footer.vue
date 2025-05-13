<template>
  <footer class="footer">
    <div class="container">
      <p class="credits">
        Made with 🔥 by <span class="author">Michael Torres</span>
      </p>
      <ul class="social-links">
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener"
            >Twitter</a
          >
        </li>
        <li>
          <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener"
            >LinkedIn</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
  font-size: 0.875rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.credits {
  margin: 0;
}

.author {
  font-weight: bold;
  color: #00bcd4;
}

.social-links {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0.5rem 0 0;
  padding: 0;
}

.social-links a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #00bcd4;
}
</style>
