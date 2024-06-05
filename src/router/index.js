import { createRouter, createWebHistory } from 'vue-router'
import CharactersView from '@/views/CharactersView.vue'
import LocationsView from '@/views/LocationsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'characters-view',
      component: CharactersView
    },
    {
      path: '/location',
      name: 'locations-view',
      component: LocationsView
    }
  ]
})

export default router
