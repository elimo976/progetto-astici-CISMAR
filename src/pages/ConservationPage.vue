<template>
  <div class="conservation-page">
    <h1>{{ $t('titleConservation') }}</h1>
    <p>{{ $t('introConservation') }}</p>

    <!-- Sezione 1 -->
    <div class="section">
      <h2>{{ $t('headingConservation1') }}</h2>
      <p v-html="$t('contentConservation1')"></p>
      <img :src="imageSrcConservation1" :alt="$t('imageAltConservation1')" />
    </div>

    <!-- Sezione 2 -->
    <div class="section">
      <h2>{{ $t('headingConservation2') }}</h2>
      <p v-html="$t('contentConservation2')"></p>
      <img :src="imageSrcConservation2" :alt="$t('imageAltConservation2')" />
    </div>

    <!-- Sezione 3 -->
    <div class="section">
      <h2>{{ $t('headingConservation3') }}</h2>
      <p v-html="$t('contentConservation3')"></p>
      <img :src="imageSrcConservation3" :alt="$t('imageAltConservation3')" />
    </div>

    <!-- Sezione 4 -->
    <div class="section">
      <h2>{{ $t('headingConservation4') }}</h2>
      <p v-html="$t('contentConservation4')"></p>
      <img :src="imageSrcConservation4" :alt="$t('imageAltConservation4')" />
    </div>

    <!-- Link al video del rilascio -->
    <div class="text-center mt-8">
      <button
        @click="showVideoModal = true"
        class="bg-custom-blue-lobster text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
      >
        {{ $t('watchVideoConservation') }}
      </button>
    </div>

    <!-- Modal per il video -->
    <div
      v-if="showVideoModal"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    >
      <div class="relative w-11/12 max-w-3xl bg-black rounded-lg shadow-lg">
        <video
          src="@/assets/video/video-hero-banner-extended-low.mp4"
          controls
          autoplay
          muted
          class="w-full h-auto rounded-lg"
        ></video>
        <button
          @click="showVideoModal = false"
          class="absolute top-3 right-3 bg-white opacity-60 text-black rounded-full py-1 px-2 shadow-md hover:bg-gray-500 hover:text-white transition duration-200"
        >
          ✕
        </button>
      </div>
    </div>

    <div class="link">
      <p>
        {{ $t('linkDiscoverConservation') }}
        <a :href="`#${$t('researchConservation')}`">{{ $t('researchConservation') }}</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import imageSrcConservation1 from '@/assets/images/fotoDefault.jpg'
import imageSrcConservation2 from '@/assets/images/fotoDefault.jpg'
import imageSrcConservation3 from '@/assets/images/fotoDefault.jpg'
import imageSrcConservation4 from '@/assets/images/fotoDefault.jpg'

export default {
  name: 'ConservationPage',
  setup() {
    const showVideoModal = ref(false) // Dichiarazione corretta del ref per la modale

    return {
      showVideoModal,
      imageSrcConservation1,
      imageSrcConservation2,
      imageSrcConservation3,
      imageSrcConservation4,
    }
  },
}
</script>

<style scoped>
.conservation-page {
  padding: 20px;
}

.section {
  margin-bottom: 30px;
}

.section img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}

.video-section {
  margin-top: 20px;
}

.link {
  margin-top: 30px;
}
</style>
