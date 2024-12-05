<template>
  <section class="w-full py-24 bg-custom-beige">
    <!-- Titolo della pagina -->
    <div class="text-center mb-16">
      <h1 class="text-3xl font-medium text-custom-blue-lobster">{{ $t('lobsterStages.title') }}</h1>
    </div>

    <!-- Fasi del ciclo di vita dell'astice -->
    <div class="flex flex-col items-center">
      <!-- Linea orizzontale con i tondini distribuiti -->
      <div class="flex items-center justify-between w-3/4 relative">
        <!-- Linea orizzontale con gradiente tra i tondini -->
        <div
          class="absolute w-full h-2 rounded-full"
          :style="{
            background: `linear-gradient(to right, ${phaseColors[0]}, ${phaseColors[1]}, ${phaseColors[2]}, ${phaseColors[3]})`,
          }"
        ></div>

        <!-- Tondini per ogni fase -->
        <div
          v-for="(phase, index) in phases"
          :key="index"
          class="relative flex flex-col items-center z-10"
        >
          <!-- Cerchio per ogni fase con due cerchi concentrici -->
          <div class="relative w-10 h-10 flex items-center justify-center">
            <!-- Cerchio esterno -->
            <div
              :style="{ backgroundColor: phaseColors[index] }"
              class="w-10 h-10 rounded-full"
            ></div>
            <!-- Cerchio interno -->
            <div class="w-5 h-5 rounded-full bg-gray-200 absolute"></div>
          </div>
        </div>
      </div>

      <!-- Immagini delle fasi -->
      <div class="flex justify-between w-full mt-12 ml-6 px-20">
        <div v-for="(phase, index) in phases" :key="index" class="flex flex-col items-center">
          <img
            :src="phase.image"
            :alt="$t(phase.altText)"
            class="mt-2 rounded-full w-56 h-56 object-cover shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
          <p class="mt-6 text-center text-gray-500 font-bold">{{ $t(phase.description) }}</p>
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
  '#f4a261', // Colore per il quarto tondino (Arancione)
  '#e76f51', // Colore per il terzo tondino (Rosso)
  '#2a9d8f', // Colore per il secondo tondino (Verde)
  '#3a5a6f', // Colore per il primo tondino (Blu)
]
</script>

<style scoped></style>
