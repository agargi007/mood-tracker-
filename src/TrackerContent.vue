<template>
  <div :class="[isDark ? 'dark' : 'light', 'min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-300']" :style="pageStyle">
    <div class="flex justify-end w-full max-w-3xl mx-auto p-4">
      <button @click="toggleDark" class="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-white/30 shadow transition-colors">
        {{ isDark ? '🌙 Dark' : '☀️ Light' }}
      </button>
    </div>
    <div class="flex flex-col items-center w-full max-w-3xl mx-auto flex-1">
      <EmojiBar @mood-selected="handleMoodSelected" />
      <div class="flex-1 flex flex-col justify-center w-full">
        <CalendarGrid :moods-by-date="moodsByDate" :on-edit="editMoodForDate" :selected-mood="selectedMood" :is-dark="isDark" />
      </div>
      <MoodStats :moods-by-date="moodsByDate" />
    </div>
  </div>
</template>

<script setup>
import EmojiBar from './components/EmojiBar.vue'
import CalendarGrid from './components/CalendarGrid.vue'
import MoodStats from './components/MoodStats.vue'
import { ref, watch, onMounted, computed } from 'vue'

const moodsByDate = ref({})
const isDark = ref(false)
const selectedMood = ref(null)

const pastelGradient = 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)';
const darkGradient = 'linear-gradient(120deg, #232526 0%, #414345 100%)';

const pageStyle = computed(() => ({
  background: isDark.value ? darkGradient : pastelGradient,
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))

onMounted(() => {
  const stored = localStorage.getItem('moodsByDate')
  if (stored) {
    moodsByDate.value = JSON.parse(stored)
  }
  const theme = localStorage.getItem('theme')
  isDark.value = theme === 'dark'
})

function handleMoodSelected(mood) {
  selectedMood.value = mood.emoji
}

function editMoodForDate(dateKey) {
  if (selectedMood.value) {
    moodsByDate.value[dateKey] = selectedMood.value
    localStorage.setItem('moodsByDate', JSON.stringify(moodsByDate.value))
  }
}

watch(moodsByDate, (val) => {
  localStorage.setItem('moodsByDate', JSON.stringify(val))
}, { deep: true })

function toggleDark() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>