<template>
   <div class="flex flex-col gap-2 bg-white rounded-2xl overflow-hidden group">
      <div class="overflow-hidden flex items-center justify-center w-full">
         <img :src="`${useRuntimeConfig().public.apiBaseUrl}/site/images/products/${photo}`"
            class="group-hover:scale-105 transition-300" />
      </div>
      <div class="p-2">
         <div class="flex flex-col items-start gap-4  p-6 rounded-2xl bg-[#F5F5F7]">
            <h3 class="text-base line-clamp-2">
               {{ title }}
            </h3>
            <div class="text-sm line-clamp-2 min-h-[40px]" v-html="subtitle" />
            <Button variant="link" class="!px-0 !py-0 text-black">

               <DialogRoot :open="isModalOpen">
                  <DialogTrigger @click="isModalOpen = true">
                     <span>{{ translations['main.buy'] }}</span>
                  </DialogTrigger>
                  <DialogPortal>
                     <DialogOverlay @click="isModalOpen = false"
                        class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
                     <DialogContent aria-describedby="order" @click.prevent
                        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-white p-[25px] focus:outline-none z-[100] shadow-sm">
                        <DialogTitle class="text-mauve12 m-0 text-xl font-semibold">
                           {{ translations['main.buy'] }}
                        </DialogTitle>

                        <div class="my-5 border-t border-t-[#EBEBEB]" />

                        <div>
                           <label class="text-lg font-medium mb-1 block" for="buy-name">{{
                              translations['form.input-order-name'] }} </label>
                           <input v-model="first_name" id="buy-name" type="text"
                              :placeholder="translations['form.name-placeholder']"
                              class="w-full h-full text-base sm:text-sm border border-[#EBEBEB] rounded-xl bg-transparent transition-300 p-4 outline-none placeholder:[#BFCAD6] placeholder:text-base"
                              required />

                           <label class="mt-4 text-lg font-medium mb-1 block" for="buy-tel">{{
                              translations['form.input-phone'] }} </label>
                           <input v-model="phone_number" id="buy-tel" type="text"
                              :placeholder="translations['form.phone-placeholder']" v-maska="'+998 ## ###-##-##'"
                              class="w-full h-full text-base sm:text-sm border border-[#EBEBEB] rounded-xl bg-transparent transition-300 p-4 outline-none placeholder:[#BFCAD6] placeholder:text-base"
                              required />

                           <Button :disabled="first_name.length < 1 || phone_number.length < 17" @click="submitForm"
                              class="block w-full mt-6" type="submit">
                              {{ translations['main.buy'] }}
                           </Button>
                        </div>

                        <DialogClose @click="isModalOpen = false"
                           class="mt-3 mr-2 text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[30px] w-[30px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none text-xl"
                           aria-label="Close">
                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                              fill="none">
                              <path d="M16.2431 7.75786L7.75781 16.2431M16.2431 16.2431L7.75781 7.75781"
                                 stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>
                        </DialogClose>
                     </DialogContent>
                  </DialogPortal>
               </DialogRoot>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                     <path d="M5.83301 5.83301L9.16634 9.99967L5.83301 14.1663" stroke="#020105" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M10.833 5.83301L14.1663 9.99967L10.833 14.1663" stroke="#020105" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
               </span>
            </Button>
         </div>
      </div>
   </div>
</template>

<script setup>
const isModalOpen = ref(false);
const first_name = ref("");
const phone_number = ref("");

const { id, title, subtitle, photo } = defineProps({
   id: Number,
   title: String,
   subtitle: String,
   photo: String
});

import { useTranslationStore } from '~/stores/translations';
import { useAplicationStore } from '~/stores/application.js';

const translationsStore = useTranslationStore();
const { translations } = storeToRefs(translationsStore);

const applicationStore = useAplicationStore();

const { sendAplication } = applicationStore;

const submitForm = () => {
   sendAplication({
      first_name: first_name.value,
      phone_number: phone_number.value.replace(/[\s-]/g, ''),
      descriptions: title,
   });

   first_name.value = "";
   phone_number.value = "";
   isModalOpen.value = false;

};

import {
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogOverlay,
   DialogPortal,
   DialogRoot,
   DialogTitle,
   DialogTrigger,
} from 'radix-vue'
</script>
