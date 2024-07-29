<template>
   <div class="flex flex-col gap-2 bg-white rounded-2xl overflow-hidden group">
      <div class="overflow-hidden flex items-center justify-center w-full">
         <img :src="`${useRuntimeConfig().public.apiBaseUrl}/site/images/products/${photo}`" class="group-hover:scale-105 transition-300" />
      </div>
      <div class="p-2">
         <div class="flex flex-col items-start gap-4 bg-background p-6 rounded-2xl">
            <h3 class="text-base line-clamp-2">
               {{ title }}
            </h3>
            <div class="text-sm line-clamp-2" v-html="subtitle" />
            <!-- <Button variant="link" class="!px-0 !py-0">
               <span>Batafsil ma’lumot</span>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                     <path d="M5.83301 5.83331L9.16634 9.99998L5.83301 14.1666" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M10.833 5.83331L14.1663 9.99998L10.833 14.1666" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
               </span>
            </Button> -->
         </div>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   id: Number,
   title: String,
   subtitle: String,
   photo: String
});
</script>
