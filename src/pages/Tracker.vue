<template>
  <div>
    <router-link to="/">
      <button class="m-4 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">← Back</button>
    </router-link>
    <TrackerContent />
  </div>
</template>

<script setup>
import TrackerContent from '../TrackerContent.vue'
</script>
