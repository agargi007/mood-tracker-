<template>
  <div class="welcome-summer-bg min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
    <div class="flex flex-col items-center justify-center w-full h-full min-h-screen">
      <!-- Animated Emoji Parade -->
      <div class="emoji-parade flex gap-6 mb-10 md:mb-14">
        <span v-for="(emoji, i) in emojis" :key="i" class="emoji-item text-5xl md:text-7xl" :style="{ animationDelay: `${i * 0.15}s` }">{{ emoji }}</span>
      </div>
      <!-- Animated Heading -->
      <h1 class="welcome-title font-display text-5xl md:text-7xl font-extrabold mb-10 md:mb-14 text-gray-800 tracking-tight text-center drop-shadow-lg">Welcome to Mood Tracker</h1>
      <!-- Animated Button -->
      <router-link to="/tracker">
        <button class="welcome-btn px-8 py-4 rounded-xl bg-pink-400/90 text-white text-2xl md:text-3xl font-bold shadow-lg hover:bg-pink-500 transition">Get Started</button>
      </router-link>
    </div>
    <!-- Optional: Animated SVG Sparkles -->
    <svg class="absolute left-8 top-8 animate-spin-slow opacity-30 w-24 h-24 text-yellow-300 hidden md:block" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="4" stroke-dasharray="8 8"/></svg>
    <svg class="absolute right-8 bottom-8 animate-bounce opacity-20 w-20 h-20 text-pink-400 hidden md:block" fill="none" viewBox="0 0 64 64"><rect x="16" y="16" width="32" height="32" rx="16" fill="currentColor"/></svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emojis = ref(['😊', '😢', '😡', '😱', '😍', '😐'])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');

/* Summer Pastel Background */
.welcome-summer-bg {
  min-height: 100vh;
  width: 100vw;
  background-image: url('../assets/pastel-bg-flowers.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Emoji Parade Animation */
.emoji-parade {
  will-change: transform;
}
.emoji-item {
  opacity: 0;
  transform: translateY(30px) scale(0.8) rotate(-10deg);
  animation: emoji-float-in 0.7s cubic-bezier(.68,-0.55,.27,1.55) forwards;
}
@keyframes emoji-float-in {
  to {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

/* Animated Heading */
.welcome-title {
  opacity: 0;
  transform: translateY(-30px);
  animation: title-fade-in 0.9s 0.7s cubic-bezier(.68,-0.55,.27,1.55) forwards;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  letter-spacing: -0.03em;
  line-height: 1.1;
}
@keyframes title-fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animated Button */
.welcome-btn {
  opacity: 0;
  transform: scale(0.8);
  animation: btn-pop-in 0.7s 1.2s cubic-bezier(.68,-0.55,.27,1.55) forwards;
}
@keyframes btn-pop-in {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* SVG Animations */
.animate-spin-slow {
  animation: spin 8s linear infinite;
}
@keyframes spin {
  100% { transform: rotate(360deg); }
}
.animate-bounce {
  animation: bounce 2.5s infinite alternate;
}
@keyframes bounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
}

/* Font utility for heading */
.font-display {
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
}
</style>