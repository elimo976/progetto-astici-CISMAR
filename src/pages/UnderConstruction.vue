<template>
  <div
    class="h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 via-green-50 to-blue-100"
  >
    <div
      class="text-center p-8 md:p-16 bg-white shadow-xl rounded-xl max-w-lg w-full transform transition-all duration-300 hover:scale-105"
    >
      <!-- Icona Cogs -->
      <div class="mb-12">
        <font-awesome-icon
          icon="cogs"
          class="text-custom-green-cogs text-8xl transform transition-all duration-300 hover:scale-110 hover:text-custom-dark-cogs"
        />
      </div>

      <!-- Titolo -->
      <h1 class="text-4xl md:text-5xl font-semibold text-custom-blue-lobster mb-6 leading-tight">
        {{ $t('titleUC') }}
      </h1>

      <!-- Descrizione -->
      <p class="text-2xl text-gray-600 mb-6 leading-relaxed">
        {{ $t('introUC') }}
      </p>

      <!-- Torna alla Home -->

      <a
        :href="'/'"
        class="inline-flex items-center px-6 py-4 text-md font-medium text-custom-blue-lobster bg-custom-blue-hover border border-custom-blue-hover rounded-md hover:bg-custom-blue-active transition-all duration-300 mb-2 hover:bg-custom-blue-lobster hover:text-gray-200"
        >{{ $t('backHome') }}</a
      >

      <!-- Footer -->
      <footer class="mt-6 text-sm text-gray-500">
        {{ $t('footerUC') }}
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
// Aggiungi qui eventuali logiche di traduzione, se necessario
</script>

<style scoped>
/* Fondo con gradiente */
body {
  background-color: #f7f7f7;
}

/* Fondo gradiente e bordo dell'elemento centrale */
.bg-gradient-to-r {
  background-image: linear-gradient(
    to right,
    #e0f7fa,
    #90c7c3,
    #77c1cb
  ); /* Sfumatura azzurro-verde */
}

/* Icone personalizzate */
.text-custom-green-cogs {
  color: #5db1a7; /* Verde personalizzato per l'icona */
  transition: all 0.3s ease;
}

/* Hover su icona */
.text-custom-green-cogs:hover {
  color: #388e8e; /* Verde più scuro al passaggio del mouse */
  transform: scale(1.1); /* Ingrandimento più fluido */
}

/* Hover sul contenitore */
.bg-white:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Ombra più marcata quando si passa sopra il contenitore */
}

/* Titolo */
h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  letter-spacing: -0.5px;
}

/* Descrizione */
p {
  font-family: 'Lora', serif;
  color: #555;
  line-height: 1.75;
  font-size: 1.4rem;
}

/* Footer */
footer {
  font-size: 1.125rem;
  color: #8a8a8a;
}

/* Regola le dimensioni per schermi più piccoli */
@media (max-width: 768px) {
  .text-lg {
    font-size: 1rem;
  }

  .text-4xl {
    font-size: 2.25rem;
  }

  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .text-2xl {
    font-size: 1rem;
  }
}
</style>
