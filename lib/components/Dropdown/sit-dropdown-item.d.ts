import SitElement from "../../base/sit-element";
import SitIcon from "../Icon/sit-icon";
/**
 * @summary `SitDropdownItem` are navigation links built with `HTMLAnchorElement`. It should be used in the default slot of `SitDropdown`
 * @slot default - The default slot for SitDropdownItem. Pass in a single anchor tag per dropdown item directly for navigation items.
 */
export declare class SitDropdownItem extends SitElement {
    static styles: import("lit").CSSResult[];
    static dependencies: {
        "sit-icon": typeof SitIcon;
    };
    /** @internal */
    private anchor;
    /** when true, sets the active stylings of dropdown item */
    active: boolean;
    /** Disables the SitMainnavItem */
    disabled: boolean;
    /** Forwards aria-label to the inner clickable element for accessibility */
    ariaLabel: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export default SitDropdownItem;
