<template>
   <div class="flex min-h-screen flex-col">
      <LayoutHeader />

      <main>
         <slot />
      </main>

      <LayoutFooter />
   </div>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations.js';

const { locale } = useI18n();

const translationsStore = useTranslationStore();

const { getTranslation } = translationsStore;

await getTranslation();

watch(locale, async () => await getTranslation(), { deep: true });
</script>
