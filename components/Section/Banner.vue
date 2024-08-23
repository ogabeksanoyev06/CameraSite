<template>
   <div class="absolute inset-x-0 -bottom-[75px] md:-bottom-[150px] xl:-bottom-[170px]">
      <div class="container">
         <div class="relative w-full h-[150px] md:h-[300px] xl:h-[340px] transition-300 z-40" id="banner">
            <img src="/assets/images/banner.png" alt="" class="w-full h-full object-cover rounded-2xl" />
            <div class="absolute bottom-0 left-0 p-3 md:p-6 xl:p-12">
               <h1 class="text-2xl md:text-3xl xl:text-4xl text-white">{{ title }}</h1>
            </div>
            <!-- :class="bannerM ? 'mt-10' : '-mt-[75px] md:-mt-[150px] xl:-mt-[170px]'" -->
         </div>
      </div>
   </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const localePath = useLocalePath();
import { useTranslationStore } from '~/stores/translations';
import { useAppStore } from '~/stores/app';

const translationsStore = useTranslationStore();
const appStore = useAppStore();
const { bannerTitle } = storeToRefs(appStore);
const { translations } = storeToRefs(translationsStore);

const bannerM = ref(false);

const title = ref("");

const setTitle = () => {
   if (!translations.value) return; // Ensure translations are loaded

   switch (route.path) {
      case localePath('/about'):
         title.value = translations.value['header.about'];
         break;
      case localePath('/portfolio'):
         title.value = translations.value['header.portfolio'];
         break;
      case localePath('/products'):
         title.value = translations.value['header.products'];
         break;
      case localePath('/contacts'):
         title.value = translations.value['header.contacts'];
         break;
      default:
         title.value = bannerTitle.value;
   }
};

watch(
   [() => route.path, () => translations.value, () => bannerTitle.value],
   () => {
      setTitle();
      console.log(translations.value['header.about']);

   },
   { immediate: true }
);

onMounted(() => {
   if (process.client) {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 48) {
            bannerM.value = true;
         } else if (window.scrollY <= 48) {
            bannerM.value = false;
         }
      });
   }
});
</script>
