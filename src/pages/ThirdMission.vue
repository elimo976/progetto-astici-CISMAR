<template>
  <main class="w-full flex-grow bg-gray-50 p-16 md:px-24 md:py-12 lg:py-8 lg:px-36 lg:pb-12">
    <section class="space-y-12">
      <!-- Contenitore per il testo e le immagini -->
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <!-- Testo con interruzioni di paragrafo -->
        <div
          class="text-base text-justify lg:text-lg text-gray-700 leading-relaxed space-y-6 flex-1 pr-10"
        >
          <!-- Titolo principale -->
          <h1 class="text-3xl lg:text-4xl font-playfair text-custom-blue-title text-center mb-10">
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
      <div class="mt-4 flex justify-center items-center gap-10">
        <img
          src="@/assets/loghi/logo-unitus.png"
          alt="Logo Unitus"
          class="h-25 lg:h-29 object-contain"
        />
        <div class="h-24 w-px bg-gray-400"></div>
        <img
          src="@/assets/loghi/logo-tecnopolo.png"
          alt="Logo Tecnopolo"
          class="h-24 lg:h-28 object-contain"
        />
        <div class="h-24 w-px bg-gray-400"></div>
        <img
          src="@/assets/loghi/logo-cismar.png"
          alt="Logo Cismar"
          class="h-10 lg:h-12 object-contain"
        />
      </div>
    </section>
    <ScrollTopButton />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DOMPurify from 'dompurify'

export default defineComponent({
  computed: {
    // Sanitizza il testo dinamico prima di iniettarlo nel DOM
    sanitizedThirdMissionText() {
      const rawHtml = this.$t('thirdMissionText') as string
      return DOMPurify.sanitize(rawHtml)
    },
  },
})
</script>

<style scoped>
/* Puoi aggiungere altre personalizzazioni per l'immagine e il layout se necessario */
</style>
