import { html, PropertyValueMap, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import optionStyles from "./option.css";
import SitElement from "./sit-element";

export class OptionElement extends SitElement {
  static styles = [optionStyles];
  /**
   * @internal when true, sets the active stylings.
   * This property is controlled by its nearest parent e.g. Select or Combo box
   */
  @property({ type: Boolean, reflect: true }) active = false;

  /** Disables the Item */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The value of the option item */
  @property({ type: String, reflect: true }) value: string;

  connectedCallback(): void {
    super.connectedCallback();
    // Follows the W3C APG listbox pattern: Select/ComboBox render their menu as
    // role="listbox", so each option must be role="option" (not "menuitem").
    this.setAttribute("role", "option");
    this.setAttribute("aria-disabled", `${this.disabled}`);
    this.setAttribute("aria-selected", `${this.active}`);
  }

  updated(changedProperties: PropertyValueMap<this>) {
    super.updated(changedProperties);
    if (changedProperties.has("active")) {
      this.setAttribute("aria-selected", `${this.active}`);
    }
    if (changedProperties.has("disabled")) {
      this.setAttribute("aria-disabled", `${this.disabled}`);
    }
  }

  render() {
    const classes = {
      disabled: this.disabled,
      active: this.active
    };
    return html`
      <div class="dropdown-item ${classMap(classes)}" tabindex=${this.disabled ? "-1" : "0"}>
        ${this._renderItemContent()}
      </div>
    `;
  }

  protected declare _renderItemContent: () => TemplateResult<1>;
}
