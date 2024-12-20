<template>
  <picture>
    <!-- Immagine per smartphone (predefinita) -->
    <source :srcset="imageSrcCismar0SM" media="(max-width: 767px)" />
    <!-- Immagine per tablet e desktop -->
    <source :srcset="imageSrcCismar0" media="(min-width: 768px)" />
    <img
      :src="imageSrcCismar0SM"
      :alt="$t('imageAltRoleCismar0')"
      class="w-full object-cover rounded-lg shadow-xl"
    />
  </picture>
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <!-- CISMAR -->
      <div class="mb-10">
        <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
          {{ $t('cismarTitle') }}
        </h1>

        <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

        <div class="max-w-[47rem] mx-auto xs:px-4">
          <p class="mb-4">{{ $t('cismarDescription1') }}</p>

          <!-- Immagine CISMAR visto dall'alto -->
          <figure
            class="md:w-1/3 sm:w-2/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcCismar1)"
          >
            <img
              :src="imageSrcCismar1"
              :alt="$t('imageAltRoleCismar0')"
              class="aspect-square w-full object-cover rounded-lg shadow-xl"
            />
            <figcaption class="mt-4 pr-1 text-sm md:text-base text-gray-600 text-right">
              {{ $t('imageAltRoleCismar0') }}
            </figcaption>
          </figure>
          <p class="mb-4">{{ $t('cismarDescription2') }}</p>
          <p class="mb-4">{{ $t('cismarDescription3') }}</p>

          <!-- Immagini seppia, cavalluccio e mazzancolla -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-6 md:max-w-[46rem] max-w-[22rem] mx-auto px-4"
          >
            <figure
              class="mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              @click="openModal(imageSrcCismar8)"
            >
              <img
                :src="imageSrcCismar8"
                :alt="$t('cismarAltDescription3')"
                class="aspect-square w-full object-cover rounded-lg shadow-xl"
              />
              <figcaption class="mt-4 text-xs md:text-sm text-gray-600 text-right">
                {{ $t('cismarAltDescription3') }}
              </figcaption>
            </figure>
            <figure
              class="mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              @click="openModal(imageSrcCismar3)"
            >
              <img
                :src="imageSrcCismar3rit"
                :alt="$t('cismarAltDescription1')"
                class="aspect-square w-full object-cover rounded-lg shadow-xl"
              />
              <figcaption class="mt-4 text-xs md:text-sm text-gray-600 text-right">
                {{ $t('cismarAltDescription1') }}
              </figcaption>
            </figure>
            <figure
              class="mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              @click="openModal(imageSrcCismar4)"
            >
              <img
                :src="imageSrcCismar4"
                :alt="$t('cismarAltDescription2')"
                class="aspect-square w-full object-cover rounded-lg shadow-xl"
              />
              <figcaption class="mt-4 pr-1 text-xs md:text-sm text-gray-600 text-right">
                {{ $t('cismarAltDescription2') }}
              </figcaption>
            </figure>
          </div>

          <p class="mb-4">{{ $t('biodiversityDescription') }}</p>

          <!-- Immagine Laboratorio -->
          <figure
            class="md:max-md sm:w-2/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcCismar2)"
          >
            <img
              :src="imageSrcCismar2"
              :alt="$t('laboratoryAltDescription')"
              class="aspect-square w-full object-cover rounded-lg shadow-xl"
            />
            <figcaption class="mt-4 pr-1 text-sm md:text-base text-gray-600 text-right">
              {{ $t('laboratoryAltDescription') }}
            </figcaption>
          </figure>

          <p class="mb-6 max-w-[47rem] mx-auto xs:px-4">{{ $t('laboratoryDescription') }}</p>

          <!-- 3 Immagine Laboratori -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-6 md:max-w-[46rem] max-w-[22rem] mx-auto px-4"
          >
            <figure
              class="mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              @click="openModal(imageSrcCismar5)"
            >
              <img
                :src="imageSrcCismar5"
                :alt="$t('laboratoryAltDescription1')"
                class="aspect-square w-full object-cover rounded-lg shadow-xl"
              />
              <figcaption class="mt-4 pr-1 text-sm md:text-base text-gray-600 text-right">
                {{ $t('laboratoryAltDescription1') }}
              </figcaption>
            </figure>

            <figure
              class="mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              @click="openModal(imageSrcCismar6)"
            >
              <img
                :src="imageSrcCismar6"
                :alt="$t('laboratoryAltDescription2')"
                class="aspect-square w-full object-cover rounded-lg shadow-xl"
              />
              <figcaption class="mt-4 pr-1 text-sm md:text-base text-gray-600 text-right">
                {{ $t('laboratoryAltDescription2') }}
              </figcaption>
            </figure>

            <figure
              class="mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              @click="openModal(imageSrcCismar7)"
            >
              <img
                :src="imageSrcCismar7"
                :alt="$t('laboratoryAltDescription3')"
                class="aspect-square w-full object-cover rounded-lg shadow-xl"
              />
              <figcaption class="mt-4 pr-1 text-sm md:text-base text-gray-600 text-right">
                {{ $t('laboratoryAltDescription3') }}
              </figcaption>
            </figure>
          </div>

          <p
            class="mb-6 max-w-[47rem] mx-auto xs:px-4"
            v-html="$t('marineBreedingDescription')"
          ></p>
        </div>
      </div>

      <!-- RUOLO CISMAR -->
      <!-- Sezione 1 -->
      <div class="mb-10 mt-16">
        <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
          {{ $t('titleRoleCismar') }}
        </h1>

        <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

        <div class="max-w-[47rem] mx-auto xs:px-4">
          <p class="mb-4">{{ $t('contentRoleCismar1') }}</p>
          <p class="mb-3">{{ $t('contentRoleCismar2') }}</p>
          <p class="mb-4">{{ $t('contentRoleCismar3') }}</p>
        </div>
        <!-- Immagine 1 sezione 1-->
        <figure
          class="md:w-1/3 sm:w-2/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcRoleCismar1)"
        >
          <img
            :src="imageSrcRoleCismar1"
            :alt="$t('imageAltRoleCismar1')"
            class="aspect-square lg:w-4/5 w-full object-cover rounded-lg shadow-xl"
          />
          <figcaption class="mt-4 lg:mr-20 pr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltRoleCismar1') }}
          </figcaption>
        </figure>

        <p class="mb-6 max-w-[47rem] mx-auto xs:px-4">{{ $t('contentRoleCismar4') }}</p>
        <!-- Immagine 2 sezione 1-->
        <figure
          class="md:w-1/3 sm:w-2/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcRoleCismar2)"
        >
          <img
            :src="imageSrcRoleCismar2"
            :alt="$t('imageAltRoleCismar2')"
            class="aspect-square lg:w-4/5 w-full object-cover rounded-lg shadow-xl"
          />
          <figcaption class="mt-4 lg:mr-20 pr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltRoleCismar2') }}
          </figcaption>
        </figure>
        <p class="mt-6 text-center">
          {{ $t('textDiscoverRoleCismar') }}
          <router-link to="/research" class="text-blue-500 font-semibold hover:underline">
            {{ $t('linkDiscoverRoleCismar') }}
          </router-link>
        </p>
      </div>

      <!-- Modal per immagine grande -->
      <div
        v-if="showImageModal"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        @click="closeImageModal"
      >
        <div class="relative w-3/4 max-w-3xl px-32 py-12 xs:px-3 xs:py-3">
          <img
            :src="selectedImage"
            alt="Immagine ingrandita"
            class="w-full h-auto rounded-lg border-4 border-white"
          />
          <button
            @click="closeImageModal"
            class="absolute top-14 right-35 xs:top-5 xs:right-5 bg-white opacity-60 text-black rounded-full py-0 px-2 shadow-md hover:bg-gray-500 hover:text-white transition duration-200"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

import imageSrcCismar0 from '@/assets/images/cismar-rit.jpg'
import imageSrcCismar0SM from '@/assets/images/cismarSM-rit.jpg'
import imageSrcCismar1 from '@/assets/images/cismar1.png'
import imageSrcCismar2 from '@/assets/images/laboratory.jpg'
import imageSrcCismar3 from '@/assets/images/cavalluccio.jpg'
import imageSrcCismar3rit from '@/assets/images/cavalluccioTondino.jpg'
import imageSrcCismar4 from '@/assets/images/mazzancolla.jpg'
import imageSrcCismar5 from '@/assets/images/bioreactors.jpg'
import imageSrcCismar6 from '@/assets/images/vasche2.jpg'
import imageSrcCismar7 from '@/assets/images/incub1.jpg'
import imageSrcCismar8 from '@/assets/images/seppia.jpg'

import imageSrcRoleCismar1 from '@/assets/images/asticeAdulto.jpg'
import imageSrcRoleCismar2 from '@/assets/images/aquahiveLoaded.jpg'

export default defineComponent({
  name: 'ConservationPage',
  setup() {
    const showImageModal = ref(false)
    const selectedImage = ref('')

    const openModal = (imageSrc: string) => {
      selectedImage.value = imageSrc
      showImageModal.value = true
    }

    const closeImageModal = () => {
      showImageModal.value = false
      selectedImage.value = ''
    }

    return {
      showImageModal,
      selectedImage,
      imageSrcCismar0SM,
      imageSrcCismar0,
      imageSrcCismar1,
      imageSrcCismar2,
      imageSrcCismar3,
      imageSrcCismar3rit,
      imageSrcCismar4,
      imageSrcCismar5,
      imageSrcCismar6,
      imageSrcCismar7,
      imageSrcCismar8,
      imageSrcRoleCismar1,
      imageSrcRoleCismar2,
      openModal,
      closeImageModal,
    }
  },
})
</script>

<style scoped></style>
