<template>
  <img
    :src="imageSrcTraining0"
    :alt="$t('imageAltTraining0')"
    class="w-full object-cover shadow-xl"
  />
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <!-- Sezione 3 -->
      <div class="mb-10">
        <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
          {{ $t('titleTraining') }}
        </h1>

        <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

        <div class="max-w-[44rem] mx-auto xs:px-4">
          <p class="mb-4">{{ $t('contentTraining1') }}</p>
          <p class="mb-4">{{ $t('contentTraining2') }}</p>
        </div>
        <!-- Immagini sezione 3 -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 lg:max-w-[48rem] md:max-w-[38rem] mx-auto xs:px-4"
        >
          <figure
            class="md:w-full sm:w-4/5 xs:w-2/3 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcTraining1)"
          >
            <img
              :src="imageSrcTraining1"
              :alt="$t('imageAltTraining1')"
              class="aspect-square w-full object-cover rounded-lg shadow-xl"
            />
            <figcaption class="mt-4 text-sm text-gray-600 text-right">
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
            <figcaption class="mt-4 mr-1 text-sm text-gray-600 text-right">
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
            <figcaption class="mt-4 mr-1 text-sm text-gray-600 text-right">
              {{ $t('imageAltTraining3') }}
            </figcaption>
          </figure>
        </div>
        <p class="mb-6 max-w-[44rem] mx-auto xs:px-4">{{ $t('contentTraining3') }}</p>
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

import imageSrcTraining0 from '@/assets/images/asticeLarva-rit.jpg'
import imageSrcTraining1 from '@/assets/images/asticeGiovane.jpg'
import imageSrcTraining2 from '@/assets/images/asticeTana1.jpg'
import imageSrcTraining3 from '@/assets/images/asticeTana2.jpg'

export default defineComponent({
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

    // Gestione dei meta tag
    onMounted(() => {
      const { t } = useI18n()

      // Meta tag dinamici per la pagina di conservazione
      const metaTags = [
        { name: 'description', content: t('pageDescriptionTraining') },
        { property: 'og:title', content: t('ogTitleTraining') },
        { property: 'og:description', content: t('ogDescriptionTraining') },
        { name: 'keywords', content: t('keywordsTraining') },
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
      showImageModal,
      selectedImage,
      imageSrcTraining0,
      imageSrcTraining1,
      imageSrcTraining2,
      imageSrcTraining3,
      openModal,
      closeImageModal,
    }
  },
})
</script>

<style scoped></style>
