<script setup lang="ts">
import { useRouter } from "vue-router";
import { onUnmounted, ref } from "vue";
import { useGameStore } from "@/stores/maps";

const gameStore = useGameStore()

const panoRef = ref<HTMLDivElement | null>(null);
const router = useRouter();
const mode = ref<"image" | "video" | null>(null);

const goToGuess = () => router.push("/guess");

const videoRef = ref<HTMLVideoElement | null>(null);

// Declare Marzipano & VideoAsset globally
declare global {
  interface Window {
    Marzipano: any;
    VideoAsset: any;
  }
}

function loadMarzipano(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Marzipano && window.VideoAsset) {
      resolve();
      return;
    }

    const marzipanoScript = document.createElement("script");
    marzipanoScript.src = "/world-guess/lib/marzipano.js";
    marzipanoScript.async = true;

    const videoAssetScript = document.createElement("script");
    videoAssetScript.src = "/world-guess/lib/videoasset.js";
    videoAssetScript.async = true;

    marzipanoScript.onload = () => {
      videoAssetScript.onload = () => resolve();
      videoAssetScript.onerror = () =>
        reject(new Error("Failed to load VideoAsset.js"));
      document.head.appendChild(videoAssetScript);
    };

    marzipanoScript.onerror = () =>
      reject(new Error("Failed to load Marzipano.js"));
    document.head.appendChild(marzipanoScript);
  });
}

async function setupViewer() {
  await loadMarzipano();
  const Marzipano = window.Marzipano;

  if (!panoRef.value) return;

  const viewer = new Marzipano.Viewer(panoRef.value);

  if (mode.value === "image") {
    
    
    gameStore.setLocationByCity("tehran")
    // ---- Image pano setup (same as your original code)
    const levels = [
      { tileSize: 256, size: 256, fallbackOnly: true },
      { tileSize: 512, size: 512 },
      { tileSize: 512, size: 1024 },
      { tileSize: 512, size: 2048 },
      { tileSize: 512, size: 4096 },
    ];

    const geometry = new Marzipano.CubeGeometry(levels);
    const source = Marzipano.ImageUrlSource.fromString(
      "/world-guess/assets/tiles/0-high-1/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: "/world-guess/assets/tiles/0-high-1/preview.jpg" }
    );

    const initialView = {
      yaw: (90 * Math.PI) / 180,
      pitch: (-30 * Math.PI) / 180,
      fov: (90 * Math.PI) / 180,
    };

    const limiter = Marzipano.RectilinearView.limit.traditional(
      4096,
      (120 * Math.PI) / 180
    );
    const view = new Marzipano.RectilinearView(initialView, limiter);

    const scene = viewer.createScene({
      source,
      geometry,
      view,
      pinFirstLevel: true,
    });
    scene.switchTo();
  } else if (mode.value === "video") {
    gameStore.setLocationByCity("mashhad")
    // ---- Equirectangular video setup
    const video = document.createElement("video");
    videoRef.value = video; // Save reference

    video.src = "https://noorvana.ir/vr_video/car.mp4"; // change to your file
    video.crossOrigin = "anonymous";
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.muted = false; // required for autoplay
    await video.play();

    const VideoAsset = window.VideoAsset;
    const asset = new VideoAsset(video);
    const source = new Marzipano.SingleAssetSource(asset);
    const geometry = new Marzipano.EquirectGeometry([{ width: 1 }]);
    const limiter = Marzipano.RectilinearView.limit.vfov(
      Math.PI / 2,
      Math.PI / 2
    );
    const view = new Marzipano.RectilinearView({ fov: Math.PI / 2 }, limiter);
    const scene = viewer.createScene({ source, geometry, view });
    scene.switchTo();
  }
}

//VIDEO
function playVideo() {
  videoRef.value?.play();
}

function pauseVideo() {
  videoRef.value?.pause();
}

function toggleMute() {
  if (!videoRef.value) return;
  videoRef.value.muted = !videoRef.value.muted;
}

function seekTo(seconds: number) {
  if (!videoRef.value) return;
  videoRef.value.currentTime = seconds;
}
function onSeek(event: Event) {
  if (!videoRef.value) return;
  const target = event.target as HTMLInputElement;
  const seekPercent = Number(target.value) / 100;
  const duration = videoRef.value.duration || 0;
  videoRef.value.currentTime = seekPercent * duration;
}

onUnmounted(() => {
  if (videoRef.value) {
    videoRef.value.pause();
    videoRef.value.removeAttribute("src");
    videoRef.value.load(); // Ensures browser stops downloading
  }
});

//VIDEO
</script>

<template>
  <div
    class="h-screen w-screen bg-black flex items-center justify-center"
    v-if="!mode"
  >
    <button
      @click="
        mode = 'image';
        setupViewer();
      "
      class="px-6 py-3 m-4 bg-blue-600 text-white rounded-lg"
    >
      Load Image Panorama
    </button>
    <button
      @click="
        mode = 'video';
        setupViewer();
      "
      class="px-6 py-3 m-4 bg-red-600 text-white rounded-lg"
    >
      Load Video Panorama
    </button>
  </div>

  <div v-else class="h-screen w-screen bg-black relative">
    <div ref="panoRef" class="w-full h-full"></div>

    <button
      @click="goToGuess"
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-green-600 px-6 py-3 rounded-xl text-white hover:bg-green-700"
    >
      Let's Guess
    </button>

    <!-- Video controls shown only when mode is video -->
    <div
      v-if="mode === 'video'"
      class="absolute top-10 left-10 space-x-4 bg-black bg-opacity-50 p-2 rounded-lg"
    >
      <button
        @click="playVideo"
        class="p-5 py-1 bg-gray-700 text-white rounded"
      >
        Play
      </button>
      <button
        @click="pauseVideo"
        class="p-5 py-1 bg-gray-700 text-white rounded"
      >
        Pause
      </button>
      <button
        @click="toggleMute"
        class="p-5 py-1 bg-gray-700 text-white rounded"
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
