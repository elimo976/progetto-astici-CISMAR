<template>
  <section class="w-full py-24 bg-custom-beige">
    <!-- Titolo della pagina -->
    <div class="text-center mb-16">
      <h1 class="text-3xl font-medium text-custom-blue-lobster">{{ $t('lobsterStages.title') }}</h1>
    </div>
    <div class="flex md:flex-col sm:flex-row justify-center w-full">
      <!-- Fasi del ciclo di vita dell'astice -->
      <div class="relative flex flex-col items-center">
        <!-- Linea orizzontale con i tondini distribuiti -->
        <div
          class="flex flex-col sm:flex-row items-center justify-between w-full md:w-4/5 lg:w-3/4 relative"
        >
          <!-- Linea orizzontale con gradiente tra i tondini -->
          <div
            class="absolute w-1 md:w-full md:h-1 lg:h-1 rounded-full"
            :style="{
              background: `linear-gradient(to right, ${phaseColors[0]}, ${phaseColors[1]}, ${phaseColors[2]}, ${phaseColors[3]})`,
            }"
          ></div>
          <!-- Linea verticale (solo per mobile) -->
          <div
            class="absolute sm:w-5 sm:h-150 sm:rounded-full sm:top-0 sm:left-1/2 sm:block md:hidden lg:hidden bg-gray-600 top-32 left-1/3 transform -translate-x-1/2"
            :style="{
              background: `linear-gradient(to bottom, ${phaseColors[0]}, ${phaseColors[1]}, ${phaseColors[2]}, ${phaseColors[3]})`,
            }"
          ></div>
          <!-- Tondini per ogni fase -->
          <div
            v-for="(phase, index) in phases"
            :key="index"
            class="relative flex flex-col items-center z-10 mb-4 sm:mb-0 b"
          >
            <!-- Cerchio per ogni fase con due cerchi concentrici -->
            <div class="relative md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center">
              <!-- Cerchio esterno -->
              <div
                :style="{ backgroundColor: phaseColors[index] }"
                class="md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full"
              ></div>
              <!-- Cerchio interno -->
              <div
                class="md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-black bg-opacity-20 absolute"
              ></div>
            </div>
          </div>
        </div>
        <div class="relative w-full">
          <!-- Contenitore dello sfondo -->
          <div
            class="absolute inset-0 xs:block hidden rounded-full"
            :style="{
              background: `linear-gradient(to bottom, ${phaseColors[0]}, ${phaseColors[1]}, ${phaseColors[2]}, ${phaseColors[3]})`,
            }"
          ></div>

          <!-- Contenitore delle immagini -->
          <div
            class="flex flex-col lg:px-12 md:gap-24 md:px-0 sm:flex-row justify-between w-full mx-auto xs:pt-10"
          >
            <div
              v-for="(phase, index) in phases"
              :key="index"
              class="flex flex-col items-center mb-8 sm:mb-0 md:mx-auto md:w-1/2"
            >
              <img
                :src="phase.image"
                :alt="$t(phase.altText)"
                class="xs:w-24 xs:h-24 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 md:mb-0 md:ml-0 md:mt-12 sm:mb-24 xs:mb-4 object-cover shadow-lg rounded-full border-2 border-white transition-transform duration-300 transform hover:scale-150 active:scale-150 md:hover:translate-y-10 md:active:translate-y-10 hover:z-50 sm:relative"
              />
              <p class="mt-6 mb-0 ml-0 text-gray-500 font-bold hidden md:block">
                {{ $t(phase.description) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Descrizione delle fasi per small device -->
      <div class="flex flex-col sm:w-1/3 sm:gap-40 xs:mt-32 xs:ml-4 xs:gap-22 mt-8 ml-4 md:hidden">
        <div v-for="(phase, index) in phases" :key="index" class="flex items-center">
          <!-- Linea con colore dinamico a sinistra della descrizione -->
          <div
            class="h-1 mr-4 rounded"
            :style="{
              backgroundColor: phaseColors[index],
              width: '50px',
              marginTop: index === phases.length - 1 ? '2.5rem' : '1rem', // Margine dinamico
            }"
          ></div>
          <!-- Testo della descrizione -->
          <p
            :class="{
              'mt-4': index !== phases.length - 1, // Per tutti tranne l'ultimo
              'mt-10': index === phases.length - 1, // Cambia il mt per l'ultimo elemento
            }"
            class="mb-0 text-xl font-medium text-gray-500 sm:block xs:pb-1"
          >
            {{ $t(phase.description) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import lobsterStage1 from '@/assets/images/lobsterStage1.jpg'
import lobsterStage2 from '@/assets/images/lobsterStage2.jpg'
import lobsterStage3 from '@/assets/images/lobsterStage3.jpg'
import lobsterStage4 from '@/assets/images/lobsterStage4.jpg'

// Fasi del ciclo di vita dell'astice
const phases = ref([
  {
    image: lobsterStage1,
    description: 'lobsterStages.phase1',
    altText: 'lobsterStages.phase1Alt',
  },
  {
    image: lobsterStage2,
    description: 'lobsterStages.phase2',
    altText: 'lobsterStages.phase2Alt',
  },
  {
    image: lobsterStage3,
    description: 'lobsterStages.phase3',
    altText: 'lobsterStages.phase3Alt',
  },
  {
    image: lobsterStage4,
    description: 'lobsterStages.phase4',
    altText: 'lobsterStages.phase4Alt',
  },
])

// Colori dei tondini e della barra
const phaseColors = [
  '#efd73b', // Colore per il primo tondino (Giallo)
  '#e76f51', // Colore per il secondo tondino (Rosso)
  '#2a9d8f', // Colore per il terzo tondino (Verde)
  '#2271b3', // Colore per il quarto tondino (Blu)
]
</script>

<style scoped>
/* Media queries per mobile */
@media (max-width: 767px) {
  .flex-col {
    flex-direction: column;
  }

  .sm\\:flex-row {
    flex-direction: row;
  }
}
</style>
