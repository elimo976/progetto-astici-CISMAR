<template>
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-custom-blue-lobster text-4xl font-semibold mt-5 mb-8 text-center">
        {{ $t('projectsTitle') }}
      </h1>

      <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

      <div class="max-w-[42rem] mx-auto mb-5">
        <p>{{ $t('projectsIntro') }}</p>
      </div>

      <!-- PRIN -->
      <div class="max-w-[42rem] mx-auto mb-5">
        <div
          class="flex md:justify-between md:flex-row flex-col md:items-start items-center mb-3 pr-3"
        >
          <h3 class="font-bold text-custom-blue-lobster mb-3">{{ $t('projectsHeading1') }}</h3>
          <img
            src="@/assets/loghi/prinLogo.png"
            alt="Logo PRIN"
            class="w-auto h-14"
            aria-label="logo PRIN"
          />
        </div>
        <p class="mb-2">{{ $t('projectsText1') }}</p>
      </div>

      <!-- FEAMP -->
      <div class="max-w-[42rem] mx-auto">
        <div
          class="flex md:justify-between md:flex-row flex-col md:items-start items-center mb-3 pr-3"
        >
          <h3 class="font-bold mb-3 md:mt-4 text-custom-blue-lobster">
            {{ $t('projectsHeading2') }}
          </h3>
          <img
            src="@/assets/loghi/feampLogo.png"
            alt="Logo FEAMP"
            class="w-auto h-20"
            aria-label="Logo FEAMP"
          />
        </div>
        <p>{{ $t('projectsText2') }}</p>
        <div class="max-w-[42rem] mx-auto mt-4">
          <ul>
            <li>
              <strong>{{ $t('projectsList1bold') }}</strong> {{ $t('projectsList1') }}
              <p class="mt-3">
                <a
                  href="https://www.unitus.it/wp-content/uploads/2023/11/DEB_RICERCA_PROGETTO_Sito-web-healthy-stocks.pdf"
                  class="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ $t('projectsList1link') }}
                </a>
              </p>
            </li>
            <figure
              class="md:w-2/5 sm:w-3/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              @click="openModal(imageSrcProjects1)"
            >
              <div class="w-full aspect-[3/4] overflow-hidden shadow-xl">
                <img
                  :src="imageSrcProjects1"
                  :alt="$t('imageAltProjects1')"
                  class="w-full h-full object-cover border-4 border-white rounded-lg"
                  aria-label="$t('imageAltProjects1')"
                />
              </div>
              <figcaption class="mt-4 text-sm md:text-base text-gray-600 text-center">
                {{ $t('imageAltProjects1') }}
              </figcaption>
            </figure>

            <li>
              <strong>{{ $t('projectsList2bold') }}</strong> {{ $t('projectsList2') }}
              <br />
              <p class="mt-3 mb-5">
                <a
                  href="https://www.unitus.it/wp-content/uploads/2023/08/Comunicato-sito-web-DEB_FEAMP-Ripopolamento.pdf"
                  class="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ $t('projectsList2link') }}
                </a>
              </p>
            </li>

            <li>
              <strong>{{ $t('projectsList3bold') }}</strong> {{ $t('projectsList3') }}
            </li>
          </ul>
        </div>
      </div>

      <!-- CENTRO BIODIVERSITA -->
      <div class="max-w-[42rem] mx-auto">
        <div
          class="flex md:justify-between md:flex-row flex-col md:items-start items-center mt-6 mb-3 mr-5"
        >
          <h3 class="font-bold my-5 md:my-0 text-custom-blue-lobster">
            {{ $t('projectsHeading3') }}
          </h3>
          <img
            src="@/assets/loghi/centroBiodivLogo.png"
            alt="Logo National Biodiversity Future Center"
            class="w-auto mb-2 h-14"
            aria-label="Logo National Biodiversity Future Center"
          />
        </div>
        <p>{{ $t('projectsText3') }}</p>
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
import imageSrcProjects1 from '@/assets/images/posterFeamp.jpg'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'ProjectsPage',
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
        { name: 'description', content: t('pageDescriptionProjects') },
        { property: 'og:title', content: t('ogTitleProjects') },
        { property: 'og:description', content: t('ogDescriptionProjects') },
        { name: 'keywords', content: t('keywordsProjects') },
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
      imageSrcProjects1,
      openModal,
      closeImageModal,
    }
  },
})
</script>

<style scoped></style>
