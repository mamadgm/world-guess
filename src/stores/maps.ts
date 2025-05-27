// stores/gameStore.ts
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    realLocation: { lat: 48.8584, lng: 2.2945 }, // Example: Eiffel Tower
    userGuess: null as null | { lat: number; lng: number }
  }),
  actions: {
    setGuess(lat: number, lng: number) {
      this.userGuess = { lat, lng }
    }
  }
})
