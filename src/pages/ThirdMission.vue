<template>
  <img
    :src="imageSrcThirdMission1"
    :alt="$t('imageAltThirdMission0')"
    class="w-full object-cover"
    aria-label="$t('imageAltThirdMission0')"
  />
  <section class="bg-custom-beige text-gray-800 px-4 sm:px-6 lg:px-8 py-8 w-full">
    <!-- Contenitore per il testo e le immagini -->
    <div class="max-w-7xl mx-auto">
      <!-- Testo con interruzioni di paragrafo -->
      <div class="text-justify md:text-xl text-lg text-gray-700">
        <!-- Titolo principale -->
        <h1 class="text-3xl lg:text-4xl text-custom-blue-title text-center mb-10">
          {{ $t('thirdMissionTitle') }}
        </h1>
        <div class="max-w-[42rem] px-8 space-y-5 mx-auto">
          <p>{{ $t('thirdMissionText1') }}</p>

          <figure
            class="p-5 md:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcThirdMission2)"
          >
            <img
              :src="imageSrcThirdMission2"
              :alt="$t('imageAltThirdMission1')"
              class="aspect-square md:w-full w-4/5 object-cover rounded-lg shadow-xl mx-auto"
              aria-label="$t('imageAltThirdMission1')"
            />
            <figcaption
              class="mt-4 md:mr-1 sm:mr-16 xs:mr-16 text-sm md:text-base text-gray-600 text-right"
            >
              {{ $t('imageAltThirdMission1') }}
            </figcaption>
          </figure>

          <p>{{ $t('thirdMissionText2') }}</p>

          <p>{{ $t('thirdMissionText3') }}</p>

          <figure
            class="p-5 md:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcThirdMission3)"
          >
            <img
              :src="imageSrcThirdMission3"
              :alt="$t('imageAltThirdMission2')"
              class="aspect-square md:w-full w-4/5 object-cover rounded-lg shadow-xl mx-auto"
              aria-label="$t('imageAltThirdMission2')"
            />
            <figcaption
              class="mt-4 md:mr-1 sm:mr-16 xs:mr-16 text-sm md:text-base text-gray-600 text-right"
            >
              {{ $t('imageAltThirdMission2') }}
            </figcaption>
          </figure>

          <p>{{ $t('thirdMissionText4') }}</p>
          <p>{{ $t('thirdMissionText5') }}</p>
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
            type="button"
            aria-label="$t('closeModal')"
          >
            ✕
          </button>
        </div>
      </div>
    </div>

    <!-- Loghi con separatori centrati sotto il testo -->
    <div class="mt-14 flex flex-wrap justify-center items-center gap-6 px-4 lg:flex-nowrap lg:h-32">
      <!-- Logo Unitus -->
      <img
        src="@/assets/loghi/logo-unitus.png"
        alt="Logo Unitus"
        class="h-16 lg:h-full object-contain max-w-[100px] md:max-w-[30%]"
        aria-label="Logo Unitus"
      />

      <!-- Linea di separazione -->
      <div class="hidden lg:block h-4/5 w-px bg-gray-400"></div>

      <!-- Logo Tecnopolo -->
      <img
        src="@/assets/loghi/logo-tecnopolo.png"
        alt="Logo Technopole"
        class="h-16 lg:h-full object-contain max-w-[100px] md:max-w-[30%]"
        aria-label="Logo Technopole"
      />

      <!-- Linea di separazione -->
      <div class="hidden lg:block h-4/5 w-px bg-gray-400"></div>

      <!-- Logo Cismar -->
      <img
        src="@/assets/loghi/logo-cismar.png"
        alt="Logo Cismar"
        class="h-16 lg:h-full object-contain max-w-[100px] md:max-w-[30%]"
        aria-label="Logo Cismar"
      />
    </div>
  </section>
  <ScrollTopButton />
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import imageSrcThirdMission1 from '@/assets/images/didattica-rit.jpg'
import imageSrcThirdMission2 from '@/assets/images/retiVuote.jpg'
import imageSrcThirdMission3 from '@/assets/images/rilascioAsticeTrdM.jpg'
import { useI18n } from 'vue-i18n'

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
        { name: 'description', content: t('pageDescriptionThirdMission') },
        { property: 'og:title', content: t('ogTitleThirdMission') },
        { property: 'og:description', content: t('ogDescriptionThirdMission') },
        { name: 'keywords', content: t('keywordsThirdMission') },
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
      imageSrcThirdMission1,
      imageSrcThirdMission2,
      imageSrcThirdMission3,
      showImageModal,
      selectedImage,
      openModal,
      closeImageModal,
    }
  },
})
</script>

<style scoped>
/* Puoi aggiungere altre personalizzazioni per l'immagine e il layout se necessario */
</style>
