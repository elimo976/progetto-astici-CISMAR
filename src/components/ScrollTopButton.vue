<template>
  <div
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed z-50 bottom-5 right-5 bg-gray-200 border border-custom-blue-lobster shadow-lg text-custom-blue-lobster p-3 rounded-full cursor-pointer transition-opacity duration-300 ease-in-out"
    aria-label="Scroll to top"
  >
    <font-awesome-icon :icon="['fas', 'chevron-up']" class="text-2xl" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

// Registra il plugin con GSAP
gsap.registerPlugin(ScrollToPlugin)

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 100
}

const scrollToTop = () => {
  gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: 'power2.out' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
