<template>
  <div class="max-w-xl mx-auto p-4">
    <div class="grid grid-cols-7 gap-2 text-center">
      <div v-for="day in weekDays" :key="day" class="font-semibold text-gray-500 dark:text-gray-300">
        {{ day }}
      </div>
      <template v-for="blank in blanks" :key="'blank-' + blank">
        <div></div>
      </template>
      <div
        v-for="date in daysInMonth"
        :key="date"
        class="border rounded-lg h-16 flex items-center justify-center bg-white dark:bg-gray-800 shadow-sm relative"
      >
        <span class="text-lg font-medium">{{ date }}</span>
        <span v-if="moodsByDate[dateKey(date)]" class="absolute bottom-1 right-1 text-2xl">
          {{ moodsByDate[dateKey(date)] }}
        </span>
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

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const today = new Date()
const year = today.getFullYear()
const month = today.getMonth()

const firstDayOfMonth = new Date(year, month, 1)
const startDay = firstDayOfMonth.getDay()
const daysInMonth = Array.from(
  { length: new Date(year, month + 1, 0).getDate() },
  (_, i) => i + 1
)
const blanks = computed(() => Array.from({ length: startDay }, (_, i) => i))

function dateKey(date) {
  return `${year}-${month + 1}-${date}`
}
</script>

<style scoped>
.grid {
  background: transparent;
}
</style>
