<template>
   <section class="py-20">
      <div class="container flex flex-col gap-20">
         <section>
            <div class="flex flex-col gap-6">
               <h2 class="text-3xl font-semibold">
                  {{ translations['main.service_title2'] }}
               </h2>
               <Swiper @swiper="onSwiper" :modules="[SwiperAutoplay]" :loop="true" :autoplay="{
                  delay: 4000,
                  disableOnInteraction: true
               }" class="w-full rounded-2xl">
                  <SwiperSlide v-for="(item, i) in banners" :key="i">
                     <div class="relative overflow-hidden w-full p-5 md:p-10 xl:p-20 rounded-2xl sm:h-[450px]">
                        <div class="absolute inset-0 -z-[2]">
                           <img :src="`${useRuntimeConfig().public.apiBaseUrl}/storage/${item.photo}`" alt=""
                              class="w-full h-full object-cover" />
                        </div>
                        <div class="absolute inset-0 -z-[1]"
                           style="background: rgba(0, 24, 49, 0.4); mix-blend-mode: hard-light"></div>
                        <div class="relative flex flex-col justify-between gap-10 z-50">
                           <div class="relative z-50 flex flex-col gap-6 max-w-[560px] w-full">
                              <h2 class="text-xl xl:text-3xl font-semibold text-white">{{ item?.title[locale] }}</h2>
                              <div v-html="item?.descriptions[locale]" class="text-base text-white"></div>

                              <div class="mt-32">
                                 <Button v-if="item?.url != null" @click="navigateToExternalLink(item?.url)"
                                    class=" z-40 max-w-max rounded-[8px] !border-white/40 !bg-white/5 backdrop-blur-[8px] max-sm:px-3 max-sm:py-2">
                                    <span>{{ translations['main.btn1'] }}</span>
                                    <img src="/assets/svg/right.svg" alt="" />
                                 </Button>
                              </div>

                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <div class="hidden md:block absolute bottom-0 w-full p-5 md:p-10 xl:p-20">
                     <div class="flex items-center justify-between">
                        <div>

                        </div>

                        <div class="flex items-center gap-4 z-30">
                           <Button size="icon" class="rounded-full !border-white/40 !bg-white/5 backdrop-blur-[8px]"
                              @click="categorySwiper.slidePrev()">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                 <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </Button>
                           <Button size="icon" class="rounded-full border-white/40 !bg-white/5 backdrop-blur-[8px]"
                              @click="categorySwiper.slideNext()">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                 <path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </Button>
                        </div>
                     </div>
                  </div>
               </Swiper>
            </div>
         </section>
      </div>
   </section>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations';

defineProps(['banners']);

const { locale } = useI18n();

function navigateToExternalLink(link) {
   window.open(link, '_blank');
}

const translationsStore = useTranslationStore();
const { translations } = storeToRefs(translationsStore);

const categorySwiper = ref(null);

function onSwiper(swiper) {
   categorySwiper.value = swiper;
}
</script>
