import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import ThirdMission from '@/pages/ThirdMission.vue'
import MediaPage from '@/pages/MediaPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/third-mission',
    name: 'ThirdMission',
    component: ThirdMission,
  },
  {
    path: '/media',
    name: 'Media',
    component: MediaPage,
  },
  {
    // Catch-all route (fallback)
    path: '/:catchAll(.*)', // Cattura tutte le rotte non definite
    redirect: '/', // Reindirizza alla homepage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash, // Scorre all'elemento con ID corrispondente
        behavior: 'smooth', // Scroll animato
      }
    }
    if (savedPosition) {
      return savedPosition // Torna alla posizione salvata
    }
    return { top: 0 } // Scrolla in cima se non ci sono altre istruzioni
  },
})

export default router
