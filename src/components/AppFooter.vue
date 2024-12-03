<template>
  <footer
    class="w-full bg-gradient-to-tl from-custom-blue-light to-custom-blue-lobster text-white p-12 mt-auto"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Colonna 1: Navigazione -->
      <div>
        <h2 class="font-bold mb-4">{{ $t('navigation') }}</h2>
        <ul class="space-y-2">
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
              $t('thirdMission')
            }}</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Colonna 2: Progetti e ricerca -->
      <div>
        <h2 class="font-bold mb-4">{{ $t('researchAndProjects') }}</h2>
        <ul class="space-y-2">
          <li>
            <RouterLink to="/#releases" class="hover:text-custom-blue-light hover:underline">{{
              $t('releases')
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/#results" class="hover:text-custom-blue-light hover:underline">{{
              $t('results')
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/#project" class="hover:text-custom-blue-light hover:underline">{{
              $t('project')
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/#publications" class="hover:text-custom-blue-light hover:underline">{{
              $t('publications')
            }}</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Colonna 3: Eventi e media -->
      <div>
        <h2 class="font-bold mb-4">{{ $t('eventsAndMedia') }}</h2>
        <ul class="space-y-2">
          <li>
            <RouterLink to="/#conferences" class="hover:text-custom-blue-light hover:underline">{{
              $t('conferences')
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/#media" class="hover:text-custom-blue-light hover:underline">{{
              $t('media')
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/#partners" class="hover:text-custom-blue-light hover:underline">{{
              $t('partners')
            }}</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Colonna 4: DEB -->
      <div
        class="mt-8 flex items-center justify-center bg-gradient-to-br from-custom-blue-light to-custom-blue-dark p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      >
        <a
          href="https://www.unitus.it/dipartimenti/deb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dipartimento DEB - Università della Tuscia"
          class="flex items-center space-x-4 text-white"
        >
          <img
            src="@/assets/loghi/logo-unitus.png"
            alt="Logo DEB Unitus"
            class="w-auto h-16 md:h-20"
          />
          <span class="text-lg font-semibold text-gray-100 hover:text-gray-200">{{
            $t('debLink')
          }}</span>
        </a>
      </div>
    </div>

    <!-- Credits -->
    <div class="text-center mt-8 border-t border-white pt-4 text-md">
      &copy; 2024
      <a href="mailto:elisamorreale@gmail.com" class="hover:underline hover:text-red-800">
        <span class="text-red-500">e</span>lisa<span class="text-red-500">m</span>orreale
      </a>
      . {{ $t('rightsReserved') }}.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
