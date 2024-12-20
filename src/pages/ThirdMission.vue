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
          class="text-base text-justify md:text-xl text-lg text-gray-700 leading-relaxed space-y-6 flex-1 pr-10"
        >
          <!-- Titolo principale -->
          <h1 class="text-3xl lg:text-4xl text-custom-blue-title text-center mb-10">
            {{ $t('thirdMissionTitle') }}
          </h1>
          <div class="max-w-[42rem] space-y-5">
            <p>{{ $t('thirdMissionText1') }}</p>

            <figure
              class="p-5 md:w-3/5 mx-auto my-12 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              @click="openModal(imageSrcThirdMission2)"
            >
              <img
                :src="imageSrcThirdMission2"
                :alt="$t('imageAltThirdMission1')"
                class="aspect-square w-full object-cover rounded-lg shadow-xl"
              />
              <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
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
                class="aspect-square w-full object-cover rounded-lg shadow-xl"
              />
              <figcaption class="mt-4 mr-1 text-sm md:text-base text-gray-600 text-right">
                {{ $t('imageAltThirdMission2') }}
              </figcaption>
            </figure>

            <p>{{ $t('thirdMissionText4') }}</p>
          </div>
        </div>

        <!-- Modal per immagine grande -->
        <div
          v-if="showImageModal"
          class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          @click="closeImageModal"
        >
          <div class="relative w-3/4 max-w-3xl px-32 py-12 xs:px-3 xs:py-3">
            <img
              :src="selectedImage"
              alt="Immagine ingrandita"
              class="w-full h-auto rounded-lg border-4 border-white"
            />
            <button
              @click="closeImageModal"
              class="absolute top-14 right-35 xs:top-5 xs:right-5 bg-white opacity-60 text-black rounded-full py-0 px-2 shadow-md hover:bg-gray-500 hover:text-white transition duration-200"
            >
              ✕
            </button>
          </div>
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
import { ref, defineComponent } from 'vue'
import imageSrcThirdMission1 from '@/assets/images/didattica-rit.jpg'
import imageSrcThirdMission2 from '@/assets/images/bent.jpeg'
import imageSrcThirdMission3 from '@/assets/images/bent3.jpeg'

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
