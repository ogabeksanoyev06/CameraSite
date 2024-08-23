<template>
   <Head>
      <Title>Portfolio | Fireprotection</Title>
   </Head>

   <div class="bg-background">
      <div class="container py-20">
         <section class="flex flex-col gap-10">
            <div
               class="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row lg:even:flex-row-reverse gap-4 lg:gap-10"
               v-for="item in portfolios" :key="item">
               <div class="flex flex-col items-start gap-4 sm:gap-6 lg:pt-10 lg:w-1/2 order-2 lg:order-1">
                  <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">
                     {{ item.title[$i18n.locale] }}
                  </h2>
                  <div class="text-base text-gray-900" v-html="item.descriptions[$i18n.locale]"></div>
                  <!-- <Button variant="outline" class="max-sm:!px-3 max-sm:!py-2">
                     <span class="text-black">Batafsil ma’lumot</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5.83301 5.83301L9.16634 9.99967L5.83301 14.1663" stroke="#020105" stroke-width="1.5"
                           stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.833 5.83301L14.1663 9.99967L10.833 14.1663" stroke="#020105" stroke-width="1.5"
                           stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </Button> -->
               </div>
               <div class="lg:w-1/2 order-1 lg:order-2">
                  <img :src="`${useRuntimeConfig().public.apiBaseUrl}/storage/${item.photo}`" alt=""
                     class="w-full h-full object-cover rounded-2xl" />
               </div>
            </div>
         </section>
      </div>
      <SectionContactUs />
   </div>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations.js';
import { usePortfolioStore } from '~/stores/portfolio.js';

const translationsStore = useTranslationStore();
const portfolioStore = usePortfolioStore();

const { translations } = storeToRefs(translationsStore);
const { getPortfolios } = portfolioStore;

const { data: portfolios } = await useAsyncData('portfolios', async () => {
   return await getPortfolios();
});
</script>
