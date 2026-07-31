import SitElement from "../../base/sit-element";
/**
 * @summary ToastContainer is the container component to position `sit-toast` in screen. When there is multiple toasts in the container, the toast components are stacked vertically.
 *
 * @slot default - The slot for `sit-toast` elements
 *
 */
export declare class SitToastContainer extends SitElement {
    static styles: import("lit").CSSResult[];
    /**
     * Controls the position of `sit-toast` within itself.
     * Since 3.7.1, the positions "top-start", "middle-start", "middle-center", and "middle-end" are deprecated.
     */
    position: ToastPosition;
    render(): import("lit-html").TemplateResult;
}
export type ToastPosition = "top-start" | "top-center" | "top-end" | "middle-start" | "middle-center" | "middle-end" | "bottom-start" | "bottom-center" | "bottom-end";
export default SitToastContainer;
