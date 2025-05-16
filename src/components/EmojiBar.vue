<template>
  <div class="flex justify-center gap-4 py-4">
    <button
      v-for="mood in moods"
      :key="mood.emoji"
      @click="selectMood(mood)"
      :aria-label="mood.label"
      class="text-3xl transition-transform duration-150 hover:scale-125 focus:outline-none"
    >
      {{ mood.emoji }}
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['mood-selected'])
const moods = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😢', label: 'Sad' },
  { emoji: '😡', label: 'Angry' },
  { emoji: '😱', label: 'Surprised' },
  { emoji: '😍', label: 'Loved' },
  { emoji: '😐', label: 'Neutral' },
]
function selectMood(mood) {
  emit('mood-selected', mood)
}
</script>

<style scoped>
button:active {
  transform: scale(1.1);
}
</style>
