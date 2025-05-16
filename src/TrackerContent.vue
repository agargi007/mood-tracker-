<template>
  <div>
    <div :class="{ 'dark': isDark }" class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div class="flex justify-end p-4">
        <button @click="toggleDark" class="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors">
          {{ isDark ? '🌙 Dark' : '☀️ Light' }}
        </button>
      </div>
      <EmojiBar @mood-selected="handleMoodSelected" />
      <CalendarGrid :moods-by-date="moodsByDate" />
      <MoodStats :moods-by-date="moodsByDate" />
    </div>
  </div>
</template>

<script setup>
import EmojiBar from './components/EmojiBar.vue'
import CalendarGrid from './components/CalendarGrid.vue'
import MoodStats from './components/MoodStats.vue'
import { ref, watch, onMounted } from 'vue'

const moodsByDate = ref({})
const isDark = ref(false)

onMounted(() => {
  const stored = localStorage.getItem('moodsByDate')
  if (stored) {
    moodsByDate.value = JSON.parse(stored)
  }
  const theme = localStorage.getItem('theme')
  isDark.value = theme === 'dark'
})

function handleMoodSelected(mood) {
  const today = new Date()
  const key = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  moodsByDate.value[key] = mood.emoji
  localStorage.setItem('moodsByDate', JSON.stringify(moodsByDate.value))
}

watch(moodsByDate, (val) => {
  localStorage.setItem('moodsByDate', JSON.stringify(val))
}, { deep: true })

function toggleDark() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>