export const useAppStore = defineStore('app', () => {
   const bannerTitle = ref('service title');

   const setBannerTitle = (title) => {
      bannerTitle.value = title;
   };

   return {
      bannerTitle,
      setBannerTitle
   };
});
