<template>
  <main class="w-full flex-grow bg-gray-50 p-8 md:p-12 lg:p-24">
    <section class="space-y-12">
      <!-- Titolo principale -->
      <h2
        class="text-3xl lg:text-4xl font-playfair font-bold text-center text-custom-blue-lobster mb-10"
      >
        {{ $t('homeTitle') }}
      </h2>

      <!-- Gli elementi principali -->
      <div
        ref="element1"
        class="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
      >
        <!-- Immagine Cismar1 con click per aprire la modale -->
        <img
          src="@/assets/images/cismar1.png"
          alt="Caratteristica 1"
          class="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg transition-all cursor-pointer"
          @click="openModal('cismar1.png')"
          @load="setImageOpacity($event.target)"
        />
        <div class="text-center md:text-left max-w-full w-full md:w-2/3 lg:w-3/4">
          <h3 class="text-3xl font-semibold text-custom-blue-lobster mb-2">
            {{ $t('characteristic1') }}
          </h3>
          <p class="text-gray-800 text-lg pr-6 md:mr-6 text-justify">{{ $t('description1') }}</p>
        </div>
      </div>

      <!-- Elemento 2 -->
      <div
        ref="element2"
        class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
      >
        <!-- Immagine Element2 con click per aprire la modale -->
        <img
          src="@/assets/images/astice1.png"
          alt="Caratteristica 2"
          class="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg transition-all cursor-pointer"
          @click="openModal('image2.jpg')"
          @load="setImageOpacity($event.target)"
        />
        <div class="text-center md:text-left md:mr-6 max-w-full w-full md:w-2/3 lg:w-3/4">
          <h3 class="text-3xl font-semibold text-custom-blue-lobster mb-2">
            {{ $t('characteristic2') }}
          </h3>
          <p class="text-gray-800 text-lg pr-6 text-justify">{{ $t('description2') }}</p>
        </div>
      </div>

      <!-- Modale per l'immagine ingrandita -->
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <div class="relative bg-white p-4 rounded-lg">
          <button @click="closeModal" class="absolute top-0 right-2 text-black text-3xl p-2">
            &times;
          </button>
          <!-- Immagine ingrandita con più padding -->
          <img
            :src="modalImageSrc"
            alt="Ingrandito"
            class="max-w-full max-h-screen object-contain p-8"
          />
        </div>
      </div>
    </section>
  </main>

  <!-- ScrollTopButton rimosso completamente dal DOM quando la modale è aperta -->
  <ScrollTopButton v-if="!isModalOpen" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollTopButton from '@/components/ScrollTopButton.vue' // Importa il componente

// Importa direttamente le immagini
import cismar1 from '@/assets/images/cismar1.png'
import image2 from '@/assets/images/astice1.png'

gsap.registerPlugin(ScrollTrigger)

const element1 = ref<HTMLElement | null>(null)
const element2 = ref<HTMLElement | null>(null)

// Stato per la modale
const isModalOpen = ref(false)
const modalImageSrc = ref(cismar1) // Immagine di default

// Funzione per aprire la modale
const openModal = (imageSrc: string) => {
  if (imageSrc === 'cismar1.png') {
    modalImageSrc.value = cismar1
  } else if (imageSrc === 'image2.jpg') {
    modalImageSrc.value = image2
  }
  isModalOpen.value = true
  console.log('Modal open:', isModalOpen.value)
  document.body.style.overflow = 'hidden' // Disabilita lo scroll della pagina
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto' // Riapre lo scroll della pagina
}

// Funzione per gestire l'opacità dell'immagine
const setImageOpacity = (imgElement: EventTarget | null) => {
  const image = imgElement as HTMLImageElement
  if (image) {
    image.style.opacity = '1' // Rendi l'immagine visibile
  }
}

const animateOnScroll = () => {
  const elements = [element1, element2]

  elements.forEach((el, index) => {
    if (el.value) {
      const imgElement = el.value.querySelector('img') as HTMLImageElement | null
      if (imgElement) {
        gsap.set(imgElement, { opacity: 1, scale: 1 })
        gsap.fromTo(
          imgElement,
          {
            opacity: 0,
            scale: 0.9,
            x: -30,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.2,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: el.value,
              start: 'top 80%',
              end: 'top 20%',
              once: true,
            },
          },
        )
      }
    }
  })
}

onMounted(() => {
  animateOnScroll()
})
</script>

<style scoped>
/* Eventuali stili extra per la modale */
</style>
