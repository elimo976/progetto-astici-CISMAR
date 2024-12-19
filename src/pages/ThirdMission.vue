<template>
  <img
    :src="imageSrcThirdMission1"
    :alt="$t('imageAltCismar0')"
    class="w-full object-cover rounded-lg shadow-xl"
  />
  <main class="w-full flex-grow bg-gray-50 p-16 md:px-24 md:py-12 lg:py-8 lg:px-36 lg:pb-12">
    <section class="space-y-12">
      <!-- Contenitore per il testo e le immagini -->
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <!-- Testo con interruzioni di paragrafo -->
        <div
          class="text-base text-justify lg:text-lg text-gray-700 leading-relaxed space-y-6 flex-1 pr-10"
        >
          <!-- Titolo principale -->
          <h1 class="text-3xl lg:text-4xl text-custom-blue-title text-center mb-10">
            {{ $t('thirdMissionTitle') }}
          </h1>
          <div v-html="sanitizedThirdMissionText"></div>
        </div>

        <!-- Immagini verticali a destra -->
        <div class="flex-shrink-0 space-y-6 pt-14">
          <!-- Immagine verticale 1 -->
          <img
            src="@/assets/images/bent.jpeg"
            alt="Immagine Bent"
            class="w-full max-w-sm lg:max-w-48 rounded-lg shadow-lg"
          />
          <!-- Immagine verticale 2 -->
          <img
            src="@/assets/images/bent3.jpeg"
            alt="Immagine Bent 3"
            class="w-full max-w-sm lg:max-w-48 rounded-lg shadow-lg"
          />
        </div>
      </div>

      <!-- Loghi con separatori centrati sotto il testo -->
      <div
        class="mt-4 flex flex-wrap justify-center items-center gap-6 px-4 lg:flex-nowrap lg:h-32"
      >
        <!-- Logo Unitus -->
        <img
          src="@/assets/loghi/logo-unitus.png"
          alt="Logo Unitus"
          class="h-16 lg:h-full object-contain max-w-[100px] md:max-w-[30%]"
        />

        <!-- Linea di separazione -->
        <div class="hidden lg:block h-4/5 w-px bg-gray-400"></div>

        <!-- Logo Tecnopolo -->
        <img
          src="@/assets/loghi/logo-tecnopolo.png"
          alt="Logo Tecnopolo"
          class="h-16 lg:h-full object-contain max-w-[100px] md:max-w-[30%]"
        />

        <!-- Linea di separazione -->
        <div class="hidden lg:block h-4/5 w-px bg-gray-400"></div>

        <!-- Logo Cismar -->
        <img
          src="@/assets/loghi/logo-cismar.png"
          alt="Logo Cismar"
          class="h-16 lg:h-full object-contain max-w-[100px] md:max-w-[30%]"
        />
      </div>
    </section>
    <ScrollTopButton />
  </main>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DOMPurify from 'dompurify'
import imageSrcThirdMission1 from '@/assets/images/didattica-rit.jpg'

export default defineComponent({
  setup() {
    const { t } = useI18n() // Accedi alla funzione di traduzione tramite useI18n

    // Calcola e sanitizza il testo dinamico
    const sanitizedThirdMissionText = computed(() => {
      const rawHtml = t('thirdMissionText') // Usa 't' per ottenere la traduzione
      return DOMPurify.sanitize(rawHtml)
    })

    return {
      imageSrcThirdMission1,
      sanitizedThirdMissionText,
    }
  },
})
</script>

<style scoped>
/* Puoi aggiungere altre personalizzazioni per l'immagine e il layout se necessario */
</style>
