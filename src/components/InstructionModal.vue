<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div class="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full mx-4 flex flex-col items-center animate-fade-in-modal">
      <h2 class="text-2xl font-bold mb-4 text-pink-500">How to Use the Mood Tracker</h2>
      <ul class="text-gray-700 text-lg mb-6 list-disc list-inside text-left">
        <li>Select your mood for any day by clicking an emoji above the calendar.</li>
        <li>Click any date cell to assign the selected mood to that day.</li>
        <li>Colorful backgrounds show your mood for each day.</li>
        <li>You can change your mood for any day at any time.</li>
        <li>Your moods are saved in your browser (localStorage).</li>
        <li>Use the ← Back button to return to the welcome page.</li>
      </ul>
      <button @click="$emit('close')" class="mt-2 px-6 py-2 rounded-lg bg-pink-400 text-white font-semibold text-lg shadow hover:bg-pink-500 transition">Got it!</button>
    </div>
  </div>
</template>

<script setup>
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
