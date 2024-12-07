<template>
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-justify">
    <!-- Sezione 1 -->
    <div class="mb-10">
      <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
        {{ $t('titleCismar') }}
      </h1>
      <p class="mb-4">{{ $t('contentCismar1') }}</p>
      <p class="mb-4">{{ $t('contentCismar2') }}</p>
      <p class="mb-4">{{ $t('contentCismar3') }}</p>
      <p class="mb-6">{{ $t('contentCismar4') }}</p>
      <!-- Immagine sezione 1-->
      <div
        class="w-1/3 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        @click="openModal(imageSrcCismar1)"
      >
        <img
          :src="imageSrcCismar1"
          :alt="$t('imageAltCismar1')"
          class="w-full object-cover rounded-lg"
        />
        <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
          {{ $t('imageAltCismar1') }}
        </figcaption>
      </div>

      <p class="mt-6 text-center">
        {{ $t('textDiscoverCismar') }}
        <a href="#" class="text-blue-500 font-semibold hover:underline">
          {{ $t('linkDiscoverCismar') }}
        </a>
      </p>
    </div>

    <!-- Sezione 2 -->
    <div class="mb-10">
      <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
        {{ $t('titleLobster') }}
      </h1>
      <p class="mb-4">{{ $t('contentLobster1') }}</p>
      <p class="mb-4">{{ $t('contentLobster2') }}</p>
      <p class="mb-6">{{ $t('contentLobster3') }}</p>

      <!-- Immagine sezione 2 -->
      <div
        class="w-1/3 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        @click="openModal(imageSrcLobster)"
      >
        <img
          :src="imageSrcLobster"
          :alt="$t('imageAltLobster')"
          class="w-full object-cover rounded-lg"
        />
        <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
          {{ $t('imageAltLobster') }}
        </figcaption>
      </div>

      <!-- LobsterStages Component -->
      <div class="mt-8 text-center">
        <LobsterStages />
      </div>
    </div>

    <!-- Sezione 3 -->
    <div class="mb-10">
      <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
        {{ $t('titleTraining') }}
      </h1>
      <p class="mb-4">{{ $t('contentTraining1') }}</p>
      <p class="mb-4">{{ $t('contentTraining2') }}</p>
      <p class="mb-6">{{ $t('contentTraining3') }}</p>

      <!-- Immagini sezione 3 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="w-full mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcTraining1)"
        >
          <img
            :src="imageSrcTraining1"
            :alt="$t('imageAltTraining1')"
            class="w-full object-cover rounded-lg"
          />
          <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltTraining1') }}
          </figcaption>
        </div>

        <div
          class="w-full mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcTraining2)"
        >
          <img
            :src="imageSrcTraining2"
            :alt="$t('imageAltTraining2')"
            class="w-full object-cover rounded-lg"
          />
          <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltTraining2') }}
          </figcaption>
        </div>

        <div
          class="w-full mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcTraining3)"
        >
          <img
            :src="imageSrcTraining3"
            :alt="$t('imageAltTraining3')"
            class="w-full object-cover rounded-lg"
          />
          <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltTraining3') }}
          </figcaption>
        </div>
      </div>
    </div>

    <!-- Sezione 4 -->
    <div>
      <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
        {{ $t('titleRelease') }}
      </h1>
      <p class="mb-4">{{ $t('contentRelease1') }}</p>
      <p class="mb-4">{{ $t('contentRelease2') }}</p>
      <p class="mb-6">{{ $t('contentRelease3') }}</p>

      <!-- Immagini sezione 4 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          class="w-full mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcRelease1)"
        >
          <img
            :src="imageSrcRelease1"
            :alt="$t('imageAltRelease1')"
            class="w-full object-cover rounded-lg"
          />
          <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltRelease1') }}
          </figcaption>
        </div>

        <div
          class="w-full mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcRelease2)"
        >
          <img
            :src="imageSrcRelease2"
            :alt="$t('imageAltRelease2')"
            class="w-full object-cover rounded-lg"
          />
          <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltRelease2') }}
          </figcaption>
        </div>
      </div>
      <!-- Video rilascio -->
      <div class="text-center mt-8">
        <button
          @click="showVideoModal = true"
          class="bg-custom-blue-lobster text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
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
      <div class="relative w-3/4 max-w-3xl">
        <img
          :src="selectedImage"
          alt="Immagine ingrandita"
          class="w-full h-auto rounded-lg border-4 border-white"
        />
        <button
          @click="closeImageModal"
          class="absolute top-2 right-2 bg-white opacity-60 text-black rounded-full py-1 px-2 shadow-md hover:bg-gray-500 hover:text-white transition duration-200"
        >
          ✕
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue'
import LobsterStages from '@/pages/LobsterStages.vue'
import imageSrcCismar1 from '@/assets/images/fotoDefault.jpg'
import imageSrcLobster from '@/assets/images/fotoDefault.jpg'
import imageSrcTraining1 from '@/assets/images/fotoDefault.jpg'
import imageSrcTraining2 from '@/assets/images/fotoDefault.jpg'
import imageSrcTraining3 from '@/assets/images/fotoDefault.jpg'
import imageSrcRelease1 from '@/assets/images/fotoDefault.jpg'
import imageSrcRelease2 from '@/assets/images/fotoDefault.jpg'

export default {
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

    return {
      showVideoModal,
      showImageModal,
      selectedImage,
      imageSrcCismar1,
      imageSrcLobster,
      imageSrcTraining1,
      imageSrcTraining2,
      imageSrcTraining3,
      imageSrcRelease1,
      imageSrcRelease2,
      openModal,
      closeImageModal,
    }
  },
}
</script>

<style scoped>
/* .image-container {
  width: 300px;
  height: auto;
  overflow: hidden;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.image-container:hover {
  transform: scale(1.05);
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
} */
</style>
