import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, withAsyncContext, unref, defineComponent, mergeProps, withCtx, renderSlot, computed, createVNode, ref, reactive, resolveDirective, toDisplayString, createTextVNode, openBlock, createBlock, withModifiers, withDirectives, vModelText } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useForwardPropsEmits, DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogClose } from 'radix-vue';
import { Cross2Icon } from '@radix-icons/vue';
import { u as useApi, c as cn, _ as _sfc_main$9 } from './useApi-c7CEENz9.mjs';
import { d as defineStore, s as storeToRefs, _ as __nuxt_component_4 } from './server.mjs';
import { u as useAplicationStore, _ as _sfc_main$1$1, a as _sfc_main$a } from './application-CRAboPWx.mjs';
import { _ as _sfc_main$8, a as _imports_0$1 } from './ServicesSwiper-CFx56azw.mjs';
import { _ as __nuxt_component_0, a as _imports_1, b as _imports_0$2 } from './ContactUs-CVn2bnml.mjs';
import { u as useTranslationStore } from './translations-RaQG6xUL.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BfyYD2FU.mjs';
import { _ as _imports_0$3 } from './logo-CWJhlHyv.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useAsyncData } from './asyncData-CmCBN4Tj.mjs';
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
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'axios';
import 'vue-router';
import 'maska/vue';
import 'swiper/vue';
import 'swiper/modules';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Dialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/Dialog.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DialogTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTrigger), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogTrigger.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DialogContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps(unref(forwarded), {
              class: unref(cn)(
                "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Cross2Icon), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Close</span>`);
                      } else {
                        return [
                          createVNode(unref(Cross2Icon), { class: "w-4 h-4" }),
                          createVNode("span", { class: "sr-only" }, "Close")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                      default: withCtx(() => [
                        createVNode(unref(Cross2Icon), { class: "w-4 h-4" }),
                        createVNode("span", { class: "sr-only" }, "Close")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
              createVNode(unref(DialogContent), mergeProps(unref(forwarded), {
                class: unref(cn)(
                  "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                    default: withCtx(() => [
                      createVNode(unref(Cross2Icon), { class: "w-4 h-4" }),
                      createVNode("span", { class: "sr-only" }, "Close")
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_2 = "" + buildAssetsURL("Rectangle 78.B0sJ8C-A.png");
const _sfc_main$4 = {
  __name: "HeroBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const translationsStore = useTranslationStore();
    const applicationStore = useAplicationStore();
    const { translations } = storeToRefs(translationsStore);
    const { sendAplication } = applicationStore;
    const openModal = ref(false);
    const form = reactive({
      first_name: "",
      phone: "",
      agree: false
    });
    const resetForm = () => {
      form.first_name = "";
      form.phone = "";
      form.agree = false;
    };
    const isNameValid = computed(() => {
      const nameRegex = /^[A-Za-zА-Яа-яЁё']+$/;
      return nameRegex.test(form.first_name.trim());
    });
    const isFormValid = computed(() => {
      return form.agree && isNameValid.value;
    });
    const submitForm = () => {
      if (isFormValid.value) {
        sendAplication({
          first_name: form.first_name,
          phone_number: form.phone
        });
        resetForm();
        openModal.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = _sfc_main$7;
      const _component_DialogTrigger = _sfc_main$6;
      const _component_Button = _sfc_main$9;
      const _component_DialogContent = _sfc_main$5;
      const _component_ClientOnly = __nuxt_component_4;
      const _component_Checkbox = _sfc_main$1$1;
      const _component_Label = _sfc_main$a;
      const _directive_maska = resolveDirective("maska");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero min-h-[calc(100vh-var(--header-height))] lg:min-h-screen h-full pt-[calc(var(--header-height)+20px)] -mt-[var(--header-height)] flex items-center py-4" }, _attrs))}><div class="container grid gap-4 lg:grid-cols-2 lg:items-center"><div class="lg:order-1 order-2 flex flex-col gap-6 sm:gap-10 max-w-[586px] w-full"><div class="flex flex-col gap-4"><h1 class="xl:text-5xl lg:text-4xl md:text-3xl text-xl font-semibold text-white">${ssrInterpolate(unref(translations)["main.hero_title"])}</h1><p class="text-base text-white">${ssrInterpolate(unref(translations)["main.hero_text"])}</p></div><div class="flex flex-wrap gap-2 sm:gap-4">`);
      _push(ssrRenderComponent(_component_Dialog, { open: unref(openModal) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    onClick: ($event) => openModal.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>${ssrInterpolate(unref(translations)["main.btn2"])}</span><img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("span", null, toDisplayString(unref(translations)["main.btn2"]), 1),
                          createVNode("img", {
                            src: _imports_0$1,
                            alt: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      onClick: ($event) => openModal.value = true
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(unref(translations)["main.btn2"]), 1),
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: ""
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DialogContent, { class: "sm:max-w-[700px] p-10 !rounded-3xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-10"${_scopeId2}><div class="flex flex-col gap-3 md:gap-6"${_scopeId2}><h2 class="text-lg md:text-2xl xl:text-3xl font-semibold"${_scopeId2}>Qisqa vaqt ichida mutaxasisslar tomonidan bepul konsultatsiya oling!</h2><div class="flex items-center gap-4"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="" class="w-10 h-10 object-cover rounded-full"${_scopeId2}><div class="flex flex-col gap-2"${_scopeId2}><p class="text-base font-medium"${_scopeId2}>Baxtjon Chapaev</p><p class="text-xs"${_scopeId2}>+998 99 165 32 45</p></div></div></div></div><form class="flex flex-col gap-6"${_scopeId2}><div class="flex sm:items-center justify-between sm:flex-row flex-col gap-5"${_scopeId2}><input type="text"${ssrRenderAttr("value", unref(form).first_name)} maxlength="30" class="w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base" placeholder="Ism familyangiz" required${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`</div><div class="flex sm:items-center justify-between sm:flex-row flex-col gap-5"${_scopeId2}><div class="flex items-center space-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Checkbox, {
                    id: "agreee",
                    modelValue: unref(form).agree,
                    "onUpdate:modelValue": ($event) => unref(form).agree = $event,
                    "onUpdate:checked": ($event) => unref(form).agree = !unref(form).agree
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "agreee",
                    class: "text-base leading-none"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441\xA0\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 `);
                      } else {
                        return [
                          createTextVNode(" \u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441\xA0\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "submit",
                    disabled: !unref(isFormValid),
                    class: "sm:max-w-[300px] w-full max-sm:px-3 max-sm:py-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-base"${_scopeId3}> Jo\u2018natish </span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId3}><path d="M5.83301 5.83337L9.16634 10L5.83301 14.1667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId3}></path><path d="M10.833 5.83337L14.1663 10L10.833 14.1667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId3}></path></svg>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-base" }, " Jo\u2018natish "),
                          (openBlock(), createBlock("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              d: "M5.83301 5.83337L9.16634 10L5.83301 14.1667",
                              stroke: "white",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }),
                            createVNode("path", {
                              d: "M10.833 5.83337L14.1663 10L10.833 14.1667",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-10" }, [
                      createVNode("div", { class: "flex flex-col gap-3 md:gap-6" }, [
                        createVNode("h2", { class: "text-lg md:text-2xl xl:text-3xl font-semibold" }, "Qisqa vaqt ichida mutaxasisslar tomonidan bepul konsultatsiya oling!"),
                        createVNode("div", { class: "flex items-center gap-4" }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "",
                            class: "w-10 h-10 object-cover rounded-full"
                          }),
                          createVNode("div", { class: "flex flex-col gap-2" }, [
                            createVNode("p", { class: "text-base font-medium" }, "Baxtjon Chapaev"),
                            createVNode("p", { class: "text-xs" }, "+998 99 165 32 45")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(submitForm, ["prevent"]),
                      class: "flex flex-col gap-6"
                    }, [
                      createVNode("div", { class: "flex sm:items-center justify-between sm:flex-row flex-col gap-5" }, [
                        withDirectives(createVNode("input", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                          maxlength: "30",
                          class: "w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base",
                          placeholder: "Ism familyangiz",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).first_name]
                        ]),
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            withDirectives(createVNode("input", {
                              type: "text",
                              placeholder: "Telefon raqamingiz",
                              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                              class: "w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).phone],
                              [_directive_maska, "+998 ## ###-##-##"]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex sm:items-center justify-between sm:flex-row flex-col gap-5" }, [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode(_component_Checkbox, {
                            id: "agreee",
                            modelValue: unref(form).agree,
                            "onUpdate:modelValue": ($event) => unref(form).agree = $event,
                            "onUpdate:checked": ($event) => unref(form).agree = !unref(form).agree
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onUpdate:checked"]),
                          createVNode(_component_Label, {
                            for: "agreee",
                            class: "text-base leading-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441\xA0\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_Button, {
                          type: "submit",
                          disabled: !unref(isFormValid),
                          class: "sm:max-w-[300px] w-full max-sm:px-3 max-sm:py-2"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-base" }, " Jo\u2018natish "),
                            (openBlock(), createBlock("svg", {
                              width: "20",
                              height: "20",
                              viewBox: "0 0 20 20",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                d: "M5.83301 5.83337L9.16634 10L5.83301 14.1667",
                                stroke: "white",
                                "stroke-width": "1.5",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              }),
                              createVNode("path", {
                                d: "M10.833 5.83337L14.1663 10L10.833 14.1667",
                                stroke: "white",
                                "stroke-width": "1.5",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              })
                            ]))
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    onClick: ($event) => openModal.value = true
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(unref(translations)["main.btn2"]), 1),
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: ""
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_DialogContent, { class: "sm:max-w-[700px] p-10 !rounded-3xl" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-10" }, [
                    createVNode("div", { class: "flex flex-col gap-3 md:gap-6" }, [
                      createVNode("h2", { class: "text-lg md:text-2xl xl:text-3xl font-semibold" }, "Qisqa vaqt ichida mutaxasisslar tomonidan bepul konsultatsiya oling!"),
                      createVNode("div", { class: "flex items-center gap-4" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "",
                          class: "w-10 h-10 object-cover rounded-full"
                        }),
                        createVNode("div", { class: "flex flex-col gap-2" }, [
                          createVNode("p", { class: "text-base font-medium" }, "Baxtjon Chapaev"),
                          createVNode("p", { class: "text-xs" }, "+998 99 165 32 45")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submitForm, ["prevent"]),
                    class: "flex flex-col gap-6"
                  }, [
                    createVNode("div", { class: "flex sm:items-center justify-between sm:flex-row flex-col gap-5" }, [
                      withDirectives(createVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                        maxlength: "30",
                        class: "w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base",
                        placeholder: "Ism familyangiz",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).first_name]
                      ]),
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          withDirectives(createVNode("input", {
                            type: "text",
                            placeholder: "Telefon raqamingiz",
                            "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                            class: "w-full h-full text-base sm:text-sm border-b border-grey-100 bg-transparent transition-300 py-3 outline-none placeholder:[#9A999B] placeholder:text-base",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).phone],
                            [_directive_maska, "+998 ## ###-##-##"]
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex sm:items-center justify-between sm:flex-row flex-col gap-5" }, [
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        createVNode(_component_Checkbox, {
                          id: "agreee",
                          modelValue: unref(form).agree,
                          "onUpdate:modelValue": ($event) => unref(form).agree = $event,
                          "onUpdate:checked": ($event) => unref(form).agree = !unref(form).agree
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onUpdate:checked"]),
                        createVNode(_component_Label, {
                          for: "agreee",
                          class: "text-base leading-none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441\xA0\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_Button, {
                        type: "submit",
                        disabled: !unref(isFormValid),
                        class: "sm:max-w-[300px] w-full max-sm:px-3 max-sm:py-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-base" }, " Jo\u2018natish "),
                          (openBlock(), createBlock("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              d: "M5.83301 5.83337L9.16634 10L5.83301 14.1667",
                              stroke: "white",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }),
                            createVNode("path", {
                              d: "M10.833 5.83337L14.1663 10L10.833 14.1667",
                              stroke: "white",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ]))
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ], 32)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, { variant: "outline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(translations)["main.btn1"])}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(translations)["main.btn1"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="lg:order-2 order-1"><img${ssrRenderAttr("src", _imports_2)} alt="" class="lg:max-w-[700px] lg:h-[400px] w-full object-cover ml-auto rounded-lg"></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/HeroBanner.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "AboutUs",
  __ssrInlineRender: true,
  setup(__props) {
    const translationsStore = useTranslationStore();
    const { translations } = storeToRefs(translationsStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Button = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-021e09d6><div class="grid grid-cols-1 items-center lg:grid-cols-2 gap-20" data-v-021e09d6><div class="relative md:h-[550px] max-w-[820px] clip-path-custom" data-v-021e09d6><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="h-full w-full object-cover" data-v-021e09d6><div class="absolute inset-0 bg-primary/70" data-v-021e09d6></div><div class="absolute inset-0 flex flex-col justify-between gap-6 px-4 ml-auto max-w-[500px] items-start text-white py-20" data-v-021e09d6><div data-v-021e09d6><h2 class="text-2xl md:text-4xl font-bold" data-v-021e09d6>${ssrInterpolate(unref(translations)["main.about_title2"])}</h2><p class="text-md md:text-lg mt-2" data-v-021e09d6>${ssrInterpolate(unref(translations)["main.about_subtitle2"])}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$3)} alt="" data-v-021e09d6${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$3,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-col items-start gap-10 max-w-[750px] w-full mr-auto" data-v-021e09d6><div class="flex flex-col gap-6" data-v-021e09d6><h2 class="text-lg md:text-2xl xl:text-3xl font-semibold" data-v-021e09d6>${ssrInterpolate(unref(translations)["main.about_title"])}</h2><p class="text-grey-900 text-base" data-v-021e09d6>${ssrInterpolate(unref(translations)["main.about_subtitle"])}</p></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-v-021e09d6><div class="flex items-center gap-2" data-v-021e09d6><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-021e09d6><g clip-path="url(#clip0_134_1625)" data-v-021e09d6><path d="M6.66669 9.99996L8.77892 11.901C9.13851 12.2246 9.69718 12.175 9.99419 11.7932L13.3334 7.49996M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-021e09d6></path></g><defs data-v-021e09d6><clipPath id="clip0_134_1625" data-v-021e09d6><rect width="20" height="20" fill="white" data-v-021e09d6></rect></clipPath></defs></svg><span data-v-021e09d6>${ssrInterpolate(unref(translations)["main.about_text1"])}</span></div><div class="flex items-center gap-2" data-v-021e09d6><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-021e09d6><g clip-path="url(#clip0_134_1625)" data-v-021e09d6><path d="M6.66669 9.99996L8.77892 11.901C9.13851 12.2246 9.69718 12.175 9.99419 11.7932L13.3334 7.49996M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-021e09d6></path></g><defs data-v-021e09d6><clipPath id="clip0_134_1625" data-v-021e09d6><rect width="20" height="20" fill="white" data-v-021e09d6></rect></clipPath></defs></svg><span data-v-021e09d6>${ssrInterpolate(unref(translations)["main.about_text2"])}</span></div><div class="flex items-center gap-2" data-v-021e09d6><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-021e09d6><g clip-path="url(#clip0_134_1625)" data-v-021e09d6><path d="M6.66669 9.99996L8.77892 11.901C9.13851 12.2246 9.69718 12.175 9.99419 11.7932L13.3334 7.49996M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-021e09d6></path></g><defs data-v-021e09d6><clipPath id="clip0_134_1625" data-v-021e09d6><rect width="20" height="20" fill="white" data-v-021e09d6></rect></clipPath></defs></svg><span data-v-021e09d6>${ssrInterpolate(unref(translations)["main.about_text3"])}</span></div><div class="flex items-center gap-2" data-v-021e09d6><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-021e09d6><g clip-path="url(#clip0_134_1625)" data-v-021e09d6><path d="M6.66669 9.99996L8.77892 11.901C9.13851 12.2246 9.69718 12.175 9.99419 11.7932L13.3334 7.49996M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-021e09d6></path></g><defs data-v-021e09d6><clipPath id="clip0_134_1625" data-v-021e09d6><rect width="20" height="20" fill="white" data-v-021e09d6></rect></clipPath></defs></svg><span data-v-021e09d6>${ssrInterpolate(unref(translations)["main.about_text4"])}</span></div></div>`);
      _push(ssrRenderComponent(_component_Button, { variant: "outline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-021e09d6${_scopeId}>${ssrInterpolate(unref(translations)["main.btn1"])}</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" data-v-021e09d6${_scopeId}><path d="M5.83337 5.83337L9.16671 10L5.83337 14.1667" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-021e09d6${_scopeId}></path><path d="M10.8334 5.83337L14.1667 10L10.8334 14.1667" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-021e09d6${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(translations)["main.btn1"]), 1),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M5.83337 5.83337L9.16671 10L5.83337 14.1667",
                  stroke: "#1878F3",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }),
                createVNode("path", {
                  d: "M10.8334 5.83337L14.1667 10L10.8334 14.1667",
                  stroke: "#1878F3",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/AboutUs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-021e09d6"]]);
const _imports_0 = "data:image/png;base64,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";
const _sfc_main$2 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const translationsStore = useTranslationStore();
    const { translations } = storeToRefs(translationsStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#F5F5F7] py-20" }, _attrs))}><div class="container flex flex-col gap-6"><h1 class="text-xl md:text-2xl xl:text-[32px] font-semibold">${ssrInterpolate(unref(translations)["main.service_title"])}</h1><div class="grid grid-cols-1 xl:grid-cols-2 gap-6"><div class="flex xl:items-center flex-col lg:flex-row gap-4 lg:gap-8 overflow-hidden relative p-4 lg:p-8 xl:p-12 bg-white rounded-[24px]"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-24 h-24 sm:w-28 sm:h-28"><div class="flex flex-col items-start gap-4 sm:gap-6"><h3 class="text-xl xl:text-2xl">${ssrInterpolate(unref(translations)["main.service_card_text1"])}</h3>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "link",
        class: "p-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-base text-blue"${_scopeId}>${ssrInterpolate(unref(translations)["main.btn1"])}</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5.83331 5.83337L9.16665 10L5.83331 14.1667" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M10.8333 5.83337L14.1666 10L10.8333 14.1667" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", { class: "text-base text-blue" }, toDisplayString(unref(translations)["main.btn1"]), 1),
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M5.83331 5.83337L9.16665 10L5.83331 14.1667",
                  stroke: "#1878F3",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }),
                createVNode("path", {
                  d: "M10.8333 5.83337L14.1666 10L10.8333 14.1667",
                  stroke: "#1878F3",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex xl:items-center flex-col lg:flex-row gap-4 lg:gap-8 overflow-hidden relative p-4 lg:p-8 xl:p-12 bg-white rounded-[24px]"><img${ssrRenderAttr("src", _imports_1)} alt="" class="w-24 h-24 sm:w-28 sm:h-28"><div class="flex flex-col items-start gap-4 sm:gap-6"><h3 class="text-xl xl:text-2xl">${ssrInterpolate(unref(translations)["main.service_card_text2"])}</h3>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "link",
        class: "p-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-base text-blue"${_scopeId}>${ssrInterpolate(unref(translations)["main.btn1"])}</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5.83331 5.83337L9.16665 10L5.83331 14.1667" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M10.8333 5.83337L14.1666 10L10.8333 14.1667" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", { class: "text-base text-blue" }, toDisplayString(unref(translations)["main.btn1"]), 1),
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M5.83331 5.83337L9.16665 10L5.83331 14.1667",
                  stroke: "#1878F3",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }),
                createVNode("path", {
                  d: "M10.8333 5.83337L14.1666 10L10.8333 14.1667",
                  stroke: "#1878F3",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Services.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CompanyStatistics",
  __ssrInlineRender: true,
  setup(__props) {
    const translationsStore = useTranslationStore();
    const { translations } = storeToRefs(translationsStore);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1200px] w-full space-y-10 mb-20 mx-auto px-4" }, _attrs))}><div class="flex flex-col gap-6"><h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">${ssrInterpolate(unref(translations)["main.statistics_title"])}</h2><p class="text-base text-gray-900">${ssrInterpolate(unref(translations)["main.statistics_text"])}</p></div><div class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10"><div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100"><h1 class="text-[40px] font-medium">90</h1><p class="text-base text-gray-900">${ssrInterpolate(unref(translations)["main.statistics_card_text1"])}</p></div><div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100"><h1 class="text-[40px] font-medium">250+</h1><p class="text-base text-gray-900">${ssrInterpolate(unref(translations)["main.statistics_card_text2"])}</p></div><div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100"><h1 class="text-[40px] font-medium">90</h1><p class="text-base text-gray-900">${ssrInterpolate(unref(translations)["main.statistics_card_text3"])}</p></div><div class="p-4 md:p-8 xl:p-10 flex flex-col gap-2 rounded-2xl bg-gray-100"><h1 class="text-[40px] font-medium">90</h1><p class="text-base text-gray-900">${ssrInterpolate(unref(translations)["main.statistics_card_text4"])}</p></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/CompanyStatistics.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useBannerStore = defineStore("banner", () => {
  const api = useApi();
  async function getBanners() {
    try {
      const response = await api.get("/api/gellery");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    getBanners
  };
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const bannerStore = useBannerStore();
    const { getBanners } = bannerStore;
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("main", async () => {
      const [banners] = await Promise.all([getBanners()]);
      return { banners };
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeroBanner = _sfc_main$4;
      const _component_SectionAboutUs = __nuxt_component_1;
      const _component_SectionServices = _sfc_main$2;
      const _component_SectionContactUs = __nuxt_component_0;
      const _component_SectionServicesSwiper = _sfc_main$8;
      const _component_SectionCompanyStatistics = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionHeroBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionAboutUs, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionServices, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionContactUs, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionServicesSwiper, {
        banners: unref(data).banners
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionCompanyStatistics, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionContactUs, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BQnAKA6K.mjs.map
