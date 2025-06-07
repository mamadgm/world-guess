// stores/maps.ts
import { defineStore } from 'pinia'
import locations from '@/stores/location.json'

export interface LocationEntry {
  name: string
  lat: number
  lng: number
  link: string
}

export const useGameStore = defineStore('game', {
  state: () => ({
    realLocation: { lat: 35.6892, lng: 51.389 } as { lat: number; lng: number }, 
    userGuess: null as null | { lat: number; lng: number },
    currentGame: null as null | LocationEntry,
  }),
  actions: {
    setGuess(lat: number, lng: number) {
      this.userGuess = { lat, lng }
    },
    pickRandomVideo() {
      const videos = locations.filter((l) => l.link.endsWith('.mp4'))
      const choice = videos[Math.floor(Math.random() * videos.length)]
      this.currentGame = choice
      this.realLocation = { lat: choice.lat, lng: choice.lng }
    }
  }
})
