<template>
  <nav class="z-10 bg-custom-blue text-white lg:py-2 md:py-0">
    <!-- Hamburger Menu per schermi piccoli -->
    <div class="md:hidden flex justify-end px-4 py-3">
      <button @click="toggleMenu" class="text-white flex flex-col space-y-1">
        <!-- Icona Hamburger -->
        <span class="block w-6 h-[2.5px] bg-white"></span>
        <span class="block w-5 h-[2.5px] bg-white ml-auto"></span>
        <span class="block w-4 h-[2px] bg-white ml-auto"></span>
      </button>
    </div>

    <!-- Menu laterale per schermi piccoli -->
    <div
      v-if="menuOpen && !isMdOrLarger"
      class="fixed top-0 right-0 bg-custom-blue text-white w-64 py-4 px-6 h-full shadow-lg z-50 overflow-y-auto max-h-screen"
    >
      <button @click="toggleMenu" class="text-white text-2xl absolute top-4 right-4">
        <span class="block w-6 h-0.5 bg-white mb-1 rotate-45 transform origin-center"></span>
        <span class="block w-6 h-0.5 bg-white -rotate-45 transform origin-center"></span>
      </button>
      <div class="space-y-4 mt-8">
        <div v-for="item in menuItems" :key="item.title">
          <!-- Voce di menu -->
          <div
            class="flex justify-between items-center cursor-pointer"
            @click="item.children ? toggleSubmenu(item) : scrollToAnchor(item.link)"
          >
            <RouterLink
              :to="item.link"
              class="text-xl py-2 block focus:text-gray-800 active:text-gray-600"
              @click="item.children ? $event.preventDefault() : scrollToAnchor(item.link)"
            >
              {{ item.title }}
            </RouterLink>

            <!-- Simbolo accanto alla voce -->
            <span v-if="item.children" class="text-2xl" @click.stop="toggleSubmenu(item)">
              {{ item.submenuOpen ? '−' : '▿' }}
            </span>
          </div>

          <!-- Sottomenu -->
          <div v-if="item.submenuOpen" class="pl-4">
            <RouterLink
              v-for="subItem in item.children"
              :key="subItem.title"
              :to="subItem.link"
              @click="scrollToAnchor(subItem.link)"
              class="block py-1 text-lg focus:text-custom-blue-navy active:text-custom-blue-navy"
            >
              {{ subItem.title }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu per schermi medi con sottomenu a comparsa -->
    <div v-if="isMdOrLarger && !isLgOrLarger" class="flex flex-col items-center w-full">
      <div v-for="item in menuItems" :key="item.title" class="w-full">
        <div
          class="flex justify-between items-center w-full cursor-pointer"
          @click="toggleSubmenu(item)"
        >
          <RouterLink
            :to="item.link"
            class="text-xl block py-2 text-white w-full text-center hover:bg-custom-blue-dark hover:text-gray-800 focus:text-custom-blue-navy active:text-custom-blue-navy border-b border-custom-blue-light"
            @click="scrollToAnchor(item.link)"
          >
            {{ item.title }}
          </RouterLink>
        </div>
        <div v-if="item.submenuOpen && item.children" class="flex flex-col items-center">
          <RouterLink
            v-for="(subItem, index) in item.children"
            :key="subItem.title"
            :to="subItem.link"
            @click="scrollToAnchor(subItem.link)"
            :class="[
              'block w-full py-1 text-lg text-center hover:bg-custom-blue-light hover:text-custom-blue-navy',
              index === item.children.length - 1 ? 'border-b-0' : '',
            ]"
          >
            {{ subItem.title }}
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Menu orizzontale per schermi grandi -->
    <div v-if="isLgOrLarger" class="hidden lg:flex justify-center space-x-8 relative">
      <div
        v-for="item in menuItems"
        :key="item.title"
        class="relative group"
        @mouseenter="openSubmenu(item)"
        @mouseleave="closeSubmenuWithDelay(item)"
      >
        <RouterLink
          :to="item.link"
          class="py-2 px-4 hover:text-gray-800 flex items-center space-x-2 text-xl"
          @click="scrollToAnchor(item.link)"
        >
          <span>{{ item.title }}</span>
          <span v-if="item.children">{{ item.submenuOpen ? '−' : '▿' }}</span>
        </RouterLink>
        <div
          v-if="item.children && item.submenuOpen"
          class="absolute bg-custom-blue text-white mt-2 shadow-lg z-50 text-lg"
          style="width: 270px"
        >
          <RouterLink
            v-for="subItem in item.children"
            :key="subItem.title"
            :to="subItem.link"
            @click="scrollToAnchor(subItem.link)"
            class="block px-4 py-2 hover:bg-custom-blue-light hover:text-custom-blue-navy whitespace-nowrap border-b border-gray-200 last:border-0"
            >{{ subItem.title }}</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

interface MenuItem {
  title: string
  link: string
  children?: { title: string; link: string }[]
  submenuOpen?: boolean
  timeoutId?: ReturnType<typeof setTimeout>
}

const menuOpen = ref(false)
const isMdOrLarger = ref(false)
const isLgOrLarger = ref(false)

const { t, locale } = useI18n()

const router = useRouter()
const route = useRoute() // Per ottenere la rotta corrente

const menuItems = ref<MenuItem[]>([])

// Funzione per aggiornare i menu con le traduzioni
const updateMenuItems = () => {
  menuItems.value = [
    {
      title: t('home'),
      link: '/',
      submenuOpen: false,
      children: [
        { title: t('project'), link: '/#project' },
        { title: t('lobster'), link: '/#lobster' },
      ],
    },
    {
      title: t('conservation'),
      link: '',
      submenuOpen: false,
      children: [
        { title: t('cismarRole'), link: '/conservation' },
        { title: t('hatchery'), link: '/hatchery' },
        { title: t('training'), link: '/training' },
        { title: t('release'), link: '/release' },
      ],
    },
    {
      title: t('research'),
      link: '',
      submenuOpen: false,
      children: [
        { title: t('researchSub'), link: '/research' },
        { title: t('behavior'), link: '/behavior' },
        { title: t('genetics'), link: '/genetics' },
        { title: t('projects'), link: '/projects' },
        { title: t('publications'), link: '/publications' },
      ],
    },
    {
      title: t('dissemination'),
      link: '',
      submenuOpen: false,
      children: [
        { title: t('thirdMission'), link: '/third-mission' },
        { title: t('activities'), link: '/activities' },
        { title: t('divulgastici'), link: '/divulgastici' },
        { title: t('media'), link: 'media' },
        // { title: t('partners'), link: '/under-construction' },
      ],
    },
  ]
}

watch(() => locale.value, updateMenuItems, { immediate: true })

// Chiudi il menu quando cambia la rotta
watch(
  () => route.path,
  () => {
    menuOpen.value = false
  },
)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const toggleSubmenu = (item: MenuItem) => {
  // Chiude tutti gli altri sottomenu
  menuItems.value.forEach((menuItem) => {
    if (menuItem !== item) {
      menuItem.submenuOpen = false
    }
  })

  // Toggle dello stato del sottomenu selezionato
  item.submenuOpen = !item.submenuOpen
}

const openSubmenu = (item: MenuItem) => {
  if (item.timeoutId) clearTimeout(item.timeoutId)
  item.submenuOpen = true
}

const closeSubmenuWithDelay = (item: MenuItem) => {
  item.timeoutId = setTimeout(() => {
    item.submenuOpen = false
  }, 200)
}

const updateScreenSize = () => {
  isMdOrLarger.value = window.innerWidth >= 768 && window.innerWidth < 1024
  isLgOrLarger.value = window.innerWidth >= 1024
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})

// Funzione per lo scroll all'ancoraggio
const scrollToAnchor = (link: string) => {
  if (router) {
    if (link.startsWith('#')) {
      const element = document.querySelector(link)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
      menuOpen.value = false // Chiudi il menu anche per le ancore
    } else {
      router.push(link)
      menuOpen.value = false // Chiudi il menu per le altre rotte
    }
  } else {
    console.error('Router non trovato')
  }
}
</script>
