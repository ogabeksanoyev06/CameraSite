import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useProductsStore = defineStore('products', () => {
   const api = useApi();

   async function getProducts() {
      try {
         const response = await api.get('/api/products');
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getProductId(id) {
      try {
         const response = await api.get(`/api/products/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }
   

   async function getProductsCategory(id) {
      try {
         const response = await api.get(`/api/product/category?product_category_id=${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   return {
      getProducts,
      getProductId,
      getProductsCategory
   };
});
