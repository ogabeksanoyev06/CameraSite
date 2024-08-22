<template>
   <div>
      <section class="my-20">
         <div class="container">
            <div class="grid grid-cols-1 items-start md:grid-cols-2 gap-6">
               <form class="flex flex-col gap-6" @submit.prevent="submitForm">
                  <h2 class="text-2xl font-medium">{{ translations['form.contact-title'] }}</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <input type="text" :placeholder="translations['form.input-name']" v-model="form.first_name"
                        pattern="[A-Za-zА-Яа-яЁё']+" maxlength="30"
                        class="w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base"
                        required />
                     <ClientOnly>
                        <input type="text" :placeholder="translations['form.input-phone']" v-model="form.phone"
                           v-maska="'+998 ## ###-##-##'"
                           class="w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base"
                           required />
                     </ClientOnly>
                  </div>
                  <textarea type="text" :placeholder="translations['form.input-message']" v-model="form.text"
                     class="w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base"
                     required />
                  <div class="flex sm:items-center justify-between sm:flex-row flex-col gap-5">
                     <div class="flex items-center space-x-2 max-w-[300px]">
                        <Checkbox id="agree" v-model="form.agree" @update:checked="form.agree = !form.agree" />
                        <Label for="agree" class="text-base leading-none"> {{translations['form.confirm']}}
                        </Label>
                     </div>
                     <Button type="submit" :disabled="!isFormValid">
                        <span class="text-base"> {{ translations['form.send'] }} </span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5.83301 5.83337L9.16634 10L5.83301 14.1667" stroke="white" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round" />
                           <path d="M10.833 5.83337L14.1663 10L10.833 14.1667" stroke="white" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     </Button>
                  </div>
               </form>
               <div class="bg-background border border-grey-100 rounded-3xl p-4 sm:p-10">
                  <div class="flex flex-col gap-10">
                     <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div class="flex flex-col gap-4">
                           <p class="text-base text-[#778391]">{{translations['form.location-title']}}</p>
                           <p class="text-base">{{translations['form.location-title']}}</p>
                        </div>
                        <div class="flex flex-col gap-4">
                           <p class="text-base text-[#778391]">{{translations['form.support-title']}}</p>
                           <p class="text-base">{{translations['form.support']}}</p>
                        </div>
                        <div class="flex flex-col gap-4">
                           <p class="text-base text-[#778391]">{{translations['form.kontakt-title']}}</p>
                           <a href="">{{translations['form.kontakt-email']}}</a>
                           <div class="flex flex-col gap-1">
                              <a href="tel:+998991654532">{{translations['form.kontakt-phone-1']}}</a>
                              <a href="tel:+998991654633">{{translations['form.kontakt-phone-2']}}</a>
                           </div>
                        </div>
                        <div class="flex flex-col gap-4">
                           <p class="text-base text-[#778391]">{{translations['form.social']}}</p>
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
                        <img src="@/assets/svg/logo_dark.svg" alt="logo">
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
import { useTranslationStore } from '~/stores/translations';
import { useAplicationStore } from '~/stores/application.js';

const translationsStore = useTranslationStore();
const { translations } = storeToRefs(translationsStore);


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
   return form.agree && isNameValid.value && form.phone.trim() !== '' && form.phone.length >= 17;
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
