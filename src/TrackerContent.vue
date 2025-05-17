<template>
  <div class="summer-bg min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-300">
    <div class="flex flex-col items-center w-full h-full flex-1">
      <EmojiBar @mood-selected="handleMoodSelected" />
      <div class="flex-1 flex flex-col justify-center w-full">
        <CalendarGrid :moods-by-date="moodsByDate" :on-edit="editMoodForDate" :selected-mood="selectedMood" :is-dark="false" />
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
const selectedMood = ref(null)

onMounted(() => {
  const stored = localStorage.getItem('moodsByDate')
  if (stored) {
    moodsByDate.value = JSON.parse(stored)
  }
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


</script>