<template>
  <header class="relative w-full py-10 md:px-8 lg:px-12 shadow-md bg-white">
    <div
      class="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-6"
    >
      <!-- Logo a sinistra (per dispositivi grandi e centrato nei piccoli) -->
      <div class="flex-shrink-0 md:order-1">
        <RouterLink to="/" class="block">
          <img
            src="@/assets/logo-astice.svg"
            alt="Logo"
            title="logo astice"
            class="h-20 w-auto md:h-36 md:mb-6 cursor-pointer"
          />
        </RouterLink>
      </div>

      <!-- Titolo centrale -->
      <h1
        class="text-3xl md:text-5xl text-custom-blue font-playfair font-medium text-center md:order-2"
      >
        {{ $t('headerTitle') }}
      </h1>

      <!-- Blocco logo DEB Unitus (per dispositivi grandi a destra e centrato nei piccoli) -->
      <div class="flex flex-col items-center space-y-4 md:flex-shrink-0 md:order-3">
        <a
          href="https://www.unitus.it/dipartimenti/deb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="DEB DIPARTIMENTO di scienze ecologiche e biologiche - Università degli Studi della Tuscia"
          class="flex flex-col items-center space-y-2"
        >
          <!-- Contenitore logo e testo DEB -->
          <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5">
            <!-- Logo -->
            <div class="w-16 h-auto md:w-24 bg-custom-blue rounded-lg">
              <img
                src="@/assets/loghi/logo-unitus-simplex.png"
                alt="Logo DEB Unitus"
                title="Logo DEB Unitus"
                class="w-16 h-auto md:w-24 p-1"
              />
            </div>

            <!-- Linea verticale solo su dispositivi grandi -->
            <div class="hidden md:block h-20 border-l-2 border-gray-300"></div>

            <!-- Testo DEB -->
            <span class="text-3xl md:text-4xl font-playfair font-bold text-custom-blue">DEB</span>
          </div>

          <!-- Testo lungo sotto (visibile solo su medi e grandi) -->
          <span
            class="hidden md:block text-sm md:text-md font-semibold text-gray-700 hover:text-gray-500"
            v-html="sanitizedDebLink"
          ></span>
        </a>
      </div>
    </div>

    <!-- RICORDATI DI TOGLIERE IL TEXT-WHITE AI 3 ELEMENTI IT | EN !!!!!!!!! -->

    <!-- Selettore di lingua -->
    <div class="absolute top-4 right-8 flex space-x-3 text-lg">
      <button
        @click="setLanguage('it')"
        class="text-white"
        :class="{ 'text-gray-400': language === 'en', 'text-black': language === 'it' }"
      >
        IT
      </button>
      <span class="text-white">|</span>
      <button
        @click="setLanguage('en')"
        class="text-white"
        :class="{ 'text-gray-400': language === 'it', 'text-black': language === 'en' }"
      >
        EN
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DOMPurify from 'dompurify'

// Usa Vue I18n per ottenere l'istanza i18n
const { t, locale } = useI18n()

// Variabile di stato per la lingua (inizializzata da localStorage)
const language = ref(localStorage.getItem('language') || 'it')

// Funzione per cambiare la lingua
const setLanguage = (lang: string) => {
  locale.value = lang // Cambia la lingua in Vue I18n
  language.value = lang // Aggiorna la variabile di stato
  localStorage.setItem('language', lang) // Memorizza la lingua in localStorage
}

// Imposta la lingua iniziale al caricamento del componente
onMounted(() => {
  if (language.value === 'en' && window.location.pathname !== '/en') {
    window.location.href = '/en'
  } else if (language.value === 'it' && window.location.pathname !== '/') {
    window.location.href = '/'
  }
})

// Computed property per sanitizzare il testo dinamico
const sanitizedDebLink = computed(() => {
  const rawHtml = t('debLink') as string
  return DOMPurify.sanitize(rawHtml)
})
</script>
