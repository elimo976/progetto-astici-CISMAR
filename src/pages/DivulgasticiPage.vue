<template>
  <img
    :src="imageSrcDivulgBanner"
    :alt="$t('imageAltDivulgBanner')"
    class="w-full object-cover border-t border-gray-100 shadow-xl"
    aria-label="$t('imageAltDivulgBanner')"
  />
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-custom-blue-lobster text-4xl font-semibold my-5 text-center">
        {{ $t('divulgTitle') }}
      </h1>

      <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

      <!-- Blocco di testo -->
      <div class="max-w-[44rem] mx-auto">
        <p v-html="$t('divulgText1')"></p>
        <br />
        <p>{{ $t('divulgText2') }}</p>
        <br />
        <p>{{ $t('divulgText3') }}</p>
        <br />
        <p>{{ $t('divulgText4') }}</p>
        <br />
        <a
          href="https://www.unitus.it/dipartimenti/deb/impatto-sociale-deb/progetti-di-terza-missione/divulgastici"
          target="_blank"
          class="text-blue-500"
        >
          {{ $t('divulgLinkDeb') }}
        </a>
      </div>

      <!-- Logo Technopole -->
      <div class="mt-12 flex justify-center">
        <img
          src="@/assets/loghi/logo-tecnopolo.png"
          alt="{{ $t('divulgAltLogoTechnopolo')}}"
          class="h-32 object-contain"
          aria-label="{{ $t('divulgAltLogoTechnopolo')}}"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import imageSrcResearch0 from '@/assets/images/asticiniBent-rit.jpg'
import imageSrcDivulgBanner from '@/assets/images/bannerDivulg.jpg'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'ResearchPage',
  setup() {
    // Gestione dei meta tag
    onMounted(() => {
      const { t } = useI18n()

      // Meta tag dinamici per la pagina di conservazione
      const metaTags = [
        { name: 'description', content: t('pageDescriptionDivulgastici') },
        { property: 'og:title', content: t('ogTitleDivulgastici') },
        { property: 'og:description', content: t('ogDescriptionDivulgastici') },
        { name: 'keywords', content: t('keywordsDivulgastici') },
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
      imageSrcResearch0,
      imageSrcDivulgBanner,
    }
  },
})
</script>

<style scoped></style>
