<template>
  <div class="w-full h-full flex flex-col items-center justify-center p-2 md:p-8 animate-fade-in-calendar">
    <div class="flex items-center justify-center mb-4 gap-4">
      <button @click="prevMonth" class="px-3 py-1 rounded bg-pink-200 text-gray-800 font-semibold shadow hover:bg-pink-300 transition">&#8592;</button>
      <span class="calendar-month-label text-xl md:text-2xl font-bold cursor-pointer select-none" style="font-family: 'Montserrat', 'Quicksand', 'Playfair Display', Arial, sans-serif;" @click="showMonthPicker = true">{{ monthName }} {{ displayYear }}</span>
      <button @click="nextMonth" class="px-3 py-1 rounded bg-pink-200 text-gray-800 font-semibold shadow hover:bg-pink-300 transition">&#8594;</button>
    </div>
    <MonthPicker v-if="showMonthPicker" :month="displayMonth" :year="displayYear" @select="onMonthYearSelect" @close="showMonthPicker = false" />
    <div class="grid grid-cols-7 gap-2 mx-auto text-center animate-slide-up-calendar calendar-box">
      <div v-for="day in weekDays" :key="day" class="font-semibold text-gray-500">
        {{ day }}
      </div>
      <template v-for="blank in blanks" :key="'blank-' + blank">
        <div></div>
      </template>
      <div
        v-for="date in daysInMonth"
        :key="date"
        class="border border-gray-300 rounded-lg aspect-square flex items-center justify-center shadow-md relative cursor-pointer hover:scale-110 focus:scale-110 transition-all duration-200 animate-pop-in-calendar bg-white/80"
        @click="editDay(date)"
        :style="cellBgStyle(moodsByDate[dateKey(date)])"
        tabindex="0"
      >
        <span class="font-bold select-none text-gray-700 text-lg md:text-xl lg:text-2xl" style="font-family: 'Quicksand', 'Montserrat', 'Playfair Display', Arial, sans-serif;">{{ date }}</span>
        <span v-if="moodsByDate[dateKey(date)]" class="absolute inset-0 flex items-center justify-center text-3xl select-none animate-emoji-bounce-calendar">
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

import { computed, toRefs, ref } from 'vue'
import MonthPicker from './MonthPicker.vue'
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
const currentYear = today.getFullYear()
const currentMonth = today.getMonth()

const displayYear = ref(currentYear)
const displayMonth = ref(currentMonth)
const showMonthPicker = ref(false)
function onMonthYearSelect({ month, year }) {
  displayMonth.value = month
  displayYear.value = year
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]
const monthName = computed(() => monthNames[displayMonth.value])

const firstDayOfMonth = computed(() => new Date(displayYear.value, displayMonth.value, 1))
const startDay = computed(() => firstDayOfMonth.value.getDay())
const daysInMonth = computed(() => Array.from(
  { length: new Date(displayYear.value, displayMonth.value + 1, 0).getDate() },
  (_, i) => i + 1
))
const blanks = computed(() => Array.from({ length: startDay.value }, (_, i) => i))

function dateKey(date) {
  return `${displayYear.value}-${displayMonth.value + 1}-${date}`
}

function editDay(date) {
  if (onEdit && typeof onEdit.value === 'function') {
    onEdit.value(dateKey(date))
  }
}

function prevMonth() {
  if (displayMonth.value === 0) {
    displayMonth.value = 11
    displayYear.value--
  } else {
    displayMonth.value--
  }
}
function nextMonth() {
  if (displayMonth.value === 11) {
    displayMonth.value = 0
    displayYear.value++
  } else {
    displayMonth.value++
  }
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
</script>

<style scoped>

.grid {
  background: transparent;
}

/* Restrict calendar grid to a fixed box size */
.calendar-box {
  width: 20cm;
  height: 20cm;
  max-width: 98vw;
  max-height: 70vw;
  min-width: 320px;
  min-height: 320px;
  box-sizing: border-box;
  background: transparent;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
}

/* Fade-in for calendar container */
.animate-fade-in-calendar {
  animation: fade-in-calendar 1.1s cubic-bezier(.68,-0.55,.27,1.55) both;
}
@keyframes fade-in-calendar {
  0% { opacity: 0; transform: translateY(40px) scale(0.97); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

/* Slide up for grid */
.animate-slide-up-calendar {
  animation: slide-up-calendar 1.2s 0.2s cubic-bezier(.68,-0.55,.27,1.55) both;
}
@keyframes slide-up-calendar {
  0% { opacity: 0; transform: translateY(60px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Pop-in for each calendar cell */
.animate-pop-in-calendar {
  animation: pop-in-calendar 0.7s cubic-bezier(.68,-0.55,.27,1.55) both;
}
@keyframes pop-in-calendar {
  0% { opacity: 0; transform: scale(0.7) rotate(-8deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
}

/* Emoji bounce for mood emoji in cell */
.animate-emoji-bounce-calendar {
  animation: emoji-bounce-calendar 2.2s cubic-bezier(.68,-0.55,.27,1.55) infinite alternate;
}
@keyframes emoji-bounce-calendar {
  0% { transform: translateY(0) scale(1.1) rotate(-6deg); filter: brightness(1.1); }
  50% { transform: translateY(-10px) scale(1.18) rotate(6deg); filter: brightness(1.2); }
  100% { transform: translateY(0) scale(1.1) rotate(-6deg); filter: brightness(1.1); }
}
</style>
