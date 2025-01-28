// Dichiarazione di gtag
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void
  }
}

import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const ThirdMission = () => import('@/pages/ThirdMission.vue')
const MediaPage = () => import('@/pages/MediaPage.vue')
const UnderConstruction = () => import('@/pages/UnderConstruction.vue')
const ConservationPage = () => import('@/pages/ConservationPage.vue')
const TrainingPage = () => import('@/pages/TrainingPage.vue')
const HatcheryPage = () => import('@/pages/HatcheryPage.vue')
const ReleasePage = () => import('@/pages/ReleasePage.vue')
const ResearchPage = () => import('@/pages/ResearchPage.vue')
const BehaviorPage = () => import('@/pages/BehaviorPage.vue')
const GeneticsPage = () => import('@/pages/GeneticsPage.vue')
const ProjectsPage = () => import('@/pages/ProjectsPage.vue')
const PublicationsPage = () => import('@/pages/PublicationsPage.vue')
const ActivitiesPage = () => import('@/pages/ActivitiesPage.vue')
const DivulgasticiPage = () => import('@/pages/DivulgasticiPage.vue')

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
    path: '/rearing',
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
    path: '/activities',
    name: 'Activities',
    component: ActivitiesPage,
  },
  {
    path: '/divulgastici',
    name: 'Divulgastici',
    component: DivulgasticiPage,
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

// Listener per i cambiamenti di route
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to, from) => {
  // Traccia la pagina con Google Analytics
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: to.fullPath,
    })
  }
  // Aggiorna il tag canonical
  const canonicalLink = document.querySelector("link[rel='canonical']")

  if (canonicalLink) {
    canonicalLink.setAttribute('href', window.location.href)
  } else {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    link.setAttribute('href', window.location.href)
    document.head.appendChild(link)
  }
})

export default router
