<template>
   <div>
      <SectionHeroBanner />
      <SectionAboutUs />
      <SectionServices />
      <SectionContactUs />
      <SectionServicesSwiper :banners="data.banners" />
      <SectionCompanyStatistics />
      <SectionContactUs />
   </div>
</template>

<script setup>
import { useBannerStore } from '~/stores/banners.js';

const bannerStore = useBannerStore();

const { getBanners } = bannerStore;

const { data } = await useAsyncData('main', async () => {
   const [banners] = await Promise.all([getBanners()]);

   return { banners };
});
</script>
