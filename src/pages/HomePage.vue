<template>
  <main class="w-full flex-grow bg-gray-50 p-8 md:p-12 lg:p-24">
    <section class="space-y-12">
      <!-- Titolo principale -->
      <h2
        class="text-3xl lg:text-4xl font-playfair font-bold text-center text-custom-blue-lobster mb-10"
      >
        {{ $t('homeTitle') }}
      </h2>

      <!-- CISMAR -->
      <section id="cismar">
        <div
          ref="element1"
          class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
        >
          <img
            src="@/assets/images/cismar1.png"
            alt="CISMAR"
            class="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('cismar1.png')"
            @load="setImageOpacity($event.target)"
          />
          <div class="text-center md:text-left max-w-full w-full md:w-2/3 lg:w-3/4">
            <h3
              v-if="$t('cismarTitle')"
              class="text-3xl font-semibold text-custom-blue-lobster mb-2"
            >
              {{ $t('cismarTitle') }}
            </h3>
            <p
              class="text-gray-800 text-lg pr-6 md:mr-6 text-justify"
              v-html="$t('cismarDescription1')"
            ></p>
          </div>
        </div>
        <div
          ref="element2"
          class="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
        >
          <img
            src="@/assets/images/cavalluccio.jpg"
            alt="Cavalluccio"
            class="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('cavalluccio.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div class="text-center md:text-left max-w-full w-full md:w-2/3 lg:w-3/4">
            <p
              class="text-gray-800 text-lg pr-6 md:mr-6 text-justify"
              v-html="$t('cismarDescription2')"
            ></p>
          </div>
        </div>
        <!-- Biodiversità e ricerca -->
        <div
          ref="element3"
          class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
        >
          <img
            src="@/assets/images/mazzancolla.jpg"
            alt="Mazzancolla"
            class="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('mazzancolla.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div class="text-center md:text-left md:mr-6 max-w-full w-full md:w-2/3 lg:w-3/4">
            <p
              class="text-gray-800 text-lg pr-6 text-justify"
              v-html="$t('biodiversityDescription')"
            ></p>
          </div>
        </div>
        <!-- Laboratori -->
        <div
          ref="element4"
          class="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
        >
          <img
            src="@/assets/images/laboratory.jpg"
            alt="Laboratorio"
            class="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('laboratory.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div class="text-center md:text-left max-w-full w-full md:w-2/3 lg:w-3/4">
            <p
              class="text-gray-800 text-lg pr-6 md:mr-6 text-justify"
              v-html="$t('laboratoryDescription')"
            ></p>
            <!-- Link 'Show more' -->
            <button @click="toggleCarousel" class="text-blue-500 underline">
              {{ isCarouselVisible ? $t('showLess') : $t('showMore') }}
            </button>
            <!-- Carousel -->
            <div v-if="isCarouselVisible" class="mt-6">
              <div class="flex space-x-4 overflow-x-auto max-w-full lg:max-w-full md:max-w-sm">
                <!-- Immagine 1 -->
                <img
                  src="@/assets/images/bioreactors.jpg"
                  alt="Bioreattori"
                  class="w-64 h-64 object-cover rounded-lg shadow-md md:w-56 lg:w-64"
                />
                <!-- Immagine 2 -->
                <img
                  src="@/assets/images/vasche1.jpg"
                  alt="Vasche 1"
                  class="w-64 h-64 object-cover rounded-lg shadow-md md:w-56 lg:w-64"
                />
                <!-- Immagine 3 -->
                <img
                  src="@/assets/images/vasche2.jpg"
                  alt="Vasche 2"
                  class="w-64 h-64 object-cover rounded-lg shadow-md md:w-56 lg:w-64"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Allevamento specie marine -->
        <div
          ref="element5"
          class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
        >
          <img
            src="@/assets/images/astice1.png"
            alt="Astice 1"
            class="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('astice1.png')"
            @load="setImageOpacity($event.target)"
          />
          <div class="text-center md:text-left md:mr-6 max-w-full w-full md:w-2/3 lg:w-3/4">
            <p
              class="text-gray-800 text-lg pr-6 text-justify"
              v-html="$t('marineBreedingDescription')"
            ></p>
          </div>
        </div>
        <!-- Linea divisoria decorativa -->
        <div class="relative py-8">
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
      <section id="lobster">
        <div
          ref="element6"
          class="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
        >
          <img
            src="@/assets/images/astice2.jpg"
            alt="Astice 1"
            class="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('astice2.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div class="text-center md:text-left max-w-full w-full md:w-2/3 lg:w-3/4">
            <h3
              v-if="$t('lobsterTitle')"
              class="text-3xl font-semibold text-custom-blue-lobster mb-2"
            >
              {{ $t('lobsterTitle') }}
            </h3>
            <p
              class="text-gray-800 text-lg pr-6 md:mr-6 text-justify"
              v-html="$t('lobsterDescription1')"
            ></p>
          </div>
        </div>
        <div
          ref="element7"
          class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
        >
          <img
            src="@/assets/images/asticinoBlu.jpg"
            alt="Astice 2"
            class="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('asticinoBlu.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div class="text-center md:text-left md:mr-6 max-w-full w-full md:w-2/3 lg:w-3/4">
            <p
              class="text-gray-800 text-lg pr-6 text-justify"
              v-html="$t('lobsterDescription2')"
            ></p>
          </div>
        </div>
        <div
          ref="element8"
          class="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
        >
          <img
            src="@/assets/images/larvaAstice2.jpg"
            alt="Astice 3"
            class="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('larvaAstice2.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div class="text-center md:text-left max-w-full w-full md:w-2/3 lg:w-3/4">
            <p
              class="text-gray-800 text-lg pr-6 md:mr-6 text-justify"
              v-html="$t('lobsterDescription3')"
            ></p>
          </div>
        </div>
        <div
          ref="element9"
          class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0"
        >
          <img
            src="@/assets/images/misurazioneAstice.jpg"
            alt="Astice 4"
            class="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('misurazioneAstice.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div class="text-center md:text-left md:mr-6 max-w-full w-full md:w-2/3 lg:w-3/4">
            <p
              class="text-gray-800 text-lg pr-6 text-justify"
              v-html="$t('lobsterDescription4')"
            ></p>
          </div>
        </div>
      </section>

      <!-- Modale per l'immagine ingrandita -->
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <div class="relative bg-white p-4 rounded-lg">
          <button @click="closeModal" class="absolute top-0 right-2 text-black text-3xl p-2">
            &times;
          </button>
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
import ScrollTopButton from '@/components/ScrollTopButton.vue'

import cismar1 from '@/assets/images/cismar1.png'
import cavalluccio from '@/assets/images/cavalluccio.jpg'
import mazzancolla from '@/assets/images/mazzancolla.jpg'
import laboratory from '@/assets/images/laboratory.jpg'
import astice1 from '@/assets/images/astice1.png'
import astice2 from '@/assets/images/astice2.jpg'
import asticinoBlu from '@/assets/images/asticinoBlu.jpg'
import larvaAstice2 from '@/assets/images/larvaAstice2.jpg'
import misurazioneAstice from '@/assets/images/misurazioneAstice.jpg'

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
const modalImageSrc = ref(cismar1)

const openModal = (imageSrc: string) => {
  if (imageSrc === 'cismar1.png') {
    modalImageSrc.value = cismar1
  } else if (imageSrc === 'cavalluccio.jpg') {
    modalImageSrc.value = cavalluccio
  } else if (imageSrc === 'mazzancolla.jpg') {
    modalImageSrc.value = mazzancolla
  } else if (imageSrc === 'laboratory.jpg') {
    modalImageSrc.value = laboratory
  } else if (imageSrc === 'astice1.png') {
    modalImageSrc.value = astice1
  } else if (imageSrc === 'astice2.jpg') {
    modalImageSrc.value = astice2
  } else if (imageSrc === 'asticinoBlu.jpg') {
    modalImageSrc.value = asticinoBlu
  } else if (imageSrc === 'larvaAstice2.jpg') {
    modalImageSrc.value = larvaAstice2
  } else if (imageSrc === 'misurazioneAstice.jpg') {
    modalImageSrc.value = misurazioneAstice
  }

  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

const setImageOpacity = (imgElement: EventTarget | null) => {
  const image = imgElement as HTMLImageElement
  if (image) {
    image.style.opacity = '1'
  }
}

const isCarouselVisible = ref(false)
const toggleCarousel = () => {
  isCarouselVisible.value = !isCarouselVisible.value
}

const animateOnScroll = () => {
  const elements = [element1, element2, element3, element4, element5]

  elements.forEach((el) => {
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
  })
}

onMounted(() => {
  animateOnScroll()
})
</script>

<style scoped>
/* Aggiungi eventuali stili personalizzati qui */
</style>
