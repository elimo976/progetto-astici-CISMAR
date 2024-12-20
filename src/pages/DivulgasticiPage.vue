<template>
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
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import imageSrcResearch0 from '@/assets/images/asticiniBent-rit.jpg'

export default defineComponent({
  name: 'ResearchPage',
  setup() {
    return {
      imageSrcResearch0,
    }
  },
})
</script>

<style scoped></style>
