<template>
   <div class="bg-[#F5F5F7] py-20">
      <div class="container flex flex-col gap-6">
         <h1 class="text-xl md:text-2xl xl:text-[32px] font-semibold">
            {{ translations['main.service_title'] }}
         </h1>
         <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div
               class="flex xl:items-center flex-col lg:flex-row gap-4 lg:gap-8 overflow-hidden relative p-4 lg:p-8 xl:p-12 bg-white rounded-[24px]">
               <img src="/assets/images/1.png" alt="" class="w-24 h-24 sm:w-28 sm:h-28" />
               <div class="flex flex-col items-start gap-4 sm:gap-6">
                  <h3 class="text-xl xl:text-2xl">{{ translations['main.service_card_text1'] }}</h3>
                  <Button @click="$router.push(localePath('/services/1'))" variant="link" class="p-0">
                     <span class="text-base text-black">{{ translations['main.btn1'] }}</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5.83331 5.83301L9.16665 9.99967L5.83331 14.1663" stroke="#020105" stroke-width="1.5"
                           stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.8333 5.83301L14.1666 9.99967L10.8333 14.1663" stroke="#020105" stroke-width="1.5"
                           stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </Button>
               </div>
            </div>
            <div
               class="flex xl:items-center flex-col lg:flex-row gap-4 lg:gap-8 overflow-hidden relative p-4 lg:p-8 xl:p-12 bg-white rounded-[24px]">
               <img src="/assets/images/2.png" alt="" class="w-24 h-24 sm:w-28 sm:h-28" />
               <div class="flex flex-col items-start gap-4 sm:gap-6">
                  <h3 class="text-xl xl:text-2xl">{{ translations['main.service_card_text2'] }}</h3>
                  <Button @click="$router.push(localePath('/services/2'))" variant="link" class="p-0">
                     <span class="text-base text-black">{{ translations['main.btn1'] }}</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5.83331 5.83301L9.16665 9.99967L5.83331 14.1663" stroke="#020105" stroke-width="1.5"
                           stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.8333 5.83301L14.1666 9.99967L10.8333 14.1663" stroke="#020105" stroke-width="1.5"
                           stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </Button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations';

const translationsStore = useTranslationStore();
const { translations } = storeToRefs(translationsStore);
const localePath = useLocalePath();
</script>
