<template>
  <section class="w-full">
    <div class="relative w-full shadow-lg">
      <!-- Video di sfondo -->
      <video
        ref="heroVideo"
        playsinline
        autoplay
        loop
        muted
        preload="auto"
        class="w-full shadow-lg"
      >
        <source src="@/assets/video/video-hero-banner.mp4" media="(min-width: 1024px)" />
        <source src="@/assets/video/video-hero-banner-low.mp4" media="(max-width: 1023px)" />
        Your browser does not support the video tag.
      </video>

      <!-- Bottone 'Guarda il video' -->
      <button
        @click="openVideoModal"
        class="absolute bottom-[15%] left-1/2 xs:bottom-[25%] transform -translate-x-1/2 translate-y-full backdrop-blur-md bg-white/30 border-2 border-custom-blue-lobster text-white md:px-6 md:py-3 px-5 py-2 text-xs font-semibold rounded-full shadow-md hover:bg-white/50 lg:hover:scale-105 hover:scale-110 active:scale-110 transition-all duration-300"
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
          ref="popupVideo"
          src="@/assets/video/video-hero-banner-extended-low.mp4"
          preload="auto"
          controls
          muted
          playsinline
          class="w-full h-auto rounded-lg"
        ></video>

        <!-- Pulsante di chiusura -->
        <button
          @click="closeVideoModal"
          class="absolute top-3 right-3 bg-white opacity-60 text-black rounded-full py-1 px-2 shadow-md hover:bg-gray-500 hover:text-white transition duration-200"
        >
          ✕
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ScrollTopButton from '@/components/ScrollTopButton.vue'

// Stato per controllare l'apertura del modal
const showVideoModal = ref(false)

// Riferimenti ai video
const heroVideo = ref<HTMLVideoElement | null>(null)
const popupVideo = ref<HTMLVideoElement | null>(null)

// Funzione per forzare il play del video di sfondo su Safari (dispositivi iOS)
const playVideoOnLoad = () => {
  if (heroVideo.value) {
    heroVideo.value.play().catch((error) => {
      console.error('Errore nel tentativo di avviare il video di sfondo:', error)
    })
  }
}

// Funzione per forzare il play del video del popup su Safari (dispositivi iOS)
const playPopupVideoOnLoad = () => {
  if (popupVideo.value) {
    popupVideo.value.play().catch((error) => {
      console.error('Errore nel tentativo di avviare il video del popup:', error)
    })
  }
}

onMounted(() => {
  playVideoOnLoad()

  // Dati strutturati per il video in JSON-LD
  const videoMetadata = {
    '@context': 'http://schema.org',
    '@type': 'VideoObject',
    name: 'Hero Video - Homepage',
    description:
      'Un video emozionante di benvenuto sulla nostra homepage, che mostra il rilascio di un giovane astice europeo.',
    thumbnailUrl: '@/assets/images/asticeRilasciato.jpg', // Link alla miniatura del video
    contentUrl: '@/assets/video/video-hero-banner.mp4', // URL del video principale
    embedUrl: '@/assets/video/video-hero-banner.mp4', // URL per l'embed
    duration: 'PT29S', // Durata del video
    uploadDate: '2024-12-12T00:00:00Z', // Data di upload del video
  }

  // Aggiungi il JSON-LD al documento
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(videoMetadata)
  document.head.appendChild(script)
})

// Funzione per aprire il modal e avviare il video del popup
const openVideoModal = () => {
  showVideoModal.value = true
  // Forza il play del video del popup appena il modal è aperto
  playPopupVideoOnLoad()
}

// Funzione per chiudere il modal
const closeVideoModal = () => {
  showVideoModal.value = false
}
</script>
