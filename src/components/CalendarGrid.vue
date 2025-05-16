<template>
  <div class="max-w-xl mx-auto p-4">
    <div class="grid grid-cols-7 gap-2 text-center">
      <div v-for="day in weekDays" :key="day" class="font-semibold text-gray-500 dark:text-gray-300">
        {{ day }}
      </div>
      <template v-for="blank in blanks">
        <div :key="'blank-' + blank"></div>
      </template>
      <div
        v-for="date in daysInMonth"
        :key="date"
        class="border rounded-lg h-16 flex items-center justify-center bg-white dark:bg-gray-800 shadow-sm"
      >
        <span class="text-lg font-medium">{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

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
</script>

<style scoped>
.grid {
  background: transparent;
}
</style>
