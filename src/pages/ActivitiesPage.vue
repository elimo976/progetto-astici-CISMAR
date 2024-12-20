<template>
  <img
    :src="imageSrcActivitiesBanner"
    :alt="$t('activitiesAltActivitiesBanner')"
    class="w-full object-cover shadow-xl"
  />
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-custom-blue-lobster text-4xl font-semibold my-5 text-center">
        {{ $t('activitiesTitle') }}
      </h1>

      <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

      <div class="max-w-[44rem] mx-auto">
        <p>{{ $t('activitiesText1') }}</p>
        <br />
        <p>{{ $t('activitiesText2') }}</p>
      </div>

      <div class="max-w-[44rem] mx-auto">
        <p>
          <span>{{ $t('activitiesTextBold1') }}</span> {{ $t('activitiesText3') }}
        </p>

        <div class="max-w-[42rem] mx-auto">
          <figure
            class="md:w-2/5 sm:w-3/5 xs:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            @click="openModal(imageSrcActivities1)"
          >
            <div class="w-full aspect-square rounded-md overflow-hidden shadow-xl">
              <img
                :src="imageSrcActivities1"
                :alt="$t('imageAltActivities1')"
                class="w-full h-full object-cover"
              />
            </div>
            <figcaption class="mt-4 text-sm md:text-base text-gray-600 text-center">
              {{ $t('imageAltActivities1') }}
            </figcaption>
          </figure>
        </div>

        <p>
          <span>{{ $t('activitiesTextBold2') }}</span
          >{{ $t('activitiesText4') }}
        </p>
        <br />
        <p>
          <span>{{ $t('activitiesTextBold3') }}</span
          >{{ $t('activitiesText5') }}
        </p>
      </div>

      <!-- Video estratto saline -->
      <div class="max-w-[44rem] mx-auto">
        <h2 class="text-custom-blue-lobster text-2xl font-semibold my-10 text-center">
          {{ $t('activitiesVideoTitle') }}
        </h2>
        <video
          ref="videoPlayer"
          class="w-full h-auto rounded-md"
          controls
          playsinline
          preload="auto"
          poster="@/assets/images/estratto-filmato-saline-low.jpg"
        >
          <source src="@/assets/video/estratto-filmato-saline-low.mp4" type="video/mp4" />
          Il tuo browser non supporta la riproduzione di video.
        </video>
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
import { ref, defineComponent } from 'vue'

import imageSrcActivitiesBanner from '@/assets/images/bannerActivities.jpg'
import imageSrcActivities1 from '@/assets/images/asticiEsploratori.jpg'

export default defineComponent({
  name: 'ActivitiesPage',
  setup() {
    const showImageModal = ref(false)
    const selectedImage = ref('')
    const videoPlayer = ref<HTMLVideoElement | null>(null)

    const openModal = (imageSrc: string) => {
      selectedImage.value = imageSrc
      showImageModal.value = true
    }

    const closeImageModal = () => {
      showImageModal.value = false
      selectedImage.value = ''
    }

    return {
      showImageModal,
      selectedImage,
      imageSrcActivitiesBanner,
      imageSrcActivities1,
      videoPlayer,
      openModal,
      closeImageModal,
    }
  },
})
</script>

<style scoped></style>
