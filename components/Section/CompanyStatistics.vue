<template>
   <div class="max-w-[1200px] w-full space-y-10 mb-20 mx-auto px-4">
      <div class="flex flex-col gap-6">
         <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">
            {{ translations['main.statistics_title'] }}
         </h2>
         <p class="text-base text-gray-900">
            {{ translations['main.statistics_text'] }}
         </p>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
         <div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100">
            <h1 class="text-[40px] font-medium">90</h1>
            <p class="text-base text-gray-900">{{ translations['main.statistics_card_text1'] }}</p>
         </div>
         <div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100">
            <h1 class="text-[40px] font-medium">250+</h1>
            <p class="text-base text-gray-900">{{ translations['main.statistics_card_text2'] }}</p>
         </div>
         <div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100">
            <h1 class="text-[40px] font-medium">90</h1>
            <p class="text-base text-gray-900">{{ translations['main.statistics_card_text3'] }}</p>
         </div>
         <div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100">
            <h1 class="text-[40px] font-medium">90</h1>
            <p class="text-base text-gray-900">{{ translations['main.statistics_card_text4'] }}</p>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations';

const translationsStore = useTranslationStore();
const { translations } = storeToRefs(translationsStore);
</script>

<style lang="scss" scoped></style>
