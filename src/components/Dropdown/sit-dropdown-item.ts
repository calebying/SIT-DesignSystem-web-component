import { html } from "lit";
import { property, queryAssignedElements } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import SitElement from "../../base/sit-element";
import SitIcon from "../Icon/sit-icon";
import dropdownItemStyle from "./dropdown-item.css";
import dropdownStyle from "./dropdown.css";
/**
 * @summary `SitDropdownItem` are navigation links built with `HTMLAnchorElement`. It should be used in the default slot of `SitDropdown`
 * @slot default - The default slot for SitDropdownItem. Pass in a single anchor tag per dropdown item directly for navigation items.
 */
export class SitDropdownItem extends SitElement {
  static styles = [dropdownStyle, dropdownItemStyle];
  static dependencies = {
    "sit-icon": SitIcon
  };

  /** @internal */
  @queryAssignedElements({ flatten: true }) private anchor: HTMLAnchorElement[];

  /** when true, sets the active stylings of dropdown item */
  @property({ type: Boolean })
  active = false;

  /** Disables the SitMainnavItem */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Forwards aria-label to the inner clickable element for accessibility */
  @property({ type: String })
  ariaLabel = "";

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter" && this.anchor.length > 0) {
        this.anchor[0].click();
      }
    });
    this.setAttribute("role", "menuitem");
    this.setAttribute("aria-disabled", `${this.disabled}`);
  }

  render() {
    return html`
      <div
        class="dropdown-item ${classMap({
          disabled: this.disabled,
          active: this.active
        })}"
        tabindex=${this.disabled ? "-1" : "0"}
        aria-label=${ifDefined(this.ariaLabel || undefined)}
      >
        <slot></slot>
      </div>
    `;
  }
}

export default SitDropdownItem;
