<template>
  <picture>
    <!-- Immagine per smartphone (predefinita) -->
    <source :srcset="imageSrcCismar0SM" media="(max-width: 767px)" />
    <!-- Immagine per tablet e desktop -->
    <source :srcset="imageSrcCismar0" media="(min-width: 768px)" />
    <img
      :src="imageSrcCismar0SM"
      :alt="$t('imageAltCismar0')"
      class="w-full object-cover rounded-lg shadow-xl"
    />
  </picture>
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <!-- Sezione 1 -->
      <div class="mb-10">
        <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
          {{ $t('titleCismar') }}
        </h1>

        <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

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
          <figcaption class="mt-4 lg:mr-20 pr-1 text-sm md:text-base text-gray-600 text-right">
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
          <figcaption class="mt-4 lg:mr-20 pr-1 text-sm md:text-base text-gray-600 text-right">
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

import imageSrcCismar0 from '@/assets/images/cismar-rit.jpg'
import imageSrcCismar0SM from '@/assets/images/cismarSM-rit.jpg'
import imageSrcCismar1 from '@/assets/images/asticeAdulto.jpg'
import imageSrcCismar2 from '@/assets/images/aquahiveLoaded.jpg'

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

    const sanitizedContentCismar2 = () => {
      // Usa una stringa come esempio del contenuto che vuoi sanificare
      const rawHtml =
        '<p>Nel caso dell’astice europeo un ostacolo iniziale importante è stato l’assenza di tecniche consolidate per l’allevamento. Essendo una specie non allevata per scopi commerciali, è stato necessario sviluppare da zero procedure e metodologie specifiche. Questo risultato è stato raggiunto grazie alle ricerche condotte dal <strong>CISMAR</strong>, il centro di eccellenza del DEB impegnato nello studio e nella conservazione dell’astice.</p>'
      return DOMPurify.sanitize(rawHtml)
    }

    return {
      showImageModal,
      selectedImage,
      imageSrcCismar0SM,
      imageSrcCismar0,
      imageSrcCismar1,
      imageSrcCismar2,
      openModal,
      closeImageModal,
      sanitizedContentCismar2,
    }
  },
})
</script>

<style scoped></style>
