import { u as useApi } from './useApi-c7CEENz9.mjs';
import { ref } from 'vue';
import { d as defineStore, f as useI18n } from './server.mjs';

const useTranslationStore = defineStore("translations", () => {
  const api = useApi();
  const { locale } = useI18n();
  const translations = ref({});
  async function getTranslation() {
    try {
      let res = await api.get(`/api/translations/${locale.value}`);
      translations.value = res.data;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    getTranslation,
    translations
  };
});

export { useTranslationStore as u };
//# sourceMappingURL=translations-DntSngHY.mjs.map
