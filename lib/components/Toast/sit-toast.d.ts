import { PropertyValueMap } from "lit";
import SitElement from "../../base/sit-element";
import SitCloseButton from "../CloseButton/sit-close-button";
/**
 * @summary Toast allows you to convey quick messaging notifications to the user.
 *
 * @slot default - The content to pass into toast's body
 * @slot action - The content to pass into toast's action
 * @slot icon - The icon in toast.
 *
 * @event sit-show - Emitted on show.
 * @event sit-after-show - Emitted on show after animation has completed.
 * @event sit-hide - Emitted on hide.
 * @event sit-after-hide - Emitted on hide after animation has completed.
 *
 */
export declare class SitToast extends SitElement {
    static styles: import("lit").CSSResult[];
    /**@internal */
    static dependencies: {
        "sit-close-button": typeof SitCloseButton;
    };
    /**@internal */
    toast: HTMLElement;
    /** Controls the appearance of toast */
    show: boolean;
    /** The header title of toast. It is required to assign a title to toast */
    title: string;
    /** Controls whether the toast has fade animation during its appearance/disappearance */
    noAnimation: boolean;
    /** Controls if the toast will hide itself after the delay time. Works with delay property */
    autohide: boolean;
    /** The amount of time taken in miliseconds for toast to disappear after its first render. It takes effect only when autohide is set to true. Defaults to 5000ms */
    delay: number;
    /**The variant styles of toast */
    variant: "success" | "warning" | "danger" | "info";
    /** Controls whether or not the Toast is dismissible */
    dismissible: boolean;
    /** Shows the toast */
    showToast(): Promise<void>;
    /** Hide the toast */
    hideToast(): Promise<void>;
    /** @internal */
    handleCloseClick(): void;
    /**@internal */
    handleShowChange(): Promise<void>;
    protected firstUpdated(changedProperties: PropertyValueMap<this>): void;
    private _actionNodes;
    render(): import("lit-html").TemplateResult<1>;
}
export default SitToast;
