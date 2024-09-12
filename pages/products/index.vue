<template>

   <Head>
      <Title>Products | ENERGY MONTAJ GROUP</Title>
   </Head>

   <div class="bg-[#F5F5F7]">
      <section class="container py-12">
         <div class="grid lg:grid-cols-[340px_minmax(0,1fr)] gap-6 sm:mt-0 mt-10">
            <div class="">
               <div class="sticky top-10 border-r border-grey-200 pr-6">
                  <Accordion type="single" class="w-full" collapsible>
                     <h4 @click="setAllProducts" class="cursor-pointer mb-1"
                        :class="{ 'font-bold': categoryId === null }">{{ translations['main.all'] }}</h4>
                     <AccordionItem v-for="category in categories" class="border-none"
                        :value="'product' + category?.id">
                        <AccordionTrigger v-if="category?.product_category_id === null"
                           @click="activeSubCategory(category?.id)" class="py-2"
                           :class="{ 'font-bold': category?.id === categoryId }">
                           {{ category?.title[$i18n.locale] }}
                        </AccordionTrigger>
                        <AccordionContent>
                           <ul>
                              <li v-for="i in category.product_categories" @click="getProductsByCategory(i?.id)"
                                 class="flex items-center justify-between cursor-pointer py-3"
                                 :class="{ 'font-semibold': i?.id === subCategoryId }">
                                 <span class="flex-1">
                                    {{ i?.title[$i18n.locale] }}
                                 </span>

                                 <svg v-if="i?.id === subCategoryId" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M11.6667 13.3333L15 9.99998M15 9.99998L11.6667 6.66665M15 9.99998L5 9.99998"
                                       stroke="#1878F3" stroke-width="1.5" stroke-linecap="round"
                                       stroke-linejoin="round" />
                                 </svg>
                              </li>
                           </ul>
                        </AccordionContent>
                     </AccordionItem>
                  </Accordion>
               </div>
            </div>
            <div class="">
               <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div v-for="product in products" data-aos="fade-up">
                     <Card :id="1" :photo="product?.photo[0]" :title="product?.title[$i18n.locale]"
                        :subtitle="product?.descriptions[$i18n.locale]" />
                  </div>
               </div>
            </div>
         </div>
      </section>
      <SectionContactUs />
   </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products.js';
import { useCategoriesStore } from '~/stores/categories.js';
import { useTranslationStore } from '~/stores/translations.js';

const translationsStore = useTranslationStore();
const { translations } = storeToRefs(translationsStore);

const categoriesStore = useCategoriesStore();
const productsStore = useProductsStore();
const { getProductsCategories } = categoriesStore;
const { getProducts, getProductsCategory } = productsStore;

const { data: categories } = useAsyncData("categories", async () => {
   return await getProductsCategories();
});

const { data: productsData } = useAsyncData("products", async () => {
   return await getProducts();
});
const products = ref([]);
const subCategoryId = ref(null);
const categoryId = ref(null);

const activeSubCategory = (id) => {
   categoryId.value = id;
};

const getProductsByCategory = async (id) => {
   const newProducts = await getProductsCategory(id);

   products.value = newProducts;
   subCategoryId.value = id;
};

products.value = productsData.value;

const setAllProducts = () => {
   categoryId.value = null;
   subCategoryId.value = null;
   products.value = productsData.value;
}
</script>
