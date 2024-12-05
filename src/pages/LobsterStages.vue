<template>
  <section class="w-full py-24 bg-custom-beige">
    <!-- Titolo della pagina -->
    <div class="text-center mb-16">
      <h1 class="text-3xl font-medium text-custom-blue-lobster">{{ $t('lobsterStages.title') }}</h1>
    </div>

    <!-- Fasi del ciclo di vita dell'astice -->
    <div class="flex flex-col items-center">
      <!-- Linea orizzontale con i tondini distribuiti -->
      <div
        class="flex flex-col sm:flex-row items-center justify-between w-full md:w-4/5 lg:w-3/4 relative"
      >
        <!-- Linea orizzontale con gradiente tra i tondini -->
        <div
          class="absolute w-1 sm:w-full sm:h-full md:w-full md:h-1 lg:h-2 rounded-full"
          :style="{
            background: `linear-gradient(to right, ${phaseColors[0]}, ${phaseColors[1]}, ${phaseColors[2]}, ${phaseColors[3]})`,
          }"
        ></div>

        <!-- Linea verticale (solo per mobile) -->
        <div
          class="absolute sm:block md:hidden lg:hidden w-1 bg-gray-600 top-32 left-1/3 transform -translate-x-1/2 sm:rotate-90"
          :style="{
            background: `linear-gradient(to bottom, ${phaseColors[0]}, ${phaseColors[1]}, ${phaseColors[2]}, ${phaseColors[3]})`,
          }"
          style="height: 65vh"
        ></div>

        <!-- Tondini per ogni fase -->
        <div
          v-for="(phase, index) in phases"
          :key="index"
          class="relative flex flex-col items-center z-10 mb-4 sm:mb-0"
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
              class="md:w-5 md:h-5 lg:w-7 lg:h-7 rounded-full bg-black bg-opacity-20 absolute"
            ></div>
          </div>
        </div>
      </div>

      <!-- Immagini delle fasi -->
      <div class="flex flex-col sm:flex-row justify-between w-full mt-12 ml-6 md:px-10 lg:px-20">
        <div
          v-for="(phase, index) in phases"
          :key="index"
          class="flex flex-col items-center mb-8 sm:mb-0"
        >
          <img
            :src="phase.image"
            :alt="$t(phase.altText)"
            class="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover shadow-lg rounded-full transition-transform duration-300 transform md:hover:scale-150 md:active:scale-150 lg:hover:scale-200 md:hover:translate-y-10 md:active:translate-y-10 hover:z-50"
          />
          <p class="mt-6 text-center text-gray-500 font-bold">{{ $t(phase.description) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import lobsterStage1 from '@/assets/images/lobsterStage1.png'
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
  '#efd73b', // Colore per il quarto tondino (Giallo)
  '#e76f51', // Colore per il terzo tondino (Rosso)
  '#2a9d8f', // Colore per il secondo tondino (Verde)
  '#3a5a6f', // Colore per il primo tondino (Blu)
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
