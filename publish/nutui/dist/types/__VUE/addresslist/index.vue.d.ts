
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        default: never[];
    };
    longPress: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeEdition: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBottomButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    dataOptions: {
        type: ObjectConstructor;
        default: {};
    };
}>, {
    clickDelIcon: (event: Event, item: unknown) => void;
    clickEditIcon: (event: Event, item: unknown) => void;
    clickContentItem: (event: Event, item: unknown) => void;
    clickLongCopy: (event: Event, item: unknown) => void;
    clickLongSet: (event: Event, item: unknown) => void;
    clickLongDel: (event: Event, item: unknown) => void;
    clickSwipeDel: (event: Event, item: unknown) => void;
    addAddress: (event: Event) => void;
    dataArray: any;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("add" | "clickItem" | "delIcon" | "editIcon" | "longCopy" | "longSet" | "longDel" | "swipeDel")[], "add" | "clickItem" | "delIcon" | "editIcon" | "longCopy" | "longSet" | "longDel" | "swipeDel", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        default: never[];
    };
    longPress: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeEdition: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBottomButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    dataOptions: {
        type: ObjectConstructor;
        default: {};
    };
}>> & Readonly<{
    onClickItem?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onDelIcon?: ((...args: any[]) => any) | undefined;
    onEditIcon?: ((...args: any[]) => any) | undefined;
    onLongCopy?: ((...args: any[]) => any) | undefined;
    onLongSet?: ((...args: any[]) => any) | undefined;
    onLongDel?: ((...args: any[]) => any) | undefined;
    onSwipeDel?: ((...args: any[]) => any) | undefined;
}>, {
    data: unknown[];
    longPress: boolean;
    swipeEdition: boolean;
    showBottomButton: boolean;
    dataOptions: Record<string, any>;
}, {}, {
    GeneralShell: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        item: {
            type: ObjectConstructor;
            default: {};
        };
        longPress: {
            type: BooleanConstructor;
            default: boolean;
        };
        swipeEdition: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        renderCompontent: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        showMaskRef: import("vue").Ref<boolean, boolean>;
        clickItem: (event: Event) => void;
        editClick: (event: Event) => void;
        delClick: (event: Event) => void;
        delLongClick: (event: Event) => void;
        holddownstart: (event: Event) => void;
        holddownmove: () => void;
        holddownend: () => void;
        copyCLick: (event: Event) => void;
        hideMaskClick: () => void;
        setDefault: (event: Event) => void;
        maskClick: (event: Event) => void;
        swipeDelClick: (event: Event) => void;
        swipestart: () => void;
        swipemove: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clickItem" | "delIcon" | "editIcon" | "longDown" | "longCopy" | "longSet" | "longDel" | "swipeDel")[], "clickItem" | "delIcon" | "editIcon" | "longDown" | "longCopy" | "longSet" | "longDel" | "swipeDel", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        item: {
            type: ObjectConstructor;
            default: {};
        };
        longPress: {
            type: BooleanConstructor;
            default: boolean;
        };
        swipeEdition: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onClickItem?: ((...args: any[]) => any) | undefined;
        onDelIcon?: ((...args: any[]) => any) | undefined;
        onEditIcon?: ((...args: any[]) => any) | undefined;
        onLongDown?: ((...args: any[]) => any) | undefined;
        onLongCopy?: ((...args: any[]) => any) | undefined;
        onLongSet?: ((...args: any[]) => any) | undefined;
        onLongDel?: ((...args: any[]) => any) | undefined;
        onSwipeDel?: ((...args: any[]) => any) | undefined;
    }>, {
        item: Record<string, any>;
        longPress: boolean;
        swipeEdition: boolean;
    }, {}, {
        ItemContents: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            item: {
                type: ObjectConstructor;
                default: {};
            };
        }>, {
            delClick: (event: Event) => void;
            editClick: (event: Event) => void;
            contentsClick: (event: Event) => void;
            translate: (keyPath: string, ...args: unknown[]) => any;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clickItem" | "delIcon" | "editIcon")[], "clickItem" | "delIcon" | "editIcon", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            item: {
                type: ObjectConstructor;
                default: {};
            };
        }>> & Readonly<{
            onClickItem?: ((...args: any[]) => any) | undefined;
            onDelIcon?: ((...args: any[]) => any) | undefined;
            onEditIcon?: ((...args: any[]) => any) | undefined;
        }>, {
            item: Record<string, any>;
        }, {}, {
            Del: import("vue").DefineComponent<{
                class: {
                    type: StringConstructor;
                    default: string;
                };
                name: {
                    type: StringConstructor;
                    default: string;
                };
                color: {
                    type: StringConstructor;
                    default: string;
                };
                width: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: string;
                };
                height: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: string;
                };
            }, {
                classes: import("vue").ComputedRef<{
                    [x: string]: string | boolean;
                    "nut-icon": boolean;
                }>;
                style: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                class: {
                    type: StringConstructor;
                    default: string;
                };
                name: {
                    type: StringConstructor;
                    default: string;
                };
                color: {
                    type: StringConstructor;
                    default: string;
                };
                width: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: string;
                };
                height: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: string;
                };
            }>>, {
                name: string;
                width: string | number;
                height: string | number;
                color: string;
                class: string;
            }>;
            Edit: import("vue").DefineComponent<{
                class: {
                    type: StringConstructor;
                    default: string;
                };
                name: {
                    type: StringConstructor;
                    default: string;
                };
                color: {
                    type: StringConstructor;
                    default: string;
                };
                width: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: string;
                };
                height: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: string;
                };
            }, {
                classes: import("vue").ComputedRef<{
                    [x: string]: string | boolean;
                    "nut-icon": boolean;
                }>;
                style: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                class: {
                    type: StringConstructor;
                    default: string;
                };
                name: {
                    type: StringConstructor;
                    default: string;
                };
                color: {
                    type: StringConstructor;
                    default: string;
                };
                width: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: string;
                };
                height: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: string;
                };
            }>>, {
                name: string;
                width: string | number;
                height: string | number;
                color: string;
                class: string;
            }>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        NutButton: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                color: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                    default: string;
                };
                plain: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                loading: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                disabled: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                type: {
                    type: import("vue").PropType<import("../button").ButtonType>;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("../button").ButtonSize>;
                    default: string;
                };
                block: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (...args: any[]) => void;
            }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                color: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                    default: string;
                };
                plain: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                loading: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                disabled: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                type: {
                    type: import("vue").PropType<import("../button").ButtonType>;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("../button").ButtonSize>;
                    default: string;
                };
                block: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
            }>, {
                color: string;
                shape: import("../button").ButtonShape;
                plain: boolean;
                loading: boolean;
                disabled: boolean;
                type: import("../button").ButtonType;
                size: import("../button").ButtonSize;
                block: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                color: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                    default: string;
                };
                plain: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                loading: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                disabled: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                type: {
                    type: import("vue").PropType<import("../button").ButtonType>;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("../button").ButtonSize>;
                    default: string;
                };
                block: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, {
                color: string;
                shape: import("../button").ButtonShape;
                plain: boolean;
                loading: boolean;
                disabled: boolean;
                type: import("../button").ButtonType;
                size: import("../button").ButtonSize;
                block: boolean;
            }>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: import("vue").PropType<string>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
        }, string, {
            color: string;
            shape: import("../button").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button").ButtonType;
            size: import("../button").ButtonSize;
            block: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: {
                icon?(_: {}): any;
                default?(_: {}): any;
            };
        });
        NutSwipe: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                name: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                disabled: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                touchMoveStopPropagation: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                touchMovePreventDefault: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
                onClose?: ((...args: any[]) => any) | undefined;
                onOpen?: ((...args: any[]) => any) | undefined;
            }>, {
                open: (p?: import("../swipe").SwipePosition) => void;
                close: () => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (...args: any[]) => void;
                close: (...args: any[]) => void;
                open: (...args: any[]) => void;
            }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                name: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                disabled: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                touchMoveStopPropagation: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                touchMovePreventDefault: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
                onClose?: ((...args: any[]) => any) | undefined;
                onOpen?: ((...args: any[]) => any) | undefined;
            }>, {
                name: string;
                disabled: boolean;
                touchMoveStopPropagation: boolean;
                touchMovePreventDefault: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                name: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                disabled: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                touchMoveStopPropagation: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                touchMovePreventDefault: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
                onClose?: ((...args: any[]) => any) | undefined;
                onOpen?: ((...args: any[]) => any) | undefined;
            }>, {
                open: (p?: import("../swipe").SwipePosition) => void;
                close: () => void;
            }, {}, {}, {}, {
                name: string;
                disabled: boolean;
                touchMoveStopPropagation: boolean;
                touchMovePreventDefault: boolean;
            }>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            name: {
                type: import("vue").PropType<string>;
                default: string;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            touchMoveStopPropagation: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            touchMovePreventDefault: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
            onOpen?: ((...args: any[]) => any) | undefined;
        }>, {
            open: (p?: import("../swipe").SwipePosition) => void;
            close: () => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
            close: (...args: any[]) => void;
            open: (...args: any[]) => void;
        }, string, {
            name: string;
            disabled: boolean;
            touchMoveStopPropagation: boolean;
            touchMovePreventDefault: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: {
                left?(_: {}): any;
                default?(_: {}): any;
                right?(_: {}): any;
            };
        });
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    NutButton: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: import("vue").PropType<string>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: import("vue").PropType<string>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            color: string;
            shape: import("../button").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button").ButtonType;
            size: import("../button").ButtonSize;
            block: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: import("vue").PropType<string>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            color: string;
            shape: import("../button").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button").ButtonType;
            size: import("../button").ButtonSize;
            block: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        color: {
            type: import("vue").PropType<string>;
            default: string;
        };
        shape: {
            type: import("vue").PropType<import("../button").ButtonShape>;
            default: string;
        };
        plain: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        type: {
            type: import("vue").PropType<import("../button").ButtonType>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
            default: string;
        };
        block: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
    }, string, {
        color: string;
        shape: import("../button").ButtonShape;
        plain: boolean;
        loading: boolean;
        disabled: boolean;
        type: import("../button").ButtonType;
        size: import("../button").ButtonSize;
        block: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            icon?(_: {}): any;
            default?(_: {}): any;
        };
    });
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAddressList: typeof _default;
    }
}