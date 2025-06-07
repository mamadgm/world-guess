<script setup lang="ts">
import { onMounted, ref } from "vue";
import L from "leaflet";
import { useRouter } from "vue-router";
import { useGameStore } from "@/stores/maps";

const router = useRouter();
const gameStore = useGameStore();
const userGuess = ref(gameStore.userGuess);

const submitted = ref(false);
const score = ref<number | null>(null);
let marker: L.Marker | null = null;
let trueMarker: L.Marker | null = null;
let line: L.Polyline | null = null;
let map: L.Map; // Moved here so it's accessible globally

function calculateScore(user: L.LatLng, truth: L.LatLng): number {
  const distanceKm = user.distanceTo(truth) / 1000; // in km

  const maxDistance = 500; // km
  const maxScore = 500;
  const minScore = 1;

  if (distanceKm >= maxDistance) return minScore;

  const score = maxScore - ((distanceKm / maxDistance) * (maxScore - minScore));
  return Math.round(score);
}



const handleButtonClick = () => {
  if (!submitted.value) {
    if (!userGuess.value) return;

    submitted.value = true;

    // Show true marker
    trueMarker = L.marker(gameStore.realLocation, {
      icon: L.icon({
        iconUrl: "/world-guess/assets/pics/red-icon.png",
        iconSize: [30, 30],
      }),
    }).addTo(map);

    // Draw line
    line = L.polyline(
      [L.latLng(userGuess.value.lat, userGuess.value.lng), gameStore.realLocation],
      { color: "red" }
    ).addTo(map);

    // Calculate dummy score
    score.value = calculateScore(
      L.latLng(userGuess.value.lat, userGuess.value.lng),
      L.latLng(gameStore.realLocation)
    );

    map.fitBounds(L.latLngBounds([userGuess.value, gameStore.realLocation]));

    // Disable further clicking
    map.off("click");
  } else {
    router.push("/end");
  }
};

onMounted(() => {
  map = L.map("map").setView([32.4279, 53.688], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Add geocoder control (optional)
  // @ts-ignore
  const geocoder = L.Control.geocoder({
    defaultMarkGeocode: false,
  })
    .on("markgeocode", function (e: any) {
      const center = e.geocode.center;
      if (marker) {
        marker.setLatLng(center);
      } else {
        marker = L.marker(center).addTo(map);
      }
      gameStore.setGuess(center.lat, center.lng);
      userGuess.value = gameStore.userGuess;
    })
    .addTo(map);

  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    if (marker) {
      marker.setLatLng(e.latlng);
    } else {
      marker = L.marker(e.latlng).addTo(map);
    }

    gameStore.setGuess(lat, lng);
    userGuess.value = gameStore.userGuess;
  });
});
</script>


<template>
  <div class="h-screen w-screen relative">
    <div id="map" class="h-full w-full z-0"></div>

    <button
      @click="handleButtonClick"
      :disabled="!userGuess"
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl text-xl transition text-white bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
    >
      {{ submitted ? "End" : "Submit" }}
    </button>

    <div
      v-if="submitted && score !== null"
      class="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white text-2xl bg-black bg-opacity-60 p-4 rounded-lg"
    >
      امتیاز: {{ score }} points<br>
      {{ gameStore.currentGame?.name }}
    </div>
  </div>
</template>
