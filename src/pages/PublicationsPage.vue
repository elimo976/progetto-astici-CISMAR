<template>
  <section class="bg-custom-beige text-gray-800 py-8 text-left w-full">
    <div class="max-w-4xl mx-auto">
      <!-- Titolo -->
      <h1 class="text-custom-blue-lobster text-4xl font-semibold my-8 text-center">
        {{ $t('publications') }}
      </h1>
      <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

      <div class="relativemax-w-[48rem] mx-auto xs:px-8">
        <!-- Pubblicazione 0 -->
        <div class="mb-10 md:ml-12 sm:ml-0 flex items-center">
          <!-- Contenuto -->
          <div class="flex flex-col md:flex-row items-center md:items-start w-full">
            <!-- Immagine -->
            <div class="lg:w-1/5 md:w-1/4 w-1/3 md:my-3 my-6">
              <img
                src="@/assets/images/behavioralEcologySociobiology.jpg"
                alt="Applied Animal Behaviour Science"
                class="rounded-lg shadow-lg w-full w-48 object-cover aspect-square transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </div>
            <!-- Testo Pubblicazione -->
            <div class="md:ml-12 mt-4">
              <h3 class="font-semibold text-lg text-custom-blue-lobster">
                Lucon-Xiccato, T. et al. (2024)
              </h3>
              <p class="text-gray-600 max-w-[28rem]">
                Intraspecific variation in invertebrate cognition: a review.
                <em>Behavioral Ecology and Sociobiology 78</em>, 1.
              </p>
              <a
                href="https://link.springer.com/article/10.1007/s00265-023-03413-8"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:underline mt-2 block"
              >
                {{ $t('readPaper') }}
              </a>
            </div>
          </div>
        </div>
        <!-- Pubblicazione 1 -->
        <div class="mb-10 md:ml-12 sm:ml-0 flex items-center">
          <!-- Contenuto -->
          <div class="flex flex-col md:flex-row items-center md:items-start w-full">
            <!-- Immagine -->
            <div class="lg:w-1/5 md:w-1/4 w-1/3 md:my-3 my-6">
              <img
                src="@/assets/images/appliedAnimal.jpg"
                alt="Applied Animal Behaviour Science"
                class="rounded-lg shadow-lg w-full w-48 object-cover aspect-square transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </div>
            <!-- Testo Pubblicazione -->
            <div class="md:ml-12 mt-4">
              <h3 class="font-semibold text-lg text-custom-blue-lobster">
                Latini, L. et al. (2023)
              </h3>
              <p class="text-gray-600 max-w-[28rem]">
                Limited holding space reduces growth and behavioural performance in juvenile
                European lobsters. <em>Applied Animal Behaviour Science, 266</em>, 106013.
              </p>
              <a
                href="https://doi.org/10.1016/j.applanim.2023.106013"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:underline mt-2 block"
              >
                {{ $t('readPaper') }}
              </a>
            </div>
          </div>
        </div>

        <!-- Pubblicazione 2 -->
        <div class="mb-10 md:ml-12 sm:ml-0 flex items-center">
          <div class="flex flex-col md:flex-row items-center md:items-start w-full">
            <div class="lg:w-1/5 md:w-1/4 w-1/3 md:my-3 my-6">
              <img
                src="@/assets/images/rendicontiLincei.webp"
                alt="Rendiconti Lincei"
                class="rounded-lg shadow-lg w-full w-48 object-cover aspect-square transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </div>
            <div class="md:ml-12 mt-4">
              <h3 class="font-semibold text-lg text-custom-blue-lobster">
                Carere, C. et al. (2015)
              </h3>
              <p class="text-gray-600 max-w-[28rem]">
                Actions for restocking of the European lobster (<em>Homarus gammarus</em>): a case
                study on the relevance of behaviour and welfare assessment of cultured juveniles.
                <em>Rendiconti Lincei, 26</em>, 59-64.
              </p>
              <a
                href="https://doi.org/10.1007/s12210-014-0361-6"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:underline mt-2 block"
              >
                {{ $t('readPaper') }}
              </a>
            </div>
          </div>
        </div>

        <!-- Pubblicazione 3 -->
        <div class="md:ml-12 sm:ml-0 flex items-center">
          <div class="flex flex-col md:flex-row items-center md:items-start w-full">
            <div class="lg:w-1/5 md:w-1/4 w-1/3 md:my-3 my-6">
              <img
                src="@/assets/images/norwegianLobFarm.jpg"
                alt="ELCE Report"
                class="rounded-lg shadow-lg w-full w-48 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </div>
            <div class="md:ml-12 mt-4">
              <h3 class="font-semibold text-lg text-custom-blue-lobster">
                Drengstig, A. et al. (2015)
              </h3>
              <p class="text-gray-600 max-w-[28rem]">
                Current status on European lobster aquaculture in Europe. Report from the 3rd annual
                ELCE meeting, Stavanger, Norway.
              </p>
              <a
                href="https://eurolobster.svinna.is/wp-content/uploads/2014/07/ELCE_2015.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:underline mt-2 block"
              >
                {{ $t('readPaper') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'PublicationsTimeline',
  setup() {
    // Gestione dei meta tag
    onMounted(() => {
      const { t } = useI18n()

      // Meta tag dinamici per la pagina di conservazione
      const metaTags = [
        { name: 'description', content: t('pageDescriptionPublications') },
        { property: 'og:title', content: t('ogTitlePublications') },
        { property: 'og:description', content: t('ogDescriptionPublications') },
        { name: 'keywords', content: t('keywordsPublications') },
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
  },
})
</script>

<style scoped>
/* Colori personalizzati */

.text-custom-blue-lobster {
  color: #2f5881;
}
.border-custom-blue-timeline {
  border-color: #3d6c9b;
}
.bg-custom-blue-timeline {
  background-color: #003366;
}

/* Responsiveness per immagini */
img {
  display: block;
}
</style>
