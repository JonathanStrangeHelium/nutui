var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, toRefs, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, unref, createElementVNode, createBlock, createCommentVNode, createTextVNode, renderSlot } from "vue";
import { Loading } from "@nutui/icons-vue-taro";
import Taro from "@tarojs/taro";
import { w as withInstall } from "../with-install-p59gYYU_.js";
const _hoisted_1 = ["type", "formType"];
const _hoisted_2 = { class: "nut-button__wrap" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutButton"
}), {
  __name: "button.taro",
  props: {
    color: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: "round"
    },
    plain: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    formType: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: "normal"
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { type, size, shape, disabled, loading, color, plain, block } = toRefs(props);
    const handleClick = (event) => {
      if (!loading.value && !disabled.value) {
        emit("click", event);
      }
    };
    const classes = computed(() => {
      const prefixCls = "nut-button";
      return {
        [prefixCls]: true,
        [`${prefixCls}--${type.value}`]: type.value,
        [`${prefixCls}--${size.value}`]: size.value,
        [`${prefixCls}--${shape.value}`]: shape.value,
        [`${prefixCls}--plain`]: plain.value,
        [`${prefixCls}--block`]: block.value,
        [`${prefixCls}--disabled`]: disabled.value,
        [`${prefixCls}--loading`]: loading.value
      };
    });
    const getStyle = computed(() => {
      var _a;
      const style = {};
      if (color == null ? void 0 : color.value) {
        if (plain.value) {
          style.color = color.value;
          style.background = "#fff";
          if (!((_a = color.value) == null ? void 0 : _a.includes("gradient"))) {
            style.borderColor = color.value;
          }
        } else {
          style.color = "#fff";
          style.background = color.value;
        }
      }
      return style;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(classes.value),
        style: normalizeStyle(getStyle.value),
        type: unref(Taro).getEnv() === unref(Taro).ENV_TYPE.WEB ? __props.formType : void 0,
        formType: __props.formType === "button" ? void 0 : __props.formType,
        onClick: handleClick
      }, [
        createElementVNode("view", _hoisted_2, [
          unref(loading) ? (openBlock(), createBlock(unref(Loading), {
            key: 0,
            class: "nut-icon-loading"
          })) : createCommentVNode("", true),
          createTextVNode(),
          _ctx.$slots.icon && !unref(loading) ? renderSlot(_ctx.$slots, "icon", { key: 1 }) : createCommentVNode("", true),
          createTextVNode(),
          _ctx.$slots.default ? (openBlock(), createElementBlock("view", {
            key: 2,
            class: normalizeClass({ "nut-button__text": _ctx.$slots.icon || unref(loading) })
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true)
        ])
      ], 14, _hoisted_1);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Button,
  _sfc_main as default
};
