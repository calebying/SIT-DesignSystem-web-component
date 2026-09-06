import { PropertyValueMap } from "lit";
import SitElement from "../../base/sit-element";
/**
 * @summary Breadcrumb Item are navigational links used in Breadcrumb component
 *
 * @slot default - The link of the item. Pass in anchor tags into this slot
 */
export declare class SitBreadcrumbItem extends SitElement {
    static styles: import("lit").CSSResult[];
    static dependencies: Record<string, typeof SitElement>;
    /** Indicates the link matches the current location of the page. Programmatically handled by SitBreadcrumb to set this prop to true for the last breadcrumb item  */
    active: boolean;
    private _preventNavigation;
    updated(changedProperties: PropertyValueMap<this>): void;
    render(): import("lit").TemplateResult<1>;
}
export default SitBreadcrumbItem;
