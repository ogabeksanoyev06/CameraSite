<template>

   <Head>
      <Title>About Us | ENERGY MONTAJ GROUP</Title>
   </Head>

   <div class="bg-white">
      <section class="bg-white mt-[80px] container">
         <div class="max-w-[1200px] w-full space-y-10 mb-20 mx-auto px-4">
            <div class="flex flex-col gap-6">
               <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">
                  {{ translations['about.statistics_title'] }}
               </h2>
               <p class="text-base text-gray-900">
                  {{ translations['about.statistics_text'] }}
               </p>
            </div>
            <div class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
               <div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100">
                  <h1 class="text-[40px] font-medium">{{translations['main.statistics_card_num1']}}</h1>
                  <p class="text-base text-gray-900">{{ translations['main.statistics_card_text1'] }}</p>
               </div>
               <div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100">
                  <h1 class="text-[40px] font-medium">{{translations['main.statistics_card_num2']}}</h1>
                  <p class="text-base text-gray-900">{{ translations['main.statistics_card_text2'] }}</p>
               </div>
               <div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100">
                  <h1 class="text-[40px] font-medium">{{translations['main.statistics_card_num3']}}</h1>
                  <p class="text-base text-gray-900">{{ translations['main.statistics_card_text3'] }}</p>
               </div>
               <div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100">
                  <h1 class="text-[40px] font-medium">{{translations['main.statistics_card_num4']}}</h1>
                  <p class="text-base text-gray-900">{{ translations['main.statistics_card_text4'] }}</p>
               </div>
            </div>
         </div>
      </section>
      <div class="bg-[#F5F5F7] mt-20">
         <SectionServicesSwiper />
         <div class="container">
            <section class="pb-20">
               <div class="flex flex-col gap-6">
                  <h2 class="text-3xl font-semibold text-center">{{ translations['about.faq_title'] }}</h2>
                  <Accordion :model-value="activeAccordion" type="single" class="" collapsible>
                     <div class="w-full grid grid-cols-1 md:grid-cols-2 justify-start items-start mx-auto gap-6">
                        <AccordionItem v-for="faq in data" :key="faq?.id" class="border-none bg-white rounded-2xl p-6"
                           :value="faq?.id">
                           <AccordionTrigger class="text-xl sm:text-2xl" @click="toggleAccordion(faq?.id)">
                              {{ faq?.question[$i18n.locale] }}
                              <template #icon>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                    fill="none" :class="{ '!rotate-45': activeAccordion === i }">
                                    <path d="M12 6.5V18.5M18 12.5L6 12.5" stroke="#020105" stroke-width="2"
                                       stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                              </template>
                           </AccordionTrigger>
                           <AccordionContent class="text-base max-h-max">
                              <div v-html="faq?.answer[$i18n.locale]"></div>
                           </AccordionContent>
                        </AccordionItem>
                     </div>
                  </Accordion>
               </div>
            </section>
         </div>
      </div>
      <SectionContactUs />
   </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTranslationStore } from '~/stores/translations';
import { useFaqStore } from '~/stores/faq.js';

const translationsStore = useTranslationStore();
const faqStore = useFaqStore();

const { getFaqs } = faqStore;
const { translations } = storeToRefs(translationsStore);

const data = await getFaqs();

const activeAccordion = ref(null);

const toggleAccordion = (index) => {
   activeAccordion.value = activeAccordion.value === index ? null : index;
};
</script>
