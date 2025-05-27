<template>
  <div class="h-screen w-screen relative">
    <div id="map" class="h-full w-full z-0"></div>
    
    <button
      @click="goToEnd"
      :disabled="!userGuess"
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl text-xl transition
        text-white
        bg-yellow-600 hover:bg-yellow-700
        disabled:bg-gray-500 disabled:cursor-not-allowed"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/maps'

const router = useRouter()
const gameStore = useGameStore()
const userGuess = ref(gameStore.userGuess)

const goToEnd = () => {
  router.push('/end')
}

onMounted(() => {
  const map = L.map('map').setView([32.4279, 53.6880], 5)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  // Add geocoder control
  // @ts-ignore because typings might be missing for control.geocoder
  const geocoder = L.Control.geocoder({
    defaultMarkGeocode: false
  })
    .on('markgeocode', function (e: any) {
      const bbox = e.geocode.bbox
      const poly = L.polygon([
        bbox.getSouthEast(),
        bbox.getNorthEast(),
        bbox.getNorthWest(),
        bbox.getSouthWest()
      ]).addTo(map)
      map.fitBounds(poly.getBounds())

      // Optional: set guess marker on searched location
      const center = e.geocode.center
      if (marker) {
        marker.setLatLng(center)
      } else {
        marker = L.marker(center).addTo(map)
      }
      gameStore.setGuess(center.lat, center.lng)
      userGuess.value = gameStore.userGuess
    })
    .addTo(map)

  let marker: L.Marker | null = null

  map.on('click', (e) => {
    const { lat, lng } = e.latlng
    if (marker) {
      marker.setLatLng(e.latlng)
    } else {
      marker = L.marker(e.latlng).addTo(map)
    }

    gameStore.setGuess(lat, lng)
    userGuess.value = gameStore.userGuess
  })
})

</script>
