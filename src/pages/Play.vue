<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useGameStore } from "@/stores/maps";

const router = useRouter();
const gameStore = useGameStore();

const panoRef = ref<HTMLDivElement | null>(null);
const videoRef = ref<HTMLVideoElement | null>(null);

const goToGuess = () => router.push("/guess");

// Declare Marzipano & VideoAsset globally
declare global {
  interface Window {
    Marzipano: any;
    VideoAsset: any;
  }
}

async function loadMarzipano(): Promise<void> {
  if (window.Marzipano && window.VideoAsset) return;

  const loadScript = (src: string): Promise<void> =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(script);
    });

  await loadScript("/world-guess/lib/marzipano.js");
  await loadScript("/world-guess/lib/videoasset.js");
}

async function setupViewer() {
  await loadMarzipano();

  const Marzipano = window.Marzipano;
  const VideoAsset = window.VideoAsset;

  const container = panoRef.value;
  if (!container) return;

  const viewer = new Marzipano.Viewer(container);

  const video = document.createElement("video");
  videoRef.value = video;

  const url = gameStore.currentGame?.link;
  if (!url || !url.endsWith(".mp4")) return;

  video.src = url;
  video.crossOrigin = "anonymous";
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  video.muted = false;
  await video.play();

  const asset = new VideoAsset(video);
  const source = new Marzipano.SingleAssetSource(asset);
  const geometry = new Marzipano.EquirectGeometry([{ width: 1 }]);
  const limiter = Marzipano.RectilinearView.limit.vfov(
    Math.PI / 2,
    Math.PI / 2,
  );
  const view = new Marzipano.RectilinearView({ fov: Math.PI / 2 }, limiter);
  const scene = viewer.createScene({ source, geometry, view });
  scene.switchTo();
}

onMounted(() => {
  setupViewer();
});

onUnmounted(() => {
  if (videoRef.value) {
    videoRef.value.pause();
    videoRef.value.removeAttribute("src");
    videoRef.value.load();
  }
});

// Video controls
function playVideo() {
  videoRef.value?.play();
}
function pauseVideo() {
  videoRef.value?.pause();
}
function toggleMute() {
  if (videoRef.value) {
    videoRef.value.muted = !videoRef.value.muted;
  }
}
function onSeek(event: Event) {
  if (!videoRef.value) return;
  const input = event.target as HTMLInputElement;
  const percent = Number(input.value) / 100;
  const duration = videoRef.value.duration || 0;
  videoRef.value.currentTime = percent * duration;
}
</script>

<template>
  <div class="relative h-screen w-screen bg-black">
    <div ref="panoRef" class="h-full w-full"></div>

    <!-- Navigation Button -->
    <button
      @click="goToGuess"
      class="absolute bottom-10 left-1/2 -translate-x-1/2 transform rounded-xl bg-green-600 px-6 py-3 text-white hover:bg-green-700"
    >
      Make Your Guess
    </button>

    <!-- Video Controls -->
    <div
      class="absolute left-10 top-10 flex gap-4 rounded-lg bg-black bg-opacity-50 p-3"
    >
      <button
        @click="playVideo"
        class="rounded bg-gray-700 px-3 py-1 text-white"
      >
        Play
      </button>
      <button
        @click="pauseVideo"
        class="rounded bg-gray-700 px-3 py-1 text-white"
      >
        Pause
      </button>
      <button
        @click="toggleMute"
        class="rounded bg-gray-700 px-3 py-1 text-white"
      >
        {{ videoRef?.muted ? "Unmute" : "Mute" }}
      </button>
      <input
        type="range"
        min="0"
        max="100"
        @input="onSeek"
        class="w-32"
        aria-label="Seek video"
      />
    </div>
  </div>
</template>
