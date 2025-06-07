<script setup>
import { useRouter } from "vue-router";
import { useGameStore } from "@/stores/maps";
const router = useRouter();
const gameStore = useGameStore();

const goToPlay = () => {
  router.push("/play");
  gameStore.pickRandomVideo();
};
</script>

<template>
  <div class="flex h-screen items-center justify-center bg-gray-900">
    <button
      @click="goToPlay"
      class="rounded-xl bg-blue-600 px-6 py-3 text-xl text-white hover:bg-blue-700"
    >
      Start Game</button
    >s
  </div>
</template>
