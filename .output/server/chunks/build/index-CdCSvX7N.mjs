import { u as useApi, _ as _sfc_main$1 } from './useApi-c7CEENz9.mjs';
import { _ as __nuxt_component_0 } from './ContactUs-CVn2bnml.mjs';
import { d as defineStore, s as storeToRefs, u as useRuntimeConfig } from './server.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { u as useAsyncData } from './asyncData-CmCBN4Tj.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useTranslationStore } from './translations-RaQG6xUL.mjs';
import 'radix-vue';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'axios';
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
import '@radix-icons/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-router';
import 'maska/vue';

const usePortfolioStore = defineStore("portfolio", () => {
  const api = useApi();
  async function getPortfolios() {
    try {
      const response = await api.get("/api/services/");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    getPortfolios
  };
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const translationsStore = useTranslationStore();
    const portfolioStore = usePortfolioStore();
    storeToRefs(translationsStore);
    const { getPortfolios } = portfolioStore;
    const { data: portfolios } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("portfolios", async () => {
      return await getPortfolios();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      const _component_SectionContactUs = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-background" }, _attrs))}><div class="container py-20"><section class="flex flex-col gap-10"><!--[-->`);
      ssrRenderList(unref(portfolios), (item) => {
        var _a;
        _push(`<div class="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row lg:even:flex-row-reverse gap-4 lg:gap-10"><div class="flex flex-col items-start gap-4 sm:gap-6 lg:pt-10 lg:w-1/2 order-2 lg:order-1"><h2 class="text-xl md:text-2xl xl:text-3xl font-semibold">${ssrInterpolate(item.title[_ctx.$i18n.locale])}</h2><div class="text-base text-gray-900">${(_a = item.descriptions[_ctx.$i18n.locale]) != null ? _a : ""}</div>`);
        _push(ssrRenderComponent(_component_Button, {
          variant: "outline",
          class: "max-sm:!px-3 max-sm:!py-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Batafsil ma\u2019lumot</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"${_scopeId}><path d="M5.83301 5.83331L9.16634 9.99998L5.83301 14.1666" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M10.833 5.83331L14.1663 9.99998L10.833 14.1666" stroke="#1878F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
            } else {
              return [
                createVNode("span", null, "Batafsil ma\u2019lumot"),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                  fill: "none"
                }, [
                  createVNode("path", {
                    d: "M5.83301 5.83331L9.16634 9.99998L5.83301 14.1666",
                    stroke: "#1878F3",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  createVNode("path", {
                    d: "M10.833 5.83331L14.1663 9.99998L10.833 14.1666",
                    stroke: "#1878F3",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="lg:w-1/2 order-1 lg:order-2"><img${ssrRenderAttr("src", `${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.apiBaseUrl}/storage/${item.photo}`)} alt="" class="w-full h-full object-cover rounded-2xl"></div></div>`);
      });
      _push(`<!--]--></section></div>`);
      _push(ssrRenderComponent(_component_SectionContactUs, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CdCSvX7N.mjs.map
