import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useFaqStore = defineStore('faq', () => {
   const api = useApi();

   async function getFaqs() {
      try {
         const response = await api.get('/api/faq');         
         return response.data;

      } catch (error) {
         console.log(error);
      }
   }

   return {
    getFaqs
   };
});
