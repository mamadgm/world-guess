import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/pages/Welcome.vue'
import Play from '@/pages/Play.vue'
import Guess from '@/pages/Guess.vue'
import End from '@/pages/End.vue'

const routes = [
  { path: '/', name: 'Welcome', component: Welcome },
  { path: '/play', name: 'Play', component: Play },
  { path: '/guess', name: 'Guess', component: Guess },
  { path: '/end', name: 'End', component: End }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
