<template>
  <section class="w-full">
    <div class="relative w-full shadow-lg">
      <!-- Video di sfondo -->
      <video
        src="@/assets/video/video-hero-banner.mp4"
        autoplay
        loop
        muted
        class="w-full shadow-lg"
      ></video>

      <!-- Bottone 'Guarda il video' -->
      <button
        @click="showVideoModal = true"
        class="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white/30 border-2 border-custom-blue-lobster text-white px-8 py-4 text-lg font-semibold rounded-full shadow-md hover:bg-white/50 hover:scale-105 transition-all duration-300"
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
        <!-- Video -->
        <video
          src="@/assets/video/video-hero-banner-extended.mp4"
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
