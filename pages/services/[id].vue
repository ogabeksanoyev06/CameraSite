<template>

   <Head>
      <Title>{{ service?.title[locale] ? service?.title[locale] : "Service | Fireprotection" }}</Title>
   </Head>

   <div>
      <section class="container my-20">
         <div class="flex flex-col gap-6 max-w-[1200px] w-full mx-auto">
            <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">{{ translations['service.about'] }}</h2>
            <div v-html="service?.descriptions[locale]"></div>
         </div>
      </section>
      <section class="bg-[#F5F5F7] py-20 mt-20">
         <div class="container">
            <div class="flex flex-col gap-6 max-w-[1200px] w-full mx-auto">
               <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">{{ translations['service.whywe'] }}</h2>
               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div class="p-6 bg-white flex items-center gap-4 rounded-3xl">
                     <div
                        class="w-14 h-14 flex items-center justify-center border border-green-200 rounded-2xl bg-green-100">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5ZM16.592 9.96049C16.8463 9.63353 16.7874 9.16232 16.4605 8.90802C16.1335 8.65372 15.6623 8.71262 15.408 9.03958L11.401 14.1914C11.3119 14.306 11.1443 14.3209 11.0364 14.2238L8.50173 11.9426C8.19385 11.6655 7.71963 11.6904 7.44254 11.9983C7.16544 12.3062 7.1904 12.7804 7.49828 13.0575L10.033 15.3387C10.7881 16.0183 11.9613 15.9143 12.585 15.1123L16.592 9.96049Z"
                              fill="#009A10" />
                        </svg>
                     </div>
                     <div class="flex-1">
                        <p class="text-base text-grey-900">{{ translations['services.card1_title'] }}</p>
                        <h2 class="text-2xl text-[#222535] font-semibold">{{ translations['services.card1_body'] }}</h2>
                     </div>
                  </div>

                  <div class="p-6 bg-white flex items-center gap-4 rounded-3xl">
                     <div
                        class="w-14 h-14 flex items-center justify-center border border-green-200 rounded-2xl bg-green-100">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5ZM16.592 9.96049C16.8463 9.63353 16.7874 9.16232 16.4605 8.90802C16.1335 8.65372 15.6623 8.71262 15.408 9.03958L11.401 14.1914C11.3119 14.306 11.1443 14.3209 11.0364 14.2238L8.50173 11.9426C8.19385 11.6655 7.71963 11.6904 7.44254 11.9983C7.16544 12.3062 7.1904 12.7804 7.49828 13.0575L10.033 15.3387C10.7881 16.0183 11.9613 15.9143 12.585 15.1123L16.592 9.96049Z"
                              fill="#009A10" />
                        </svg>
                     </div>
                     <div class="flex-1">
                        <p class="text-base text-grey-900">{{ translations['services.card2_title'] }}</p>
                        <h2 class="text-2xl text-[#222535] font-semibold">{{ translations['services.card2_body'] }}</h2>
                     </div>
                  </div>

                  <div class="p-6 bg-white flex items-center gap-4 rounded-3xl">
                     <div
                        class="w-14 h-14 flex items-center justify-center border border-green-200 rounded-2xl bg-green-100">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5ZM16.592 9.96049C16.8463 9.63353 16.7874 9.16232 16.4605 8.90802C16.1335 8.65372 15.6623 8.71262 15.408 9.03958L11.401 14.1914C11.3119 14.306 11.1443 14.3209 11.0364 14.2238L8.50173 11.9426C8.19385 11.6655 7.71963 11.6904 7.44254 11.9983C7.16544 12.3062 7.1904 12.7804 7.49828 13.0575L10.033 15.3387C10.7881 16.0183 11.9613 15.9143 12.585 15.1123L16.592 9.96049Z"
                              fill="#009A10" />
                        </svg>
                     </div>
                     <div class="flex-1">
                        <p class="text-base text-grey-900">{{ translations['services.card3_title'] }}</p>
                        <h2 class="text-2xl text-[#222535] font-semibold">{{ translations['services.card3_body'] }}</h2>
                     </div>
                  </div>

                  <div class="p-6 bg-white flex items-center gap-4 rounded-3xl">
                     <div
                        class="w-14 h-14 flex items-center justify-center border border-green-200 rounded-2xl bg-green-100">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5ZM16.592 9.96049C16.8463 9.63353 16.7874 9.16232 16.4605 8.90802C16.1335 8.65372 15.6623 8.71262 15.408 9.03958L11.401 14.1914C11.3119 14.306 11.1443 14.3209 11.0364 14.2238L8.50173 11.9426C8.19385 11.6655 7.71963 11.6904 7.44254 11.9983C7.16544 12.3062 7.1904 12.7804 7.49828 13.0575L10.033 15.3387C10.7881 16.0183 11.9613 15.9143 12.585 15.1123L16.592 9.96049Z"
                              fill="#009A10" />
                        </svg>
                     </div>
                     <div class="flex-1">
                        <p class="text-base text-grey-900">{{ translations['services.card4_title'] }}</p>
                        <h2 class="text-2xl text-[#222535] font-semibold">{{ translations['services.card4_body'] }}</h2>
                     </div>
                  </div>

                  <div class="p-6 bg-white flex items-center gap-4 rounded-3xl">
                     <div
                        class="w-14 h-14 flex items-center justify-center border border-green-200 rounded-2xl bg-green-100">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5ZM16.592 9.96049C16.8463 9.63353 16.7874 9.16232 16.4605 8.90802C16.1335 8.65372 15.6623 8.71262 15.408 9.03958L11.401 14.1914C11.3119 14.306 11.1443 14.3209 11.0364 14.2238L8.50173 11.9426C8.19385 11.6655 7.71963 11.6904 7.44254 11.9983C7.16544 12.3062 7.1904 12.7804 7.49828 13.0575L10.033 15.3387C10.7881 16.0183 11.9613 15.9143 12.585 15.1123L16.592 9.96049Z"
                              fill="#009A10" />
                        </svg>
                     </div>
                     <div class="flex-1">
                        <p class="text-base text-grey-900">{{ translations['services.card5_title'] }}</p>
                        <h2 class="text-2xl text-[#222535] font-semibold">{{ translations['services.card5_body'] }}</h2>
                     </div>
                  </div>

                  <div class="p-6 bg-white flex items-center gap-4 rounded-3xl">
                     <div
                        class="w-14 h-14 flex items-center justify-center border border-green-200 rounded-2xl bg-green-100">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5ZM16.592 9.96049C16.8463 9.63353 16.7874 9.16232 16.4605 8.90802C16.1335 8.65372 15.6623 8.71262 15.408 9.03958L11.401 14.1914C11.3119 14.306 11.1443 14.3209 11.0364 14.2238L8.50173 11.9426C8.19385 11.6655 7.71963 11.6904 7.44254 11.9983C7.16544 12.3062 7.1904 12.7804 7.49828 13.0575L10.033 15.3387C10.7881 16.0183 11.9613 15.9143 12.585 15.1123L16.592 9.96049Z"
                              fill="#009A10" />
                        </svg>
                     </div>
                     <div class="flex-1">
                        <p class="text-base text-grey-900">{{ translations['services.card6_title'] }}</p>
                        <h2 class="text-2xl text-[#222535] font-semibold">{{ translations['services.card6_body'] }}</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="container py-[80px]">
         <div class="flex flex-col gap-6 max-w-[1200px] w-full mx-auto">
            <h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">Yong'in signalizatsiyasini o'rnatish narxlari</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
               <div class="border border-[#EBEBEB] rounded-2xl">
                  <div class="flex items-center justify-between gap-6 px-6 py-4 text-grey-950 font-medium border-b">
                     <p class="flex-1">Xizmat nomi</p>
                     <p>Narxi</p>
                  </div>
                  <div v-html="service?.key[locale][0]"></div>
               </div>
            </div>
         </div>
      </section>
      <SectionContactUs />
   </div>
</template>

<script setup>
import { useServicesStore } from '~/stores/services.js';
import { useTranslationStore } from '~/stores/translations.js';
const { locale } = useI18n();

const route = useRoute();

const translationsStore = useTranslationStore();

const { translations } = storeToRefs(translationsStore);

const servicesStore = useServicesStore();

const { getServiceById } = servicesStore;

const { data: service } = useAsyncData('service', async () => {
   return await getServiceById(route.params.id)
}, { watch: [() => route.params.id] });
</script>

<style>
table {
   border-bottom: 1px solid #ebebeb !important;
   width: 100% !important;
}

tbody tr {
   border-bottom: 1px solid #ebebeb !important;
}

tbody tr:last-child {
   border-bottom: none !important;
}

tbody td {
   padding: 16px 24px 16px 24px;
}

tbody td:last-child {
   text-align: right;
}
</style>
