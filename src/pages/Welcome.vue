<template>
  <div class="welcome-bg min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-colors">
    <!-- Animated Emoji Parade -->
    <div class="emoji-parade flex gap-4 mb-6">
      <span v-for="(emoji, i) in emojis" :key="i" class="emoji-item text-4xl md:text-5xl" :style="{ animationDelay: `${i * 0.15}s` }">{{ emoji }}</span>
    </div>
    <!-- Animated Heading -->
    <h1 class="welcome-title text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">Welcome to Mood Tracker</h1>
    <!-- Animated Button -->
    <router-link to="/tracker">
      <button class="welcome-btn px-6 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold shadow hover:bg-blue-700 transition">Get Started</button>
    </router-link>
    <!-- Optional: Animated SVG Sparkles -->
    <svg class="absolute left-8 top-8 animate-spin-slow opacity-30 w-16 h-16 text-yellow-300 hidden md:block" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="4" stroke-dasharray="8 8"/></svg>
    <svg class="absolute right-8 bottom-8 animate-bounce opacity-20 w-12 h-12 text-pink-400 hidden md:block" fill="none" viewBox="0 0 64 64"><rect x="16" y="16" width="32" height="32" rx="16" fill="currentColor"/></svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emojis = ref(['😊', '😢', '😡', '😱', '😍', '😐'])
</script>

<style scoped>
/* Animated Gradient Background */
.welcome-bg {
  background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  animation: gradient-move 8s ease-in-out infinite alternate;
}
.dark .welcome-bg {
  background: linear-gradient(120deg, #232526 0%, #414345 100%);
  animation: gradient-move-dark 8s ease-in-out infinite alternate;
}
@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
@keyframes gradient-move-dark {
  0% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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
</style>
