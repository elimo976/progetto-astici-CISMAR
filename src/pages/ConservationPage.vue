<template>
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <!-- Sezione 1 -->
      <div class="mb-10">
        <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
          {{ $t('titleCismar') }}
        </h1>
        <div class="max-w-[34rem] mx-auto xs:px-4">
          <p class="mb-4">{{ $t('contentCismar1') }}</p>
          <p v-html="sanitizedContentCismar2()" class="mb-3"></p>
          <p class="mb-4">{{ $t('contentCismar3') }}</p>
        </div>
        <!-- Immagine 1 sezione 1-->
        <figure
          class="md:w-1/3 sm:w-2/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcCismar1)"
        >
          <img
            :src="imageSrcCismar1"
            :alt="$t('imageAltCismar1')"
            class="aspect-square lg:w-4/5 w-full object-cover rounded-lg shadow-xl"
          />
          <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltCismar1') }}
          </figcaption>
        </figure>

        <p class="mb-6 max-w-[34rem] mx-auto xs:px-4">{{ $t('contentCismar4') }}</p>
        <!-- Immagine 2 sezione 1-->
        <figure
          class="md:w-1/3 sm:w-2/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcCismar2)"
        >
          <img
            :src="imageSrcCismar2"
            :alt="$t('imageAltCismar2')"
            class="aspect-square lg:w-4/5 w-full object-cover rounded-lg shadow-xl"
          />
          <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltCismar2') }}
          </figcaption>
        </figure>
        <p class="mt-6 text-center">
          {{ $t('textDiscoverCismar') }}
          <router-link to="/under-construction" class="text-blue-500 font-semibold hover:underline">
            {{ $t('linkDiscoverCismar') }}
          </router-link>
        </p>
      </div>
      <!-- Sezione 2 -->
      <div class="mb-10">
        <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
          {{ $t('titleLobster') }}
        </h1>
        <p class="mb-4 max-w-[34rem] mx-auto xs:px-4">{{ $t('contentLobster1') }}</p>
        <!-- Immagine 1 sezione 2 -->
        <figure
          class="md:w-1/3 sm:w-2/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcLobster1)"
        >
          <img
            :src="imageSrcLobster1"
            :alt="$t('imageAltLobster1')"
            class="aspect-square lg:w-4/5 w-full object-cover rounded-lg shadow-xl"
          />
          <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltLobster1') }}
          </figcaption>
        </figure>
        <p class="mb-4 max-w-[34rem] mx-auto xs:px-4">{{ $t('contentLobster2') }}</p>
        <!-- Immagine 2 sezione 2 -->
        <figure
          class="md:w-1/3 sm:w-2/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcLobster2)"
        >
          <img
            :src="imageSrcLobster2"
            :alt="$t('imageAltLobster2')"
            class="aspect-square lg:w-4/5 w-full object-cover rounded-lg shadow-xl"
          />
          <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltLobster2') }}
          </figcaption>
        </figure>
        <p class="mb-6 max-w-[34rem] mx-auto xs:px-4">{{ $t('contentLobster3') }}</p>
        <!-- LobsterStages Component -->
        <div class="mt-8 text-center border-2 rounded-xl shadow-lg">
          <LobsterStages />
        </div>
      </div>
      <!-- Sezione 3 -->
      <div class="mb-10">
        <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
          {{ $t('titleTraining') }}
        </h1>
        <div class="max-w-[34rem] mx-auto xs:px-4">
          <p class="mb-4">{{ $t('contentTraining1') }}</p>
          <p class="mb-4">{{ $t('contentTraining2') }}</p>
        </div>
        <!-- Immagini sezione 3 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 xs:px-4">
          <figure
            class="md:w-full sm:w-4/5 xs:w-2/3 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcTraining1)"
          >
            <img
              :src="imageSrcTraining1"
              :alt="$t('imageAltTraining1')"
              class="aspect-square w-full object-cover rounded-lg shadow-xl"
            />
            <figcaption class="mt-4 text-sm md:text-base text-gray-600 text-right">
              {{ $t('imageAltTraining1') }}
            </figcaption>
          </figure>
          <figure
            class="md:w-full sm:w-4/5 xs:w-2/3 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcTraining2)"
          >
            <img
              :src="imageSrcTraining2"
              :alt="$t('imageAltTraining2')"
              class="aspect-square w-full object-cover rounded-lg shadow-xl"
            />
            <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
              {{ $t('imageAltTraining2') }}
            </figcaption>
          </figure>
          <figure
            class="md:w-full sm:w-4/5 xs:w-2/3 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcTraining3)"
          >
            <img
              :src="imageSrcTraining3"
              :alt="$t('imageAltTraining3')"
              class="aspect-square w-full object-cover rounded-lg shadow-xl"
            />
            <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
              {{ $t('imageAltTraining3') }}
            </figcaption>
          </figure>
        </div>
        <p class="mb-6 max-w-[34rem] mx-auto xs:px-4">{{ $t('contentTraining3') }}</p>
        <!-- Immagine sezione 3 -->
        <figure
          class="md:w-1/3 sm:w-2/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcTraining4)"
        >
          <img
            :src="imageSrcTraining4"
            :alt="$t('imageAltTraining4')"
            class="aspect-square w-full object-cover rounded-lg shadow-xl"
          />
          <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltTraining4') }}
          </figcaption>
        </figure>
      </div>
      <!-- Sezione 4 -->
      <div>
        <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
          {{ $t('titleRelease') }}
        </h1>
        <div class="max-w-[34rem] mx-auto xs:px-4">
          <p class="mb-4">{{ $t('contentRelease1') }}</p>
          <p class="mb-4">{{ $t('contentRelease2') }}</p>
          <p class="mb-6">{{ $t('contentRelease3') }}</p>
        </div>
        <!-- Immagini sezione 4 -->
        <div class="grid grid-cols-1 md:max-w-[48rem] mx-auto sm:grid-cols-2 gap-6">
          <figure
            class="md:w-full sm:w-4/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcRelease1)"
          >
            <img
              :src="imageSrcRelease1"
              :alt="$t('imageAltRelease1')"
              class="aspect-square w-full object-cover rounded-lg shadow-xl"
            />
            <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
              {{ $t('imageAltRelease1') }}
            </figcaption>
          </figure>
          <figure
            class="md:w-full sm:w-4/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcRelease2)"
          >
            <img
              :src="imageSrcRelease2"
              :alt="$t('imageAltRelease2')"
              class="aspect-square w-full object-cover rounded-lg shadow-xl"
            />
            <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
              {{ $t('imageAltRelease2') }}
            </figcaption>
          </figure>
        </div>
        <!-- Video rilascio -->
        <div class="text-center my-8">
          <button
            @click="showVideoModal = true"
            class="bg-custom-blue-lobster text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-300 hover:text-custom-blue-lobster hover:font-semibold transition"
          >
            {{ $t('watchVideoConservation') }}
          </button>
        </div>
      </div>
      <!-- Modal per il video -->
      <div
        v-if="showVideoModal"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      >
        <div class="relative w-11/12 max-w-3xl bg-black rounded-lg shadow-lg">
          <video
            src="@/assets/video/video-hero-banner-extended-low.mp4"
            controls
            autoplay
            muted
            class="w-full h-auto rounded-lg"
          ></video>
          <button
            @click="showVideoModal = false"
            class="absolute top-3 right-3 bg-white opacity-60 text-black rounded-full py-1 px-2 shadow-md hover:bg-gray-500 hover:text-white transition duration-200"
          >
            ✕
          </button>
        </div>
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
import DOMPurify from 'dompurify'
import LobsterStages from '@/pages/LobsterStages.vue'

import imageSrcCismar1 from '@/assets/images/asticeAdulto.jpg'
import imageSrcCismar2 from '@/assets/images/aquahiveLoaded.jpg'
import imageSrcLobster1 from '@/assets/images/lobsterStage1.jpg'
import imageSrcLobster2 from '@/assets/images/uova.jpg'
import imageSrcTraining1 from '@/assets/images/asticeGiovane.jpg'
import imageSrcTraining2 from '@/assets/images/asticeTana1.jpg'
import imageSrcTraining3 from '@/assets/images/asticeTana2.jpg'
import imageSrcTraining4 from '@/assets/images/labwork.jpg'
import imageSrcRelease1 from '@/assets/images/asticiniProvette.jpg'
import imageSrcRelease2 from '@/assets/images/rilascioAstice.jpg'

export default defineComponent({
  name: 'ConservationPage',
  components: { LobsterStages },
  setup() {
    const showVideoModal = ref(false)
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

    const sanitizedContentCismar2 = () => {
      // Usa una stringa come esempio del contenuto che vuoi sanificare
      const rawHtml =
        '<p>Nel caso dell’astice europeo un ostacolo iniziale importante è stato l’assenza di tecniche consolidate per l’allevamento. Essendo una specie non allevata per scopi commerciali, è stato necessario sviluppare da zero procedure e metodologie specifiche. Questo risultato è stato raggiunto grazie alle ricerche condotte dal <strong>CISMAR</strong>, il centro di eccellenza del DEB impegnato nello studio e nella conservazione dell’astice.</p>'
      return DOMPurify.sanitize(rawHtml)
    }

    return {
      showVideoModal,
      showImageModal,
      selectedImage,
      imageSrcCismar1,
      imageSrcCismar2,
      imageSrcLobster1,
      imageSrcLobster2,
      imageSrcTraining1,
      imageSrcTraining2,
      imageSrcTraining3,
      imageSrcTraining4,
      imageSrcRelease1,
      imageSrcRelease2,
      openModal,
      closeImageModal,
      sanitizedContentCismar2,
    }
  },
})
</script>

<style scoped></style>
