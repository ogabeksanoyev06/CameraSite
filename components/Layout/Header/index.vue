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
                        <img  src="/assets/svg/logo_dark.svg" alt="logo" />
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
