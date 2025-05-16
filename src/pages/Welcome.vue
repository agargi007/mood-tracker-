<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 transition-colors">
    <h1 class="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Welcome to Mood Tracker</h1>
    <router-link to="/tracker">
      <button class="px-6 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold shadow hover:bg-blue-700 transition">Get Started</button>
    </router-link>
  </div>
</template>
