<template>
  <div class="py-12 px-16 bg-custom-beige">
    <!-- Titolo principale -->
    <h1 class="lg:text-5xl text-4xl font-light text-center text-custom-blue-lobster mb-6 md:mb-10">
      {{ $t('title') }}
    </h1>

    <!-- Introduzione -->
    <p
      class="text-xl text-gray-800 leading-relaxed lg:text-center text-left max-w-4xl mx-auto mb-8 px-4 md:px-0"
    >
      {{ $t('intro') }}
    </p>

    <!-- Griglia dei video -->
    <div
      v-if="videos2020.length || videos2021.length || videos2023.length || videos2024.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <!-- Video 2020 -->
      <div v-for="video in videos2020" :key="video.id" class="video-card">
        <a :href="video.url" target="_blank">
          <div class="relative">
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            />
            <div
              class="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300"
            >
              <i class="fas fa-play text-white text-3xl"></i>
            </div>
          </div>
          <h3 class="text-center text-lg font-semibold mt-2 text-gray-800">{{ video.title }}</h3>
        </a>
      </div>

      <!-- Video 2021 -->
      <div v-for="video in videos2021" :key="video.id" class="video-card">
        <a :href="video.url" target="_blank">
          <div class="relative">
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            />
            <div
              class="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300"
            >
              <i class="fas fa-play text-white text-3xl"></i>
            </div>
          </div>
          <h3 class="text-center text-lg font-semibold mt-2 text-gray-800">{{ video.title }}</h3>
        </a>
      </div>

      <!-- Video 2023 -->
      <div v-for="video in videos2023" :key="video.id" class="video-card">
        <a :href="video.url" target="_blank">
          <div class="relative">
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            />
            <div
              class="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300"
            >
              <i class="fas fa-play text-white text-3xl"></i>
            </div>
          </div>
          <h3 class="text-center text-lg font-semibold mt-2 text-gray-800">{{ video.title }}</h3>
        </a>
      </div>

      <!-- Video 2024 -->
      <div v-for="video in videos2024" :key="video.id" class="video-card">
        <a :href="video.url" target="_blank">
          <div class="relative">
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            />
            <div
              class="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300"
            >
              <i class="fas fa-play text-white text-3xl"></i>
            </div>
          </div>
          <h3 class="text-center text-lg font-semibold mt-2 text-gray-800">{{ video.title }}</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import tusciaUpThumbnail from '@/assets/images/tusciaUpThumbnail.jpg'
import prinAstice from '@/assets/images/prinAstice.jpg'
import ripopolamento2021 from '@/assets/images/ripopolamento2021.jpg'
import tgUno from '@/assets/images/tgUno.jpg'

export default {
  name: 'MediaPage',
  data() {
    return {
      // Video per ogni anno
      videos2020: [
        {
          id: 1,
          title: 'Presentazione CISMAR e progetto Astici',
          url: 'https://www.youtube.com/watch?v=y5n3B4lL2vI&t=13s',
          thumbnail: 'https://img.youtube.com/vi/y5n3B4lL2vI/0.jpg',
        },
      ],
      videos2021: [
        {
          id: 1,
          title: 'Rilascio subacqueo',
          url: 'https://www.youtube.com/watch?v=78ZgWR7s4VM&t=4s',
          thumbnail: 'https://img.youtube.com/vi/78ZgWR7s4VM/0.jpg',
        },
        {
          id: 2,
          title: 'Campagna conclusiva di ripopolamento 2021',
          url: 'https://www.facebook.com/UnitusDeb/videos/campagna-conclusiva-di-ripopolamento-2021-di-%F0%9D%90%BB%F0%9D%91%9C%F0%9D%91%9A%F0%9D%91%8E%F0%9D%91%9F%F0%9D%91%A2%F0%9D%91%A0-%F0%9D%91%94%F0%9D%91%8E%F0%9D%91%9A%F0%9D%91%9A%F0%9D%91%8E%F0%9D%91%9F%F0%9D%91%A2%F0%9D%91%A0-astice-europeo/560637631866473/',
          thumbnail: ripopolamento2021,
        },
        {
          id: 3,
          title: 'Unitus al TG1',
          url: 'https://www.facebook.com/universitadeglistudidellatuscia/videos/unitus-al-tg1-un-mare-da-salvare-nella-giornata-nazionale-dedicata-al-nostro-eco/775610793088405/',
          thumbnail: tgUno,
        },
        {
          id: 4,
          title: 'Geo&Geo',
          url: 'https://www.youtube.com/watch?v=hTE_ffM0LNE',
          thumbnail: 'https://img.youtube.com/vi/hTE_ffM0LNE/0.jpg',
        },
        {
          id: 5,
          title: 'Didattica',
          url: 'https://www.youtube.com/watch?v=g7ZlcsGsH5E',
          thumbnail: 'https://img.youtube.com/vi/g7ZlcsGsH5E/0.jpg',
        },
      ],
      videos2023: [
        {
          id: 1,
          title: 'Linea Verde',
          url: 'https://www.youtube.com/watch?v=zmBacCxo9iE',
          thumbnail: 'https://img.youtube.com/vi/zmBacCxo9iE/0.jpg',
        },
      ],
      videos2024: [
        {
          id: 1,
          title: 'Marcatura genetica',
          url: 'https://www.youtube.com/watch?v=vhto6dXEigU',
          thumbnail: 'https://img.youtube.com/vi/vhto6dXEigU/0.jpg',
        },
        {
          id: 2,
          title: 'PRIN PL-Astici',
          url: 'https://www.instagram.com/unitus_deb/p/C1JjTprMP4r/?img_index=1',
          thumbnail: prinAstice,
        },
        {
          id: 3,
          title: 'TusciaUP',
          url: 'https://www.instagram.com/tusciaup/p/C8wersRMBMS/',
          thumbnail: tusciaUpThumbnail, // Correct image reference
        },
        {
          id: 4,
          title: 'Marine Biology and Ecology',
          url: 'https://www.youtube.com/watch?v=B1enFVNBKTc',
          thumbnail: 'https://img.youtube.com/vi/B1enFVNBKTc/0.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped>
.video-card {
  position: relative;
  transition: transform 0.3s ease;
}

.video-card:hover {
  transform: scale(1.05);
}

.video-card a {
  display: block;
  text-decoration: none;
}

.video-card img {
  border-radius: 0.5rem;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
