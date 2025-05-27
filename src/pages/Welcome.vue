<template>
  <div class="flex items-center justify-center h-screen bg-gray-900 text-white">
    <button @click="goToPlay" class="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 text-xl">
      Start Game
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToPlay = () => router.push('/play')
</script>
