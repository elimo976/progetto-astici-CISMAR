<template>
  <main class="w-full flex-grow bg-gray-50 px-8 md:px-12 lg:px-24 py-8">
    <section class="space-y-12 max-w-7xl mx-auto">
      <!-- IL PROGETTO -->
      <section id="project" class="px-6 text-xl">
        <article>
          <h3
            class="text-4xl lg:text-5xl text-center font-semibold lg:font-normal text-custom-blue-lobster mb-8"
          >
            {{ $t('projectTitle') }}
          </h3>
          <hr class="border-custom-blue-lobster mb-8 hidden md:block" />

          <div
            ref="element1"
            class="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:mb-6 mb-10"
          >
            <img
              src="@/assets/images/portoPescaArtigianale-rit.jpg"
              alt="{{ $t('projectAltDescription1') }}"
              class="w-48 lg:w-64 aspect-square object-cover rounded-full shadow-lg transition-all cursor-pointer"
              @click="openModal('portoPescaArtigianale.jpg')"
              @load="setImageOpacity($event.target)"
              aria-label="{{ $t('projectAltDescription1') }}"
            />
            <div class="lg:pl-12 sm:px-4 max-w-full w-full md:w-2/3 lg:w-3/4">
              <p
                class="text-gray-800 lg:pl-0 lg:mr-6 sm:px-4 lg:text-justify text-left max-w-[42rem]"
                aria-live="polite"
              >
                {{ $t('projectDescription1') }}
              </p>
            </div>
          </div>
        </article>
        <div
          ref="element2"
          class="flex flex-col lg:flex-row-reverse items-center space-x-0 lg:space-x-[clamp(1rem, 2vw, 1.5rem)] space-y-6 lg:mb-6 mb-10"
        >
          <img
            src="@/assets/images/asticeAdultoVasca.jpg"
            alt="{{ $t(' projectAltDescription2')}}"
            class="w-48 h-48 lg:w-64 lg:h-64 md:mb-3 sm:mb-2 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('asticeAdultoVasca.jpg')"
            @load="setImageOpacity($event.target)"
            aria-label="{{ $t(' projectAltDescription2')}}"
          />
          <div class="max-w-full w-full md:w-2/3 lg:w-auto">
            <p
              class="text-gray-800 lg:mr-12 sm:px-4 lg:text-justify text-left max-w-[42rem]"
              aria-live="polite"
            >
              {{ $t('projectDescription2') }}
            </p>
          </div>
        </div>

        <div
          ref="element3"
          class="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/asticeBluOrizzontale.jpg"
            alt="{{ $t('projectAltDescription3')}}"
            class="w-48 h-48 lg:w-64 lg:h-64 md:mb-3 sm:mb-2 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('asticeBluOrizzontale.jpg')"
            @load="setImageOpacity($event.target)"
            aria-label="{{ $t('projectAltDescription3')}}"
          />
          <div
            class="text-center lg:text-left lg:pl-12 sm:px-4 max-w-full w-full md:w-2/3 lg:w-3/4"
          >
            <p
              class="text-gray-800 pr-6 lg:text-justify text-left max-w-[42rem]"
              aria-live="polite"
            >
              {{ $t('projectDescription3') }}
            </p>
          </div>
        </div>

        <div
          ref="element4"
          class="flex flex-col lg:flex-row-reverse items-center space-x-0 lg:space-x-[clamp(1rem, 2vw, 1.5rem)] space-y-6 lg:mb-6 mb-10"
        >
          <img
            src="@/assets/images/zoea.png"
            alt="{{ $t('projectAltDescription4')}}"
            class="w-48 h-48 lg:w-64 lg:h-64 md:mb-3 sm:mb-2 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('zoea.png')"
            @load="setImageOpacity($event.target)"
            aria-label="{{ $t('projectAltDescription4')}}"
          />
          <div class="text-center lg:text-left max-w-full w-full md:w-2/3 lg:w-auto">
            <p
              class="text-gray-800 lg:pl-0 lg:mr-5 sm:px-4 lg:text-justify text-left max-w-[42rem]"
              aria-live="polite"
            >
              {{ $t('projectDescription4') }}
            </p>
          </div>
        </div>

        <div
          ref="element5"
          class="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/faoGoals.jpg"
            alt="{{ $t('projectAltDescription5')}}"
            class="w-48 h-48 lg:w-64 lg:h-64 md:mb-3 sm:mb-2 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('faoGoals.jpg')"
            @load="setImageOpacity($event.target)"
            aria-label="{{ $t('projectAltDescription5')}}"
          />
          <div
            class="text-center lg:text-left lg:pl-12 sm:px-4 max-w-full w-full md:w-2/3 lg:w-3/4"
          >
            <p
              class="text-gray-800 pr-6 sm:mb-3 lg:text-justify text-left max-w-[42rem]"
              aria-live="polite"
            >
              {{ $t('projectDescription5') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Astice -->
      <section id="lobster" class="px-6 text-xl">
        <article>
          <h3
            v-if="$t('lobsterTitle')"
            class="text-4xl lg:text-5xl font-semibold lg:font-normal text-custom-blue-lobster mb-8 text-center text-center"
          >
            {{ $t('lobsterTitle') }}
          </h3>
          <hr class="border-custom-blue-lobster mb-8 hidden md:block" />
          <div
            ref="element6"
            class="flex flex-col lg:flex-row-reverse items-center space-x-0 lg:space-x-[clamp(1rem, 2vw, 1.5rem)] space-y-6 mb-10"
          >
            <img
              src="@/assets/images/astice2Tondino.jpg"
              alt="Astice 1"
              class="w-48 h-48 lg:w-64 lg:h-64 md:mb-3 sm:mb-2 object-cover rounded-full shadow-lg transition-all cursor-pointer"
              @click="openModal('astice2.jpg')"
              @load="setImageOpacity($event.target)"
            />
            <div class="text-left lg:mr-6 max-w-full w-full md:w-2/3 lg:w-auto">
              <p
                class="text-gray-800 lg:pl-0 lg:mr-6 sm:px-4 lg:text-justify text-left max-w-[42rem]"
                v-html="$t('lobsterDescription1')"
              ></p>
            </div>
          </div>
        </article>
        <div
          ref="element7"
          class="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/asticinoBlu.jpg"
            alt="Astice 2"
            class="w-48 h-48 lg:w-64 lg:h-64 md:mb-3 sm:mb-2 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('asticinoBlu.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div
            class="text-center lg:text-left lg:pl-12 sm:px-4 max-w-full w-full md:w-2/3 lg:w-3/4"
          >
            <p
              class="text-gray-800 pr-6 lg:text-justify text-left max-w-[42rem]"
              v-html="$t('lobsterDescription2')"
            ></p>
          </div>
        </div>
        <div
          ref="element8"
          class="flex flex-col lg:flex-row-reverse items-center space-x-0 lg:space-x-[clamp(1rem, 2vw, 1.5rem)] space-y-6 lg:mb-6 mb-10"
        >
          <img
            src="@/assets/images/larvaAstice2.jpg"
            alt="Astice 3"
            class="w-48 h-48 lg:w-64 lg:h-64 md:mb-3 sm:mb-2 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('larvaAstice2.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div class="max-w-full w-full md:w-2/3 lg:w-auto">
            <p
              class="text-gray-800 lg:pl-0 lg:mr-5 sm:px-4 lg:text-justify text-left max-w-[42rem]"
              v-html="$t('lobsterDescription3')"
            ></p>
          </div>
        </div>
        <div
          ref="element9"
          class="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/misurazioneAstice.jpg"
            alt="Astice 4"
            class="w-48 h-48 lg:w-64 lg:h-64 md:mb-3 sm:mb-2 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('misurazioneAstice.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div class="lg:pl-12 sm:px-4 max-w-full w-full md:w-2/3 lg:w-3/4">
            <p
              class="text-gray-800 pr-6 lg:text-justify text-left max-w-[42rem]"
              v-html="$t('lobsterDescription4')"
            ></p>
          </div>
        </div>
      </section>

      <!-- Storia -->
      <section class="px-6 text-xl max-w-[55rem] mx-auto lg:text-justify">
        <h2
          class="text-4xl lg:text-5xl font-semibold lg:font-normal text-center text-custom-blue-lobster md:mt-2 mt-4 mb-10"
        >
          {{ $t('historyTitle') }}
        </h2>
        <hr class="border-custom-blue-lobster mb-8 hidden md:block" />

        <h3 class="text-2xl text-custom-blue-lobster font-medium mb-2">
          {{ $t('historyTitle1') }}
        </h3>
        <div class="text-gray-800">
          <p class="mb-2">{{ $t('historyDescription1') }}</p>
          <p class="mb-2">{{ $t('historyDescription2') }}</p>
          <p class="mb-4">{{ $t('historyDescription3') }}</p>

          <h3 class="text-2xl text-custom-blue-lobster font-medium mb-2">
            {{ $t('historyTitle2') }}
          </h3>
          <p>{{ $t('historyDescription4') }}</p>
        </div>
      </section>

      <!-- Modale per l'immagine ingrandita -->
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <div class="relative bg-white rounded-lg max-w-[80vw] max-h-[90vh] overflow-auto p-3">
          <!-- Pulsante chiudi -->
          <button
            @click="closeModal"
            class="absolute top-0 right-0 text-black text-3xl px-2 hover:bg-gray-100 rounded-full"
            aria-label="{{ $t('closeModal') }}"
          >
            &times;
          </button>
          <!-- Contenitore per immagine -->
          <div class="flex justify-center items-center w-full h-full">
            <img
              :src="modalImageSrc"
              alt="Ingrandito"
              class="max-w-full max-h-[80vh] object-contain p-3"
            />
          </div>

          <!-- Credits -->
          <p
            v-if="modalCredits"
            class="absolute bottom-1 right-8 text-gray-700 px-2 rounded text-xs"
          >
            {{ modalCredits }}
          </p>
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
import { useI18n } from 'vue-i18n' // Importa i18n per la gestione delle traduzioni
import ScrollTopButton from '@/components/ScrollTopButton.vue'

// Import immagini
import projectSrc1 from '@/assets/images/portoPescaArtigianale.jpg'
import projectSrc2 from '@/assets/images/asticeAdultoVasca.jpg'
import projectSrc3 from '@/assets/images/asticeBluOrizzontale.jpg'
import projectSrc4 from '@/assets/images/zoea.png'
import projectSrc5 from '@/assets/images/FaoGoals.jpg'
import astice2 from '@/assets/images/astice2.jpg'
import asticinoBlu from '@/assets/images/asticinoBlu.jpg'
import larvaAstice2 from '@/assets/images/larvaAstice2.jpg'
import misurazioneAstice from '@/assets/images/misurazioneAstice.jpg'
import bioreactors from '@/assets/images/bioreactors.jpg'
import vasche1 from '@/assets/images/vasche1.jpg'
import vasche2 from '@/assets/images/vasche2.jpg'
import incub1 from '@/assets/images/incub1.jpg'
import incub2 from '@/assets/images/incub2.jpg'
import incub3 from '@/assets/images/incub3.jpg'

// Registra il plugin GSAP
gsap.registerPlugin(ScrollTrigger)

// Riferimenti agli elementi del DOM
const elementRefs = Array.from({ length: 9 }, () => ref<HTMLElement | null>(null))

// Modal state
const isModalOpen = ref(false)
const modalImageSrc = ref(projectSrc1)
const modalCredits = ref('')

// Funzione per aprire il modal
const openModal = (imageSrc: string) => {
  const imageMap: Record<string, { src: string; credits: string }> = {
    'portoPescaArtigianale.jpg': { src: projectSrc1, credits: 'Pexels, AXP Photography ' },
    'asticeAdultoVasca.jpg': { src: projectSrc2, credits: '' },
    'asticeBluOrizzontale.jpg': { src: projectSrc3, credits: '' },
    'zoea.png': { src: projectSrc4, credits: '' },
    'faoGoals.jpg': { src: projectSrc5, credits: '' },
    'astice2.jpg': { src: astice2, credits: '' },
    'asticinoBlu.jpg': { src: asticinoBlu, credits: '' },
    'larvaAstice2.jpg': { src: larvaAstice2, credits: '' },
    'misurazioneAstice.jpg': { src: misurazioneAstice, credits: '' },
    'bioreactors.jpg': { src: bioreactors, credits: '' },
    'vasche1.jpg': { src: vasche1, credits: '' },
    'vasche2.jpg': { src: vasche2, credits: '' },
    'incub1.jpg': { src: incub1, credits: '' },
    'incub2.jpg': { src: incub2, credits: '' },
    'incub3.jpg': { src: incub3, credits: '' },
  }

  const selectedImage = imageMap[imageSrc]
  if (selectedImage) {
    modalImageSrc.value = selectedImage.src
    modalCredits.value = selectedImage.credits
  }

  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

// Funzione per chiudere il modal
const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

// Funzione per impostare l'opacità delle immagini
const setImageOpacity = (imgElement: EventTarget | null) => {
  if (imgElement instanceof HTMLImageElement) {
    imgElement.style.opacity = '1'
  }
}

// Animazioni con GSAP e ScrollTrigger
const animateOnScroll = () => {
  elementRefs.forEach((elRef) => {
    if (elRef.value) {
      gsap.from(elRef.value, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: elRef.value,
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
        },
      })
    }
  })
}

// Esegui animazioni al montaggio del componente e aggiorna i meta tag
onMounted(() => {
  animateOnScroll()

  // Ottieni l'istanza di i18n
  const { t } = useI18n()

  // Modifica o aggiungi meta tag
  const metaTags = [
    { name: 'description', content: t('pageDescriptionHome') },
    { property: 'og:title', content: t('ogTitleHome') },
    { property: 'og:description', content: t('ogDescriptionHome') },
    { name: 'keywords', content: t('keywordsHome') },
    { name: 'language', content: 'it' }, // Lingua corrente
  ]

  metaTags.forEach(({ name, property, content }) => {
    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
    let meta = document.head.querySelector(selector) as HTMLMetaElement
    if (!meta) {
      meta = document.createElement('meta')
      if (name) meta.setAttribute('name', name)
      if (property) meta.setAttribute('property', property)
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  })
})
</script>

<style scoped></style>
