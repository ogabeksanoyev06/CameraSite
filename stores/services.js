import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';
import { useAppStore } from './app';

export const useServicesStore = defineStore('services', () => {
   const api = useApi();
   const { locale } = useI18n();
   const appStore = useAppStore();

   const { setBannerTitle } = appStore;

   async function getServices() {
      try {
         const response = await api.get('/api/services');
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getServiceById(id) {
      try {
         const { data } = await api.get('/api/services/' + id);

         setBannerTitle(data?.title[locale.value]);
         return data;
      } catch (error) {
         console.log(error);
      }
   }

   return {
      getServices,
      getServiceById
   };
});
