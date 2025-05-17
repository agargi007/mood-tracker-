
<template>
  <div class="summer-bg min-h-screen w-full flex flex-col items-center justify-center" style="overflow-x:hidden; overflow-y:hidden;">
    <InstructionModal v-if="showInstructions" @close="showInstructions = false" />
    <div class="w-full flex flex-col min-h-screen" v-show="!showInstructions">
      <!-- Page Title -->
      <h1 class="text-4xl md:text-5xl font-extrabold text-center text-pink-500 mt-8 mb-4 tracking-tight drop-shadow animate-gradient-text" style="font-family: 'Montserrat', 'Quicksand', 'Playfair Display', Arial, sans-serif;">Mood Tracker</h1>
      <div class="flex-1 flex flex-col items-center justify-center">
        <TrackerContent />
      </div>
      <!-- Back Button at Bottom -->
      <div class="flex justify-center mt-8 mb-6">
        <router-link to="/">
          <button class="px-6 py-3 rounded bg-pink-200 text-gray-800 font-semibold shadow hover:bg-pink-300 transition text-lg">← Back</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import TrackerContent from '../TrackerContent.vue'
import { ref } from 'vue'
import InstructionModal from '../components/InstructionModal.vue'

const showInstructions = ref(true)
</script>
