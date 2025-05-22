<template>
  <div class="contact-page">
    <h1 class="title">Contact Us</h1>
    <p class="description">
      Welcome to <strong>The Debug Chronicles</strong>, a blog dedicated to
      sharing experiences, tips, and guides on software development. Whether
      you're a beginner or an experienced developer, you'll find valuable
      insights here to enhance your journey.
    </p>
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Your Email" />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" rows="5" placeholder="Your Message"></textarea>
      </div>
      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  color: #fff;
}

.title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #00bcd4;
}

.description {
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #ccc;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #00bcd4;
}

input,
textarea {
  padding: 0.75rem;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #222;
  color: #fff;
  font-size: 1rem;
}

input::placeholder,
textarea::placeholder {
  color: #777;
}

.submit-button {
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #00bcd4;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0097a7;
}
</style>
