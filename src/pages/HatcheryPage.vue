<template>
  <!-- LobsterStages Component -->
  <div class="text-center border-y-4 shadow-lg lg:px-6 px-8 bg-custom-beige">
    <LobsterStages />
  </div>
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <!-- Sezione 2 -->
      <div class="mb-10">
        <h1 class="text-custom-blue-lobster text-3xl font-semibold my-5 text-center">
          {{ $t('titleLobster') }}
        </h1>

        <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

        <p class="mb-4 max-w-[44rem] mx-auto xs:px-4">{{ $t('contentLobster1') }}</p>
        <!-- Immagine 1 sezione 2 -->
        <figure
          class="md:w-1/3 sm:w-2/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcLobster1)"
        >
          <img
            :src="imageSrcLobster1"
            :alt="$t('imageAltLobster1')"
            class="aspect-square lg:w-4/5 w-full object-cover rounded-lg shadow-xl"
            aria-label="$t('imageAltLobster1')"
          />
          <figcaption class="mt-4 lg:mr-20 pr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltLobster1') }}
          </figcaption>
        </figure>
        <p class="mb-4 max-w-[44rem] mx-auto xs:px-4">{{ $t('contentLobster2') }}</p>
        <!-- Immagine 2 sezione 2 -->
        <figure
          class="md:w-1/3 sm:w-2/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          @click="openModal(imageSrcLobster2)"
        >
          <img
            :src="imageSrcLobster2"
            :alt="$t('imageAltLobster2')"
            class="aspect-square lg:w-4/5 w-full object-cover rounded-lg shadow-xl"
            aria-label="$t('imageAltLobster2')"
          />
          <figcaption class="mt-4 lg:mr-20 pr-1 text-sm md:text-base text-gray-600 text-right">
            {{ $t('imageAltLobster2') }}
          </figcaption>
        </figure>
        <p class="mb-6 max-w-[44rem] mx-auto xs:px-4">{{ $t('contentLobster3') }}</p>
        <p class="mb-6 max-w-[44rem] mx-auto xs:px-4">{{ $t('contentLobster3bis') }}</p>
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
            aria-label="$t('closeModal')"
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
import LobsterStages from '@/pages/LobsterStages.vue'
import { useI18n } from 'vue-i18n'

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
    // Gestione dei meta tag
    onMounted(() => {
      const { t } = useI18n()

      // Meta tag dinamici per la pagina di conservazione
      const metaTags = [
        { name: 'description', content: t('pageDescriptionHatchery') },
        { property: 'og:title', content: t('ogTitleHatchery') },
        { property: 'og:description', content: t('ogDescriptionHatchery') },
        { name: 'keywords', content: t('keywordsHatchery') },
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
      imageSrcLobster1,
      imageSrcLobster2,
      openModal,
      closeImageModal,
    }
  },
})
</script>

<style scoped></style>
