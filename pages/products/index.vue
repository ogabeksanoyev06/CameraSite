<template>
   <div class="bg-[#F5F5F7]">
      <section class="container py-12">
         <div class="grid lg:grid-cols-[340px_minmax(0,1fr)] gap-6">
            <div class="">
               <div class="sticky top-10 border-r border-grey-200 pr-6">
                  <Accordion type="single" class="w-full" collapsible>
                     <AccordionItem class="border-none" v-for="(item, i) in categories" :key="i" :value="i + 'a'">
                        <AccordionTrigger class="py-2" v-if="item.product_category_id === null" @click="activeSubCategory(item.id)">
                           {{ item.title[$i18n.locale] }}
                        </AccordionTrigger>
                        <AccordionContent>
                           <ul class="">
                              <li
                                 class="flex items-center justify-between cursor-pointer py-2"
                                 v-for="(subCategory, i) in subCategory"
                                 @click="navigateToSubCategory(subCategory.id)"
                              >
                                 <span class="flex-1">
                                    {{ subCategory.title[$i18n.locale] }}
                                 </span>
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="subCategory.id == currentSubCategoryId">
                                    <path
                                       d="M11.6667 13.3333L15 9.99998M15 9.99998L11.6667 6.66665M15 9.99998L5 9.99998"
                                       stroke="#1878F3"
                                       stroke-width="1.5"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                    />
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
                  <div v-for="(item, i) in products" data-aos="fade-up" :key="i">
                     <Card :id="item.id" :photo="item.photo[0]" :title="item.title[$i18n.locale]" :subtitle="item.descriptions[$i18n.locale]" />
                  </div>
               </div>
            </div>
         </div>
      </section>
      <SectionContactUs />
   </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Card from '~/components/ui/card/Card.vue';
import { useProductsStore } from '~/stores/products.js';
import { useCategoriesStore } from '~/stores/categories.js';

const route = useRoute();

const currentSubCategoryId = ref(null);
const categoryId = ref(null);
const subCategory = ref([]);

const categoriesStore = useCategoriesStore();
const productsStore = useProductsStore();

const { getProductsCategories } = categoriesStore;
const { getProductsCategory } = productsStore;

const activeSubCategory = (id) => {
   subCategory.value = categories.value.filter((c) => c.product_category_id == id);
};

const navigateToSubCategory = (subCategory) => {
   navigateTo({ query: { id: subCategory } });
};

const { data: categories } = await useAsyncData('categories', async () => {
   return await getProductsCategories();
});

currentSubCategoryId.value = Number(route.query?.subCategoryId || subCategory.value?.[0]?.id);

const { data: products } = await useAsyncData(
   'products',
   async () => {
      if (currentSubCategoryId.value || route.query.id) {
         return await getProductsCategory(currentSubCategoryId.value);
      }
   },
   {
      watch: [() => route.query.id]
   }
);

watch(
   () => route.query.id,
   (newCategoryId) => {
      currentSubCategoryId.value = newCategoryId;
   },
   { immediate: true }
);
</script>
