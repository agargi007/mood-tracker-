
</script>
<script setup>
import EmojiBar from './components/EmojiBar.vue'
import CalendarGrid from './components/CalendarGrid.vue'
import MoodStats from './components/MoodStats.vue'
import { ref, watch, onMounted } from 'vue'

const moodsByDate = ref({})

// Load moods from localStorage on mount
onMounted(() => {
  const stored = localStorage.getItem('moodsByDate')
  if (stored) {
    moodsByDate.value = JSON.parse(stored)
  }
})

function handleMoodSelected(mood) {
  const today = new Date()
  const key = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  moodsByDate.value[key] = mood.emoji
  localStorage.setItem('moodsByDate', JSON.stringify(moodsByDate.value))
}

// Watch for changes and persist
watch(moodsByDate, (val) => {
  localStorage.setItem('moodsByDate', JSON.stringify(val))
}, { deep: true })
</script>

<template>
  <div>
    <EmojiBar @mood-selected="handleMoodSelected" />
    <CalendarGrid :moods-by-date="moodsByDate" />
    <MoodStats :moods-by-date="moodsByDate" />
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
