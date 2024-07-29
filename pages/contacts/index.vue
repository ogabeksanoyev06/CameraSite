<template>
   <div>
      <section class="my-20">
         <div class="container">
            <div class="grid grid-cols-1 items-start md:grid-cols-2 gap-6">
               <form class="flex flex-col gap-6" @submit.prevent="submitForm">
                  <h2 class="text-2xl font-medium">Hoziroq so‘rov qoldiring!</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <input
                        type="text"
                        placeholder="Ism familyangiz"
                        v-model="form.first_name"
                        pattern="[A-Za-zА-Яа-яЁё']+"
                        maxlength="30"
                        class="w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base"
                        required
                     />
                     <ClientOnly>
                        <input
                           type="text"
                           placeholder="Telefon raqamingiz"
                           v-model="form.phone"
                           v-maska="'+998 ## ###-##-##'"
                           class="w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base"
                           required
                        />
                     </ClientOnly>
                  </div>
                  <textarea
                     type="text"
                     placeholder="Izoh qoldiring"
                     v-model="form.text"
                     class="w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base"
                     required
                  />
                  <div class="flex sm:items-center justify-between sm:flex-row flex-col gap-5">
                     <div class="flex items-center space-x-2 max-w-[300px]">
                        <Checkbox id="agree" v-model="form.agree" @update:checked="form.agree = !form.agree" />
                        <Label for="agree" class="text-base leading-none"> Согласие с политикой обработки данных </Label>
                     </div>
                     <Button type="submit" :disabled="!isFormValid">
                        <span class="text-base"> Jo‘natish </span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5.83301 5.83337L9.16634 10L5.83301 14.1667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                           <path d="M10.833 5.83337L14.1663 10L10.833 14.1667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     </Button>
                  </div>
               </form>
               <div class="bg-background border border-grey-100 rounded-3xl p-4 sm:p-10">
                  <div class="flex flex-col gap-10">
                     <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div class="flex flex-col gap-4">
                           <p class="text-base text-[#778391]">Штаб квартира</p>
                           <p class="text-base">Videocam SE Kreuzstraße 75 78532 Tuttlingen Germany</p>
                        </div>
                        <div class="flex flex-col gap-4">
                           <p class="text-base text-[#778391]">Всего здесь для вас</p>
                           <p class="text-base">Горячая линия обслуживания 24/7</p>
                        </div>
                        <div class="flex flex-col gap-4">
                           <p class="text-base text-[#778391]">Контакт номер</p>
                           <a href="">info@videocam.com</a>
                           <div class="flex flex-col gap-1">
                              <a href="tel:+998991654532">+998 99 165 45 32</a>
                              <a href="tel:+998991654633">+998 99 165 46 33</a>
                           </div>
                        </div>
                        <div class="flex flex-col gap-4">
                           <p class="text-base text-[#778391]">Соц, сеть</p>
                           <nav class="flex flex-wrap gap-4">
                              <a href="#" target="_blank">
                                 <img src="/assets/svg/facebook.svg" alt="" />
                              </a>
                              <a href="#" target="_blank">
                                 <img src="/assets/svg/instagram.svg" alt="" />
                              </a>
                              <a href="#" target="_blank">
                                 <img src="/assets/svg/linkedin.svg" alt="" />
                              </a>
                              <a href="#" target="_blank">
                                 <img src="/assets/svg/telegram.svg" alt="" />
                              </a>
                           </nav>
                        </div>
                     </div>
                     <NuxtLink to="/" class="mt-10 ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="143" height="16" viewBox="0 0 143 16" fill="none">
                           <path d="M16.6444 0.468085L10.1143 15.4894H6.57123L0 0.468085H4.0169L8.36339 11.5532L12.7305 0.468085H16.6444Z" fill="#020105" />
                           <path d="M21.9698 15.4894H18.3237V0.468085H21.9698V15.4894Z" fill="#020105" />
                           <path
                              d="M26.0279 15.4894V0.468085H33.9999C35.3183 0.468085 36.465 0.624114 37.44 0.936171C38.4288 1.23404 39.3146 1.79433 40.0974 2.61702C41.3196 3.92199 41.9307 5.68794 41.9307 7.91489C41.9307 10.2837 41.2166 12.156 39.7884 13.5319C39.0468 14.2553 38.216 14.766 37.2958 15.0638C36.3895 15.3475 35.2565 15.4894 33.8969 15.4894H26.0279ZM29.6534 12.8298H33.9175C35.332 12.8298 36.4169 12.461 37.1722 11.7234C37.9276 10.9858 38.3052 9.66667 38.3052 7.76596C38.3052 6.02128 37.8589 4.75887 36.9663 3.97872C36.3208 3.41135 35.284 3.12766 33.8557 3.12766H29.6534V12.8298Z"
                              fill="#020105"
                           />
                           <path d="M58.9041 15.4894H44.9376V0.468085H58.4921V3.17021H48.5837V6.55319H58.1625V9.23404H48.5837V12.8085H58.9041V15.4894Z" fill="#020105" />
                           <path
                              d="M61.015 7.97872C61.015 6.57447 61.2622 5.34752 61.7566 4.29787C62.251 3.23404 62.917 2.40426 63.7548 1.80851C64.6062 1.19858 65.54 0.744681 66.5563 0.446809C67.5863 0.148936 68.6849 0 69.8522 0C71.047 0 72.1525 0.134752 73.1687 0.404255C74.1987 0.673759 75.1463 1.09929 76.0114 1.68085C76.8904 2.26241 77.5839 3.07801 78.092 4.12766C78.6001 5.17731 78.8542 6.41135 78.8542 7.82979C78.8542 10.3546 78.0783 12.3475 76.5264 13.8085C74.9883 15.2553 72.8048 15.9787 69.9758 15.9787C67.1468 15.9787 64.9427 15.2553 63.3634 13.8085C61.7978 12.3617 61.015 10.4184 61.015 7.97872ZM64.7641 8.08511C64.7641 8.7234 64.8603 9.34043 65.0525 9.93617C65.2448 10.5177 65.5332 11.0709 65.9177 11.5957C66.3159 12.1064 66.8584 12.5177 67.5451 12.8298C68.2454 13.1277 69.042 13.2766 69.9346 13.2766C70.841 13.2766 71.6306 13.1277 72.3035 12.8298C72.9765 12.5177 73.4846 12.156 73.8279 11.7447C74.185 11.3191 74.4665 10.8369 74.6725 10.2979C74.8922 9.75887 75.0227 9.31915 75.0639 8.97872C75.1188 8.62411 75.1463 8.29787 75.1463 8C75.1463 6.55319 74.6862 5.31206 73.7661 4.2766C72.8597 3.22695 71.5826 2.70213 69.9346 2.70213C68.2592 2.70213 66.9751 3.24114 66.0825 4.31915C65.2036 5.38298 64.7641 6.6383 64.7641 8.08511Z"
                              fill="#020105"
                           />
                           <path d="M84.5398 15.4894H81.1615V12.4468H84.5398V15.4894Z" fill="#020105" />
                           <path
                              d="M100.381 10.383H104.192C104.095 10.8085 103.944 11.2411 103.738 11.6809C103.546 12.1206 103.223 12.6099 102.77 13.1489C102.331 13.6879 101.802 14.1631 101.184 14.5745C100.58 14.9716 99.7764 15.305 98.7739 15.5745C97.7851 15.8582 96.6865 16 95.478 16C92.8138 16 90.692 15.305 89.1127 13.9149C87.5334 12.5106 86.7438 10.5248 86.7438 7.95745C86.7438 5.61702 87.506 3.70922 89.0303 2.23404C90.5684 0.744681 92.7863 0 95.6839 0C97.8538 0 99.6665 0.460993 101.122 1.38298C102.578 2.29078 103.546 3.39007 104.027 4.68085L100.051 5.19149C99.0211 3.57447 97.5654 2.76596 95.6839 2.76596C94.7638 2.76596 93.9536 2.92908 93.2532 3.25532C92.5528 3.58156 92.0104 4.01418 91.6258 4.55319C91.2551 5.0922 90.9735 5.65248 90.7813 6.23404C90.6027 6.8156 90.5135 7.40426 90.5135 8C90.5135 9.47518 91.001 10.7163 91.976 11.7234C92.9648 12.7305 94.2351 13.234 95.7869 13.234C97.998 13.234 99.5292 12.2837 100.381 10.383Z"
                              fill="#1878F3"
                           />
                           <path
                              d="M121.927 15.4894H117.848L116.612 12.6596H109.155L107.919 15.4894H103.943L110.968 0.468085H114.902L121.927 15.4894ZM115.438 10L112.904 4.12766L110.329 10H115.438Z"
                              fill="#1878F3"
                           />
                           <path
                              d="M143 15.4894H139.539L139.622 3.93617L134.946 15.4894H131.629L126.912 3.93617C126.967 11.2553 126.994 15.1064 126.994 15.4894H123.533V0.468085H128.807L133.318 11.4894L137.788 0.468085H143V15.4894Z"
                              fill="#1878F3"
                           />
                        </svg>
                     </NuxtLink>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>
<script setup>
import { reactive, computed } from 'vue';

import { useAplicationStore } from '~/stores/application.js';

const applicationStore = useAplicationStore();

const { sendAplication } = applicationStore;

const form = reactive({
   first_name: '',
   text: '',
   phone: '',
   agree: false
});
const resetForm = () => {
   form.first_name = '';
   form.phone = '';
   form.agree = false;
};

const isNameValid = computed(() => {
   const nameRegex = /^[A-Za-zА-Яа-яЁё']+$/;
   return nameRegex.test(form.first_name.trim());
});

const isFormValid = computed(() => {
   return form.agree && isNameValid.value && form.phone.trim() !== '';
});

const submitForm = () => {
   if (isFormValid.value) {
      sendAplication({
         first_name: form.first_name,
         phone_number: form.phone
      });
      resetForm();
   }
};
</script>
