<template>
  <img
    :src="imageSrcRelease0"
    :alt="$t('imageAltRelease0')"
    class="w-full object-cover rounded-lg shadow-xl"
  />
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <!-- Sezione 4 -->
      <div>
        <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
          {{ $t('titleRelease') }}
        </h1>

        <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

        <div class="max-w-[44rem] mx-auto xs:px-4">
          <p class="mb-4">{{ $t('contentRelease1') }}</p>
          <p class="mb-4">{{ $t('contentRelease2') }}</p>
          <p class="mb-6">{{ $t('contentRelease3') }}</p>
        </div>
        <!-- Immagini sezione 4 -->
        <div
          class="grid grid-cols-1 lg:max-w-[42rem] md:max-w-[48rem] mx-auto sm:grid-cols-2 gap-6 xs:px-4"
        >
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
import { ref, defineComponent, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

import imageSrcRelease0 from '@/assets/images/asticeRilascio-rit.jpg'
import imageSrcRelease1 from '@/assets/images/asticiniProvette.jpg'
import imageSrcRelease2 from '@/assets/images/rilascioAstice.jpg'

export default defineComponent({
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

    // Gestione dei meta tag
    onMounted(() => {
      const { t } = useI18n()

      // Meta tag dinamici per la pagina di conservazione
      const metaTags = [
        { name: 'description', content: t('pageDescriptionRelease') },
        { property: 'og:title', content: t('ogTitleRelease') },
        { property: 'og:description', content: t('ogDescriptionRelease') },
        { name: 'keywords', content: t('keywordsRelease') },
        { name: 'language', content: 'it' }, // Lingua corrente
      ]

      // Aggiungi o modifica i meta tag nel head
      metaTags.forEach(({ name, property, content }) => {
        const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
        let meta = document.head.querySelector(selector) as HTMLMetaElement
        if (!meta) {
          meta = document.createElement('meta')
          if (name) meta.setAttribute('name', name)
          if (property) meta.setAttribute('property', property)
          document.head.appendChild(meta)
        }
        meta.setAttribute('content', content)
      })
    })

    return {
      showVideoModal,
      showImageModal,
      selectedImage,
      imageSrcRelease0,
      imageSrcRelease1,
      imageSrcRelease2,
      openModal,
      closeImageModal,
    }
  },
})
</script>

<style scoped></style>
