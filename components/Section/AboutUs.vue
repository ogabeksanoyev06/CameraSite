<template>
   <div>
      <div class="grid grid-cols-1 items-center lg:grid-cols-2 gap-20">
         <div class="relative md:h-[550px] max-w-[820px] clip-path-custom">
            <img src="/assets/images/abc.jpg" alt="" class="h-full w-full object-cover" />
            <div class="absolute inset-0 bg-primary/70"></div>
            <div class="absolute inset-0 flex flex-col justify-between gap-6 px-4 ml-auto max-w-[500px] items-start text-white py-20">
               <div>
                  <h2 class="text-2xl md:text-4xl font-bold">
                     {{ translations['main.about_title2'] }}
                  </h2>
                  <p class="text-md md:text-lg mt-2">
                     {{ translations['main.about_subtitle2'] }}
                  </p>
               </div>
               <NuxtLink to="/" class="flex">
                 <img src="/assets/svg/logo.svg" alt="">
               </NuxtLink>
            </div>
         </div>
         <div class="flex flex-col items-start gap-10 max-w-[750px] w-full mr-auto">
            <div class="flex flex-col gap-6">
               <h2 class="text-lg md:text-2xl xl:text-3xl font-semibold">
                  {{ translations['main.about_title'] }}
               </h2>
               <p class="text-grey-900 text-base">
                  {{ translations['main.about_subtitle'] }}
               </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div class="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_134_1625)">
                        <path
                           d="M6.66669 9.99996L8.77892 11.901C9.13851 12.2246 9.69718 12.175 9.99419 11.7932L13.3334 7.49996M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
                           stroke="#1878F3"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_134_1625">
                           <rect width="20" height="20" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <span> {{ translations['main.about_text1'] }}</span>
               </div>
               <div class="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_134_1625)">
                        <path
                           d="M6.66669 9.99996L8.77892 11.901C9.13851 12.2246 9.69718 12.175 9.99419 11.7932L13.3334 7.49996M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
                           stroke="#1878F3"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_134_1625">
                           <rect width="20" height="20" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <span> {{ translations['main.about_text2'] }}</span>
               </div>
               <div class="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_134_1625)">
                        <path
                           d="M6.66669 9.99996L8.77892 11.901C9.13851 12.2246 9.69718 12.175 9.99419 11.7932L13.3334 7.49996M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
                           stroke="#1878F3"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_134_1625">
                           <rect width="20" height="20" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <span> {{ translations['main.about_text3'] }}</span>
               </div>
               <div class="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_134_1625)">
                        <path
                           d="M6.66669 9.99996L8.77892 11.901C9.13851 12.2246 9.69718 12.175 9.99419 11.7932L13.3334 7.49996M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
                           stroke="#1878F3"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_134_1625">
                           <rect width="20" height="20" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <span> {{ translations['main.about_text4'] }}</span>
               </div>
            </div>
            <Button variant="outline">
               <span> {{ translations['main.btn1'] }}</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5.83337 5.83337L9.16671 10L5.83337 14.1667" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.8334 5.83337L14.1667 10L10.8334 14.1667" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </Button>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations';

const translationsStore = useTranslationStore();
const { translations } = storeToRefs(translationsStore);
</script>

<style scoped>
@media (min-width: 768px) {
   .clip-path-custom {
      clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
   }
}
</style>
