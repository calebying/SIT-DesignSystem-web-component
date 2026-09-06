import SitElement from "../../base/sit-element";
/**
 * @summary The footer item component organizes links under a clear, descriptive title within the footer. It helps users easily navigate to related resources or information, ensuring clarity and accessibility.
 *
 * @slot default - The slot for the list of link items
 * @slot title - The slot for the title of the list of items
 *
 */
export declare class SitFooterItem extends SitElement {
    static styles: import("lit").CSSResult[];
    /** Sets the color tone of the footer item. Inherited from the parent sit-footer. */
    tone: "fixed-dark" | "neutral";
    /**@internal */
    _handleToneChange(): void;
    private _handleSlotChange;
    render(): import("lit").TemplateResult<1>;
}
export default SitFooterItem;
