<template>
  <main class="w-full flex-grow bg-gray-50 p-8 md:p-12 lg:p-24">
    <section class="space-y-12 max-w-7xl mx-auto">
      <!-- Titolo principale -->
      <h2
        class="text-3xl lg:text-4xl font-playfair font-bold text-center text-custom-blue-lobster md:mt-4 sm:mt-4 mb-10"
      >
        {{ $t('homeTitle') }}
      </h2>

      <!-- IL PROGETTO -->
      <section id="project" class="p-6 text-xl">
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
          />

          <div class="lg:pl-12 sm:px-4 max-w-full w-full md:w-2/3 lg:w-3/4">
            <h3
              class="text-4xl text-center lg:text-left font-semibold text-custom-blue-lobster mb-6 sm:mt-3"
            >
              {{ $t('projectTitle') }}
            </h3>
            <p
              class="text-gray-800 lg:pl-0 lg:mr-6 sm:px-4 lg:text-justify text-left max-w-[42rem]"
            >
              {{ $t('projectDescription1') }}
            </p>
          </div>
        </div>
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
          />
          <div class="max-w-full w-full md:w-2/3 lg:w-auto">
            <p class="text-gray-800 lg:mr-12 sm:px-4 lg:text-justify text-left max-w-[42rem]">
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
          />
          <div
            class="text-center lg:text-left lg:pl-12 sm:px-4 max-w-full w-full md:w-2/3 lg:w-3/4"
          >
            <p class="text-gray-800 pr-6 lg:text-justify text-left max-w-[42rem]">
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
          />
          <div class="text-center lg:text-left max-w-full w-full md:w-2/3 lg:w-auto">
            <p
              class="text-gray-800 lg:pl-0 lg:mr-5 sm:px-4 lg:text-justify text-left max-w-[42rem]"
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
          />
          <div
            class="text-center lg:text-left lg:pl-12 sm:px-4 max-w-full w-full md:w-2/3 lg:w-3/4"
          >
            <p class="text-gray-800 pr-6 sm:mb-3 lg:text-justify text-left max-w-[42rem]">
              {{ $t('projectDescription5') }}
            </p>
          </div>
        </div>
        <!-- Linea divisoria decorativa -->
        <div class="relative py-8 mt-4">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="bg-gray-50 px-4 text-gray-600 text-sm italic">
              {{ $t('dividerText') }}
            </span>
          </div>
        </div>
      </section>

      <!-- Astice -->
      <section id="lobster" class="p-6 text-xl">
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
            <h3
              v-if="$t('lobsterTitle')"
              class="text-4xl font-semibold text-custom-blue-lobster mb-6 text-center lg:text-left md:text-center sm:text-center"
            >
              {{ $t('lobsterTitle') }}
            </h3>
            <p
              class="text-gray-800 lg:pl-0 lg:mr-6 sm:px-4 lg:text-justify text-left max-w-[42rem]"
              v-html="$t('lobsterDescription1')"
            ></p>
          </div>
        </div>
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
      <hr class="border-custom-blue-lobster" />
      <section class="p-6 text-xl max-w-[55rem] mx-auto lg:text-justify">
        <h2
          class="text-3xl md:text-4xl font-bold text-center text-custom-blue-lobster md:mt-2 mt-4 mb-10"
        >
          {{ $t('historyTitle') }}
        </h2>
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
        <div class="relative bg-white rounded-lg max-w-[80vw] max-h-[90vh] overflow-auto p-5">
          <!-- Pulsante chiudi -->
          <button
            @click="closeModal"
            class="absolute top-0 right-0 text-black text-3xl px-2 hover:bg-gray-100 rounded-full"
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
            class="absolute bottom-1 right-8 text-white bg-gray-700 bg-opacity-80 px-2 py-1 rounded text-xs"
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
import ScrollTopButton from '@/components/ScrollTopButton.vue'

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

gsap.registerPlugin(ScrollTrigger)

const element1 = ref<HTMLElement | null>(null)
const element2 = ref<HTMLElement | null>(null)
const element3 = ref<HTMLElement | null>(null)
const element4 = ref<HTMLElement | null>(null)
const element5 = ref<HTMLElement | null>(null)
const element6 = ref<HTMLElement | null>(null)
const element7 = ref<HTMLElement | null>(null)
const element8 = ref<HTMLElement | null>(null)
const element9 = ref<HTMLElement | null>(null)

const isModalOpen = ref(false)
const modalImageSrc = ref(projectSrc1)
const modalCredits = ref('')

const openModal = (imageSrc: string) => {
  if (imageSrc === 'portoPescaArtigianale.jpg') {
    modalImageSrc.value = projectSrc1
    modalCredits.value = 'Pexels, AXP Photography '
  } else if (imageSrc === 'asticeAdultoVasca.jpg') {
    modalImageSrc.value = projectSrc2
    modalCredits.value = ''
  } else if (imageSrc === 'asticeBluOrizzontale.jpg') {
    modalImageSrc.value = projectSrc3
    modalCredits.value = ''
  } else if (imageSrc === 'zoea.png') {
    modalImageSrc.value = projectSrc4
    modalCredits.value = ''
  } else if (imageSrc === 'faoGoals.jpg') {
    modalImageSrc.value = projectSrc5
    modalCredits.value = ''
  } else if (imageSrc === 'astice2.jpg') {
    modalImageSrc.value = astice2
    modalCredits.value = ''
  } else if (imageSrc === 'asticinoBlu.jpg') {
    modalImageSrc.value = asticinoBlu
    modalCredits.value = ''
  } else if (imageSrc === 'larvaAstice2.jpg') {
    modalImageSrc.value = larvaAstice2
    modalCredits.value = ''
  } else if (imageSrc === 'misurazioneAstice.jpg') {
    modalImageSrc.value = misurazioneAstice
    modalCredits.value = ''
  } else if (imageSrc === 'bioreactors.jpg') {
    modalImageSrc.value = bioreactors
    modalCredits.value = ''
  } else if (imageSrc === 'vasche1.jpg') {
    modalImageSrc.value = vasche1
    modalCredits.value = ''
  } else if (imageSrc === 'vasche2.jpg') {
    modalImageSrc.value = vasche2
    modalCredits.value = ''
  } else if (imageSrc === 'incub1.jpg') {
    modalImageSrc.value = incub1
    modalCredits.value = ''
  } else if (imageSrc === 'incub2.jpg') {
    modalImageSrc.value = incub2
    modalCredits.value = ''
  } else if (imageSrc === 'incub3.jpg') {
    modalImageSrc.value = incub3
    modalCredits.value = ''
  }

  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

const setImageOpacity = (imgElement: EventTarget | null) => {
  if (imgElement instanceof HTMLImageElement) {
    imgElement.style.opacity = '1'
  }
}

const animateOnScroll = () => {
  const elements = [element1, element2, element3, element4, element5]

  elements.forEach((el) => {
    if (el.value) {
      gsap.from(el.value, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: el.value,
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
        },
      })
    }
  })
}

onMounted(() => {
  animateOnScroll()
})
</script>

<style scoped></style>
