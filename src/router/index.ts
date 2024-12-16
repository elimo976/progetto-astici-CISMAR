import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import ThirdMission from '@/pages/ThirdMission.vue'
import MediaPage from '@/pages/MediaPage.vue'
import UnderConstruction from '@/pages/UnderConstruction.vue'
import ConservationPage from '@/pages/ConservationPage.vue'
import TrainingPage from '@/pages/TrainingPage.vue'
import HatcheryPage from '@/pages/HatcheryPage.vue'
import ReleasePage from '@/pages/ReleasePage.vue'
import ResearchPage from '@/pages/ResearchPage.vue'
import BehaviorPage from '@/pages/BehaviorPage.vue'
import GeneticsPage from '@/pages/GeneticsPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import PublicationsPage from '@/pages/PublicationsPage.vue'

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
    path: '/conservation',
    name: 'ConservationPage',
    component: ConservationPage,
  },
  {
    path: '/hatchery',
    name: 'HatcheryPage',
    component: HatcheryPage,
  },
  {
    path: '/training',
    name: 'TrainingPage',
    component: TrainingPage,
  },
  {
    path: '/release',
    name: 'ReleasePage',
    component: ReleasePage,
  },
  {
    path: '/research',
    name: 'ResearchPage',
    component: ResearchPage,
  },
  {
    path: '/behavior',
    name: 'BehaviorPage',
    component: BehaviorPage,
  },
  {
    path: '/genetics',
    name: 'GeneticsPage',
    component: GeneticsPage,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
  },
  {
    path: '/publications',
    name: 'Publications',
    component: PublicationsPage,
  },
  {
    path: '/under-construction',
    name: 'UnderConstruction',
    component: UnderConstruction,
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
