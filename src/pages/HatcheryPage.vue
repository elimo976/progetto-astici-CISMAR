<template>
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
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
import LobsterStages from '@/pages/LobsterStages.vue'

import imageSrcLobster1 from '@/assets/images/lobsterStage1.jpg'
import imageSrcLobster2 from '@/assets/images/uova.jpg'

export default defineComponent({
  name: 'ConservationPage',
  components: { LobsterStages },
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
      imageSrcLobster1,
      imageSrcLobster2,
      openModal,
      closeImageModal,
    }
  },
})
</script>

<style scoped></style>
