<template>
  <footer
    class="relative w-full bg-gradient-to-tl from-custom-blue-light to-custom-blue-lobster text-white py-8 px-14 text-lg md:py-12 lg:px-12 mt-auto"
  >
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">
      <!-- Colonna 1: Navigazione -->
      <div>
        <h2 class="font-bold mb-6">{{ $t('navigation') }}</h2>
        <ul class="space-y-4">
          <li>
            <RouterLink to="/" class="hover:text-custom-blue-light hover:underline">{{
              $t('home')
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/#cismar" class="hover:text-custom-blue-light hover:underline">{{
              $t('aboutUs')
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/#lobster" class="hover:text-custom-blue-light hover:underline">{{
              $t('lobster')
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/third-mission" class="hover:text-custom-blue-light hover:underline">{{
              $t('dissemination')
            }}</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Colonna 2: Progetti e ricerca -->
      <div>
        <h2 class="font-bold mb-6">{{ $t('researchAndProjects') }}</h2>
        <ul class="space-y-4">
          <li>
            <RouterLink to="/conservation" class="hover:text-custom-blue-light hover:underline">{{
              $t('cismarRole')
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/release" class="hover:text-custom-blue-light hover:underline">{{
              $t('release')
            }}</RouterLink>
          </li>
          <li>
            <RouterLink
              to="/under-construction"
              class="hover:text-custom-blue-light hover:underline"
              >{{ $t('project') }}</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/under-construction"
              class="hover:text-custom-blue-light hover:underline"
              >{{ $t('publications') }}</RouterLink
            >
          </li>
        </ul>
      </div>

      <!-- Colonna 3: Eventi e media -->
      <div>
        <h2 class="font-bold mb-6">{{ $t('eventsAndMedia') }}</h2>
        <ul class="space-y-4">
          <li>
            <RouterLink
              to="/under-construction"
              class="hover:text-custom-blue-light hover:underline"
              >{{ $t('conferences') }}</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/media" class="hover:text-custom-blue-light hover:underline">{{
              $t('media')
            }}</RouterLink>
          </li>
          <li>
            <RouterLink
              to="/under-construction"
              class="hover:text-custom-blue-light hover:underline"
              >{{ $t('partners') }}</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Onde decorative -->
    <div class="absolute inset-y-0 right-0 w-full pointer-events-none">
      <svg
        class="h-full w-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 500"
        fill="none"
        preserveAspectRatio="none"
      >
        <!-- Prima onda - più fluida e lunga, inizio più basso -->
        <path
          d="M0 120 C60 140, 150 60, 250 120 C300 140, 250 220, 300 260"
          stroke="rgba(255, 255, 255, 0.4)"
          stroke-width="2"
          fill="none"
        />
        <!-- Seconda onda - più sinuosa, inizio più basso -->
        <path
          d="M0 200 C50 260, 140 220, 230 290 C280 320, 300 400, 250 420"
          stroke="rgba(255, 255, 255, 0.3)"
          stroke-width="2"
          fill="none"
        />
        <!-- Terza onda - più dinamica, inizio più basso -->
        <path
          d="M0 280 C70 310, 140 270, 220 310 C280 350, 300 420, 250 440"
          stroke="rgba(255, 255, 255, 0.25)"
          stroke-width="2"
          fill="none"
        />
      </svg>
    </div>
  </footer>

  <!-- Credits -->
  <div
    class="text-center py-3 text-md bg-gradient-to-bl from-custom-blue-light to-custom-blue-lobster text-white"
  >
    &copy; 2024
    <a href="mailto:elisamorreale@gmail.com" class="hover:underline hover:text-red-800">
      <span class="text-red-500">e</span>lisa<span class="text-red-500">m</span>orreale
    </a>
    . {{ $t('rightsReserved') }}.
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
