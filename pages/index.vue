<template>

   <Head>
      <Title>Fireprotection</Title>
      <Meta name="description" content="FIREPROTECHTION bugungi kunda tajribali, ishonchli va oldindan aytib bo'ladigan biznes hamkori
         sifatida obro'ga ega bo'lgan barqaror va dinamik rivojlanayotgan tashkilotdir. Yillar davomida biz O'zbekistion
         Respublikasining yirik infratuzilma ob'ektlarida yong'in xavfsizligini ta'minlash sohasida eng murakkab
         vazifalarni hal qila oladigan mutaxassislar jamoasini shakllantirdik. Biz yong'in xavfsizligi bo'yicha to'liq
         xizmatlar majmuini taklif etamiz. Bir nechta ijrochini qidirmang – bizning mutaxassislarimiz nafaqat yong'in
         xavfsizligi tizimlarini loyihalash va o'rnatish bilan shug'ullanadi, balki STU, KITM, yong'inni o'chirish
         rejalari tuzadi va yong'in auditi ham o'tkazadilar. Bizning kompaniyamizga murojaat qilgan holda, siz har
         qanday murakkablikdagi ob'ektlar uchun kafolatlangan himoya va xavfsizlikni olasiz." />
   </Head>
   
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
