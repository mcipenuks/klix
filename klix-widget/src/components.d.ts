/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface KlixPayLater {
        "amount": string;
        "brandId": string;
        "language": string;
    }
    interface LoadingOverlay {
        "isVisible": boolean;
    }
}
declare global {
    interface HTMLKlixPayLaterElement extends Components.KlixPayLater, HTMLStencilElement {
    }
    var HTMLKlixPayLaterElement: {
        prototype: HTMLKlixPayLaterElement;
        new (): HTMLKlixPayLaterElement;
    };
    interface HTMLLoadingOverlayElement extends Components.LoadingOverlay, HTMLStencilElement {
    }
    var HTMLLoadingOverlayElement: {
        prototype: HTMLLoadingOverlayElement;
        new (): HTMLLoadingOverlayElement;
    };
    interface HTMLElementTagNameMap {
        "klix-pay-later": HTMLKlixPayLaterElement;
        "loading-overlay": HTMLLoadingOverlayElement;
    }
}
declare namespace LocalJSX {
    interface KlixPayLater {
        "amount"?: string;
        "brandId"?: string;
        "language"?: string;
    }
    interface LoadingOverlay {
        "isVisible"?: boolean;
    }
    interface IntrinsicElements {
        "klix-pay-later": KlixPayLater;
        "loading-overlay": LoadingOverlay;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "klix-pay-later": LocalJSX.KlixPayLater & JSXBase.HTMLAttributes<HTMLKlixPayLaterElement>;
            "loading-overlay": LocalJSX.LoadingOverlay & JSXBase.HTMLAttributes<HTMLLoadingOverlayElement>;
        }
    }
}
