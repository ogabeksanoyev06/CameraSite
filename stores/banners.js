import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useBannerStore = defineStore('banner', () => {
   const api = useApi();

   async function getBanners() {
      try {
         const response = await api.get('/api/banners');
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getGallery() {
      try {
         const response = await api.get('/api/gellery');
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   return {
      getBanners,
      getGallery
   };
});
