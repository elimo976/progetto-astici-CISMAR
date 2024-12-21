<template>
  <div class="relative w-full">
    <!-- Immagine del banner -->
    <img
      :src="imageSrcGeneticsBanner"
      :alt="$t('imageAltGeneticsBanner')"
      class="w-full object-cover rounded-lg shadow-xl"
    />

    <!-- Attribuzione nell'angolo in basso a destra -->
    <div
      class="absolute bottom-1 md:right-1 right-0 bg-gray-300 bg-opacity-40 text-xs scale-75 lg:scale-100 text-gray-700 px-2 py-1 rounded-lg"
    >
      <p>
        Image by
        <a
          href="https://pixabay.com/users/qimono-1962238/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1811955"
          class="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arek Socha
        </a>
        from
        <a
          href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1811955"
          class="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixabay
        </a>
      </p>
    </div>
  </div>

  <section class="bg-custom-beige text-gray-800 md:px-8 px-12 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-custom-blue-lobster text-4xl font-semibold my-5 text-center">
        {{ $t('geneticsTitle') }}
      </h1>

      <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

      <div class="max-w-[44rem] mx-auto my-10">
        <p>{{ $t('geneticsText1') }}</p>
        <br />
        <p>{{ $t('geneticsText2') }}</p>
        <br />
        <p>{{ $t('geneticsText3') }}</p>
        <br />

        <!-- Immagine ricercatore -->
        <figure
          class="w-3/5 xs:w-4/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcGenetics1)"
        >
          <img
            :src="imageSrcGenetics1"
            :alt="$t('imageAltGenetics1')"
            class="aspect-square w-full object-cover rounded-lg shadow-xl"
          />
          <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltGenetics1') }}
          </figcaption>
        </figure>
        <p>{{ $t('geneticsText4') }}</p>
        <br />
        <p>{{ $t('geneticsText5') }}</p>
        <br />
        <p>{{ $t('geneticsText6') }}</p>
      </div>

      <!-- Modal per immagine ingrandita -->
      <div
        v-if="showImageModal"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        @click="closeImageModal"
      >
        <!-- Contenitore dinamico per adattarsi ai dispositivi -->
        <div
          class="relative w-3/4 max-w-3xl px-32 py-12 sm:w-2/3 sm:px-8 sm:py-8 xs:w-4/5 xs:px-3 xs:py-3"
        >
          <img
            :src="selectedImage"
            alt="Immagine ingrandita"
            class="w-full h-auto rounded-lg border-4 border-white"
          />
          <button
            @click="closeImageModal"
            class="absolute top-14 right-35 sm:top-8 sm:right-8 md:top-10 md:right-10 xs:top-5 xs:right-5 bg-white opacity-60 text-black rounded-full py-0 px-2 shadow-md hover:bg-gray-500 hover:text-white transition duration-200"
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

import imageSrcGeneticsBanner from '@/assets/images/bannerGenetics.jpg'
import imageSrcGenetics1 from '@/assets/images/labwork.jpg'

export default defineComponent({
  name: 'GeneticsPage',

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
      imageSrcGeneticsBanner,
      imageSrcGenetics1,
      openModal,
      closeImageModal,
    }
  },
})
</script>

<style scoped></style>
