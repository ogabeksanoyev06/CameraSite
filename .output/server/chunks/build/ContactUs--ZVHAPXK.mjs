import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_4 } from './server.mjs';
import { u as useAplicationStore, _ as _sfc_main$1, a as _sfc_main$2 } from './application-CnyRkS16.mjs';
import { _ as _sfc_main$3 } from './useApi-c7CEENz9.mjs';
import { reactive, computed, resolveDirective, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_1 = "data:image/png;base64,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";
const _imports_0 = "" + buildAssetsURL("abc.Do2rKIx-.jpg");
const _sfc_main = {
  __name: "ContactUs",
  __ssrInlineRender: true,
  setup(__props) {
    useAplicationStore();
    const form = reactive({
      first_name: "",
      phone: "",
      agree: false
    });
    const isNameValid = computed(() => {
      const nameRegex = /^[A-Za-zА-Яа-яЁё']+$/;
      return nameRegex.test(form.first_name.trim());
    });
    const isFormValid = computed(() => {
      return form.agree && isNameValid.value && form.phone.trim() !== "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_4;
      const _component_Checkbox = _sfc_main$1;
      const _component_Label = _sfc_main$2;
      const _component_Button = _sfc_main$3;
      resolveDirective("maska");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-bg" }, _attrs))} data-v-67e115db><div class="" data-v-67e115db><div class="flex md:grid flex-col-reverse grid-cols-1 items-center md:grid-cols-2 gap-6 md:gap-20" data-v-67e115db><div class="max-w-[600px] md:ml-auto w-full md:py-10 p-4" data-v-67e115db><div class="flex flex-col gap-6 sm:gap-10" data-v-67e115db><div class="flex flex-col gap-3 md:gap-6" data-v-67e115db><h2 class="text-lg md:text-2xl xl:text-3xl font-semibold text-white" data-v-67e115db>Qisqa vaqt ichida mutaxasisslar tomonidan bepul konsultatsiya oling!</h2><div class="flex items-center gap-4" data-v-67e115db><img${ssrRenderAttr("src", _imports_1)} alt="" class="w-10 h-10 object-cover rounded-full" data-v-67e115db><div class="flex flex-col gap-2" data-v-67e115db><p class="text-base font-medium text-white" data-v-67e115db>Baxtjon Chapaev</p><p class="text-xs text-green-100" data-v-67e115db>+998 99 165 32 45</p></div></div></div><form data-v-67e115db><div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6" data-v-67e115db><input type="text" placeholder="Ism familyangiz"${ssrRenderAttr("value", form.first_name)} pattern="[A-Za-z\u0410-\u042F\u0430-\u044F\u0401\u0451&#39;]+" maxlength="30" class="w-full h-full text-base sm:text-sm text-white border-b border-[#3D4855] bg-transparent transition-300 py-3 outline-none placeholder:[#BFCAD6] placeholder:text-base" required data-v-67e115db>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="flex sm:items-center justify-between sm:flex-row flex-col gap-5" data-v-67e115db><div class="flex items-center space-x-2" data-v-67e115db>`);
      _push(ssrRenderComponent(_component_Checkbox, {
        id: "agree",
        modelValue: form.agree,
        "onUpdate:modelValue": ($event) => form.agree = $event,
        "onUpdate:checked": ($event) => form.agree = !form.agree
      }, null, _parent));
      _push(ssrRenderComponent(_component_Label, {
        for: "agree",
        class: "text-white text-base leading-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441\xA0\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 `);
          } else {
            return [
              createTextVNode(" \u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441\xA0\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        disabled: !isFormValid.value,
        class: "sm:max-w-[300px] w-full max-sm:px-3 max-sm:py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-base" data-v-67e115db${_scopeId}> Jo\u2018natish </span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-67e115db${_scopeId}><path d="M5.83301 5.83337L9.16634 10L5.83301 14.1667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-67e115db${_scopeId}></path><path d="M10.833 5.83337L14.1663 10L10.833 14.1667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-67e115db${_scopeId}></path></svg>`);
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
      }, _parent));
      _push(`</div></form></div></div><div class="md:h-[460px] max-w-[920px] relative before:absolute before:bg-[#1878F3B2] before:inset-0 before:w-full before:h-full clip-path-custom" data-v-67e115db><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-full w-full object-cover" data-v-67e115db></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/ContactUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-67e115db"]]);

export { __nuxt_component_0 as _, _imports_1 as a, _imports_0 as b };
//# sourceMappingURL=ContactUs--ZVHAPXK.mjs.map
