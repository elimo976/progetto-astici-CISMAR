<template>
  <main class="w-full flex-grow bg-gray-50 p-8 md:p-12 lg:p-24">
    <section class="space-y-12 max-w-7xl mx-auto">
      <!-- Titolo principale -->
      <h2
        class="text-3xl lg:text-4xl font-playfair font-bold text-center text-custom-blue-lobster mb-10"
      >
        {{ $t('homeTitle') }}
      </h2>

      <!-- CISMAR -->
      <section id="cismar" class="p-6 text-xl">
        <div
          ref="element1"
          class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/cismar1.png"
            alt="CISMAR"
            class="w-48 h-48 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('cismar1.png')"
            @load="setImageOpacity($event.target)"
          />
          <div
            class="text-center md:text-left max-w-full w-full md:w-2/3 lg:w-3/4 lg:pr-72 lg:pl-10"
          >
            <h3
              v-if="$t('cismarTitle')"
              class="text-4xl font-semibold text-custom-blue-lobster mb-6"
            >
              {{ $t('cismarTitle') }}
            </h3>
            <p
              class="text-gray-800 lg:pl-0 md:mr-6 md:pl-6 text-justify"
              v-html="$t('cismarDescription1')"
            ></p>
          </div>
        </div>
        <div
          ref="element2"
          class="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/cavalluccio.jpg"
            alt="Cavalluccio"
            class="w-48 h-48 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('cavalluccio.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div
            class="text-center md:text-left max-w-full w-full md:w-2/3 lg:w-3/4 lg:pl-72 lg:pr-10"
          >
            <p
              class="text-gray-800 pr-6 md:mr-6 text-justify"
              v-html="$t('cismarDescription2')"
            ></p>
          </div>
        </div>
        <!-- Biodiversità e ricerca -->
        <div
          ref="element3"
          class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/mazzancolla.jpg"
            alt="Mazzancolla"
            class="w-48 h-48 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('mazzancolla.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div
            class="text-center md:text-left md:mr-6 max-w-full w-full md:w-2/3 lg:w-3/4 lg:pr-72 lg:pl-10"
          >
            <p
              class="text-gray-800 pr-6 md:pl-6 text-justify"
              v-html="$t('biodiversityDescription')"
            ></p>
          </div>
        </div>
        <!-- Laboratori -->
        <div
          ref="element4"
          class="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/laboratory.jpg"
            alt="Laboratorio"
            class="w-48 h-48 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('laboratory.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div
            class="text-center md:text-left max-w-full w-full md:w-2/3 lg:w-3/4 lg:pl-72 lg:pr-10"
          >
            <p
              class="text-gray-800 pr-6 md:mr-6 text-justify"
              v-html="$t('laboratoryDescription')"
            ></p>
            <!-- Link 'Show more' -->
            <button @click="toggleCarouselLab" class="text-blue-500 underline">
              {{ isCarouselLabVisible ? $t('showLess') : $t('showMore') }}
            </button>
            <!-- Carousel Lab-->
            <div v-if="isCarouselLabVisible" class="my-10 relative">
              <!-- Pulsanti freccia -->
              <button
                @click="scrollCarousel('left', 'labCarousel')"
                class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 lg:hidden"
                aria-label="Scroll left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div
                id="labCarousel"
                class="flex space-x-4 my-4 overflow-x-hidden lg:overflow-x-auto scroll-smooth max-w-full md:mr-10"
              >
                <!-- Immagine 1 -->
                <img
                  src="@/assets/images/bioreactors.jpg"
                  alt="Bioreattori"
                  class="w-64 h-64 object-cover rounded-lg shadow-md md:w-56 lg:w-64 cursor-pointer"
                  @click="openModal('bioreactors.jpg')"
                  @load="setImageOpacity($event.target)"
                />
                <!-- Immagine 2 -->
                <img
                  src="@/assets/images/vasche1.jpg"
                  alt="Vasche 1"
                  class="w-64 h-64 object-cover rounded-lg shadow-md md:w-56 lg:w-64 cursor-pointer"
                  @click="openModal('vasche1.jpg')"
                  @load="setImageOpacity($event.target)"
                />
                <!-- Immagine 3 -->
                <img
                  src="@/assets/images/vasche2.jpg"
                  alt="Vasche 2"
                  class="w-64 h-64 object-cover rounded-lg shadow-md md:w-56 lg:w-64 cursor-pointer"
                  @click="openModal('vasche2.jpg')"
                  @load="setImageOpacity($event.target)"
                />
              </div>

              <!-- Pulsante freccia destra -->
              <button
                @click="scrollCarousel('right', 'labCarousel')"
                class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 md:mr-10 z-10 lg:hidden"
                aria-label="Scroll right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- Allevamento specie marine -->
        <div
          ref="element5"
          class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/astice1.png"
            alt="Astice 1"
            class="w-48 h-48 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('astice1.png')"
            @load="setImageOpacity($event.target)"
          />
          <div
            class="text-center md:text-left md:mr-6 md:pl-6 max-w-full w-full md:w-2/3 lg:w-3/4 lg:pr-72 lg:pl-10"
          >
            <p class="text-gray-800 pr-6 text-justify" v-html="$t('marineBreedingDescription')"></p>
            <!-- Link 'Show more' -->
            <button @click="toggleCarouselBreed" class="text-blue-500 underline">
              {{ isCarouselBreedVisible ? $t('showLess') : $t('showMore') }}
            </button>
            <!-- Carousel Breeding-->
            <div v-if="isCarouselBreedVisible" class="my-10 relative">
              <!-- Pulsanti freccia -->
              <button
                @click="scrollCarousel('left', 'breedCarousel')"
                class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 lg:hidden"
                aria-label="Scroll left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div
                id="breedCarousel"
                class="flex space-x-4 overflow-x-hidden lg:overflow-x-auto max-w-full"
              >
                <!-- Immagine 1 -->
                <img
                  src="@/assets/images/incub1.jpg"
                  alt="Incubatoio 1"
                  class="w-64 h-64 object-cover rounded-lg shadow-md md:w-56 lg:w-64 cursor-pointer"
                  @click="openModal('incub1.jpg')"
                  @load="setImageOpacity($event.target)"
                />
                <!-- Immagine 2 -->
                <img
                  src="@/assets/images/incub2.jpg"
                  alt="Incubatoio 2"
                  class="w-64 h-64 object-cover rounded-lg shadow-md md:w-56 lg:w-64 cursor-pointer"
                  @click="openModal('incub2.jpg')"
                  @load="setImageOpacity($event.target)"
                />
                <!-- Immagine 3 -->
                <img
                  src="@/assets/images/incub3.jpg"
                  alt="Incubatoio 3"
                  class="w-64 h-64 object-cover rounded-lg shadow-md md:w-56 lg:w-64 cursor-pointer"
                  @click="openModal('incub3.jpg')"
                  @load="setImageOpacity($event.target)"
                />
              </div>
              <!-- Pulsante freccia destra -->
              <button
                @click="scrollCarousel('right', 'breedCarousel')"
                class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 lg:hidden"
                aria-label="Scroll right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
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
      <section id="lobster" class="text-xl">
        <div
          ref="element6"
          class="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/astice2.jpg"
            alt="Astice 1"
            class="w-48 h-48 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('astice2.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div
            class="text-center md:text-left max-w-full w-full md:w-2/3 lg:w-3/4 lg:pl-72 lg:pr-10"
          >
            <h3
              v-if="$t('lobsterTitle')"
              class="text-4xl font-semibold text-custom-blue-lobster mb-6"
            >
              {{ $t('lobsterTitle') }}
            </h3>
            <p
              class="text-gray-800 pr-6 md:mr-6 text-justify"
              v-html="$t('lobsterDescription1')"
            ></p>
          </div>
        </div>
        <div
          ref="element7"
          class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/asticinoBlu.jpg"
            alt="Astice 2"
            class="w-48 h-48 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('asticinoBlu.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div
            class="text-center md:text-left md:mr-6 md:pl-6 max-w-full w-full md:w-2/3 lg:w-3/4 lg:pr-72 lg:pl-10"
          >
            <p class="text-gray-800 pr-6 text-justify" v-html="$t('lobsterDescription2')"></p>
          </div>
        </div>
        <div
          ref="element8"
          class="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/larvaAstice2.jpg"
            alt="Astice 3"
            class="w-48 h-48 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('larvaAstice2.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div
            class="text-center md:text-left max-w-full w-full md:w-2/3 lg:w-3/4 lg:pl-72 lg:pr-10"
          >
            <p
              class="text-gray-800 pr-6 md:mr-6 text-justify"
              v-html="$t('lobsterDescription3')"
            ></p>
          </div>
        </div>
        <div
          ref="element9"
          class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 space-y-6 lg:mb-0 mb-10"
        >
          <img
            src="@/assets/images/misurazioneAstice.jpg"
            alt="Astice 4"
            class="w-48 h-48 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg transition-all cursor-pointer"
            @click="openModal('misurazioneAstice.jpg')"
            @load="setImageOpacity($event.target)"
          />
          <div
            class="text-center md:text-left md:mr-6 md:pl-6 max-w-full w-full md:w-2/3 lg:w-3/4 lg:pr-72 lg:pl-10"
          >
            <p class="text-gray-800 pr-6 text-justify" v-html="$t('lobsterDescription4')"></p>
          </div>
        </div>
      </section>

      <!-- Modale per l'immagine ingrandita -->
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <div class="relative bg-white p-4 rounded-lg">
          <!-- Pulsante chiudi -->
          <button @click="closeModal" class="absolute top-0 right-2 text-black text-3xl p-2">
            &times;
          </button>
          <!-- Immagine ingrandita -->
          <img
            :src="modalImageSrc"
            alt="Ingrandito"
            class="max-w-full max-h-screen object-contain p-8"
          />
          <!-- Credits -->
          <p
            v-if="modalCredits"
            class="absolute bottom-3 right-12 text-white bg-black bg-opacity-50 px-2 py-1 rounded text-sm"
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

import cismar1 from '@/assets/images/cismar1.png'
import cavalluccio from '@/assets/images/cavalluccio.jpg'
import mazzancolla from '@/assets/images/mazzancolla.jpg'
import laboratory from '@/assets/images/laboratory.jpg'
import astice1 from '@/assets/images/astice1.png'
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
const modalImageSrc = ref(cismar1)
const modalCredits = ref('')

const openModal = (imageSrc: string) => {
  if (imageSrc === 'cismar1.png') {
    modalImageSrc.value = cismar1
    modalCredits.value = ''
  } else if (imageSrc === 'cavalluccio.jpg') {
    modalImageSrc.value = cavalluccio
    modalCredits.value = 'credits: Stefano Guerrieri'
  } else if (imageSrc === 'mazzancolla.jpg') {
    modalImageSrc.value = mazzancolla
    modalCredits.value = 'credits: Xavier Rufray'
  } else if (imageSrc === 'laboratory.jpg') {
    modalImageSrc.value = laboratory
    modalCredits.value = ''
  } else if (imageSrc === 'astice1.png') {
    modalImageSrc.value = astice1
    modalCredits.value = 'credits: https://pixabay.com/users/tauchteufel-2599128/'
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

const scrollCarousel = (direction: 'left' | 'right', id: string) => {
  const carousel = document.getElementById(id)
  if (carousel) {
    const scrollAmount = direction === 'left' ? -200 : 200
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}

const isCarouselLabVisible = ref(false)
const toggleCarouselLab = () => {
  isCarouselLabVisible.value = !isCarouselLabVisible.value
}

const isCarouselBreedVisible = ref(false)
const toggleCarouselBreed = () => {
  isCarouselBreedVisible.value = !isCarouselBreedVisible.value
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

<style scoped>
/* Aggiungi eventuali stili personalizzati qui */
</style>
