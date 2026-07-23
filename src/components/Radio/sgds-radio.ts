import { html } from "lit";
import { property, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import SitElement from "../../base/sgds-element";
import formLabelStyles from "../../styles/form-label.css";
import formCheckStyles from "../../styles/form-check.css";
import genId from "../../utils/generateId";
import { watch } from "../../utils/watch";
import radioStyles from "./radio.css";
/**
 * @summary Radio allows the user to select one option from a set while seeing all available options.
 *
 * @slot default - The label of the radio input
 *
 * @event sit-focus - Emitted when the control gains focus.
 * @event sit-blur - Emitted when the control loses focus.
 */
export class SitRadio extends SitElement {
  static styles = [...SitElement.styles, formCheckStyles, formLabelStyles, radioStyles];
  /**
   * Draws the radio in a checked state. When used with SitRadioGroup, the value prop of SitRadioGroup overrides the checked prop
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** The radio's value attribute. */
  @property() value: string;

  /** Disables the radio. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Marks the radio input as invalid. Replace the pseudo :invalid selector for absent in custom elements */
  @property({ type: Boolean, reflect: true }) invalid = false;

  /** Automatically focuses the radio input when it becomes checked. */
  @property({ type: Boolean, reflect: false }) autofocus = false;

  @query("input")
  private input: HTMLInputElement;

  private radioId: string = genId("radio");

  connectedCallback(): void {
    super.connectedCallback();
    this.setInitialAttributes();
    this.addEventListeners();
  }

  @watch("checked")
  handleCheckedChange() {
    if (this.checked && this.autofocus) {
      this.input?.focus();
    }
    this.setAttribute("tabindex", this.checked ? "0" : "-1");
  }

  @watch("disabled", { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }

  private handleBlur() {
    this.emit("sit-blur");
  }

  private handleClick() {
    if (!this.disabled) {
      this.checked = true;
    }
  }

  private handleFocus() {
    this.emit("sit-focus");
  }

  private addEventListeners() {
    this.addEventListener("blur", () => this.handleBlur());
    this.addEventListener("click", () => this.handleClick());
    this.addEventListener("focus", () => this.handleFocus());
  }

  private setInitialAttributes() {
    this.setAttribute("tabindex", "-1");
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }

  render() {
    return html`
      <div class="form-check">
        <input
          class=${classMap({
            "form-check-input": true,
            "is-invalid": this.invalid
          })}
          type="radio"
          id=${ifDefined(this.radioId)}
          value=${ifDefined(this.value)}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          aria-disabled=${this.disabled ? "true" : "false"}
          aria-checked=${this.checked ? "true" : "false"}
          @click=${this.handleClick}
        />
        <label for="${ifDefined(this.radioId)}" aria-label=${ifDefined(this.ariaLabel)} class="form-check-label">
          <slot></slot>
        </label>
      </div>
    `;
  }
}

export default SitRadio;
