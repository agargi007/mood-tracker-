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
        class="border border-gray-300 rounded-lg aspect-square flex items-center justify-center shadow-md relative cursor-pointer hover:scale-105 transition-all duration-150"
        @click="editDay(date)"
        :style="cellBgStyle(moodsByDate[dateKey(date)])"
      >
        <span class="font-medium select-none" style="font-family: 'Quicksand', 'Montserrat', 'Playfair Display', Arial, sans-serif;">{{ date }}</span>
        <span v-if="moodsByDate[dateKey(date)]" class="absolute inset-0 flex items-center justify-center text-3xl select-none">
          {{ moodsByDate[dateKey(date)]?.emoji }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
// Color mapping for moods
const moodColors = {
  veryhappy: '#7be881', // green
  happy: '#b2f2a5',    // light green
  neutral: '#ffe066',  // yellow
  sad: '#74c0fc',      // blue
  angry: '#ff6b6b',    // red
}

function cellBgStyle(moodObj) {
  if (!moodObj) {
    return {
      background: 'rgba(255,255,255,0.85)',
      minWidth: '3.5rem',
      minHeight: '3.5rem',
      fontSize: '1.25rem',
    }
  }
  let color = moodColors[moodObj.value] || 'rgba(255,255,255,0.85)';
  return {
    background: color,
    minWidth: '3.5rem',
    minHeight: '3.5rem',
    fontSize: '1.25rem',
    transition: 'background 0.3s',
  }
}
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
