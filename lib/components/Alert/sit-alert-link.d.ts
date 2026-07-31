import SitElement from "../../base/sit-element";
/**
 * @deprecated From v3.21.0, use a native `<a>` element directly inside `<sit-alert>` instead. The alert component now styles slotted anchor tags automatically.
 * @summary Alert link are used within the alert's message that is passed into the default slot of `<sit-alert>`
 *
 * @slot default - The text content of the anchor element
 */
export declare class SitAlertLink extends SitElement {
    static styles: import("lit").CSSResult[];
    /** Forwards to href attribute of anchor element */
    href: string;
    /** Tells the browser where to open the link */
    target: "_blank" | "_parent" | "_self" | "_top";
    render(): import("lit-html").TemplateResult;
}
export default SitAlertLink;
