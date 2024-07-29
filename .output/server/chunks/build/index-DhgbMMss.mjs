import { _ as _sfc_main$1 } from './ServicesSwiper-C6hzKTWZ.mjs';
import { _ as _sfc_main$3, a as _sfc_main$1$1, b as _sfc_main$2, c as _sfc_main$2$1 } from './AccordionTrigger-D3cPVm_X.mjs';
import { _ as __nuxt_component_0 } from './ContactUs--ZVHAPXK.mjs';
import { ref, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from 'vue';
import { s as storeToRefs } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { u as useTranslationStore } from './translations-DntSngHY.mjs';
import 'swiper/vue';
import './useApi-c7CEENz9.mjs';
import 'radix-vue';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'axios';
import 'swiper/modules';
import '@radix-icons/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './application-CnyRkS16.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-router';
import 'maska/vue';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const translationsStore = useTranslationStore();
    const { translations } = storeToRefs(translationsStore);
    const activeAccordion = ref(null);
    const toggleAccordion = (index) => {
      activeAccordion.value = activeAccordion.value === index ? null : index;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionServicesSwiper = _sfc_main$1;
      const _component_Accordion = _sfc_main$3;
      const _component_AccordionItem = _sfc_main$1$1;
      const _component_AccordionTrigger = _sfc_main$2;
      const _component_AccordionContent = _sfc_main$2$1;
      const _component_SectionContactUs = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><section class="bg-white mt-[80px] container"><div class="max-w-[1200px] w-full space-y-10 mb-20 mx-auto px-4"><div class="flex flex-col gap-6"><h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">${ssrInterpolate(unref(translations)["about.statistics_title"])}</h2><p class="text-base text-gray-900">${ssrInterpolate(unref(translations)["about.statistics_text"])}</p></div><div class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10"><div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100"><h1 class="text-[40px] font-medium">90</h1><p class="text-base text-gray-900">${ssrInterpolate(unref(translations)["main.statistics_card_text1"])}</p></div><div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100"><h1 class="text-[40px] font-medium">250+</h1><p class="text-base text-gray-900">${ssrInterpolate(unref(translations)["main.statistics_card_text2"])}</p></div><div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100"><h1 class="text-[40px] font-medium">90</h1><p class="text-base text-gray-900">${ssrInterpolate(unref(translations)["main.statistics_card_text3"])}</p></div><div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100"><h1 class="text-[40px] font-medium">90</h1><p class="text-base text-gray-900">${ssrInterpolate(unref(translations)["main.statistics_card_text4"])}</p></div></div></div></section><div class="bg-[#F5F5F7] mt-20">`);
      _push(ssrRenderComponent(_component_SectionServicesSwiper, null, null, _parent));
      _push(`<div class="container"><section class="pb-20"><div class="flex flex-col gap-6"><h2 class="text-3xl font-semibold text-center">${ssrInterpolate(unref(translations)["about.faq_title"])}</h2>`);
      _push(ssrRenderComponent(_component_Accordion, {
        "model-value": activeAccordion.value,
        type: "single",
        class: "",
        collapsible: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full grid grid-cols-1 md:grid-cols-2 mx-auto gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AccordionItem, {
              class: "border-none bg-white rounded-2xl p-6",
              value: 1
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AccordionTrigger, {
                    class: "text-xl sm:text-2xl",
                    onClick: ($event) => toggleAccordion(1)
                  }, {
                    icon: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" class="${ssrRenderClass({ "!rotate-45": activeAccordion.value === _ctx.i })}"${_scopeId3}><path d="M12 6.5V18.5M18 12.5L6 12.5" stroke="#020105" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId3}></path></svg>`);
                      } else {
                        return [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "25",
                            viewBox: "0 0 24 25",
                            fill: "none",
                            class: { "!rotate-45": activeAccordion.value === _ctx.i }
                          }, [
                            createVNode("path", {
                              d: "M12 6.5V18.5M18 12.5L6 12.5",
                              stroke: "#020105",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ], 2))
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Qaysi biri yaxshiroq analog kamera yoki IP? `);
                      } else {
                        return [
                          createTextVNode(" Qaysi biri yaxshiroq analog kamera yoki IP? ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AccordionContent, { class: "text-base" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Assalom deganda ochiladi gul, Assalom deganda sayraydi bul bul, Assalom deganda alik olurmiz, Analog kamera deya javob berurmiz! `);
                      } else {
                        return [
                          createTextVNode(" Assalom deganda ochiladi gul, Assalom deganda sayraydi bul bul, Assalom deganda alik olurmiz, Analog kamera deya javob berurmiz! ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AccordionTrigger, {
                      class: "text-xl sm:text-2xl",
                      onClick: ($event) => toggleAccordion(1)
                    }, {
                      icon: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "25",
                          viewBox: "0 0 24 25",
                          fill: "none",
                          class: { "!rotate-45": activeAccordion.value === _ctx.i }
                        }, [
                          createVNode("path", {
                            d: "M12 6.5V18.5M18 12.5L6 12.5",
                            stroke: "#020105",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ], 2))
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Qaysi biri yaxshiroq analog kamera yoki IP? ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_AccordionContent, { class: "text-base" }, {
                      default: withCtx(() => [
                        createTextVNode(" Assalom deganda ochiladi gul, Assalom deganda sayraydi bul bul, Assalom deganda alik olurmiz, Analog kamera deya javob berurmiz! ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full grid grid-cols-1 md:grid-cols-2 mx-auto gap-6" }, [
                createVNode(_component_AccordionItem, {
                  class: "border-none bg-white rounded-2xl p-6",
                  value: 1
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AccordionTrigger, {
                      class: "text-xl sm:text-2xl",
                      onClick: ($event) => toggleAccordion(1)
                    }, {
                      icon: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "25",
                          viewBox: "0 0 24 25",
                          fill: "none",
                          class: { "!rotate-45": activeAccordion.value === _ctx.i }
                        }, [
                          createVNode("path", {
                            d: "M12 6.5V18.5M18 12.5L6 12.5",
                            stroke: "#020105",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ], 2))
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Qaysi biri yaxshiroq analog kamera yoki IP? ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_AccordionContent, { class: "text-base" }, {
                      default: withCtx(() => [
                        createTextVNode(" Assalom deganda ochiladi gul, Assalom deganda sayraydi bul bul, Assalom deganda alik olurmiz, Analog kamera deya javob berurmiz! ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div></div>`);
      _push(ssrRenderComponent(_component_SectionContactUs, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DhgbMMss.mjs.map
