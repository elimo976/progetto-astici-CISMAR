<template>
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
        <p>{{ $t('geneticsText4') }}</p>
        <br />
        <p>{{ $t('geneticsText5') }}</p>
        <br />
        <p>{{ $t('geneticsText6') }}</p>
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

import imageSrcTraining4 from '@/assets/images/labwork.jpg'

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
      imageSrcTraining4,
      openModal,
      closeImageModal,
    }
  },
})
</script>

<style scoped></style>
