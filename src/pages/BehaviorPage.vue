<template>
  <img
    :src="imageSrcBehavior0"
    :alt="$t('imageAltBehavior0')"
    class="w-full object-cover rounded-lg shadow-xl"
  />
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-custom-blue-lobster text-4xl font-semibold my-5 text-center">
        {{ $t('behaviorTitle') }}
      </h1>

      <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

      <div class="max-w-[44rem] mx-auto">
        <p>{{ $t('behaviorText1') }}</p>
        <br />
        <p>{{ $t('behaviorText2') }}</p>
      </div>

      <div class="max-w-[42rem] mx-auto">
        <figure
          class="md:w-2/5 sm:w-3/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcBehavior1)"
        >
          <div class="w-full aspect-square rounded-full overflow-hidden shadow-xl">
            <img
              :src="imageSrcBehavior1"
              :alt="$t('imageAltBehavior1')"
              class="w-full h-full object-cover"
            />
          </div>
          <figcaption class="mt-4 text-sm md:text-base text-gray-600 text-center">
            {{ $t('imageAltBehavior1') }}
          </figcaption>
        </figure>
      </div>

      <div class="max-w-[44rem] mx-auto">
        <p>{{ $t('behaviorText3') }}</p>
        <br />
        <p>{{ $t('behaviorText4') }}</p>
        <br />
        <p>{{ $t('behaviorText5') }}</p>
      </div>

      <div class="max-w-[42rem] mx-auto">
        <figure
          class="md:w-2/5 sm:w-3/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcBehavior2)"
        >
          <div class="w-full aspect-square rounded-full overflow-hidden shadow-xl">
            <img
              :src="imageSrcBehavior2"
              :alt="$t('imageAltBehavior2')"
              class="w-full h-full object-cover"
            />
          </div>
          <figcaption class="mt-4 text-sm md:text-base text-gray-600 text-center">
            {{ $t('imageAltBehavior2') }}
          </figcaption>
        </figure>
      </div>

      <div class="max-w-[44rem] mx-auto">
        <p>{{ $t('behaviorText6') }}</p>
      </div>

      <div class="max-w-[42rem] mx-auto">
        <figure
          class="md:w-2/5 sm:w-3/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcBehavior3)"
        >
          <div class="w-full aspect-square rounded-full overflow-hidden shadow-xl">
            <img
              :src="imageSrcBehavior3"
              :alt="$t('imageAltBehavior3')"
              class="w-full h-full object-cover"
            />
          </div>
          <figcaption class="mt-4 text-sm md:text-base text-gray-600 text-center">
            {{ $t('imageAltBehavior3') }}
          </figcaption>
        </figure>
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

import imageSrcBehavior0 from '@/assets/images/asticeTana-rit.jpg'
import imageSrcBehavior1 from '@/assets/images/asticiEsploratori.jpg'
import imageSrcBehavior2 from '@/assets/images/asticeGiovane.jpg'
import imageSrcBehavior3 from '@/assets/images/giovanileAstice-rit.jpg'

export default defineComponent({
  name: 'BehaviorPage',
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
      imageSrcBehavior0,
      imageSrcBehavior1,
      imageSrcBehavior2,
      imageSrcBehavior3,
      openModal,
      closeImageModal,
    }
  },
})
</script>

<style scoped></style>
