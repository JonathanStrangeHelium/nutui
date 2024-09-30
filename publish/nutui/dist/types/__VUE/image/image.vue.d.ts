import type { WithInstall } from '../../utils';
import { ImageFit, ImagePosition } from './types';
export type ImageProps = Partial<{
    src: string;
    fit: ImageFit;
    position: ImagePosition;
    alt: string;
    width: string;
    height: string;
    round: boolean;
    radius: string | number;
    showError: boolean;
    showLoading: boolean;
    lazyLoad: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    src: string;
    fit: ImageFit;
    position: string;
    alt: string;
    width: string;
    height: string;
    round: boolean;
    radius: string | number;
    showError: boolean;
    showLoading: boolean;
    lazyLoad: boolean;
}>>, {
    fit: string;
    position: string;
    alt: string;
    width: string;
    height: string;
    round: boolean;
    showError: boolean;
    showLoading: boolean;
    lazyLoad: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    error: (...args: any[]) => void;
    load: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    src: string;
    fit: ImageFit;
    position: string;
    alt: string;
    width: string;
    height: string;
    round: boolean;
    radius: string | number;
    showError: boolean;
    showLoading: boolean;
    lazyLoad: boolean;
}>>, {
    fit: string;
    position: string;
    alt: string;
    width: string;
    height: string;
    round: boolean;
    showError: boolean;
    showLoading: boolean;
    lazyLoad: boolean;
}>>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
    onLoad?: ((...args: any[]) => any) | undefined;
}>, {
    round: boolean;
    width: string;
    height: string;
    position: string;
    fit: ImageFit;
    alt: string;
    showError: boolean;
    showLoading: boolean;
    lazyLoad: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    loading?(_: {}): any;
    error?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutImage: typeof _default;
    }
}
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
