<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-2 md:p-8">
    <div class="grid grid-cols-7 gap-2 w-full max-w-5xl mx-auto text-center">
      <div v-for="day in weekDays" :key="day" class="font-semibold text-gray-500">
        {{ day }}
      </div>
      <template v-for="blank in blanks" :key="'blank-' + blank">
        <div></div>
      </template>
      <div
        v-for="date in daysInMonth"
        :key="date"
        class="border border-gray-300 rounded-lg aspect-square flex items-center justify-center bg-white/80 shadow-md relative cursor-pointer hover:scale-105 transition-all duration-150"
        @click="editDay(date)"
        style="min-width: 3.5rem; min-height: 3.5rem; font-size: 1.25rem;"
      >
        <span class="font-medium select-none">{{ date }}</span>
        <span v-if="moodsByDate[dateKey(date)]" class="absolute bottom-1 right-1 text-2xl select-none">
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
  },
  onEdit: Function,
  selectedMood: String
})
const { moodsByDate, onEdit, selectedMood } = toRefs(props)

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

function editDay(date) {
  if (onEdit && typeof onEdit.value === 'function') {
    onEdit.value(dateKey(date))
  }
}
</script>

<style scoped>

.grid {
  background: transparent;
}
</style>
