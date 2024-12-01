<template>
  <main class="w-full flex-grow bg-gray-50 p-4 md:p-8 lg:p-8">
    <section class="space-y-12">
      <!-- Loghi con separatori centrati sopra il titolo -->
      <div class="mt-4 flex justify-center items-center gap-10">
        <!-- Logo Unitus, leggermente più grande -->
        <img
          src="@/assets/loghi/logo-unitus.png"
          alt="Logo Unitus"
          class="h-25 lg:h-29 object-contain"
        />

        <!-- Separatore verticale tra Unitus e Tecnopolo -->
        <div class="h-24 w-px bg-gray-400"></div>

        <!-- Logo Tecnopolo -->
        <img
          src="@/assets/loghi/logo-tecnopolo.png"
          alt="Logo Tecnopolo"
          class="h-24 lg:h-28 object-contain"
        />

        <!-- Separatore verticale tra Tecnopolo e Cismar -->
        <div class="h-24 w-px bg-gray-400"></div>

        <!-- Logo Cismar, ridotto -->
        <img
          src="@/assets/loghi/logo-cismar.png"
          alt="Logo Cismar"
          class="h-10 lg:h-12 object-contain"
        />
      </div>

      <!-- Titolo principale -->
      <h2 class="text-3xl lg:text-4xl font-playfair text-custom-blue-title text-center mb-10">
        {{ $t('thirdMissionTitle') }}
      </h2>

      <!-- Testo con interruzioni di paragrafo -->
      <div
        class="text-base lg:text-lg text-gray-700 leading-relaxed space-y-6"
        v-html="sanitizedThirdMissionText"
      ></div>
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
      // Sanitizzazione del contenuto HTML proveniente da $t('thirdMissionText')
      const rawHtml = this.$t('thirdMissionText') as string
      return DOMPurify.sanitize(rawHtml)
    },
  },
})
</script>
