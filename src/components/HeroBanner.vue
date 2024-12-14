<template>
  <section class="w-full">
    <div class="relative w-full shadow-lg">
      <!-- Video di sfondo -->
      <video autoplay loop muted class="w-full shadow-lg">
        <!-- Video per schermi grandi -->
        <source src="@/assets/video/video-hero-banner.mp4" media="(min-width: 1024px)" />
        <!-- Video per schermi medi e piccoli -->
        <source src="@/assets/video/video-hero-banner-low.mp4" media="(max-width: 1023px)" />
        <!-- Fallback -->
        Your browser does not support the video tag.
      </video>

      <!-- Bottone 'Guarda il video' -->
      <button
        @click="showVideoModal = true"
        class="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-2/3 backdrop-blur-md bg-white/30 border-2 border-custom-blue-lobster text-white lg:px-8 lg:py-4 px-6 py-3 lg:text-lg text-sm font-semibold rounded-full shadow-md hover:bg-white/50 lg:hover:scale-105 hover:scale-110 active:scale-110 transition-all duration-300"
      >
        {{ $t('button') }}
      </button>
    </div>

    <!-- ScrollTopButton -->
    <ScrollTopButton :disable="showVideoModal" />

    <!-- Popup video -->
    <div
      v-if="showVideoModal"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    >
      <div class="relative w-11/12 max-w-3xl bg-black rounded-lg shadow-lg">
        <!-- Video unico per tutti gli schermi -->
        <video
          src="@/assets/video/video-hero-banner-extended-low.mp4"
          controls
          autoplay
          muted
          class="w-full h-auto rounded-lg"
        ></video>

        <!-- Pulsante di chiusura -->
        <button
          @click="showVideoModal = false"
          class="absolute top-3 right-3 bg-white opacity-60 text-black rounded-full py-1 px-2 shadow-md hover:bg-gray-500 hover:text-white transition duration-200"
        >
          ✕
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ScrollTopButton from '@/components/ScrollTopButton.vue' // Importa il componente

// Stato per controllare l'apertura del modal
const showVideoModal = ref(false)
</script>
