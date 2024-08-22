<template>
   <div
      class="hero min-h-[calc(100vh-var(--header-height))] lg:min-h-screen h-full pt-[calc(var(--header-height)+20px)] -mt-[var(--header-height)] flex items-center py-4">
      <div class="container grid gap-4 lg:grid-cols-2 lg:items-center">
         <div class="lg:order-1 order-2 flex flex-col gap-6 sm:gap-10 max-w-[586px] w-full">
            <div class="flex flex-col gap-4">
               <h1 class="xl:text-5xl lg:text-4xl md:text-3xl text-xl font-semibold text-white">
                  {{ translations['main.hero_title'] }}
               </h1>
               <p class="text-base text-white">{{ translations['main.hero_text'] }}</p>
            </div>
            <div class="flex flex-wrap gap-2 sm:gap-4">
               <Dialog v-model:open="openModal">
                  <DialogTrigger as-child>
                     <Button @click="openModal = true">
                        <span> {{ translations['main.btn2'] }}</span>
                        <img src="/assets/svg/right.svg" alt="" />
                     </Button>
                  </DialogTrigger>
                  <DialogContent class="sm:max-w-[700px] p-10 !rounded-3xl">
                     <div class="flex flex-col gap-10">
                        <div class="flex flex-col gap-3 md:gap-6">
                           <h2 class="text-lg md:text-2xl xl:text-3xl font-semibold">{{translations['form.title']}}</h2>
                           <div class="flex items-center gap-4">
                              <img src="/assets/images/2.png" alt="" class="w-10 h-10 object-cover rounded-full" />
                              <div class="flex flex-col gap-2">
                                 <p class="text-base font-medium">{{translations['form.manager']}}</p>
                                 <p class="text-xs">{{translations['form.phone']}}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <form @submit.prevent="submitForm" class="flex flex-col gap-6">
                        <div class="flex sm:items-center justify-between sm:flex-row flex-col gap-5">
                           <input type="text" v-model="form.first_name" maxlength="30"
                              class="w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base"
                              :placeholder="translations['form.input-name']" required />
                           <ClientOnly>
                              <input type="text" :placeholder="translations['form.input-phone']" v-model="form.phone"
                                 v-maska="'+998 ## ###-##-##'"
                                 class="w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base"
                                 minlength="16" required />
                           </ClientOnly>
                        </div>
                        <div class="flex sm:items-center justify-between sm:flex-row flex-col gap-5">
                           <div class="flex items-center space-x-2">
                              <Checkbox id="agreee" v-model="form.agree" @update:checked="form.agree = !form.agree" :checked="form.agree" />
                              <Label for="agreee" class="text-base leading-none"> {{translations['form.confirm']}}
                              </Label>
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
                  </DialogContent>
               </Dialog>
               <Button @click="$router.push(localePath('/about'))" variant="outline">{{ translations['main.btn1']
                  }}</Button>
            </div>
         </div>
         <div class="lg:order-2 order-1">
            <img src="/assets/images/Rectangle 78.png" alt=""
               class="lg:max-w-[700px] lg:h-[400px] w-full object-cover ml-auto rounded-lg" />
         </div>
      </div>
   </div>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations';
import { useAplicationStore } from '~/stores/application.js';

const localePath = useLocalePath();

const translationsStore = useTranslationStore();
const applicationStore = useAplicationStore();

const { translations } = storeToRefs(translationsStore);
const { sendAplication } = applicationStore;

const openModal = ref(false);

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
   return form.agree && isNameValid.value && form.phone.length >= 17;
});

const submitForm = () => {
   if (isFormValid.value) {
      sendAplication({
         first_name: form.first_name,
         phone_number: form.phone.replace(/[\s-]/g, '')
      });
      resetForm();
      openModal.value = false;
   }
};
</script>

<style>
.hero {
   background-image: url('/assets/images/contact-bg.png');
   background-size: cover;
   background-repeat: no-repeat;
}
</style>
