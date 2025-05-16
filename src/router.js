import { createRouter, createWebHistory } from 'vue-router'
import Welcome from './pages/Welcome.vue'
import Tracker from './pages/Tracker.vue'

const routes = [
  { path: '/', name: 'Welcome', component: Welcome },
  { path: '/tracker', name: 'Tracker', component: Tracker }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
