<template>
   <div class="contact-bg">
      <div class="">
         <div class="flex md:grid flex-col-reverse grid-cols-1 items-center md:grid-cols-2 gap-6 md:gap-20">
            <div class="max-w-[600px] md:ml-auto w-full md:py-10 p-4">
               <div class="flex flex-col gap-6 sm:gap-10">
                  <div class="flex flex-col gap-3 md:gap-6">
                     <h2 class="text-lg md:text-2xl xl:text-3xl font-semibold text-white">{{translations['form.title']}}</h2>
                     <div class="flex items-center gap-4">
                        <img src="/assets/images/2.png" alt="" class="w-10 h-10 object-cover rounded-full" />
                        <div class="flex flex-col gap-2">
                           <p class="text-base font-medium text-white">{{ translations['form.manager'] }}</p>
                           <p class="text-xs text-green-100">{{translations['form.phone']}}</p>
                        </div>
                     </div>
                  </div>
                  <form @submit.prevent="submitForm">
                     <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <input type="text" :placeholder="translations['form.input-name']" v-model="form.first_name"
                           pattern="[A-Za-zА-Яа-яЁё']+" maxlength="30"
                           class="w-full h-full text-base sm:text-sm text-white border-b border-[#3D4855] bg-transparent transition-300 py-3 outline-none placeholder:[#BFCAD6] placeholder:text-base"
                           required />
                        <ClientOnly>
                           <input type="text" :placeholder="translations['form.input-phone']" v-model="form.phone"
                              v-maska="'+998 ## ###-##-##'"
                              class="w-full h-full text-base sm:text-sm text-white border-b border-[#3D4855] bg-transparent transition-300 py-3 outline-none placeholder:[#BFCAD6] placeholder:text-base"
                              required />
                        </ClientOnly>
                     </div>
                     <div class="flex sm:items-center justify-between sm:flex-row flex-col gap-5">
                        <div class="flex items-center space-x-2">
                           <Checkbox :id="uniqued" v-model="form.agree" @update:checked="form.agree = !form.agree" :checked="form.agree" />
                           <Label :for="uniqued" class="text-white text-base leading-none"> {{translations['form.confirm']}} </Label>
                        </div>
                        <Button type="submit" :disabled="!isFormValid"
                           class="sm:max-w-[300px] w-full max-sm:px-3 max-sm:py-2">
                           <span class="text-base"> {{translations['form.send']}} </span>
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.83301 5.83337L9.16634 10L5.83301 14.1667" stroke="white" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M10.833 5.83337L14.1663 10L10.833 14.1667" stroke="white" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round" />
                           </svg>
                        </Button>
                     </div>
                  </form>
               </div>
            </div>
            <div
               class="md:h-[460px] max-w-[920px] relative before:absolute before:bg-[#F3C318]/70 before:inset-0 before:w-full before:h-full clip-path-custom">
               <img src="/assets/images/abc.jpg" alt="" class="h-full w-full object-cover" />
            </div>
         </div>
      </div>
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

const uniqued = `agree-${Math.random().toString(36).substr(2, 9)}`;

const form = reactive({
   first_name: '',
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
         phone_number: form.phone.replace(/[\s-]/g, '')
      });
      resetForm();
   }
};
</script>

<style scoped>
.contact-bg {
   background-image: url('/assets/images/contact-bg.png');
   background-size: cover;
   background-position: center;
}

@media (min-width: 768px) {
   .clip-path-custom {
      clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
   }
}
</style>
