<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
    <h1 class="text-4xl mb-6">مرسی از بازیت عزیزم</h1>
    
    <div v-if="userGuess" class="mb-6 text-center">
      <h2 class="text-2xl mb-2">حدس شما</h2>
      <p>Latitude: {{ userGuess.lat.toFixed(4) }}</p>
      <p>Longitude: {{ userGuess.lng.toFixed(4) }}</p>
    </div>

    <div v-if="realLocation" class="mb-6 text-center">
      <h2 class="text-2xl mb-2">مکان واقعی</h2>
      <p>Latitude: {{ realLocation.lat.toFixed(4) }}</p>
      <p>Longitude: {{ realLocation.lng.toFixed(4) }}</p>
    </div>

    <router-link to="/" class="text-blue-400 hover:underline text-lg">دوباره</router-link>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/maps'

const gameStore = useGameStore()

const userGuess = gameStore.userGuess
const realLocation = gameStore.realLocation
</script>
