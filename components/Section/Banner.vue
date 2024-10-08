<template>
   <div class="absolute inset-x-0 -bottom-[75px] md:-bottom-[150px] xl:-bottom-[170px]">
      <div class="container">
         <div
            class="relative w-full h-[150px] md:h-[300px] xl:h-[340px] transition-300 z-40 rounded-2xl overflow-hidden"
            id="banner">
            <img :src="imageUrl" alt="" class="w-full h-full object-cover" />
            <div class="absolute bottom-0 left-0 p-3 md:p-6 xl:p-12 w-full gradient">
               <h1 class="text-2xl md:text-3xl xl:text-4xl text-white">{{ title }}</h1>
            </div>
            <!-- :class="bannerM ? 'mt-10' : '-mt-[75px] md:-mt-[150px] xl:-mt-[170px]'" -->
         </div>
      </div>
   </div>
</template>

<script setup>
import bannerImage from '@/assets/images/banner.png';
import bannerAbout from '@/assets/images/about.png';
import banner1 from '@/assets/images/banner1.png';
import banner2 from '@/assets/images/banner2.png';
import banner3 from '@/assets/images/banner3.png';
import banner4 from '@/assets/images/banner4.png';
import banner5 from '@/assets/images/banner5.png';

import { useRoute } from 'vue-router';
const route = useRoute();
const localePath = useLocalePath();
import { useTranslationStore } from '~/stores/translations';
import { useAppStore } from '~/stores/app';

const imageUrl = ref(bannerImage);

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
         imageUrl.value = bannerAbout
         break;
      case localePath('/portfolio'):
         title.value = translations.value['header.portfolio'];
         imageUrl.value = banner3
         break;
      case localePath('/services/1'):
         imageUrl.value = banner1
         title.value = bannerTitle.value;
         break
      case localePath('/services/2'):
         imageUrl.value = banner2
         title.value = bannerTitle.value;
         break
      case localePath('/services/3'):
         imageUrl.value = banner2
         title.value = bannerTitle.value;
         break
      case localePath('/products'):
         title.value = translations.value['header.products'];
         imageUrl.value = banner4
         break;
      case localePath('/contacts'):
         title.value = translations.value['header.contacts'];
         imageUrl.value = banner5
         break;
      default:
         title.value = bannerTitle.value;
         imageUrl.value = "banner.png"
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

<style scoped>
.gradient {
   background: linear-gradient(to top, #000000a6, #00000001);
}
</style>
