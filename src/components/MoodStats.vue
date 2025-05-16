<template>
  <div class="max-w-md mx-auto my-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
    <h2 class="text-xl font-bold mb-4 text-center">Mood Stats (This Month)</h2>
    <div class="flex flex-wrap justify-center gap-4">
      <div v-for="(count, emoji) in moodCounts" :key="emoji" class="flex flex-col items-center">
        <span class="text-3xl">{{ emoji }}</span>
        <span class="text-sm mt-1">{{ count }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'
const props = defineProps({
  moodsByDate: {
    type: Object,
    default: () => ({})
  }
})
const { moodsByDate } = toRefs(props)

const currentMonth = new Date().getMonth() + 1
const currentYear = new Date().getFullYear()

const moodCounts = computed(() => {
  const counts = {}
  for (const [key, emoji] of Object.entries(moodsByDate.value)) {
    const [year, month] = key.split('-').map(Number)
    if (year === currentYear && month === currentMonth) {
      counts[emoji] = (counts[emoji] || 0) + 1
    }
  }
  return counts
})
</script>
