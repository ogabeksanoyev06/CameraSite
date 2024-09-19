<template>
   <header id="header" class="relative w-full z-50 transition-300"
      :class="{ 'bg-header pb-[140px] md:pb-[200px] xl:pb-[280px] mb-[20px] md:mb-[100px] xl:mb-[170px]': route.path !== localePath('/') }">
      <div class="container relative z-[9999]">
         <div class="flex items-center justify-between border-b border-gray-500 h-20">
            <div class="mr-4 md:mr-1 flex items-center">
               <NuxtLink :to="localePath('/')" class="mr-2 lg:mr-4">
                  <img class="min-w-[180px]" src="/assets/svg/logo.svg" alt="logo" />
               </NuxtLink>
               <nav class="hidden lg:flex items-center gap-1 text-sm font-medium">
                  <NuxtLink :to="localePath('/about')"
                     class="aa lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white whitespace-nowrap">
                     {{ translations['header.about'] }}
                  </NuxtLink>
                  <DropdownMenu v-model:open="isServiceDropdownOpen">
                     <DropdownMenuTrigger @click="toggleServiceDropdown" class="flex items-center gap-2">
                        <div
                           class="lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white cursor-pointer flex gap-2">
                           {{ translations['header.services'] }}
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                              fill="none" class="transition-transform duration-300 flex-shrink-0"
                              :class="{ 'rotate-180': isDropdownOpen }">
                              <path d="M5.83301 8.33333L9.99967 11.6667L14.1663 8.33333" stroke="white"
                                 stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>
                        </div>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent>
                        <DropdownMenuItem @click="router.push(localePath('/services/' + service?.id))"
                           v-for="service in services"
                           class="flex items-center gap-2 cursor-pointer hover:!text-inherit"
                           :class="{ 'text-primary': $route.path == localePath('/services/' + service?.id) }">
                           {{ service?.title[locale] }}
                        </DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
                  <!-- <HoverCard :open-delay="200" :close-delay="300">
                        <HoverCardTrigger>
                           <div class="lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white cursor-pointer">
                              {{ translations['header.services'] }}
                           </div>
                        </HoverCardTrigger>
                        <HoverCardContent class="flex flex-col gap-1 p-0 whitespace-nowrap w-full">
                           <NuxtLink v-for="service in services" :key="service?.id"
                              :to="localePath(`/services/${service?.id}`)"
                              class="lg:px-3 hover:text-primary xl:px-4 py-1 relative nav z-10 rounded-lg text-black">
                              {{ service?.title[locale] }}
                           </NuxtLink>
                        </HoverCardContent>
                     </HoverCard> -->

                  <NuxtLink :to="localePath('/portfolio')"
                     class="aa lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white">
                     {{ translations['header.portfolio'] }}
                  </NuxtLink>
                  <NuxtLink :to="localePath('/products')"
                     class="aa lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white">
                     {{ translations['header.products'] }}
                  </NuxtLink>
                  <NuxtLink :to="localePath('/contacts')"
                     class="aa lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white">
                     {{ translations['header.contacts'] }}
                  </NuxtLink>
               </nav>
            </div>
            <Sheet>
               <SheetTrigger as-child>
                  <Button size="icon"
                     class="flex lg:hidden rounded-[8px] !border-white/40 !bg-white/5 backdrop-blur-[8px]">
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M11.6666 13.3335H28.3333M11.6666 20.0002H28.3333M11.6666 26.6668H28.3333" stroke="#fff"
                           stroke-width="1.5" stroke-linecap="round"></path>
                     </svg>
                  </Button>
               </SheetTrigger>
               <SheetContent class="flex flex-col justify-between">
                  <div class="flex flex-col space-y-2 text-center sm:text-left">
                     <NuxtLink to="/" class="text-center flex justify-center w-full">
                        <svg width="143" height="16" viewBox="0 0 143 16" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M16.6444 0.468085L10.1143 15.4894H6.57123L0 0.468085H4.0169L8.36339 11.5532L12.7305 0.468085H16.6444Z"
                              fill="#020105" />
                           <path d="M21.9698 15.4894H18.3237V0.468085H21.9698V15.4894Z" fill="#020105" />
                           <path
                              d="M26.0279 15.4894V0.468085H33.9999C35.3183 0.468085 36.465 0.624114 37.44 0.936171C38.4288 1.23404 39.3146 1.79433 40.0974 2.61702C41.3196 3.92199 41.9307 5.68794 41.9307 7.91489C41.9307 10.2837 41.2166 12.156 39.7884 13.5319C39.0468 14.2553 38.216 14.766 37.2958 15.0638C36.3895 15.3475 35.2565 15.4894 33.8969 15.4894H26.0279ZM29.6534 12.8298H33.9175C35.332 12.8298 36.4169 12.461 37.1722 11.7234C37.9276 10.9858 38.3052 9.66667 38.3052 7.76596C38.3052 6.02128 37.8589 4.75887 36.9663 3.97872C36.3208 3.41135 35.284 3.12766 33.8557 3.12766H29.6534V12.8298Z"
                              fill="#020105" />
                           <path
                              d="M58.9041 15.4894H44.9376V0.468085H58.4921V3.17021H48.5837V6.55319H58.1625V9.23404H48.5837V12.8085H58.9041V15.4894Z"
                              fill="#020105" />
                           <path
                              d="M61.015 7.97872C61.015 6.57447 61.2622 5.34752 61.7566 4.29787C62.251 3.23404 62.917 2.40426 63.7548 1.80851C64.6062 1.19858 65.54 0.744681 66.5563 0.446809C67.5863 0.148936 68.6849 0 69.8522 0C71.047 0 72.1525 0.134752 73.1687 0.404255C74.1987 0.673759 75.1463 1.09929 76.0114 1.68085C76.8904 2.26241 77.5839 3.07801 78.092 4.12766C78.6001 5.17731 78.8542 6.41135 78.8542 7.82979C78.8542 10.3546 78.0783 12.3475 76.5264 13.8085C74.9883 15.2553 72.8048 15.9787 69.9758 15.9787C67.1468 15.9787 64.9427 15.2553 63.3634 13.8085C61.7978 12.3617 61.015 10.4184 61.015 7.97872ZM64.7641 8.08511C64.7641 8.7234 64.8603 9.34043 65.0525 9.93617C65.2448 10.5177 65.5332 11.0709 65.9177 11.5957C66.3159 12.1064 66.8584 12.5177 67.5451 12.8298C68.2454 13.1277 69.042 13.2766 69.9346 13.2766C70.841 13.2766 71.6306 13.1277 72.3035 12.8298C72.9765 12.5177 73.4846 12.156 73.8279 11.7447C74.185 11.3191 74.4665 10.8369 74.6725 10.2979C74.8922 9.75887 75.0227 9.31915 75.0639 8.97872C75.1188 8.62411 75.1463 8.29787 75.1463 8C75.1463 6.55319 74.6862 5.31206 73.7661 4.2766C72.8597 3.22695 71.5826 2.70213 69.9346 2.70213C68.2592 2.70213 66.9751 3.24114 66.0825 4.31915C65.2036 5.38298 64.7641 6.6383 64.7641 8.08511Z"
                              fill="#020105" />
                           <path d="M84.5398 15.4894H81.1615V12.4468H84.5398V15.4894Z" fill="#020105" />
                           <path
                              d="M100.381 10.383H104.192C104.095 10.8085 103.944 11.2411 103.738 11.6809C103.546 12.1206 103.223 12.6099 102.77 13.1489C102.331 13.6879 101.802 14.1631 101.184 14.5745C100.58 14.9716 99.7764 15.305 98.7739 15.5745C97.7851 15.8582 96.6865 16 95.478 16C92.8138 16 90.692 15.305 89.1127 13.9149C87.5334 12.5106 86.7438 10.5248 86.7438 7.95745C86.7438 5.61702 87.506 3.70922 89.0303 2.23404C90.5684 0.744681 92.7863 0 95.6839 0C97.8538 0 99.6665 0.460993 101.122 1.38298C102.578 2.29078 103.546 3.39007 104.027 4.68085L100.051 5.19149C99.0211 3.57447 97.5654 2.76596 95.6839 2.76596C94.7638 2.76596 93.9536 2.92908 93.2532 3.25532C92.5528 3.58156 92.0104 4.01418 91.6258 4.55319C91.2551 5.0922 90.9735 5.65248 90.7813 6.23404C90.6027 6.8156 90.5135 7.40426 90.5135 8C90.5135 9.47518 91.001 10.7163 91.976 11.7234C92.9648 12.7305 94.2351 13.234 95.7869 13.234C97.998 13.234 99.5292 12.2837 100.381 10.383Z"
                              fill="#1878F3" />
                           <path
                              d="M121.927 15.4894H117.848L116.612 12.6596H109.155L107.919 15.4894H103.943L110.968 0.468085H114.902L121.927 15.4894ZM115.438 10L112.904 4.12766L110.329 10H115.438Z"
                              fill="#1878F3" />
                           <path
                              d="M143 15.4894H139.539L139.622 3.93617L134.946 15.4894H131.629L126.912 3.93617C126.967 11.2553 126.994 15.1064 126.994 15.4894H123.533V0.468085H128.807L133.318 11.4894L137.788 0.468085H143V15.4894Z"
                              fill="#1878F3" />
                        </svg>
                     </NuxtLink>
                     <nav class="flex nav-mobile flex-col text-left rounded-md bg-background py-4">
                        <SheetClose as-child>
                           <NuxtLink to="/about" class="rounded-md px-4 py-2"> {{ translations['header.about'] }}
                           </NuxtLink>
                        </SheetClose>
                        <Accordion type="single" collapsible>
                           <AccordionItem value="item-1" class="border-none">
                              <AccordionTrigger class="hover:no-underline font-normal rounded-md px-4 py-2"> {{
                                 translations['header.services'] }}
                              </AccordionTrigger>
                              <AccordionContent class="ml-6" v-for="service in services" :key="service?.id">
                                 <SheetClose as-child>
                                    <NuxtLink :to="`/services/${service?.id}`" class="rounded-md link p-1">
                                       {{ service?.title[locale] }}</NuxtLink>
                                 </SheetClose>
                              </AccordionContent>
                           </AccordionItem>
                        </Accordion>
                        <SheetClose as-child>
                           <NuxtLink to="/portfolio" class="rounded-md px-4 py-2">{{ translations['header.portfolio'] }}
                           </NuxtLink>
                        </SheetClose>
                        <SheetClose as-child>
                           <NuxtLink to="/products" class="rounded-md px-4 py-2">{{ translations['header.products'] }}
                           </NuxtLink>
                        </SheetClose>
                        <SheetClose as-child>
                           <NuxtLink to="/contacts" class="rounded-md px-4 py-2">{{ translations['header.contacts'] }}
                           </NuxtLink>
                        </SheetClose>
                     </nav>
                  </div>

                  <SheetFooter>
                     <div class="flex flex-col w-full">
                        <SheetClose as-child>
                           <div @click="selectLang(langs[0])"
                              class="flex items-center gap-2 bg-muted py-2 px-2 rounded-tl rounded-tr border-b cursor-pointer">
                              <img src="/assets/svg/uz-flag.svg" alt="" />
                              <span>O‘zbek</span>
                           </div>
                        </SheetClose>

                        <SheetClose as-child>
                           <div @click="selectLang(langs[1])"
                              class="flex items-center gap-2 bg-muted py-2 px-2 rounded-bl rounded-br cursor-pointer">
                              <img src="/assets/svg/ru-flag.svg" alt="" />
                              <span>Русский</span>
                           </div>
                        </SheetClose>
                     </div>
                  </SheetFooter>
               </SheetContent>
            </Sheet>
            <div class="ml-2 hidden lg:flex flex-1 items-center justify-end space-x-4 xl:space-x-10">
               <DropdownMenu v-model:open="isDropdownOpen">
                  <DropdownMenuTrigger @click="toggleDropdown" class="flex items-center gap-2">
                     <img src="/assets/svg/uz-flag.svg" alt="" v-if="selectedLang.id === 'uz'" />
                     <span class="text-white" v-if="selectedLang.id === 'uz'"> Uzbek</span>
                     <img src="/assets/svg/ru-flag.svg" alt="" v-if="selectedLang.id === 'ru'" />
                     <span class="text-white" v-if="selectedLang.id === 'ru'"> Russian</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        class="transition-transform duration-300 flex-shrink-0"
                        :class="{ 'rotate-180': isDropdownOpen }">
                        <path d="M5.83301 8.33333L9.99967 11.6667L14.1663 8.33333" stroke="white" stroke-width="1.5"
                           stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                     <DropdownMenuItem class="flex items-center gap-2 cursor-pointer" @click="selectLang(langs[0])">
                        <img src="/assets/svg/uz-flag.svg" alt="" />
                        <span class="text-">O‘zbek </span>
                     </DropdownMenuItem>
                     <DropdownMenuItem class="flex items-center gap-2 cursor-pointer" @click="selectLang(langs[1])">
                        <img src="/assets/svg/ru-flag.svg" alt="" />
                        <span class="text-">Русский </span>
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
               <a href="tel:+998712070407">
                  <Button>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                           d="M15.5 13.8333V12.4617C15.5 11.7802 15.0851 11.1674 14.4523 10.9143L12.7572 10.2362C11.9524 9.91429 11.0352 10.263 10.6475 11.0383L10.5 11.3333C10.5 11.3333 8.41666 10.9167 6.75 9.25C5.08333 7.58333 4.66667 5.5 4.66667 5.5L4.96168 5.35249C5.73698 4.96484 6.08571 4.04761 5.76378 3.2428L5.08574 1.54768C4.83263 0.914919 4.21979 0.5 3.53828 0.5L2.16667 0.5C1.24619 0.5 0.5 1.24619 0.5 2.16667C0.5 9.53046 6.46954 15.5 13.8333 15.5C14.7538 15.5 15.5 14.7538 15.5 13.8333Z"
                           fill="white" />
                     </svg>
                     <span>{{ translations['form.kontakt-phone-1'] }}</span>
                  </Button>
               </a>
            </div>
         </div>
      </div>
      <SectionBanner v-if="route.path !== localePath('/')" />
   </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTranslationStore } from '~/stores/translations.js';
import { useServicesStore } from '~/stores/services.js';
const servicesStore = useServicesStore();
const { getServices } = servicesStore;

const services = await getServices();

const route = useRoute();
const router = useRouter();

const showDropdown = ref(false);

const localePath = useLocalePath();
const { setLocale, locale } = useI18n();

const translationsStore = useTranslationStore();
const { getTranslation } = translationsStore;
const { translations } = storeToRefs(translationsStore);

const isDropdownOpen = ref(false);
const isServiceDropdownOpen = ref(false);

const toggleDropdown = () => {
   isDropdownOpen.value = !isDropdownOpen.value;
};

const toggleServiceDropdown = () => {
   isServiceDropdownOpen.value = !isServiceDropdownOpen.value;
};

// langs
const langs = [
   {
      id: 'uz',
      label: 'O‘zbek'
   },
   {
      id: 'ru',
      label: 'Русский'
   }
];

const selectedLang = ref(langs.find((lang) => lang.id === locale.value));

const selectLang = (lang) => {
   selectedLang.value = lang;
   setLocale(lang.id);

};

watch(selectedLang, (newVal) => {
   setLocale(newVal.id);
});

onMounted(() => {
   const header = document.querySelector('#header');
   window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
         header.classList.add('bg-header');
      } else if (window.scrollY <= 0 && route.path === '/') {
         header.classList.remove('bg-header');
      }
   });
});
</script>

<style scoped>
.bg-header {
   background-image: url('/assets/images/contact-bg.png');
   background-size: cover;
   background-repeat: no-repeat;
}

.nav .aa::before {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   background-color: hsl(var(--primary));
   border-radius: var(--radius);
   transform: scale(40%);
   opacity: 0;
   transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);
   z-index: -1;
}

.nav .aa:hover::before {
   opacity: 1;
   transform: scale(100%);
}

nav a.router-link-exact-active {
   color: #ffffff !important;
   display: block !important;
   background-color: #F2C94C !important;
}

@media (max-width: 1024px) {}
</style>
