import { html } from "lit";
import SitElement from "../../base/sit-element";
import overflowMenuStyles from "./overflow-menu.css";
import { property } from "lit/decorators.js";
import SitDropdown from "../Dropdown/sit-dropdown";
import SitDropdownItem from "../Dropdown/sit-dropdown-item";
import SitIcon from "../Icon/sit-icon";
/**
 * @summary An overflow menu is a UI element, often represented by three dots (⋮ or …), that opens a menu with additional actions or options.
 * @slot default - The overflow menu items. Pass in sit-dropdown-items in this slot
 */
export class SitOverflowMenu extends SitElement {
  static styles = [...SitElement.styles, overflowMenuStyles];
  /** @internal */
  static dependencies = {
    "sit-dropdown": SitDropdown,
    "sit-dropdown-item": SitDropdownItem,
    "sit-icon": SitIcon
  };
  /** Specifies a large or small button */
  @property({ type: String, reflect: true }) size: "sm" | "md" = "md";

  render() {
    return html`
      <sit-dropdown>
        <button slot="toggler" class="overflow-btn" aria-label="More options">
          <sit-icon name="three-dots" size=${this.size}></sit-icon>
        </button>
        <slot></slot>
      </sit-dropdown>
    `;
  }
}

export default SitOverflowMenu;
