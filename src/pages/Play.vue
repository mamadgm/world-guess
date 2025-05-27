<template>
  <div class="h-screen w-screen bg-black relative">
    <canvas ref="canvasRef" class="w-full h-full"></canvas>
    <button
      @click="goToGuess"
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-green-600 px-6 py-3 rounded-xl text-white hover:bg-green-700"
    >
      Let's Guess
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import * as THREE from 'three'
import towerImg from '@/assets/tower.png'
// 👇 Add this import
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const router = useRouter()
const goToGuess = () => router.push('/guess')

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 0.1

  const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value! })
  renderer.setSize(window.innerWidth, window.innerHeight)

  const geometry = new THREE.SphereGeometry(500, 60, 40)
  geometry.scale(-1, 1, 1)

  const texture = new THREE.TextureLoader().load(towerImg)
  const material = new THREE.MeshBasicMaterial({ map: texture })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  // 👇 Add OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false // Optional: disable zoom
  controls.rotateSpeed = 0.3 // Optional: adjust sensitivity
  controls.enableDamping = true // Optional: smoother rotation
  controls.dampingFactor = 0.05

  const animate = () => {
    requestAnimationFrame(animate)
    controls.update() // 👈 Required for damping
    renderer.render(scene, camera)
  }

  animate()
})

</script>
