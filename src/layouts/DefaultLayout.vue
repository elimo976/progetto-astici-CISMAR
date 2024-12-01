<template>
  <div>
    <AppHeader />
    <NavigationMenu />
    <HeroBanner v-if="$route.path === '/'" />
    <AppCookie />
    <slot />
    <ScrollTopButton />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { provide, reactive } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import NavigationMenu from '../components/NavigationMenu.vue'
import AppFooter from '../components/AppFooter.vue'
import AppCookie from '@/components/AppCookie.vue'
import ScrollTopButton from '@/components/ScrollTopButton.vue'
import HeroBanner from '@/components/HeroBanner.vue'

export default {
  components: {
    AppHeader,
    NavigationMenu,
    AppFooter,
    AppCookie,
    ScrollTopButton,
    HeroBanner,
  },
  setup() {
    const state = reactive({
      showScrollTopButton: true, // Lo stato per mostrare/nascondere il bottone
    })

    // Fornisce lo stato a tutti i componenti figli
    provide('showScrollTopButton', state)

    return {
      state,
    }
  },
}
</script>
