<template>
   <div class="container flex flex-col items-center text-center justify-center h-screen bg-gray-100 text-gray-800 z-10 relative">
      <img src="/assets/images/new-cctv-page-bg 1.png" alt="" class="absolute z-[-1] w-full h-full" />
      <h1 class="text-6xl font-bold md:text-[150px] lg:text-[200px] xl:text-[400px] text-[#1878F3]" style="">{{ error.statusCode }}</h1>
      <p class="text-2xl mt-4 text-white">{{ error.message }}</p>
      <nuxt-link to="/" class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"> Bosh sahifaga qaytish </nuxt-link>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// Error obyekti uchun lokal state
const error = ref({
   statusCode: 404,
   message: 'Afsuskiy bunday sahifa mavjud emas'
});

const route = useRoute();
// Route meta dan errorni tekshirish
if (route.meta.error) {
   const routeError = route.meta.error;
   error.value = {
      statusCode: routeError.statusCode,
      message: routeError.message || 'An error occurred'
   };
}

// Propsni belgilash
const props = defineProps({
   error: {
      type: Object,
      required: true,
      default: () => ({
         statusCode: 404,
         message: 'Afsuskiy bunday sahifa mavjud emas'
      })
   }
});
</script>
