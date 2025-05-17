
<template>
  <div class="summer-bg min-h-screen w-full flex flex-col items-center justify-center" style="overflow-x:hidden; overflow-y:hidden;">
    <InstructionModal v-if="showInstructions" @close="showInstructions = false" />
    <div class="w-full" v-show="!showInstructions">
      <router-link to="/">
        <button class="m-4 px-4 py-2 rounded bg-pink-200 text-gray-800 font-semibold shadow hover:bg-pink-300 transition">← Back</button>
      </router-link>
      <TrackerContent />
    </div>
  </div>
</template>

<script setup>
import TrackerContent from '../TrackerContent.vue'
import { ref } from 'vue'
import InstructionModal from '../components/InstructionModal.vue'

const showInstructions = ref(true)
</script>
