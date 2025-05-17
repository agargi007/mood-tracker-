<template>
  <div class="welcome-summer-bg min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden" style="background: linear-gradient(120deg, #fceabb 0%, #f8bfae 50%, #b5ead7 100%);">
    <div class="flex flex-col items-center justify-center w-full h-full min-h-screen">
      <!-- Animated Heading -->
      <h1 class="welcome-title font-display text-6xl md:text-8xl font-extrabold mb-12 md:mb-16 text-gray-800 tracking-tight text-center drop-shadow-lg animate-gradient-text" style="color: #213547;">Welcome to Mood Tracker</h1>
      <!-- Animated Emoji Parade (centered, larger, more visible) -->
      <div class="emoji-parade flex gap-10 mb-16 md:mb-20 justify-center">
        <span class="emoji-item text-8xl md:text-9xl mood-emoji" style="animation-delay:0s">🤩</span>
        <span class="emoji-item text-8xl md:text-9xl mood-emoji" style="animation-delay:0.12s">😊</span>
        <span class="emoji-item text-8xl md:text-9xl mood-emoji" style="animation-delay:0.24s">😐</span>
        <span class="emoji-item text-8xl md:text-9xl mood-emoji" style="animation-delay:0.36s">😢</span>
        <span class="emoji-item text-8xl md:text-9xl mood-emoji" style="animation-delay:0.48s">😡</span>
      </div>
      <!-- Animated Button -->
      <router-link to="/tracker">
        <button class="welcome-btn px-10 py-5 rounded-2xl bg-pink-400/90 text-white text-3xl md:text-4xl font-bold shadow-lg hover:bg-pink-500 transition">Get Started</button>
      </router-link>
    </div>
    <!-- Optional: Animated SVG Sparkles -->
    <svg class="absolute left-8 top-8 animate-spin-slow opacity-30 w-24 h-24 text-yellow-300 hidden md:block" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="4" stroke-dasharray="8 8"/></svg>
    <svg class="absolute right-8 bottom-8 animate-bounce opacity-20 w-20 h-20 text-pink-400 hidden md:block" fill="none" viewBox="0 0 64 64"><rect x="16" y="16" width="32" height="32" rx="16" fill="currentColor"/></svg>
  </div>
</template>

<script setup>

</script>

<style scoped>
/* Font imports are now global in style.css */

/* Summer Pastel Background */
.welcome-summer-bg {
/* Mood Emoji Animation: bounce and float */
/* Mood Emoji Animation: bounce and float */
.mood-emoji {
  animation: emoji-bounce-float 2.5s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate;
  filter: drop-shadow(0 4px 16px rgba(0,0,0,0.10));
}
@keyframes emoji-bounce-float {
  0% { transform: translateY(0) scale(1.1) rotate(-8deg); filter: brightness(1.1) drop-shadow(0 4px 16px rgba(0,0,0,0.10)); }
  50% { transform: translateY(-18px) scale(1.18) rotate(8deg); filter: brightness(1.2) drop-shadow(0 8px 24px rgba(0,0,0,0.13)); }
  100% { transform: translateY(0) scale(1.1) rotate(-8deg); filter: brightness(1.1) drop-shadow(0 4px 16px rgba(0,0,0,0.10)); }
}

/* Animated Gradient Text for Heading */
.animate-gradient-text {
  background: linear-gradient(90deg, #ffb6b9, #fcdff0, #b5ead7, #c9c9ff, #ffdac1);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-move-text 4s ease-in-out infinite alternate;
}
@keyframes gradient-move-text {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* Mood Sparkles Animation */
.mood-sparkle {
  position: absolute;
  font-size: 2.5rem;
  opacity: 0.7;
  pointer-events: none;
  filter: blur(0.5px) brightness(1.2);
}
.mood-sparkle-1 {
  left: -6rem; top: -4rem;
  animation: sparkle-float-1 3.5s ease-in-out infinite alternate;
}
.mood-sparkle-2 {
  left: 8rem; top: -2rem;
  animation: sparkle-float-2 4.2s ease-in-out infinite alternate;
}
.mood-sparkle-3 {
  left: -4rem; top: 5rem;
  animation: sparkle-float-3 3.8s ease-in-out infinite alternate;
}
.mood-sparkle-4 {
  left: 7rem; top: 6rem;
  animation: sparkle-float-4 4.5s ease-in-out infinite alternate;
}
@keyframes sparkle-float-1 {
  0% { transform: translateY(0) scale(1); opacity: 0.7; }
  100% { transform: translateY(-18px) scale(1.2) rotate(10deg); opacity: 1; }
}
@keyframes sparkle-float-2 {
  0% { transform: translateY(0) scale(1); opacity: 0.7; }
  100% { transform: translateY(-24px) scale(1.15) rotate(-8deg); opacity: 1; }
}
@keyframes sparkle-float-3 {
  0% { transform: translateY(0) scale(1); opacity: 0.7; }
  100% { transform: translateY(-12px) scale(1.18) rotate(6deg); opacity: 1; }
}
@keyframes sparkle-float-4 {
  0% { transform: translateY(0) scale(1); opacity: 0.7; }
  100% { transform: translateY(-20px) scale(1.1) rotate(-12deg); opacity: 1; }
}
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