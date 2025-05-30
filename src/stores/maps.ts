// stores/gameStore.ts
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    realLocation: { lat: 35.6892, lng: 51.389 }, // Default to Tehran
    userGuess: null as null | { lat: number; lng: number }
  }),
  actions: {
    setGuess(lat: number, lng: number) {
      this.userGuess = { lat, lng }
    },
    setLocationByCity(location: 'tehran' | 'mashhad') {
      if (location === 'tehran') {
        this.realLocation = { lat: 35.6892, lng: 51.389 } // Tehran
      } else if (location === 'mashhad') {
        this.realLocation = { lat: 36.2605, lng: 59.6168 } // Mashhad
      }
    }
  }
})
