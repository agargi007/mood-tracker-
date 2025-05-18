<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
    <div class="bg-white rounded-2xl shadow-xl p-6 max-w-xs w-full mx-4 flex flex-col items-center animate-fade-in-modal">
      <h2 class="text-xl font-bold mb-4 text-pink-500">Select Month & Year</h2>
      <div class="flex gap-2 mb-4">
        <select v-model="selectedMonth" class="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300">
          <option v-for="(name, idx) in monthNames" :key="idx" :value="idx">{{ name }}</option>
        </select>
        <input type="number" v-model.number="selectedYear" min="1970" max="2100" class="rounded px-3 py-2 border border-gray-300 w-24 focus:outline-none focus:ring-2 focus:ring-pink-300" />
      </div>
      <div class="flex gap-4 mt-2">
        <button @click="$emit('close')" class="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition">Cancel</button>
        <button @click="confirm" class="px-4 py-2 rounded bg-pink-400 text-white font-semibold hover:bg-pink-500 transition">Go</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps } from 'vue'
const emit = defineEmits(['select', 'close'])
const props = defineProps({
  month: Number,
  year: Number
})
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]
const selectedMonth = ref(props.month ?? new Date().getMonth())
const selectedYear = ref(props.year ?? new Date().getFullYear())
watch(() => props.month, val => { if (val !== undefined) selectedMonth.value = val })
watch(() => props.year, val => { if (val !== undefined) selectedYear.value = val })
function confirm() {
  emit('select', { month: selectedMonth.value, year: selectedYear.value })
  emit('close')
}
</script>

<style scoped>
.animate-fade-in-modal {
  animation: fade-in-modal 0.6s cubic-bezier(.68,-0.55,.27,1.55) both;
}
@keyframes fade-in-modal {
  0% { opacity: 0; transform: scale(0.85) translateY(40px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
</style>
