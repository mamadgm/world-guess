import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'leaflet/dist/leaflet.css'
import './assets/main.css'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import * as L from 'leaflet'
import 'leaflet-control-geocoder'



const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
