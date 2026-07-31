import SitElement from "../../base/sit-element";
import SitDropdown from "../Dropdown/sit-dropdown";
import SitDropdownItem from "../Dropdown/sit-dropdown-item";
import SitIcon from "../Icon/sit-icon";
/**
 * @summary An overflow menu is a UI element, often represented by three dots (⋮ or …), that opens a menu with additional actions or options.
 * @slot default - The overflow menu items. Pass in sit-dropdown-items in this slot
 */
export declare class SitOverflowMenu extends SitElement {
    static styles: import("lit").CSSResult[];
    /** @internal */
    static dependencies: {
        "sit-dropdown": typeof SitDropdown;
        "sit-dropdown-item": typeof SitDropdownItem;
        "sit-icon": typeof SitIcon;
    };
    /** Specifies a large or small button */
    size: "sm" | "md";
    render(): import("lit-html").TemplateResult<1>;
}
export default SitOverflowMenu;
