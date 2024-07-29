import { _ as _sfc_main$3, a as _sfc_main$1$1, b as _sfc_main$2, c as _sfc_main$2$1 } from './AccordionTrigger-D3cPVm_X.mjs';
import { _ as __nuxt_component_0 } from './ContactUs-CVn2bnml.mjs';
import { ref, withAsyncContext, watch, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { d as defineStore, u as useRuntimeConfig, c as navigateTo } from './server.mjs';
import { u as useAsyncData } from './asyncData-CmCBN4Tj.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useApi } from './useApi-c7CEENz9.mjs';
import 'radix-vue';
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
import './application-CRAboPWx.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'maska/vue';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'axios';

const _sfc_main$1 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    id: Number,
    title: String,
    subtitle: String,
    photo: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2 bg-white rounded-2xl overflow-hidden group" }, _attrs))}><div class="overflow-hidden flex items-center justify-center w-full"><img${ssrRenderAttr("src", `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.apiBaseUrl}/site/images/products/${__props.photo}`)} class="group-hover:scale-105 transition-300"></div><div class="p-2"><div class="flex flex-col items-start gap-4 bg-background p-6 rounded-2xl"><h3 class="text-base line-clamp-2">${ssrInterpolate(__props.title)}</h3><div class="text-sm line-clamp-2">${(_a = __props.subtitle) != null ? _a : ""}</div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useProductsStore = defineStore("products", () => {
  const api = useApi();
  async function getProducts() {
    try {
      const response = await api.get("/api/products");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async function getProductId(id) {
    try {
      const response = await api.get(`api/products/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async function getProductsCategory(id) {
    try {
      const response = await api.get(`/api/product/category?product_category_id=${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    getProducts,
    getProductId,
    getProductsCategory
  };
});
const useCategoriesStore = defineStore("categories", () => {
  const api = useApi();
  const getProductsCategories = async () => {
    try {
      const response = await api.get("/api/product-categories/");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getProductsCategories
  };
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const route = useRoute();
    const currentSubCategoryId = ref(null);
    ref(null);
    const subCategory = ref([]);
    const categoriesStore = useCategoriesStore();
    const productsStore = useProductsStore();
    const { getProductsCategories } = categoriesStore;
    const { getProductsCategory } = productsStore;
    const activeSubCategory = (id) => {
      subCategory.value = categories.value.filter((c) => c.product_category_id == id);
    };
    const navigateToSubCategory = (subCategory2) => {
      navigateTo({ query: { id: subCategory2 } });
    };
    const { data: categories } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("categories", async () => {
      return await getProductsCategories();
    })), __temp = await __temp, __restore(), __temp);
    currentSubCategoryId.value = Number(((_a = route.query) == null ? void 0 : _a.subCategoryId) || ((_c = (_b = subCategory.value) == null ? void 0 : _b[0]) == null ? void 0 : _c.id));
    const { data: products } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "products",
      async () => {
        if (currentSubCategoryId.value || route.query.id) {
          return await getProductsCategory(currentSubCategoryId.value);
        }
      },
      {
        watch: [() => route.query.id]
      }
    )), __temp = await __temp, __restore(), __temp);
    watch(
      () => route.query.id,
      (newCategoryId) => {
        currentSubCategoryId.value = newCategoryId;
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Accordion = _sfc_main$3;
      const _component_AccordionItem = _sfc_main$1$1;
      const _component_AccordionTrigger = _sfc_main$2;
      const _component_AccordionContent = _sfc_main$2$1;
      const _component_SectionContactUs = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#F5F5F7]" }, _attrs))}><section class="container py-12"><div class="grid lg:grid-cols-[340px_minmax(0,1fr)] gap-6"><div class=""><div class="sticky top-10 border-r border-grey-200 pr-6">`);
      _push(ssrRenderComponent(_component_Accordion, {
        type: "single",
        class: "w-full",
        collapsible: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(categories), (item, i) => {
              _push2(ssrRenderComponent(_component_AccordionItem, {
                class: "border-none",
                key: i,
                value: i + "a"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (item.product_category_id === null) {
                      _push3(ssrRenderComponent(_component_AccordionTrigger, {
                        class: "py-2",
                        onClick: ($event) => activeSubCategory(item.id)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.title[_ctx.$i18n.locale])}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.title[_ctx.$i18n.locale]), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_AccordionContent, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<ul class=""${_scopeId3}><!--[-->`);
                          ssrRenderList(unref(subCategory), (subCategory2, i2) => {
                            _push4(`<li class="flex items-center justify-between cursor-pointer py-2"${_scopeId3}><span class="flex-1"${_scopeId3}>${ssrInterpolate(subCategory2.title[_ctx.$i18n.locale])}</span>`);
                            if (subCategory2.id == unref(currentSubCategoryId)) {
                              _push4(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId3}><path d="M11.6667 13.3333L15 9.99998M15 9.99998L11.6667 6.66665M15 9.99998L5 9.99998" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId3}></path></svg>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</li>`);
                          });
                          _push4(`<!--]--></ul>`);
                        } else {
                          return [
                            createVNode("ul", { class: "" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(subCategory), (subCategory2, i2) => {
                                return openBlock(), createBlock("li", {
                                  class: "flex items-center justify-between cursor-pointer py-2",
                                  onClick: ($event) => navigateToSubCategory(subCategory2.id)
                                }, [
                                  createVNode("span", { class: "flex-1" }, toDisplayString(subCategory2.title[_ctx.$i18n.locale]), 1),
                                  subCategory2.id == unref(currentSubCategoryId) ? (openBlock(), createBlock("svg", {
                                    key: 0,
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M11.6667 13.3333L15 9.99998M15 9.99998L11.6667 6.66665M15 9.99998L5 9.99998",
                                      stroke: "#1878F3",
                                      "stroke-width": "1.5",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    })
                                  ])) : createCommentVNode("", true)
                                ], 8, ["onClick"]);
                              }), 256))
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      item.product_category_id === null ? (openBlock(), createBlock(_component_AccordionTrigger, {
                        key: 0,
                        class: "py-2",
                        onClick: ($event) => activeSubCategory(item.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.title[_ctx.$i18n.locale]), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true),
                      createVNode(_component_AccordionContent, null, {
                        default: withCtx(() => [
                          createVNode("ul", { class: "" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(subCategory), (subCategory2, i2) => {
                              return openBlock(), createBlock("li", {
                                class: "flex items-center justify-between cursor-pointer py-2",
                                onClick: ($event) => navigateToSubCategory(subCategory2.id)
                              }, [
                                createVNode("span", { class: "flex-1" }, toDisplayString(subCategory2.title[_ctx.$i18n.locale]), 1),
                                subCategory2.id == unref(currentSubCategoryId) ? (openBlock(), createBlock("svg", {
                                  key: 0,
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 20 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M11.6667 13.3333L15 9.99998M15 9.99998L11.6667 6.66665M15 9.99998L5 9.99998",
                                    stroke: "#1878F3",
                                    "stroke-width": "1.5",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                  })
                                ])) : createCommentVNode("", true)
                              ], 8, ["onClick"]);
                            }), 256))
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (item, i) => {
                return openBlock(), createBlock(_component_AccordionItem, {
                  class: "border-none",
                  key: i,
                  value: i + "a"
                }, {
                  default: withCtx(() => [
                    item.product_category_id === null ? (openBlock(), createBlock(_component_AccordionTrigger, {
                      key: 0,
                      class: "py-2",
                      onClick: ($event) => activeSubCategory(item.id)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.title[_ctx.$i18n.locale]), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true),
                    createVNode(_component_AccordionContent, null, {
                      default: withCtx(() => [
                        createVNode("ul", { class: "" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(subCategory), (subCategory2, i2) => {
                            return openBlock(), createBlock("li", {
                              class: "flex items-center justify-between cursor-pointer py-2",
                              onClick: ($event) => navigateToSubCategory(subCategory2.id)
                            }, [
                              createVNode("span", { class: "flex-1" }, toDisplayString(subCategory2.title[_ctx.$i18n.locale]), 1),
                              subCategory2.id == unref(currentSubCategoryId) ? (openBlock(), createBlock("svg", {
                                key: 0,
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M11.6667 13.3333L15 9.99998M15 9.99998L11.6667 6.66665M15 9.99998L5 9.99998",
                                  stroke: "#1878F3",
                                  "stroke-width": "1.5",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                })
                              ])) : createCommentVNode("", true)
                            ], 8, ["onClick"]);
                          }), 256))
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class=""><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(unref(products), (item, i) => {
        _push(`<div data-aos="fade-up">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          id: item.id,
          photo: item.photo[0],
          title: item.title[_ctx.$i18n.locale],
          subtitle: item.descriptions[_ctx.$i18n.locale]
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
      _push(ssrRenderComponent(_component_SectionContactUs, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-t5y_MMrF.mjs.map
