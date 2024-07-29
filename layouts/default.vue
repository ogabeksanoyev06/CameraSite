<template>
   <div class="flex min-h-screen flex-col">
      <LayoutHeader />
      <div class="flex-1">
         <main>
            <slot />
         </main>
      </div>
      <LayoutFooter />
   </div>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations.js';

const { locale } = useI18n();

const translationsStore = useTranslationStore();

const { getTranslation } = translationsStore;

const { data } = await useAsyncData(
   'translations',
   () => {
      return getTranslation();
   },
   { watch: [locale] }
);
</script>
