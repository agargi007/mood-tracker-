<template>
  <div class="welcome-summer-bg min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden" style="overflow-x:hidden; overflow-y:hidden; min-height:100vh; min-width:100vw; height:100vh; width:100vw;">
    <!-- Animated background video effect -->
    <!-- Animated SVG background with floating shapes -->
    <div class="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <svg class="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none" style="position:absolute;top:0;left:0;z-index:0">
        <defs>
          <radialGradient id="bg1" cx="60%" cy="40%" r="1.2">
            <stop offset="0%" stop-color="#ffe6e6" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#e6e6ff" stop-opacity="0.7" />
          </radialGradient>
          <radialGradient id="bg2" cx="30%" cy="80%" r="1.1">
            <stop offset="0%" stop-color="#fffbe6" stop-opacity="0.7" />
            <stop offset="100%" stop-color="#e6fff7" stop-opacity="0.6" />
          </radialGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg1)">
          <animate attributeName="x" values="0;100;0" dur="18s" repeatCount="indefinite" />
        </rect>
        <rect width="1920" height="1080" fill="url(#bg2)">
          <animate attributeName="x" values="0;-100;0" dur="20s" repeatCount="indefinite" />
        </rect>
        <!-- Floating pastel circles -->
        <circle cx="300" cy="200" r="120" fill="#ffe6e6" opacity="0.5">
          <animate attributeName="cy" values="200;300;200" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="1600" cy="400" r="90" fill="#b5ead7" opacity="0.4">
          <animate attributeName="cy" values="400;500;400" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle cx="900" cy="900" r="140" fill="#c9c9ff" opacity="0.35">
          <animate attributeName="cy" values="900;800;900" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="900" r="80" fill="#ffdac1" opacity="0.4">
          <animate attributeName="cy" values="900;950;900" dur="9s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
    <div class="absolute inset-0 flex flex-col items-start justify-center z-10 pl-16 md:pl-32">
      <transition name="fade-slide" appear>
        <h1 class="welcome-title font-display font-extrabold mb-10 md:mb-14 text-center animate-gradient-text animate-fade-in"
          style="font-size: clamp(2.5rem, 7vw, 5.5rem); line-height: 1.1;">
          Welcome to <span class="text-pink-400 animate-gradient-text">Mood Tracker</span>
        </h1>
      </transition>
      <transition-group name="emoji-float" tag="div" class="emoji-parade flex gap-6 sm:gap-10 md:gap-14 mb-12 md:mb-16 justify-center">
        <span v-for="(emoji, i) in emojis" :key="emoji" class="emoji-item mood-emoji animate-bounce-float"
          :style="`font-size: clamp(2.5rem, 7vw, 5.5rem); animation-delay:${i*0.12}s`">
          {{ emoji }}
        </span>
      </transition-group>
      <transition name="pop-in" appear>
        <router-link to="/tracker">
          <button class="welcome-btn px-8 py-4 rounded-2xl bg-pink-400/90 text-white text-2xl sm:text-3xl md:text-4xl font-bold shadow-lg hover:bg-pink-500 transition animate-pop-in mt-4">Get Started</button>
        </router-link>
      </transition>
    </div>
    <!-- Optional: Animated SVG Sparkles -->
    <svg class="absolute left-8 top-8 animate-spin-slow opacity-30 w-24 h-24 text-yellow-300 hidden md:block z-20" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="4" stroke-dasharray="8 8"/></svg>
    <svg class="absolute right-8 bottom-8 animate-bounce opacity-20 w-20 h-20 text-pink-400 hidden md:block z-20" fill="none" viewBox="0 0 64 64"><rect x="16" y="16" width="32" height="32" rx="16" fill="currentColor"/></svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emojis = ref(['🤩', '😊', '😐', '😢', '😡'])
</script>
<style scoped>
/* Fade-slide for heading */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 1.1s cubic-bezier(.68,-0.55,.27,1.55);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-60px) scale(0.95);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}

/* Emoji float animation for parade */
.emoji-float-enter-active, .emoji-float-leave-active {
  transition: all 0.7s cubic-bezier(.68,-0.55,.27,1.55);
}
.emoji-float-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.8) rotate(-10deg);
}
.emoji-float-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1) rotate(0deg);
}
.emoji-float-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.8) rotate(-10deg);
}

/* Pop-in for button */
.pop-in-enter-active {
  transition: all 0.8s cubic-bezier(.68,-0.55,.27,1.55);
}
.pop-in-enter-from {
  opacity: 0;
  transform: scale(0.7);
}
.pop-in-enter-to {
  opacity: 1;
  transform: scale(1);
}

/* Keep drop shadow for emoji */
.mood-emoji {
  filter: drop-shadow(0 4px 16px rgba(0,0,0,0.10));
}
</style>

<style scoped>
/* Font imports are now global in style.css */

/* Fade-in animation for heading */
.animate-fade-in {
  animation: fade-in 1.2s cubic-bezier(.68,-0.55,.27,1.55) both;
}
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(-40px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

/* Parade entrance animation */
.animate-parade {
  animation: parade-in 1.2s 0.3s cubic-bezier(.68,-0.55,.27,1.55) both;
}
@keyframes parade-in {
  0% { opacity: 0; transform: translateY(40px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

/* Pop-in for button */
.animate-pop-in {
  animation: pop-in 0.8s 1.1s cubic-bezier(.68,-0.55,.27,1.55) both;
}
@keyframes pop-in {
  0% { opacity: 0; transform: scale(0.7); }
  100% { opacity: 1; transform: scale(1); }
}

/* Extra bounce for emoji parade */
.animate-bounce-float {
  animation: emoji-bounce-float 2.5s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate;
}


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
/* Keep drop shadow for emoji */
.mood-emoji {
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