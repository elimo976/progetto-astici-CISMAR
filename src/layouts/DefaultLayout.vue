<template>
  <div>
    <AppHeader />
    <NavigationMenu />
    <AppCookie />
    <slot />
    <ScrollTopButton />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import AppHeader from '../components/AppHeader.vue'
import NavigationMenu from '../components/NavigationMenu.vue'
import AppFooter from '../components/AppFooter.vue'
import AppCookie from '@/components/AppCookie.vue'
import ScrollTopButton from '@/components/ScrollTopButton.vue'

export default {
  components: {
    AppHeader,
    NavigationMenu,
    AppFooter,
    AppCookie,
    ScrollTopButton,
  },
}
</script>
