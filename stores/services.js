import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useServicesStore = defineStore('services', () => {
   const api = useApi();

   async function getServices() {
      try {
         const response = await api.get('/api/services');
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }
   return {
      getServices
   };
});
