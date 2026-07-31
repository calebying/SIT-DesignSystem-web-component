import SitElement from "./sit-element";
/**
 * @slot default - Default slot for SitMainnavItem anchor element
 * @slot default - Default slot for SitMainnavItem anchor element
 */
export default class LinkElement extends SitElement {
    /** when true, sets the active stylings of .nav-link */
    active: boolean;
    /** Href attribute for anchor element in SitMainnavItem */
    href: string;
    /** Disables the SitMainnavItem */
    disabled: boolean;
    _handleDisabled(): void;
    render(): import("lit-html").TemplateResult<1>;
}
