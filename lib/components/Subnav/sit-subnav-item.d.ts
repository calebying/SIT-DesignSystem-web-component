import SitElement from "../../base/sit-element";
/**
 * @slot default - slot for SitSubnavItem element.
 *
 *  */
export declare class SitSubnavItem extends SitElement {
    static styles: import("lit").CSSResult[];
    /** when true, sets the active stylings of the navigation item */
    active: boolean;
    /** Disables the SitSubnavItem */
    disabled: boolean;
    _handleDisabled(): void;
    private _handleSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
export default SitSubnavItem;
