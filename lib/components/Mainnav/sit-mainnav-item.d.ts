import SitElement from "../../base/sit-element";
/**
 * @slot default - slot for SitMainnavItem element.
 *
 *  */
export declare class SitMainnavItem extends SitElement {
    static styles: import("lit").CSSResult[];
    /** when true, sets the active stylings of the navigation item */
    active: boolean;
    /** Disables the SitMainnavItem */
    disabled: boolean;
    _handleDisabled(): void;
    private _handleSlotChange;
    render(): import("lit").TemplateResult<1>;
}
export default SitMainnavItem;
