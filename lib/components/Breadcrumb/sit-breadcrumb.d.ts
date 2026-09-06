import SitElement from "../../base/sit-element";
import SitOverflowMenu from "../OverflowMenu/sit-overflow-menu";
/**
 * @summary Breadcrumbs help users to navigate and understand where they are on the current website or service.
 *
 * @slot default - The slot to pass in custom elements of `SitBreadcrumbItems`.
 *
 */
export declare class SitBreadcrumb extends SitElement {
    static styles: import("lit").CSSResult[];
    static dependencies: {
        "sit-overflow-menu": typeof SitOverflowMenu;
    };
    /** The aria-label of nav element within breadcrumb component. */
    ariaLabel: string;
    /**@internal */
    defaultSlot: HTMLSlotElement;
    /**
     * creates `<sit-breadcrumb-item>
     *            <sit-overflow-menu>
     *              <sit-dropdown-item></sit-dropdown-item>
     *               ...
     *            </sit-overflow-menu>
     *          <sit-breadcrumb-item>`
     */
    private _replaceExcessItemsWithDropdown;
    private _handleSlotChange;
    render(): import("lit").TemplateResult;
}
export default SitBreadcrumb;
