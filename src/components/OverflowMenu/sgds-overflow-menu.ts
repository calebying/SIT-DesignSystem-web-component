import { html } from "lit";
import SitElement from "../../base/sgds-element";
import overflowMenuStyles from "./overflow-menu.css";
import { property } from "lit/decorators.js";
import SitDropdown from "../Dropdown/sgds-dropdown";
import SitDropdownItem from "../Dropdown/sgds-dropdown-item";
import SitIcon from "../Icon/sgds-icon";
/**
 * @summary An overflow menu is a UI element, often represented by three dots (⋮ or …), that opens a menu with additional actions or options.
 * @slot default - The overflow menu items. Pass in sgds-dropdown-items in this slot
 */
export class SitOverflowMenu extends SitElement {
  static styles = [...SitElement.styles, overflowMenuStyles];
  /** @internal */
  static dependencies = {
    "sgds-dropdown": SitDropdown,
    "sgds-dropdown-item": SitDropdownItem,
    "sgds-icon": SitIcon
  };
  /** Specifies a large or small button */
  @property({ type: String, reflect: true }) size: "sm" | "md" = "md";

  render() {
    return html`
      <sgds-dropdown>
        <button slot="toggler" class="overflow-btn" aria-label="More options">
          <sgds-icon name="three-dots" size=${this.size}></sgds-icon>
        </button>
        <slot></slot>
      </sgds-dropdown>
    `;
  }
}

export default SitOverflowMenu;
