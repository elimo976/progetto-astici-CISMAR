<template>
  <section class="bg-custom-beige text-gray-800 px-8 py-8 text-left text-lg w-full">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-custom-blue-lobster text-4xl font-semibold my-5 text-center">
        {{ $t('geneticsTitle') }}
      </h1>

      <hr class="hidden md:block mb-6 w-[90%] mx-auto" />

      <div class="max-w-[32rem] mx-auto my-10">
        <p>{{ $t('geneticsText1') }}</p>
        <br />
        <p>{{ $t('geneticsText2') }}</p>
        <br />
        <p>{{ $t('geneticsText3') }}</p>
        <br />
        <p>{{ $t('geneticsText4') }}</p>
        <br />
        <p>{{ $t('geneticsText5') }}</p>
        <br />
        <p>{{ $t('geneticsText6') }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GeneticsPage',
})
</script>

<style scoped></style>
