import SitElement from "../../base/sit-element";
import SitSidenavItem from "./sit-sidenav-item";
/**
 * @summary The side navigation is used to display a list of links to move between pages within a related category.
 * It is used as a secondary form of navigation where the primary navigation is located hierachically above the page frame.
 * Maximum three levels of navigations are allowed.
 *
 * @slot default - Default slot for SitSidenavItem element.
 * @cssproperty --sidenav-sticky-top - set the top value of the sticky sidenav. Defaults to 0rem
 */
export declare class SitSidenav extends SitElement {
    static styles: import("lit").CSSResult[];
    /** Apply position sticky to the sidenav */
    sticky: boolean;
    /** @internal */
    private defaultNodes;
    /** @internal */
    get items(): SitSidenavItem[];
    onToggle(event: Event): Promise<void>;
    render(): import("lit").TemplateResult<1>;
}
export default SitSidenav;
