
</script>
<script setup>
import EmojiBar from './components/EmojiBar.vue'
import CalendarGrid from './components/CalendarGrid.vue'

function handleMoodSelected(mood) {
  // For now, just log the selected mood
  console.log('Selected mood:', mood)
}
</script>

<template>
  <div>
    <EmojiBar @mood-selected="handleMoodSelected" />
    <CalendarGrid />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
