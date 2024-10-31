<template>
   <footer class="bg-[#F5F5F7]">
      <div class="container">
         <div class="flex flex-col xl:grid xl:grid-cols-3 gap-8 xl:gap-[164px] py-10">
            <div class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-4 xl:col-span-2">
               <NuxtLink to="/">
                  <img src="/assets/svg/logo_dark.svg" alt="logo" />
               </NuxtLink>
               <nav class="flex flex-col gap-4 sm:gap-6">
                  <NuxtLink :to="localePath('/about')" class="text-base font-medium hover:text-primary transition-300"> {{ translations['header.about'] }} </NuxtLink>
                  <NuxtLink :to="localePath('/services')" class="text-base font-medium hover:text-primary transition-300"> {{ translations['header.services'] }} </NuxtLink>
                  <NuxtLink :to="localePath('/portfolio')" class="text-base font-medium hover:text-primary transition-300"> {{ translations['header.portfolio'] }} </NuxtLink>
                  <NuxtLink :to="localePath('/products')" class="text-base font-medium hover:text-primary transition-300"> {{ translations['header.products'] }} </NuxtLink>
                  <NuxtLink :to="localePath('/contacts')" class="text-base font-medium hover:text-primary transition-300"> {{ translations['header.contacts'] }} </NuxtLink>
               </nav>
               <div class="flex flex-col gap-2">
                  <h3 class="text-base font-medium">{{ translations['footer.location_title'] }}</h3>
                  <p class="text-base">
                     {{ translations['footer.location_text'] }}
                  </p>
               </div>
            </div>
            <div class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-4 sm:gap-8">
               <div class="flex flex-col gap-2">
                  <h3 class="text-base font-medium">
                     {{ translations['footer.phone'] }}
                  </h3>
                  <div>
                     <a :href="`tel:${translations['footer.phone1']}`"> {{ translations['footer.phone1'] }}</a>
                     <a :href="`tel:${translations['footer.phone2']}`" class="block"> {{ translations['footer.phone2'] }}</a>
                  </div>
               </div>
               <div class="flex flex-col gap-4">
                  <h3 class="text-base font-medium">
                     {{ translations['footer.social'] }}
                  </h3>
                  <div class="flex items-center gap-3">
                     <a href="" target="_blank">
                        <img src="/assets/svg/facebook.svg" alt="" />
                     </a>
                     <a href="" target="_blank">
                        <img src="/assets/svg/linkedin.svg" alt="" />
                     </a>
                     <a href="" target="_blank">
                        <img src="/assets/svg/instagram.svg" alt="" />
                     </a>
                     <a href="" target="_blank">
                        <img src="/assets/svg/telegram.svg" alt="" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div class="border-t border-b py-6 flex max-sm:flex-col flex-row items-center justify-between gap-2 text-center">
            <p class="text-base">{{ translations['footer.bottom'] }}</p>
            <a href="https://ndc.uz/" target="_blank" class="text-base">Powered by NDC</a>
         </div>
      </div>
   </footer>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations';

const localePath = useLocalePath();

const translationsStore = useTranslationStore();
const { translations } = storeToRefs(translationsStore);
</script>
