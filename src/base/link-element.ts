import { html } from "lit";
import SitElement from "./sgds-element";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { watch } from "../utils/watch";

/**
 * @slot default - Default slot for SitMainnavItem anchor element
 * @slot default - Default slot for SitMainnavItem anchor element
 */

export default class LinkElement extends SitElement {
  /** when true, sets the active stylings of .nav-link */
  @property({ type: Boolean })
  active = false;

  /** Href attribute for anchor element in SitMainnavItem */
  @property({ type: String })
  href: string;
  /** Disables the SitMainnavItem */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  @watch("disabled")
  _handleDisabled() {
    this.setAttribute("aria-disabled", `${this.disabled}`);
  }

  render() {
    return html`
      <a
        href=${this.disabled ? "javascript:void(0)" : ifDefined(this.href)}
        class="nav-link ${classMap({
          disabled: this.disabled,
          active: this.active
        })} "
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
      >
        <slot></slot>
      </a>
    `;
  }
}
