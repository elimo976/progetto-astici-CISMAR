<template>
  <img
    :src="imageSrcResearch0"
    :alt="$t('imageAltResearch0')"
    class="w-full object-cover rounded-lg shadow-xl"
  />
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-custom-blue-lobster text-4xl font-semibold my-5 text-center">
        {{ $t('researchTitle') }}
      </h1>

      <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

      <!-- Blocco di testo -->
      <div class="max-w-[44rem] mx-auto">
        <p>{{ $t('researchText1') }}</p>
        <br />
        <p>{{ $t('researchText2') }}</p>
        <br />
        <p>{{ $t('researchText3') }}</p>
        <br />
      </div>

      <!-- Blocco di elenco puntato -->
      <div class="max-w-[44rem] mx-auto">
        <ul>
          <li>
            {{ $t('researchList1') }}
            (<router-link to="/hatchery" class="text-blue-500 hover:underline">{{
              $t('researchLinkText1')
            }}</router-link
            >)
          </li>
          <figure
            class="md:w-2/5 sm:w-3/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcResearch1)"
          >
            <div class="w-full aspect-square rounded-full overflow-hidden shadow-xl">
              <img
                :src="imageSrcResearch1"
                :alt="$t('imageAltResearch1')"
                class="w-full h-full object-cover"
              />
            </div>
            <figcaption class="mt-4 text-sm md:text-base text-gray-600 text-center">
              {{ $t('imageAltResearch1') }}
            </figcaption>
          </figure>

          <li>{{ $t('researchList2') }}</li>
          <figure
            class="md:w-2/5 sm:w-3/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcResearch2)"
          >
            <div class="w-full aspect-square rounded-full overflow-hidden shadow-xl">
              <img
                :src="imageSrcResearch2"
                :alt="$t('imageAltResearch2')"
                class="w-full h-full object-cover"
              />
            </div>
            <figcaption class="mt-4 text-sm md:text-base text-gray-600 text-center">
              {{ $t('imageAltResearch2') }}
            </figcaption>
          </figure>

          <li>{{ $t('researchList3') }}</li>
          <figure
            class="md:w-2/5 sm:w-3/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcResearch3)"
          >
            <div class="w-full aspect-square rounded-full overflow-hidden shadow-xl">
              <img
                :src="imageSrcResearch3"
                :alt="$t('imageAltResearch3')"
                class="w-full h-full object-cover"
              />
            </div>
            <figcaption class="mt-4 text-sm md:text-base text-gray-600 text-center">
              {{ $t('imageAltResearch3') }}
            </figcaption>
          </figure>
        </ul>
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

import imageSrcResearch0 from '@/assets/images/asticiniBent-rit.jpg'
import imageSrcResearch1 from '@/assets/images/asticiBentonici.jpg'
import imageSrcResearch2 from '@/assets/images/asticeRilasciato.jpg'
import imageSrcResearch3 from '@/assets/images/asticeDNA.jpg'

export default defineComponent({
  name: 'ResearchPage',
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
      imageSrcResearch0,
      imageSrcResearch1,
      imageSrcResearch2,
      imageSrcResearch3,
      openModal,
      closeImageModal,
    }
  },
})
</script>

<style scoped></style>
