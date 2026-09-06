import SitElement from "../../base/sit-element";
/**
 * @slot default - slot for label of anchor tag.
 */
export declare class SitSidenavLink extends SitElement {
    static styles: import("lit").CSSResult[];
    /** when true, sets the active stylings of .nav-link */
    active: boolean;
    /** Disables the SitMainnavItem */
    disabled: boolean;
    private _anchor;
    connectedCallback(): void;
    _handleDisabled(): void;
    _handleSlotChange(): void;
    render(): import("lit").TemplateResult<1>;
}
export default SitSidenavLink;
