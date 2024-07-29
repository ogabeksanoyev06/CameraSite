import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _sfc_main$1 } from './useApi-c7CEENz9.mjs';
import { s as storeToRefs, u as useRuntimeConfig } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { Autoplay } from 'swiper/modules';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { u as useTranslationStore } from './translations-DntSngHY.mjs';

const _imports_0 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M5.83334%205.83331L9.16668%209.99998L5.83334%2014.1666'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M10.8333%205.83331L14.1667%209.99998L10.8333%2014.1666'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "ServicesSwiper",
  __ssrInlineRender: true,
  props: ["banners"],
  setup(__props) {
    const translationsStore = useTranslationStore();
    const { translations } = storeToRefs(translationsStore);
    const categorySwiper = ref(null);
    function onSwiper(swiper) {
      categorySwiper.value = swiper;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_Button = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20" }, _attrs))}><div class="container flex flex-col gap-20"><section><div class="flex flex-col gap-6"><h2 class="text-3xl font-semibold">${ssrInterpolate(unref(translations)["main.service_title2"])}</h2>`);
      _push(ssrRenderComponent(_component_Swiper, {
        onSwiper,
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay)],
        loop: true,
        autoplay: {
          delay: 4e3,
          disableOnInteraction: true
        },
        class: "w-full rounded-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.banners, (item, i) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative overflow-hidden w-full p-5 md:p-10 xl:p-20 rounded-2xl"${_scopeId2}><div class="absolute inset-0 -z-[2]"${_scopeId2}><img${ssrRenderAttr("src", `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.apiBaseUrl}/storage/${item.photo}`)} alt="" class="w-full h-full object-cover"${_scopeId2}></div><div class="absolute inset-0 -z-[1]" style="${ssrRenderStyle({ "background": "rgba(0, 24, 49, 0.4)", "mix-blend-mode": "hard-light" })}"${_scopeId2}></div><div class="flex flex-col justify-between gap-10 z-30 sm:h-[400px]"${_scopeId2}><div class="flex flex-col gap-6 max-w-[560px] w-full"${_scopeId2}><h2 class="text-xl xl:text-3xl font-semibold text-white"${_scopeId2}>Nimadur korxona uchun yong\u2019in tizimini ishlab chiqish</h2><p class="text-base text-white"${_scopeId2}> \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442 \u0431\u044B\u043B \u043E\u0441\u043D\u043E\u0432\u0430\u043D \u0432 1828 \u0433\u043E\u0434\u0443. 6 \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u043E\u0432, \u0431\u043E\u043B\u0435\u0435 68000 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u043E\u0432, \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 110 \u0431\u044B\u043B\u0438 \u0438\u0437\u0431\u0440\u0430\u043D\u044B \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u043A\u0430\u043C\u0438 </p></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative overflow-hidden w-full p-5 md:p-10 xl:p-20 rounded-2xl" }, [
                        createVNode("div", { class: "absolute inset-0 -z-[2]" }, [
                          createVNode("img", {
                            src: `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.apiBaseUrl}/storage/${item.photo}`,
                            alt: "",
                            class: "w-full h-full object-cover"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", {
                          class: "absolute inset-0 -z-[1]",
                          style: { "background": "rgba(0, 24, 49, 0.4)", "mix-blend-mode": "hard-light" }
                        }),
                        createVNode("div", { class: "flex flex-col justify-between gap-10 z-30 sm:h-[400px]" }, [
                          createVNode("div", { class: "flex flex-col gap-6 max-w-[560px] w-full" }, [
                            createVNode("h2", { class: "text-xl xl:text-3xl font-semibold text-white" }, "Nimadur korxona uchun yong\u2019in tizimini ishlab chiqish"),
                            createVNode("p", { class: "text-base text-white" }, " \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442 \u0431\u044B\u043B \u043E\u0441\u043D\u043E\u0432\u0430\u043D \u0432 1828 \u0433\u043E\u0434\u0443. 6 \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u043E\u0432, \u0431\u043E\u043B\u0435\u0435 68000 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u043E\u0432, \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 110 \u0431\u044B\u043B\u0438 \u0438\u0437\u0431\u0440\u0430\u043D\u044B \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u043A\u0430\u043C\u0438 ")
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="hidden md:block absolute bottom-0 z-50 w-full p-5 md:p-10 xl:p-20"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, { class: "rounded-[8px] !border-white/40 !bg-white/5 backdrop-blur-[8px] max-sm:px-3 max-sm:py-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(unref(translations)["main.btn1"])}</span><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(unref(translations)["main.btn1"]), 1),
                    createVNode("img", {
                      src: _imports_0,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              size: "icon",
              class: "rounded-full !border-white/40 !bg-white/5 backdrop-blur-[8px]",
              onClick: ($event) => unref(categorySwiper).slidePrev()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${_scopeId2}><path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        d: "M10 8L6 12M6 12L10 16M6 12L18 12",
                        stroke: "white",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              size: "icon",
              class: "rounded-full border-white/40 !bg-white/5 backdrop-blur-[8px]",
              onClick: ($event) => unref(categorySwiper).slideNext()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"${_scopeId2}><path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        d: "M14 16L18 12M18 12L14 8M18 12L6 12",
                        stroke: "white",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.banners, (item, i) => {
                return openBlock(), createBlock(_component_SwiperSlide, { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "relative overflow-hidden w-full p-5 md:p-10 xl:p-20 rounded-2xl" }, [
                      createVNode("div", { class: "absolute inset-0 -z-[2]" }, [
                        createVNode("img", {
                          src: `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.apiBaseUrl}/storage/${item.photo}`,
                          alt: "",
                          class: "w-full h-full object-cover"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", {
                        class: "absolute inset-0 -z-[1]",
                        style: { "background": "rgba(0, 24, 49, 0.4)", "mix-blend-mode": "hard-light" }
                      }),
                      createVNode("div", { class: "flex flex-col justify-between gap-10 z-30 sm:h-[400px]" }, [
                        createVNode("div", { class: "flex flex-col gap-6 max-w-[560px] w-full" }, [
                          createVNode("h2", { class: "text-xl xl:text-3xl font-semibold text-white" }, "Nimadur korxona uchun yong\u2019in tizimini ishlab chiqish"),
                          createVNode("p", { class: "text-base text-white" }, " \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442 \u0431\u044B\u043B \u043E\u0441\u043D\u043E\u0432\u0430\u043D \u0432 1828 \u0433\u043E\u0434\u0443. 6 \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u043E\u0432, \u0431\u043E\u043B\u0435\u0435 68000 \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u043E\u0432, \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 110 \u0431\u044B\u043B\u0438 \u0438\u0437\u0431\u0440\u0430\u043D\u044B \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u043A\u0430\u043C\u0438 ")
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              createVNode("div", { class: "hidden md:block absolute bottom-0 z-50 w-full p-5 md:p-10 xl:p-20" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_Button, { class: "rounded-[8px] !border-white/40 !bg-white/5 backdrop-blur-[8px] max-sm:px-3 max-sm:py-2" }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(unref(translations)["main.btn1"]), 1),
                      createVNode("img", {
                        src: _imports_0,
                        alt: ""
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex items-center gap-4" }, [
                    createVNode(_component_Button, {
                      size: "icon",
                      class: "rounded-full !border-white/40 !bg-white/5 backdrop-blur-[8px]",
                      onClick: ($event) => unref(categorySwiper).slidePrev()
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none"
                        }, [
                          createVNode("path", {
                            d: "M10 8L6 12M6 12L10 16M6 12L18 12",
                            stroke: "white",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_Button, {
                      size: "icon",
                      class: "rounded-full border-white/40 !bg-white/5 backdrop-blur-[8px]",
                      onClick: ($event) => unref(categorySwiper).slideNext()
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none"
                        }, [
                          createVNode("path", {
                            d: "M14 16L18 12M18 12L14 8M18 12L6 12",
                            stroke: "white",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/ServicesSwiper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _imports_0 as a };
//# sourceMappingURL=ServicesSwiper-C6hzKTWZ.mjs.map
