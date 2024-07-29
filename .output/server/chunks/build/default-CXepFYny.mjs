import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BfyYD2FU.mjs';
import { useSSRContext, withAsyncContext, mergeProps, defineComponent, unref, withCtx, renderSlot, computed, createVNode, ref, watch, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { useForwardPropsEmits, HoverCardRoot, HoverCardTrigger, useForwardProps, HoverCardPortal, HoverCardContent, DialogRoot, DialogTrigger, DialogClose, DialogPortal, DialogOverlay, DialogContent, DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem } from 'radix-vue';
import { c as cn, _ as _sfc_main$g } from './useApi-c7CEENz9.mjs';
import { cva } from 'class-variance-authority';
import { _ as _sfc_main$3$1, a as _sfc_main$1$1, b as _sfc_main$h, c as _sfc_main$2$1 } from './AccordionTrigger-D3cPVm_X.mjs';
import { f as useI18n, q as useLocalePath, s as storeToRefs } from './server.mjs';
import { useRoute } from 'vue-router';
import { _ as _imports_0$1 } from './logo-CWJhlHyv.mjs';
import { u as useTranslationStore } from './translations-RaQG6xUL.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Cross2Icon } from '@radix-icons/vue';
import { _ as _imports_0$2, b as _imports_1$1, a as _imports_2$1, c as _imports_3 } from './telegram-DJCbFlCa.mjs';
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
import 'clsx';
import 'tailwind-merge';
import 'axios';
import 'maska/vue';

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "HoverCard",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    openDelay: {},
    closeDelay: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(HoverCardRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/hover-card/HoverCard.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "HoverCardTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(HoverCardTrigger), mergeProps(props, _attrs), {
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/hover-card/HoverCardTrigger.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(HoverCardPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(HoverCardContent), mergeProps(unref(forwardedProps), {
              class: unref(cn)(
                "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(HoverCardContent), mergeProps(unref(forwardedProps), {
                class: unref(cn)(
                  "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/hover-card/HoverCardContent.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Sheet",
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/Sheet.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "SheetTrigger",
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetTrigger.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "SheetClose",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogClose), mergeProps(props, _attrs), {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetClose.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SheetContent",
  __ssrInlineRender: true,
  props: {
    class: {},
    side: {},
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, side, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps({
              class: unref(cn)(unref(sheetVariants)({ side: _ctx.side }), props.class)
            }, { ...unref(forwarded), ..._ctx.$attrs }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Cross2Icon), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Cross2Icon), { class: "w-4 h-4" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                      default: withCtx(() => [
                        createVNode(unref(Cross2Icon), { class: "w-4 h-4" })
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
              createVNode(unref(DialogContent), mergeProps({
                class: unref(cn)(unref(sheetVariants)({ side: _ctx.side }), props.class)
              }, { ...unref(forwarded), ..._ctx.$attrs }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                    default: withCtx(() => [
                      createVNode(unref(Cross2Icon), { class: "w-4 h-4" })
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetContent.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SheetFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetFooter.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps(unref(forwarded), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenu.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    const forwardedProps = useForwardProps(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps({ class: "outline-none" }, unref(forwardedProps), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuTrigger.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
              class: unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
                class: unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          _ctx.inset && "pl-8",
          props.class
        )
      }, _attrs), {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("banner.BNShdOsU.png");
const _sfc_main$3 = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const localePath = useLocalePath();
    ref(false);
    const title = ref("");
    const setTitle = () => {
      switch (route.path) {
        case localePath("/about"):
          title.value = "Kompaniya haqida";
          break;
        case localePath("/services/1"):
          title.value = "Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati";
          break;
        case localePath("/services/2"):
          title.value = "Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati";
          break;
        case localePath("/portfolio"):
          title.value = "Muvaffaqiyatli yakunlagan ishlarimiz";
          break;
        case localePath("/products"):
          title.value = "Mahsulotlarimiz";
          break;
        case localePath("/contacts"):
          title.value = "Hoziroq so\u2018rov qoldiring!";
          break;
        default:
          title.value = "Bosh sahifa";
      }
    };
    watch(
      () => route.path,
      () => {
        setTitle();
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute inset-x-0 -bottom-[75px] md:-bottom-[150px] xl:-bottom-[170px]" }, _attrs))}><div class="container"><div class="relative w-full h-[150px] md:h-[300px] xl:h-[340px] transition-300 z-40" id="banner"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full h-full object-cover rounded-2xl"><div class="absolute bottom-0 left-0 p-3 md:p-6 xl:p-12"><h1 class="text-2xl md:text-3xl xl:text-4xl text-white">${ssrInterpolate(unref(title))}</h1></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Banner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_1 = "data:image/svg+xml,%3csvg%20width='21'%20height='16'%20viewBox='0%200%2021%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_121_2136)'%3e%3crect%20y='0.5'%20width='21'%20height='15'%20rx='3'%20fill='%23F93939'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2011.5H21V15.5H0V11.5Z'%20fill='%2300B731'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%200.5H21V4.5H0V0.5Z'%20fill='%2303BCDB'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%205.5H21V10.5H0V5.5ZM5%204.415C4.844%204.47%204.675%204.5%204.5%204.5C3.672%204.5%203%203.828%203%203C3%202.172%203.672%201.5%204.5%201.5C4.675%201.5%204.844%201.53%205%201.585C4.417%201.791%204%202.347%204%203C4%203.653%204.417%204.21%205%204.415Z'%20fill='white'%20/%3e%3cpath%20opacity='0.5'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6%202.5H7V3.5H6V2.5ZM7%201.5H8V2.5H7V1.5ZM8%202.5H9V3.5H8V2.5ZM9%201.5H10V2.5H9V1.5ZM10%202.5H11V3.5H10V2.5ZM9%203.5H10V4.5H9V3.5ZM7%203.5H8V4.5H7V3.5Z'%20fill='%231A47B8'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_121_2136'%3e%3crect%20y='0.5'%20width='21'%20height='15'%20rx='3'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='16'%20viewBox='0%200%2021%2016'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_412_8680)'%3e%3crect%20y='0.5'%20width='21'%20height='15'%20rx='3'%20fill='%231A47B8'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2010.5H21V15.5H0V10.5Z'%20fill='%23F93939'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%200.5H21V5.5H0V0.5Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_412_8680'%3e%3crect%20y='0.5'%20width='21'%20height='15'%20rx='3'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    ref(false);
    const localePath = useLocalePath();
    const { setLocale, locale } = useI18n();
    const translationsStore = useTranslationStore();
    const { translations } = storeToRefs(translationsStore);
    const isDropdownOpen = ref(false);
    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };
    const langs = [
      {
        id: "uz",
        label: "O\u2018zbek"
      },
      {
        id: "ru",
        label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_HoverCard = _sfc_main$f;
      const _component_HoverCardTrigger = _sfc_main$e;
      const _component_HoverCardContent = _sfc_main$d;
      const _component_Sheet = _sfc_main$c;
      const _component_SheetTrigger = _sfc_main$b;
      const _component_Button = _sfc_main$g;
      const _component_SheetContent = _sfc_main$9;
      const _component_SheetClose = _sfc_main$a;
      const _component_Accordion = _sfc_main$3$1;
      const _component_AccordionItem = _sfc_main$1$1;
      const _component_AccordionTrigger = _sfc_main$h;
      const _component_AccordionContent = _sfc_main$2$1;
      const _component_SheetFooter = _sfc_main$8;
      const _component_DropdownMenu = _sfc_main$7;
      const _component_DropdownMenuTrigger = _sfc_main$6;
      const _component_DropdownMenuContent = _sfc_main$5;
      const _component_DropdownMenuItem = _sfc_main$4;
      const _component_SectionBanner = _sfc_main$3;
      _push(`<header${ssrRenderAttrs(mergeProps({
        id: "header",
        class: ["relative w-full z-50 transition-300", { "bg-header pb-[140px] md:pb-[200px] xl:pb-[280px] mb-[20px] md:mb-[100px] xl:mb-[170px]": unref(route).path !== unref(localePath)("/") }]
      }, _attrs))} data-v-03c823ed><div class="container relative z-[9999]" data-v-03c823ed><div class="flex items-center justify-between border-b border-gray-500 h-20" data-v-03c823ed><div class="mr-4 md:mr-1 flex items-center" data-v-03c823ed>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "mr-2 lg:mr-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-03c823ed${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden lg:flex items-center gap-1 text-sm font-medium" data-v-03c823ed>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/about"),
        class: "aa lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(translations)["header.about"])}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(translations)["header.about"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_HoverCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HoverCardTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white cursor-pointer" data-v-03c823ed${_scopeId2}>${ssrInterpolate(unref(translations)["header.services"])}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white cursor-pointer" }, toDisplayString(unref(translations)["header.services"]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HoverCardContent, { class: "flex flex-col gap-1 p-0 whitespace-nowrap w-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)("/services/1"),
                    class: "lg:px-3 hover:text-primary xl:px-4 py-1 relative nav z-10 rounded-lg text-black"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati `);
                      } else {
                        return [
                          createTextVNode(" Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)("/services/2"),
                    class: "lg:px-3 hover:text-primary xl:px-4 py-1 relative nav z-10 rounded-lg text-black"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati `);
                      } else {
                        return [
                          createTextVNode(" Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/services/1"),
                      class: "lg:px-3 hover:text-primary xl:px-4 py-1 relative nav z-10 rounded-lg text-black"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati ")
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/services/2"),
                      class: "lg:px-3 hover:text-primary xl:px-4 py-1 relative nav z-10 rounded-lg text-black"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati ")
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HoverCardTrigger, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white cursor-pointer" }, toDisplayString(unref(translations)["header.services"]), 1)
                ]),
                _: 1
              }),
              createVNode(_component_HoverCardContent, { class: "flex flex-col gap-1 p-0 whitespace-nowrap w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/services/1"),
                    class: "lg:px-3 hover:text-primary xl:px-4 py-1 relative nav z-10 rounded-lg text-black"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati ")
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/services/2"),
                    class: "lg:px-3 hover:text-primary xl:px-4 py-1 relative nav z-10 rounded-lg text-black"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati ")
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/portfolio"),
        class: "aa lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(translations)["header.portfolio"])}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(translations)["header.portfolio"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/products"),
        class: "aa lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(translations)["header.products"])}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(translations)["header.products"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contacts"),
        class: "aa lg:px-3 xl:px-4 py-2 relative nav z-10 rounded-lg text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(translations)["header.contacts"])}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(translations)["header.contacts"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div>`);
      _push(ssrRenderComponent(_component_Sheet, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SheetTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    size: "icon",
                    class: "flex lg:hidden rounded-[8px] !border-white/40 !bg-white/5 backdrop-blur-[8px]"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" data-v-03c823ed${_scopeId3}><path d="M11.6666 13.3335H28.3333M11.6666 20.0002H28.3333M11.6666 26.6668H28.3333" stroke="#fff" stroke-width="1.5" stroke-linecap="round" data-v-03c823ed${_scopeId3}></path></svg>`);
                      } else {
                        return [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "40",
                            height: "40",
                            viewBox: "0 0 40 40",
                            fill: "none"
                          }, [
                            createVNode("path", {
                              d: "M11.6666 13.3335H28.3333M11.6666 20.0002H28.3333M11.6666 26.6668H28.3333",
                              stroke: "#fff",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round"
                            })
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      size: "icon",
                      class: "flex lg:hidden rounded-[8px] !border-white/40 !bg-white/5 backdrop-blur-[8px]"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "40",
                          height: "40",
                          viewBox: "0 0 40 40",
                          fill: "none"
                        }, [
                          createVNode("path", {
                            d: "M11.6666 13.3335H28.3333M11.6666 20.0002H28.3333M11.6666 26.6668H28.3333",
                            stroke: "#fff",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round"
                          })
                        ]))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SheetContent, { class: "flex flex-col justify-between" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col space-y-2 text-center sm:text-left" data-v-03c823ed${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/",
                    class: "text-center flex justify-center w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg width="143" height="16" viewBox="0 0 143 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-03c823ed${_scopeId3}><path d="M16.6444 0.468085L10.1143 15.4894H6.57123L0 0.468085H4.0169L8.36339 11.5532L12.7305 0.468085H16.6444Z" fill="#020105" data-v-03c823ed${_scopeId3}></path><path d="M21.9698 15.4894H18.3237V0.468085H21.9698V15.4894Z" fill="#020105" data-v-03c823ed${_scopeId3}></path><path d="M26.0279 15.4894V0.468085H33.9999C35.3183 0.468085 36.465 0.624114 37.44 0.936171C38.4288 1.23404 39.3146 1.79433 40.0974 2.61702C41.3196 3.92199 41.9307 5.68794 41.9307 7.91489C41.9307 10.2837 41.2166 12.156 39.7884 13.5319C39.0468 14.2553 38.216 14.766 37.2958 15.0638C36.3895 15.3475 35.2565 15.4894 33.8969 15.4894H26.0279ZM29.6534 12.8298H33.9175C35.332 12.8298 36.4169 12.461 37.1722 11.7234C37.9276 10.9858 38.3052 9.66667 38.3052 7.76596C38.3052 6.02128 37.8589 4.75887 36.9663 3.97872C36.3208 3.41135 35.284 3.12766 33.8557 3.12766H29.6534V12.8298Z" fill="#020105" data-v-03c823ed${_scopeId3}></path><path d="M58.9041 15.4894H44.9376V0.468085H58.4921V3.17021H48.5837V6.55319H58.1625V9.23404H48.5837V12.8085H58.9041V15.4894Z" fill="#020105" data-v-03c823ed${_scopeId3}></path><path d="M61.015 7.97872C61.015 6.57447 61.2622 5.34752 61.7566 4.29787C62.251 3.23404 62.917 2.40426 63.7548 1.80851C64.6062 1.19858 65.54 0.744681 66.5563 0.446809C67.5863 0.148936 68.6849 0 69.8522 0C71.047 0 72.1525 0.134752 73.1687 0.404255C74.1987 0.673759 75.1463 1.09929 76.0114 1.68085C76.8904 2.26241 77.5839 3.07801 78.092 4.12766C78.6001 5.17731 78.8542 6.41135 78.8542 7.82979C78.8542 10.3546 78.0783 12.3475 76.5264 13.8085C74.9883 15.2553 72.8048 15.9787 69.9758 15.9787C67.1468 15.9787 64.9427 15.2553 63.3634 13.8085C61.7978 12.3617 61.015 10.4184 61.015 7.97872ZM64.7641 8.08511C64.7641 8.7234 64.8603 9.34043 65.0525 9.93617C65.2448 10.5177 65.5332 11.0709 65.9177 11.5957C66.3159 12.1064 66.8584 12.5177 67.5451 12.8298C68.2454 13.1277 69.042 13.2766 69.9346 13.2766C70.841 13.2766 71.6306 13.1277 72.3035 12.8298C72.9765 12.5177 73.4846 12.156 73.8279 11.7447C74.185 11.3191 74.4665 10.8369 74.6725 10.2979C74.8922 9.75887 75.0227 9.31915 75.0639 8.97872C75.1188 8.62411 75.1463 8.29787 75.1463 8C75.1463 6.55319 74.6862 5.31206 73.7661 4.2766C72.8597 3.22695 71.5826 2.70213 69.9346 2.70213C68.2592 2.70213 66.9751 3.24114 66.0825 4.31915C65.2036 5.38298 64.7641 6.6383 64.7641 8.08511Z" fill="#020105" data-v-03c823ed${_scopeId3}></path><path d="M84.5398 15.4894H81.1615V12.4468H84.5398V15.4894Z" fill="#020105" data-v-03c823ed${_scopeId3}></path><path d="M100.381 10.383H104.192C104.095 10.8085 103.944 11.2411 103.738 11.6809C103.546 12.1206 103.223 12.6099 102.77 13.1489C102.331 13.6879 101.802 14.1631 101.184 14.5745C100.58 14.9716 99.7764 15.305 98.7739 15.5745C97.7851 15.8582 96.6865 16 95.478 16C92.8138 16 90.692 15.305 89.1127 13.9149C87.5334 12.5106 86.7438 10.5248 86.7438 7.95745C86.7438 5.61702 87.506 3.70922 89.0303 2.23404C90.5684 0.744681 92.7863 0 95.6839 0C97.8538 0 99.6665 0.460993 101.122 1.38298C102.578 2.29078 103.546 3.39007 104.027 4.68085L100.051 5.19149C99.0211 3.57447 97.5654 2.76596 95.6839 2.76596C94.7638 2.76596 93.9536 2.92908 93.2532 3.25532C92.5528 3.58156 92.0104 4.01418 91.6258 4.55319C91.2551 5.0922 90.9735 5.65248 90.7813 6.23404C90.6027 6.8156 90.5135 7.40426 90.5135 8C90.5135 9.47518 91.001 10.7163 91.976 11.7234C92.9648 12.7305 94.2351 13.234 95.7869 13.234C97.998 13.234 99.5292 12.2837 100.381 10.383Z" fill="#1878F3" data-v-03c823ed${_scopeId3}></path><path d="M121.927 15.4894H117.848L116.612 12.6596H109.155L107.919 15.4894H103.943L110.968 0.468085H114.902L121.927 15.4894ZM115.438 10L112.904 4.12766L110.329 10H115.438Z" fill="#1878F3" data-v-03c823ed${_scopeId3}></path><path d="M143 15.4894H139.539L139.622 3.93617L134.946 15.4894H131.629L126.912 3.93617C126.967 11.2553 126.994 15.1064 126.994 15.4894H123.533V0.468085H128.807L133.318 11.4894L137.788 0.468085H143V15.4894Z" fill="#1878F3" data-v-03c823ed${_scopeId3}></path></svg>`);
                      } else {
                        return [
                          (openBlock(), createBlock("svg", {
                            width: "143",
                            height: "16",
                            viewBox: "0 0 143 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              d: "M16.6444 0.468085L10.1143 15.4894H6.57123L0 0.468085H4.0169L8.36339 11.5532L12.7305 0.468085H16.6444Z",
                              fill: "#020105"
                            }),
                            createVNode("path", {
                              d: "M21.9698 15.4894H18.3237V0.468085H21.9698V15.4894Z",
                              fill: "#020105"
                            }),
                            createVNode("path", {
                              d: "M26.0279 15.4894V0.468085H33.9999C35.3183 0.468085 36.465 0.624114 37.44 0.936171C38.4288 1.23404 39.3146 1.79433 40.0974 2.61702C41.3196 3.92199 41.9307 5.68794 41.9307 7.91489C41.9307 10.2837 41.2166 12.156 39.7884 13.5319C39.0468 14.2553 38.216 14.766 37.2958 15.0638C36.3895 15.3475 35.2565 15.4894 33.8969 15.4894H26.0279ZM29.6534 12.8298H33.9175C35.332 12.8298 36.4169 12.461 37.1722 11.7234C37.9276 10.9858 38.3052 9.66667 38.3052 7.76596C38.3052 6.02128 37.8589 4.75887 36.9663 3.97872C36.3208 3.41135 35.284 3.12766 33.8557 3.12766H29.6534V12.8298Z",
                              fill: "#020105"
                            }),
                            createVNode("path", {
                              d: "M58.9041 15.4894H44.9376V0.468085H58.4921V3.17021H48.5837V6.55319H58.1625V9.23404H48.5837V12.8085H58.9041V15.4894Z",
                              fill: "#020105"
                            }),
                            createVNode("path", {
                              d: "M61.015 7.97872C61.015 6.57447 61.2622 5.34752 61.7566 4.29787C62.251 3.23404 62.917 2.40426 63.7548 1.80851C64.6062 1.19858 65.54 0.744681 66.5563 0.446809C67.5863 0.148936 68.6849 0 69.8522 0C71.047 0 72.1525 0.134752 73.1687 0.404255C74.1987 0.673759 75.1463 1.09929 76.0114 1.68085C76.8904 2.26241 77.5839 3.07801 78.092 4.12766C78.6001 5.17731 78.8542 6.41135 78.8542 7.82979C78.8542 10.3546 78.0783 12.3475 76.5264 13.8085C74.9883 15.2553 72.8048 15.9787 69.9758 15.9787C67.1468 15.9787 64.9427 15.2553 63.3634 13.8085C61.7978 12.3617 61.015 10.4184 61.015 7.97872ZM64.7641 8.08511C64.7641 8.7234 64.8603 9.34043 65.0525 9.93617C65.2448 10.5177 65.5332 11.0709 65.9177 11.5957C66.3159 12.1064 66.8584 12.5177 67.5451 12.8298C68.2454 13.1277 69.042 13.2766 69.9346 13.2766C70.841 13.2766 71.6306 13.1277 72.3035 12.8298C72.9765 12.5177 73.4846 12.156 73.8279 11.7447C74.185 11.3191 74.4665 10.8369 74.6725 10.2979C74.8922 9.75887 75.0227 9.31915 75.0639 8.97872C75.1188 8.62411 75.1463 8.29787 75.1463 8C75.1463 6.55319 74.6862 5.31206 73.7661 4.2766C72.8597 3.22695 71.5826 2.70213 69.9346 2.70213C68.2592 2.70213 66.9751 3.24114 66.0825 4.31915C65.2036 5.38298 64.7641 6.6383 64.7641 8.08511Z",
                              fill: "#020105"
                            }),
                            createVNode("path", {
                              d: "M84.5398 15.4894H81.1615V12.4468H84.5398V15.4894Z",
                              fill: "#020105"
                            }),
                            createVNode("path", {
                              d: "M100.381 10.383H104.192C104.095 10.8085 103.944 11.2411 103.738 11.6809C103.546 12.1206 103.223 12.6099 102.77 13.1489C102.331 13.6879 101.802 14.1631 101.184 14.5745C100.58 14.9716 99.7764 15.305 98.7739 15.5745C97.7851 15.8582 96.6865 16 95.478 16C92.8138 16 90.692 15.305 89.1127 13.9149C87.5334 12.5106 86.7438 10.5248 86.7438 7.95745C86.7438 5.61702 87.506 3.70922 89.0303 2.23404C90.5684 0.744681 92.7863 0 95.6839 0C97.8538 0 99.6665 0.460993 101.122 1.38298C102.578 2.29078 103.546 3.39007 104.027 4.68085L100.051 5.19149C99.0211 3.57447 97.5654 2.76596 95.6839 2.76596C94.7638 2.76596 93.9536 2.92908 93.2532 3.25532C92.5528 3.58156 92.0104 4.01418 91.6258 4.55319C91.2551 5.0922 90.9735 5.65248 90.7813 6.23404C90.6027 6.8156 90.5135 7.40426 90.5135 8C90.5135 9.47518 91.001 10.7163 91.976 11.7234C92.9648 12.7305 94.2351 13.234 95.7869 13.234C97.998 13.234 99.5292 12.2837 100.381 10.383Z",
                              fill: "#1878F3"
                            }),
                            createVNode("path", {
                              d: "M121.927 15.4894H117.848L116.612 12.6596H109.155L107.919 15.4894H103.943L110.968 0.468085H114.902L121.927 15.4894ZM115.438 10L112.904 4.12766L110.329 10H115.438Z",
                              fill: "#1878F3"
                            }),
                            createVNode("path", {
                              d: "M143 15.4894H139.539L139.622 3.93617L134.946 15.4894H131.629L126.912 3.93617C126.967 11.2553 126.994 15.1064 126.994 15.4894H123.533V0.468085H128.807L133.318 11.4894L137.788 0.468085H143V15.4894Z",
                              fill: "#1878F3"
                            })
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<nav class="flex nav-mobile flex-col text-left rounded-md bg-background py-4" data-v-03c823ed${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SheetClose, { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/about",
                          class: "rounded-md px-4 py-2 text-primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Kompaniya haqida`);
                            } else {
                              return [
                                createTextVNode("Kompaniya haqida")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/about",
                            class: "rounded-md px-4 py-2 text-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Kompaniya haqida")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Accordion, {
                    type: "single",
                    collapsible: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AccordionItem, {
                          value: "item-1",
                          class: "border-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AccordionTrigger, { class: "hover:no-underline font-normal rounded-md px-4 py-2 text-primary" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Xizmatlar`);
                                  } else {
                                    return [
                                      createTextVNode(" Xizmatlar")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_AccordionContent, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SheetClose, { "as-child": "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_NuxtLink, {
                                            to: "/services/1",
                                            class: "rounded-md"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati`);
                                              } else {
                                                return [
                                                  createTextVNode("Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_NuxtLink, {
                                              to: "/services/1",
                                              class: "rounded-md"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_SheetClose, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_NuxtLink, {
                                            to: "/services/1",
                                            class: "rounded-md"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_AccordionContent, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_SheetClose, { "as-child": "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_NuxtLink, {
                                            to: "/services/2",
                                            class: "rounded-md"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati`);
                                              } else {
                                                return [
                                                  createTextVNode("Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_NuxtLink, {
                                              to: "/services/2",
                                              class: "rounded-md"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_SheetClose, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_NuxtLink, {
                                            to: "/services/2",
                                            class: "rounded-md"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AccordionTrigger, { class: "hover:no-underline font-normal rounded-md px-4 py-2 text-primary" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Xizmatlar")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_AccordionContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SheetClose, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, {
                                          to: "/services/1",
                                          class: "rounded-md"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_AccordionContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SheetClose, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, {
                                          to: "/services/2",
                                          class: "rounded-md"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AccordionItem, {
                            value: "item-1",
                            class: "border-none"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AccordionTrigger, { class: "hover:no-underline font-normal rounded-md px-4 py-2 text-primary" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Xizmatlar")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AccordionContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SheetClose, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        to: "/services/1",
                                        class: "rounded-md"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AccordionContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SheetClose, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        to: "/services/2",
                                        class: "rounded-md"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SheetClose, { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/portfolio",
                          class: "rounded-md px-4 py-2 text-primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Portfolio`);
                            } else {
                              return [
                                createTextVNode("Portfolio")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/portfolio",
                            class: "rounded-md px-4 py-2 text-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Portfolio")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SheetClose, { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/products",
                          class: "rounded-md px-4 py-2 text-primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Mahsulotlar`);
                            } else {
                              return [
                                createTextVNode("Mahsulotlar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/products",
                            class: "rounded-md px-4 py-2 text-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Mahsulotlar")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SheetClose, { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/contacts",
                          class: "rounded-md px-4 py-2 text-primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Kontaktlar `);
                            } else {
                              return [
                                createTextVNode("Kontaktlar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/contacts",
                            class: "rounded-md px-4 py-2 text-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Kontaktlar ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</nav></div>`);
                  _push3(ssrRenderComponent(_component_SheetFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col w-full" data-v-03c823ed${_scopeId3}><div class="flex items-center gap-2 bg-muted py-2 px-2 rounded-tl rounded-tr border-b cursor-pointer" data-v-03c823ed${_scopeId3}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-03c823ed${_scopeId3}><span data-v-03c823ed${_scopeId3}>O\u2018zbek</span></div><div class="flex items-center gap-2 bg-muted py-2 px-2 rounded-bl rounded-br cursor-pointer" data-v-03c823ed${_scopeId3}><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-03c823ed${_scopeId3}><span data-v-03c823ed${_scopeId3}>\u0420\u0443\u0441\u0441\u043A\u0438\u0439</span></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col w-full" }, [
                            createVNode("div", { class: "flex items-center gap-2 bg-muted py-2 px-2 rounded-tl rounded-tr border-b cursor-pointer" }, [
                              createVNode("img", {
                                src: _imports_1,
                                alt: ""
                              }),
                              createVNode("span", null, "O\u2018zbek")
                            ]),
                            createVNode("div", { class: "flex items-center gap-2 bg-muted py-2 px-2 rounded-bl rounded-br cursor-pointer" }, [
                              createVNode("img", {
                                src: _imports_2,
                                alt: ""
                              }),
                              createVNode("span", null, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col space-y-2 text-center sm:text-left" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/",
                        class: "text-center flex justify-center w-full"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            width: "143",
                            height: "16",
                            viewBox: "0 0 143 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              d: "M16.6444 0.468085L10.1143 15.4894H6.57123L0 0.468085H4.0169L8.36339 11.5532L12.7305 0.468085H16.6444Z",
                              fill: "#020105"
                            }),
                            createVNode("path", {
                              d: "M21.9698 15.4894H18.3237V0.468085H21.9698V15.4894Z",
                              fill: "#020105"
                            }),
                            createVNode("path", {
                              d: "M26.0279 15.4894V0.468085H33.9999C35.3183 0.468085 36.465 0.624114 37.44 0.936171C38.4288 1.23404 39.3146 1.79433 40.0974 2.61702C41.3196 3.92199 41.9307 5.68794 41.9307 7.91489C41.9307 10.2837 41.2166 12.156 39.7884 13.5319C39.0468 14.2553 38.216 14.766 37.2958 15.0638C36.3895 15.3475 35.2565 15.4894 33.8969 15.4894H26.0279ZM29.6534 12.8298H33.9175C35.332 12.8298 36.4169 12.461 37.1722 11.7234C37.9276 10.9858 38.3052 9.66667 38.3052 7.76596C38.3052 6.02128 37.8589 4.75887 36.9663 3.97872C36.3208 3.41135 35.284 3.12766 33.8557 3.12766H29.6534V12.8298Z",
                              fill: "#020105"
                            }),
                            createVNode("path", {
                              d: "M58.9041 15.4894H44.9376V0.468085H58.4921V3.17021H48.5837V6.55319H58.1625V9.23404H48.5837V12.8085H58.9041V15.4894Z",
                              fill: "#020105"
                            }),
                            createVNode("path", {
                              d: "M61.015 7.97872C61.015 6.57447 61.2622 5.34752 61.7566 4.29787C62.251 3.23404 62.917 2.40426 63.7548 1.80851C64.6062 1.19858 65.54 0.744681 66.5563 0.446809C67.5863 0.148936 68.6849 0 69.8522 0C71.047 0 72.1525 0.134752 73.1687 0.404255C74.1987 0.673759 75.1463 1.09929 76.0114 1.68085C76.8904 2.26241 77.5839 3.07801 78.092 4.12766C78.6001 5.17731 78.8542 6.41135 78.8542 7.82979C78.8542 10.3546 78.0783 12.3475 76.5264 13.8085C74.9883 15.2553 72.8048 15.9787 69.9758 15.9787C67.1468 15.9787 64.9427 15.2553 63.3634 13.8085C61.7978 12.3617 61.015 10.4184 61.015 7.97872ZM64.7641 8.08511C64.7641 8.7234 64.8603 9.34043 65.0525 9.93617C65.2448 10.5177 65.5332 11.0709 65.9177 11.5957C66.3159 12.1064 66.8584 12.5177 67.5451 12.8298C68.2454 13.1277 69.042 13.2766 69.9346 13.2766C70.841 13.2766 71.6306 13.1277 72.3035 12.8298C72.9765 12.5177 73.4846 12.156 73.8279 11.7447C74.185 11.3191 74.4665 10.8369 74.6725 10.2979C74.8922 9.75887 75.0227 9.31915 75.0639 8.97872C75.1188 8.62411 75.1463 8.29787 75.1463 8C75.1463 6.55319 74.6862 5.31206 73.7661 4.2766C72.8597 3.22695 71.5826 2.70213 69.9346 2.70213C68.2592 2.70213 66.9751 3.24114 66.0825 4.31915C65.2036 5.38298 64.7641 6.6383 64.7641 8.08511Z",
                              fill: "#020105"
                            }),
                            createVNode("path", {
                              d: "M84.5398 15.4894H81.1615V12.4468H84.5398V15.4894Z",
                              fill: "#020105"
                            }),
                            createVNode("path", {
                              d: "M100.381 10.383H104.192C104.095 10.8085 103.944 11.2411 103.738 11.6809C103.546 12.1206 103.223 12.6099 102.77 13.1489C102.331 13.6879 101.802 14.1631 101.184 14.5745C100.58 14.9716 99.7764 15.305 98.7739 15.5745C97.7851 15.8582 96.6865 16 95.478 16C92.8138 16 90.692 15.305 89.1127 13.9149C87.5334 12.5106 86.7438 10.5248 86.7438 7.95745C86.7438 5.61702 87.506 3.70922 89.0303 2.23404C90.5684 0.744681 92.7863 0 95.6839 0C97.8538 0 99.6665 0.460993 101.122 1.38298C102.578 2.29078 103.546 3.39007 104.027 4.68085L100.051 5.19149C99.0211 3.57447 97.5654 2.76596 95.6839 2.76596C94.7638 2.76596 93.9536 2.92908 93.2532 3.25532C92.5528 3.58156 92.0104 4.01418 91.6258 4.55319C91.2551 5.0922 90.9735 5.65248 90.7813 6.23404C90.6027 6.8156 90.5135 7.40426 90.5135 8C90.5135 9.47518 91.001 10.7163 91.976 11.7234C92.9648 12.7305 94.2351 13.234 95.7869 13.234C97.998 13.234 99.5292 12.2837 100.381 10.383Z",
                              fill: "#1878F3"
                            }),
                            createVNode("path", {
                              d: "M121.927 15.4894H117.848L116.612 12.6596H109.155L107.919 15.4894H103.943L110.968 0.468085H114.902L121.927 15.4894ZM115.438 10L112.904 4.12766L110.329 10H115.438Z",
                              fill: "#1878F3"
                            }),
                            createVNode("path", {
                              d: "M143 15.4894H139.539L139.622 3.93617L134.946 15.4894H131.629L126.912 3.93617C126.967 11.2553 126.994 15.1064 126.994 15.4894H123.533V0.468085H128.807L133.318 11.4894L137.788 0.468085H143V15.4894Z",
                              fill: "#1878F3"
                            })
                          ]))
                        ]),
                        _: 1
                      }),
                      createVNode("nav", { class: "flex nav-mobile flex-col text-left rounded-md bg-background py-4" }, [
                        createVNode(_component_SheetClose, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/about",
                              class: "rounded-md px-4 py-2 text-primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Kompaniya haqida")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Accordion, {
                          type: "single",
                          collapsible: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AccordionItem, {
                              value: "item-1",
                              class: "border-none"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_AccordionTrigger, { class: "hover:no-underline font-normal rounded-md px-4 py-2 text-primary" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Xizmatlar")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_AccordionContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SheetClose, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, {
                                          to: "/services/1",
                                          class: "rounded-md"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_AccordionContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SheetClose, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, {
                                          to: "/services/2",
                                          class: "rounded-md"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SheetClose, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/portfolio",
                              class: "rounded-md px-4 py-2 text-primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Portfolio")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SheetClose, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/products",
                              class: "rounded-md px-4 py-2 text-primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Mahsulotlar")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SheetClose, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/contacts",
                              class: "rounded-md px-4 py-2 text-primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Kontaktlar ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(_component_SheetFooter, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col w-full" }, [
                          createVNode("div", { class: "flex items-center gap-2 bg-muted py-2 px-2 rounded-tl rounded-tr border-b cursor-pointer" }, [
                            createVNode("img", {
                              src: _imports_1,
                              alt: ""
                            }),
                            createVNode("span", null, "O\u2018zbek")
                          ]),
                          createVNode("div", { class: "flex items-center gap-2 bg-muted py-2 px-2 rounded-bl rounded-br cursor-pointer" }, [
                            createVNode("img", {
                              src: _imports_2,
                              alt: ""
                            }),
                            createVNode("span", null, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439")
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SheetTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    size: "icon",
                    class: "flex lg:hidden rounded-[8px] !border-white/40 !bg-white/5 backdrop-blur-[8px]"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none"
                      }, [
                        createVNode("path", {
                          d: "M11.6666 13.3335H28.3333M11.6666 20.0002H28.3333M11.6666 26.6668H28.3333",
                          stroke: "#fff",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round"
                        })
                      ]))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_SheetContent, { class: "flex flex-col justify-between" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col space-y-2 text-center sm:text-left" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "text-center flex justify-center w-full"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          width: "143",
                          height: "16",
                          viewBox: "0 0 143 16",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M16.6444 0.468085L10.1143 15.4894H6.57123L0 0.468085H4.0169L8.36339 11.5532L12.7305 0.468085H16.6444Z",
                            fill: "#020105"
                          }),
                          createVNode("path", {
                            d: "M21.9698 15.4894H18.3237V0.468085H21.9698V15.4894Z",
                            fill: "#020105"
                          }),
                          createVNode("path", {
                            d: "M26.0279 15.4894V0.468085H33.9999C35.3183 0.468085 36.465 0.624114 37.44 0.936171C38.4288 1.23404 39.3146 1.79433 40.0974 2.61702C41.3196 3.92199 41.9307 5.68794 41.9307 7.91489C41.9307 10.2837 41.2166 12.156 39.7884 13.5319C39.0468 14.2553 38.216 14.766 37.2958 15.0638C36.3895 15.3475 35.2565 15.4894 33.8969 15.4894H26.0279ZM29.6534 12.8298H33.9175C35.332 12.8298 36.4169 12.461 37.1722 11.7234C37.9276 10.9858 38.3052 9.66667 38.3052 7.76596C38.3052 6.02128 37.8589 4.75887 36.9663 3.97872C36.3208 3.41135 35.284 3.12766 33.8557 3.12766H29.6534V12.8298Z",
                            fill: "#020105"
                          }),
                          createVNode("path", {
                            d: "M58.9041 15.4894H44.9376V0.468085H58.4921V3.17021H48.5837V6.55319H58.1625V9.23404H48.5837V12.8085H58.9041V15.4894Z",
                            fill: "#020105"
                          }),
                          createVNode("path", {
                            d: "M61.015 7.97872C61.015 6.57447 61.2622 5.34752 61.7566 4.29787C62.251 3.23404 62.917 2.40426 63.7548 1.80851C64.6062 1.19858 65.54 0.744681 66.5563 0.446809C67.5863 0.148936 68.6849 0 69.8522 0C71.047 0 72.1525 0.134752 73.1687 0.404255C74.1987 0.673759 75.1463 1.09929 76.0114 1.68085C76.8904 2.26241 77.5839 3.07801 78.092 4.12766C78.6001 5.17731 78.8542 6.41135 78.8542 7.82979C78.8542 10.3546 78.0783 12.3475 76.5264 13.8085C74.9883 15.2553 72.8048 15.9787 69.9758 15.9787C67.1468 15.9787 64.9427 15.2553 63.3634 13.8085C61.7978 12.3617 61.015 10.4184 61.015 7.97872ZM64.7641 8.08511C64.7641 8.7234 64.8603 9.34043 65.0525 9.93617C65.2448 10.5177 65.5332 11.0709 65.9177 11.5957C66.3159 12.1064 66.8584 12.5177 67.5451 12.8298C68.2454 13.1277 69.042 13.2766 69.9346 13.2766C70.841 13.2766 71.6306 13.1277 72.3035 12.8298C72.9765 12.5177 73.4846 12.156 73.8279 11.7447C74.185 11.3191 74.4665 10.8369 74.6725 10.2979C74.8922 9.75887 75.0227 9.31915 75.0639 8.97872C75.1188 8.62411 75.1463 8.29787 75.1463 8C75.1463 6.55319 74.6862 5.31206 73.7661 4.2766C72.8597 3.22695 71.5826 2.70213 69.9346 2.70213C68.2592 2.70213 66.9751 3.24114 66.0825 4.31915C65.2036 5.38298 64.7641 6.6383 64.7641 8.08511Z",
                            fill: "#020105"
                          }),
                          createVNode("path", {
                            d: "M84.5398 15.4894H81.1615V12.4468H84.5398V15.4894Z",
                            fill: "#020105"
                          }),
                          createVNode("path", {
                            d: "M100.381 10.383H104.192C104.095 10.8085 103.944 11.2411 103.738 11.6809C103.546 12.1206 103.223 12.6099 102.77 13.1489C102.331 13.6879 101.802 14.1631 101.184 14.5745C100.58 14.9716 99.7764 15.305 98.7739 15.5745C97.7851 15.8582 96.6865 16 95.478 16C92.8138 16 90.692 15.305 89.1127 13.9149C87.5334 12.5106 86.7438 10.5248 86.7438 7.95745C86.7438 5.61702 87.506 3.70922 89.0303 2.23404C90.5684 0.744681 92.7863 0 95.6839 0C97.8538 0 99.6665 0.460993 101.122 1.38298C102.578 2.29078 103.546 3.39007 104.027 4.68085L100.051 5.19149C99.0211 3.57447 97.5654 2.76596 95.6839 2.76596C94.7638 2.76596 93.9536 2.92908 93.2532 3.25532C92.5528 3.58156 92.0104 4.01418 91.6258 4.55319C91.2551 5.0922 90.9735 5.65248 90.7813 6.23404C90.6027 6.8156 90.5135 7.40426 90.5135 8C90.5135 9.47518 91.001 10.7163 91.976 11.7234C92.9648 12.7305 94.2351 13.234 95.7869 13.234C97.998 13.234 99.5292 12.2837 100.381 10.383Z",
                            fill: "#1878F3"
                          }),
                          createVNode("path", {
                            d: "M121.927 15.4894H117.848L116.612 12.6596H109.155L107.919 15.4894H103.943L110.968 0.468085H114.902L121.927 15.4894ZM115.438 10L112.904 4.12766L110.329 10H115.438Z",
                            fill: "#1878F3"
                          }),
                          createVNode("path", {
                            d: "M143 15.4894H139.539L139.622 3.93617L134.946 15.4894H131.629L126.912 3.93617C126.967 11.2553 126.994 15.1064 126.994 15.4894H123.533V0.468085H128.807L133.318 11.4894L137.788 0.468085H143V15.4894Z",
                            fill: "#1878F3"
                          })
                        ]))
                      ]),
                      _: 1
                    }),
                    createVNode("nav", { class: "flex nav-mobile flex-col text-left rounded-md bg-background py-4" }, [
                      createVNode(_component_SheetClose, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/about",
                            class: "rounded-md px-4 py-2 text-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Kompaniya haqida")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Accordion, {
                        type: "single",
                        collapsible: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AccordionItem, {
                            value: "item-1",
                            class: "border-none"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AccordionTrigger, { class: "hover:no-underline font-normal rounded-md px-4 py-2 text-primary" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Xizmatlar")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AccordionContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SheetClose, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        to: "/services/1",
                                        class: "rounded-md"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Yong\u2018in signalizatsiya tizimlarini o\u2018rnatish xizmati")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AccordionContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SheetClose, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        to: "/services/2",
                                        class: "rounded-md"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Kuzatuv kameralar tizimlarini o\u2018rnatish xizmati")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SheetClose, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/portfolio",
                            class: "rounded-md px-4 py-2 text-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Portfolio")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SheetClose, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/products",
                            class: "rounded-md px-4 py-2 text-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Mahsulotlar")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SheetClose, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/contacts",
                            class: "rounded-md px-4 py-2 text-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Kontaktlar ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(_component_SheetFooter, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-col w-full" }, [
                        createVNode("div", { class: "flex items-center gap-2 bg-muted py-2 px-2 rounded-tl rounded-tr border-b cursor-pointer" }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: ""
                          }),
                          createVNode("span", null, "O\u2018zbek")
                        ]),
                        createVNode("div", { class: "flex items-center gap-2 bg-muted py-2 px-2 rounded-bl rounded-br cursor-pointer" }, [
                          createVNode("img", {
                            src: _imports_2,
                            alt: ""
                          }),
                          createVNode("span", null, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439")
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden lg:flex flex-1 items-center justify-end space-x-4 xl:space-x-10" data-v-03c823ed>`);
      _push(ssrRenderComponent(_component_DropdownMenu, {
        open: isDropdownOpen.value,
        "onUpdate:open": ($event) => isDropdownOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DropdownMenuTrigger, {
              onClick: toggleDropdown,
              class: "flex items-center gap-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (selectedLang.value.id === "uz") {
                    _push3(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-03c823ed${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (selectedLang.value.id === "uz") {
                    _push3(`<span class="text-white" data-v-03c823ed${_scopeId2}> Uzbek</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (selectedLang.value.id === "ru") {
                    _push3(`<img${ssrRenderAttr("src", _imports_2)} alt="" data-v-03c823ed${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (selectedLang.value.id === "ru") {
                    _push3(`<span class="text-white" data-v-03c823ed${_scopeId2}> Russian</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="${ssrRenderClass([{ "rotate-180": isDropdownOpen.value }, "transition-transform duration-300 flex-shrink-0"])}" data-v-03c823ed${_scopeId2}><path d="M5.83301 8.33333L9.99967 11.6667L14.1663 8.33333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-03c823ed${_scopeId2}></path></svg>`);
                } else {
                  return [
                    selectedLang.value.id === "uz" ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _imports_1,
                      alt: ""
                    })) : createCommentVNode("", true),
                    selectedLang.value.id === "uz" ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-white"
                    }, " Uzbek")) : createCommentVNode("", true),
                    selectedLang.value.id === "ru" ? (openBlock(), createBlock("img", {
                      key: 2,
                      src: _imports_2,
                      alt: ""
                    })) : createCommentVNode("", true),
                    selectedLang.value.id === "ru" ? (openBlock(), createBlock("span", {
                      key: 3,
                      class: "text-white"
                    }, " Russian")) : createCommentVNode("", true),
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      class: ["transition-transform duration-300 flex-shrink-0", { "rotate-180": isDropdownOpen.value }]
                    }, [
                      createVNode("path", {
                        d: "M5.83301 8.33333L9.99967 11.6667L14.1663 8.33333",
                        stroke: "white",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ], 2))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DropdownMenuContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, {
                    class: "flex items-center gap-2 cursor-pointer",
                    onClick: ($event) => selectLang(langs[0])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-03c823ed${_scopeId3}><span class="text-" data-v-03c823ed${_scopeId3}>O\u2018zbek </span>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_1,
                            alt: ""
                          }),
                          createVNode("span", { class: "text-" }, "O\u2018zbek ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, {
                    class: "flex items-center gap-2 cursor-pointer",
                    onClick: ($event) => selectLang(langs[1])
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_2)} alt="" data-v-03c823ed${_scopeId3}><span class="text-" data-v-03c823ed${_scopeId3}>\u0420\u0443\u0441\u0441\u043A\u0438\u0439 </span>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_2,
                            alt: ""
                          }),
                          createVNode("span", { class: "text-" }, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DropdownMenuItem, {
                      class: "flex items-center gap-2 cursor-pointer",
                      onClick: ($event) => selectLang(langs[0])
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_1,
                          alt: ""
                        }),
                        createVNode("span", { class: "text-" }, "O\u2018zbek ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_DropdownMenuItem, {
                      class: "flex items-center gap-2 cursor-pointer",
                      onClick: ($event) => selectLang(langs[1])
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_2,
                          alt: ""
                        }),
                        createVNode("span", { class: "text-" }, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DropdownMenuTrigger, {
                onClick: toggleDropdown,
                class: "flex items-center gap-2"
              }, {
                default: withCtx(() => [
                  selectedLang.value.id === "uz" ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _imports_1,
                    alt: ""
                  })) : createCommentVNode("", true),
                  selectedLang.value.id === "uz" ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-white"
                  }, " Uzbek")) : createCommentVNode("", true),
                  selectedLang.value.id === "ru" ? (openBlock(), createBlock("img", {
                    key: 2,
                    src: _imports_2,
                    alt: ""
                  })) : createCommentVNode("", true),
                  selectedLang.value.id === "ru" ? (openBlock(), createBlock("span", {
                    key: 3,
                    class: "text-white"
                  }, " Russian")) : createCommentVNode("", true),
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    class: ["transition-transform duration-300 flex-shrink-0", { "rotate-180": isDropdownOpen.value }]
                  }, [
                    createVNode("path", {
                      d: "M5.83301 8.33333L9.99967 11.6667L14.1663 8.33333",
                      stroke: "white",
                      "stroke-width": "1.5",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ], 2))
                ]),
                _: 1
              }),
              createVNode(_component_DropdownMenuContent, null, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenuItem, {
                    class: "flex items-center gap-2 cursor-pointer",
                    onClick: ($event) => selectLang(langs[0])
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_1,
                        alt: ""
                      }),
                      createVNode("span", { class: "text-" }, "O\u2018zbek ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_DropdownMenuItem, {
                    class: "flex items-center gap-2 cursor-pointer",
                    onClick: ($event) => selectLang(langs[1])
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_2,
                        alt: ""
                      }),
                      createVNode("span", { class: "text-" }, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="tel:+998712070407" data-v-03c823ed>`);
      _push(ssrRenderComponent(_component_Button, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" data-v-03c823ed${_scopeId}><path d="M15.5 13.8333V12.4617C15.5 11.7802 15.0851 11.1674 14.4523 10.9143L12.7572 10.2362C11.9524 9.91429 11.0352 10.263 10.6475 11.0383L10.5 11.3333C10.5 11.3333 8.41666 10.9167 6.75 9.25C5.08333 7.58333 4.66667 5.5 4.66667 5.5L4.96168 5.35249C5.73698 4.96484 6.08571 4.04761 5.76378 3.2428L5.08574 1.54768C4.83263 0.914919 4.21979 0.5 3.53828 0.5L2.16667 0.5C1.24619 0.5 0.5 1.24619 0.5 2.16667C0.5 9.53046 6.46954 15.5 13.8333 15.5C14.7538 15.5 15.5 14.7538 15.5 13.8333Z" fill="white" data-v-03c823ed${_scopeId}></path></svg><span data-v-03c823ed${_scopeId}>+99871 207-04-07</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M15.5 13.8333V12.4617C15.5 11.7802 15.0851 11.1674 14.4523 10.9143L12.7572 10.2362C11.9524 9.91429 11.0352 10.263 10.6475 11.0383L10.5 11.3333C10.5 11.3333 8.41666 10.9167 6.75 9.25C5.08333 7.58333 4.66667 5.5 4.66667 5.5L4.96168 5.35249C5.73698 4.96484 6.08571 4.04761 5.76378 3.2428L5.08574 1.54768C4.83263 0.914919 4.21979 0.5 3.53828 0.5L2.16667 0.5C1.24619 0.5 0.5 1.24619 0.5 2.16667C0.5 9.53046 6.46954 15.5 13.8333 15.5C14.7538 15.5 15.5 14.7538 15.5 13.8333Z",
                  fill: "white"
                })
              ])),
              createVNode("span", null, "+99871 207-04-07")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div></div></div>`);
      if (unref(route).path !== unref(localePath)("/")) {
        _push(ssrRenderComponent(_component_SectionBanner, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Header/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-03c823ed"]]);
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const translationsStore = useTranslationStore();
    const { translations } = storeToRefs(translationsStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-grey-100" }, _attrs))}><div class="container"><div class="flex flex-col xl:grid xl:grid-cols-3 gap-8 xl:gap-[164px] py-10"><div class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-4 xl:col-span-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="143" height="16" viewBox="0 0 143 16" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M16.6444 0.468085L10.1143 15.4894H6.57123L0 0.468085H4.0169L8.36339 11.5532L12.7305 0.468085H16.6444Z" fill="#020105"${_scopeId}></path><path d="M21.9698 15.4894H18.3237V0.468085H21.9698V15.4894Z" fill="#020105"${_scopeId}></path><path d="M26.0279 15.4894V0.468085H33.9999C35.3183 0.468085 36.465 0.624114 37.44 0.936171C38.4288 1.23404 39.3146 1.79433 40.0974 2.61702C41.3196 3.92199 41.9307 5.68794 41.9307 7.91489C41.9307 10.2837 41.2166 12.156 39.7884 13.5319C39.0468 14.2553 38.216 14.766 37.2958 15.0638C36.3895 15.3475 35.2565 15.4894 33.8969 15.4894H26.0279ZM29.6534 12.8298H33.9175C35.332 12.8298 36.4169 12.461 37.1722 11.7234C37.9276 10.9858 38.3052 9.66667 38.3052 7.76596C38.3052 6.02128 37.8589 4.75887 36.9663 3.97872C36.3208 3.41135 35.284 3.12766 33.8557 3.12766H29.6534V12.8298Z" fill="#020105"${_scopeId}></path><path d="M58.9041 15.4894H44.9376V0.468085H58.4921V3.17021H48.5837V6.55319H58.1625V9.23404H48.5837V12.8085H58.9041V15.4894Z" fill="#020105"${_scopeId}></path><path d="M61.015 7.97872C61.015 6.57447 61.2622 5.34752 61.7566 4.29787C62.251 3.23404 62.917 2.40426 63.7548 1.80851C64.6062 1.19858 65.54 0.744681 66.5563 0.446809C67.5863 0.148936 68.6849 0 69.8522 0C71.047 0 72.1525 0.134752 73.1687 0.404255C74.1987 0.673759 75.1463 1.09929 76.0114 1.68085C76.8904 2.26241 77.5839 3.07801 78.092 4.12766C78.6001 5.17731 78.8542 6.41135 78.8542 7.82979C78.8542 10.3546 78.0783 12.3475 76.5264 13.8085C74.9883 15.2553 72.8048 15.9787 69.9758 15.9787C67.1468 15.9787 64.9427 15.2553 63.3634 13.8085C61.7978 12.3617 61.015 10.4184 61.015 7.97872ZM64.7641 8.08511C64.7641 8.7234 64.8603 9.34043 65.0525 9.93617C65.2448 10.5177 65.5332 11.0709 65.9177 11.5957C66.3159 12.1064 66.8584 12.5177 67.5451 12.8298C68.2454 13.1277 69.042 13.2766 69.9346 13.2766C70.841 13.2766 71.6306 13.1277 72.3035 12.8298C72.9765 12.5177 73.4846 12.156 73.8279 11.7447C74.185 11.3191 74.4665 10.8369 74.6725 10.2979C74.8922 9.75887 75.0227 9.31915 75.0639 8.97872C75.1188 8.62411 75.1463 8.29787 75.1463 8C75.1463 6.55319 74.6862 5.31206 73.7661 4.2766C72.8597 3.22695 71.5826 2.70213 69.9346 2.70213C68.2592 2.70213 66.9751 3.24114 66.0825 4.31915C65.2036 5.38298 64.7641 6.6383 64.7641 8.08511Z" fill="#020105"${_scopeId}></path><path d="M84.5398 15.4894H81.1615V12.4468H84.5398V15.4894Z" fill="#020105"${_scopeId}></path><path d="M100.381 10.383H104.192C104.095 10.8085 103.944 11.2411 103.738 11.6809C103.546 12.1206 103.223 12.6099 102.77 13.1489C102.331 13.6879 101.802 14.1631 101.184 14.5745C100.58 14.9716 99.7764 15.305 98.7739 15.5745C97.7851 15.8582 96.6865 16 95.478 16C92.8138 16 90.692 15.305 89.1127 13.9149C87.5334 12.5106 86.7438 10.5248 86.7438 7.95745C86.7438 5.61702 87.506 3.70922 89.0303 2.23404C90.5684 0.744681 92.7863 0 95.6839 0C97.8538 0 99.6665 0.460993 101.122 1.38298C102.578 2.29078 103.546 3.39007 104.027 4.68085L100.051 5.19149C99.0211 3.57447 97.5654 2.76596 95.6839 2.76596C94.7638 2.76596 93.9536 2.92908 93.2532 3.25532C92.5528 3.58156 92.0104 4.01418 91.6258 4.55319C91.2551 5.0922 90.9735 5.65248 90.7813 6.23404C90.6027 6.8156 90.5135 7.40426 90.5135 8C90.5135 9.47518 91.001 10.7163 91.976 11.7234C92.9648 12.7305 94.2351 13.234 95.7869 13.234C97.998 13.234 99.5292 12.2837 100.381 10.383Z" fill="#1878F3"${_scopeId}></path><path d="M121.927 15.4894H117.848L116.612 12.6596H109.155L107.919 15.4894H103.943L110.968 0.468085H114.902L121.927 15.4894ZM115.438 10L112.904 4.12766L110.329 10H115.438Z" fill="#1878F3"${_scopeId}></path><path d="M143 15.4894H139.539L139.622 3.93617L134.946 15.4894H131.629L126.912 3.93617C126.967 11.2553 126.994 15.1064 126.994 15.4894H123.533V0.468085H128.807L133.318 11.4894L137.788 0.468085H143V15.4894Z" fill="#1878F3"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "143",
                height: "16",
                viewBox: "0 0 143 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M16.6444 0.468085L10.1143 15.4894H6.57123L0 0.468085H4.0169L8.36339 11.5532L12.7305 0.468085H16.6444Z",
                  fill: "#020105"
                }),
                createVNode("path", {
                  d: "M21.9698 15.4894H18.3237V0.468085H21.9698V15.4894Z",
                  fill: "#020105"
                }),
                createVNode("path", {
                  d: "M26.0279 15.4894V0.468085H33.9999C35.3183 0.468085 36.465 0.624114 37.44 0.936171C38.4288 1.23404 39.3146 1.79433 40.0974 2.61702C41.3196 3.92199 41.9307 5.68794 41.9307 7.91489C41.9307 10.2837 41.2166 12.156 39.7884 13.5319C39.0468 14.2553 38.216 14.766 37.2958 15.0638C36.3895 15.3475 35.2565 15.4894 33.8969 15.4894H26.0279ZM29.6534 12.8298H33.9175C35.332 12.8298 36.4169 12.461 37.1722 11.7234C37.9276 10.9858 38.3052 9.66667 38.3052 7.76596C38.3052 6.02128 37.8589 4.75887 36.9663 3.97872C36.3208 3.41135 35.284 3.12766 33.8557 3.12766H29.6534V12.8298Z",
                  fill: "#020105"
                }),
                createVNode("path", {
                  d: "M58.9041 15.4894H44.9376V0.468085H58.4921V3.17021H48.5837V6.55319H58.1625V9.23404H48.5837V12.8085H58.9041V15.4894Z",
                  fill: "#020105"
                }),
                createVNode("path", {
                  d: "M61.015 7.97872C61.015 6.57447 61.2622 5.34752 61.7566 4.29787C62.251 3.23404 62.917 2.40426 63.7548 1.80851C64.6062 1.19858 65.54 0.744681 66.5563 0.446809C67.5863 0.148936 68.6849 0 69.8522 0C71.047 0 72.1525 0.134752 73.1687 0.404255C74.1987 0.673759 75.1463 1.09929 76.0114 1.68085C76.8904 2.26241 77.5839 3.07801 78.092 4.12766C78.6001 5.17731 78.8542 6.41135 78.8542 7.82979C78.8542 10.3546 78.0783 12.3475 76.5264 13.8085C74.9883 15.2553 72.8048 15.9787 69.9758 15.9787C67.1468 15.9787 64.9427 15.2553 63.3634 13.8085C61.7978 12.3617 61.015 10.4184 61.015 7.97872ZM64.7641 8.08511C64.7641 8.7234 64.8603 9.34043 65.0525 9.93617C65.2448 10.5177 65.5332 11.0709 65.9177 11.5957C66.3159 12.1064 66.8584 12.5177 67.5451 12.8298C68.2454 13.1277 69.042 13.2766 69.9346 13.2766C70.841 13.2766 71.6306 13.1277 72.3035 12.8298C72.9765 12.5177 73.4846 12.156 73.8279 11.7447C74.185 11.3191 74.4665 10.8369 74.6725 10.2979C74.8922 9.75887 75.0227 9.31915 75.0639 8.97872C75.1188 8.62411 75.1463 8.29787 75.1463 8C75.1463 6.55319 74.6862 5.31206 73.7661 4.2766C72.8597 3.22695 71.5826 2.70213 69.9346 2.70213C68.2592 2.70213 66.9751 3.24114 66.0825 4.31915C65.2036 5.38298 64.7641 6.6383 64.7641 8.08511Z",
                  fill: "#020105"
                }),
                createVNode("path", {
                  d: "M84.5398 15.4894H81.1615V12.4468H84.5398V15.4894Z",
                  fill: "#020105"
                }),
                createVNode("path", {
                  d: "M100.381 10.383H104.192C104.095 10.8085 103.944 11.2411 103.738 11.6809C103.546 12.1206 103.223 12.6099 102.77 13.1489C102.331 13.6879 101.802 14.1631 101.184 14.5745C100.58 14.9716 99.7764 15.305 98.7739 15.5745C97.7851 15.8582 96.6865 16 95.478 16C92.8138 16 90.692 15.305 89.1127 13.9149C87.5334 12.5106 86.7438 10.5248 86.7438 7.95745C86.7438 5.61702 87.506 3.70922 89.0303 2.23404C90.5684 0.744681 92.7863 0 95.6839 0C97.8538 0 99.6665 0.460993 101.122 1.38298C102.578 2.29078 103.546 3.39007 104.027 4.68085L100.051 5.19149C99.0211 3.57447 97.5654 2.76596 95.6839 2.76596C94.7638 2.76596 93.9536 2.92908 93.2532 3.25532C92.5528 3.58156 92.0104 4.01418 91.6258 4.55319C91.2551 5.0922 90.9735 5.65248 90.7813 6.23404C90.6027 6.8156 90.5135 7.40426 90.5135 8C90.5135 9.47518 91.001 10.7163 91.976 11.7234C92.9648 12.7305 94.2351 13.234 95.7869 13.234C97.998 13.234 99.5292 12.2837 100.381 10.383Z",
                  fill: "#1878F3"
                }),
                createVNode("path", {
                  d: "M121.927 15.4894H117.848L116.612 12.6596H109.155L107.919 15.4894H103.943L110.968 0.468085H114.902L121.927 15.4894ZM115.438 10L112.904 4.12766L110.329 10H115.438Z",
                  fill: "#1878F3"
                }),
                createVNode("path", {
                  d: "M143 15.4894H139.539L139.622 3.93617L134.946 15.4894H131.629L126.912 3.93617C126.967 11.2553 126.994 15.1064 126.994 15.4894H123.533V0.468085H128.807L133.318 11.4894L137.788 0.468085H143V15.4894Z",
                  fill: "#1878F3"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="flex flex-col gap-4 sm:gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/about"),
        class: "text-base font-medium hover:text-primary transition-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(translations)["header.about"])}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(translations)["header.about"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/services"),
        class: "text-base font-medium hover:text-primary transition-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(translations)["header.services"])}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(translations)["header.services"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/portfolio"),
        class: "text-base font-medium hover:text-primary transition-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(translations)["header.portfolio"])}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(translations)["header.portfolio"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/products"),
        class: "text-base font-medium hover:text-primary transition-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(translations)["header.products"])}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(translations)["header.products"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contacts"),
        class: "text-base font-medium hover:text-primary transition-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(translations)["header.contacts"])}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(translations)["header.contacts"]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="flex flex-col gap-2"><h3 class="text-base font-medium">${ssrInterpolate(unref(translations)["footer.location_title"])}</h3><p class="text-base">${ssrInterpolate(unref(translations)["footer.location_text"])}</p></div></div><div class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-4 sm:gap-8"><div class="flex flex-col gap-2"><h3 class="text-base font-medium">${ssrInterpolate(unref(translations)["footer.phone"])}</h3><div><a href="tel:+998712070408" class="block">+998 71 207-04-08</a><a href="tel:+998712070407" class="block">+998 71 207-04-08</a></div></div><div class="flex flex-col gap-4"><h3 class="text-base font-medium">${ssrInterpolate(unref(translations)["footer.social"])}</h3><div class="flex items-center gap-3"><a href="" target="_blank"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></a><a href="" target="_blank"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></a><a href="" target="_blank"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></a><a href="" target="_blank"><img${ssrRenderAttr("src", _imports_3)} alt=""></a></div></div></div></div><div class="border-t border-b py-6"><p class="text-base">\xA9 2021 Barcha huquqlar himoyalangan.</p></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Footer/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const translationsStore = useTranslationStore();
    const { getTranslation } = translationsStore;
    [__temp, __restore] = withAsyncContext(() => useAsyncData(
      "translations",
      () => {
        return getTranslation();
      },
      { watch: [locale] }
    )), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutHeader = __nuxt_component_0;
      const _component_LayoutFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LayoutHeader, null, null, _parent));
      _push(`<div class="flex-1"><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
      _push(ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CXepFYny.mjs.map
