import { html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import SitIcon from "../Icon/sgds-icon";
import FormControlElement from "../../base/form-control-element";
import { defaultValue } from "../../utils/defaultvalue";
import { SitFormControl } from "../../utils/formSubmitController";
import { SitFormValidatorMixin } from "../../utils/validatorMixin";
import { watch } from "../../utils/watch";
import checkboxStyle from "./checkbox.css";
import formCheckStyles from "../../styles/form-check.css";

/**
 * @summary Checkbox component is used when you require users to select multiple items from a list.
 *
 * @slot default - The label of checkbox.
 *
 * @event sit-change - Emitted when the checked state changes.
 * @event sit-blur - Emitted when input is not in focus.
 * @event sit-focus - Emitted when input is in focus.
 * @event sit-check - Emitted when checkbox is checked
 * @event sit-uncheck - Emitted when checkbox is unchecked
 * @event sit-invalid - Emitted when the checkbox's invalid state is set to true.
 * @event sit-valid - Emitted when the checkbox's invalid state is set to false.
 */
export class SitCheckbox extends SitFormValidatorMixin(FormControlElement) implements SitFormControl {
  static styles = [...FormControlElement.styles, formCheckStyles, checkboxStyle];

  /**@internal */
  static dependencies = {
    "sgds-icon": SitIcon
  };

  /** Value of the HTML form control. Primarily used to differentiate a list of related checkboxes that have the same name. */
  @property({ type: String, reflect: true }) value: string;

  /** Draws the checkbox in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** Allows invalidFeedback, invalid and valid styles to be visible with the input */
  @property({ type: String, reflect: true }) hasFeedback: "style" | "text" | "both";

  /** @internal Gets or sets the default value used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
  @defaultValue("checked")
  defaultChecked = false;

  /** Marks the checkbox input as indeterminate , with indeterminate logo  */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** Makes the checkbox a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Disables native and sgds validation for the checkbox. */
  @property({ type: Boolean, reflect: true }) noValidate = false;

  /**Feedback text for error state when validated */
  @property({ type: String, reflect: true }) invalidFeedback = "";

  @state() private _isTouched = false;

  /** Simulates a click on the checkbox. */
  public click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  public focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the checkbox. */
  public blur() {
    this.input.blur();
  }

  private _handleChange(e: Event) {
    if (this.indeterminate) {
      this.indeterminate = !this.indeterminate;
    }

    this.checked = !this.checked;
    super._mixinHandleChange(e);
    this.emit("sit-change", { detail: { checked: this.checked, value: this.value } });

    this.checked
      ? this.emit("sit-check", { detail: { value: this.value } })
      : this.emit("sit-uncheck", { detail: { value: this.value } });
  }

  private _handleKeyDown(event: KeyboardEvent) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.key === "Enter" && !hasModifier) {
      this.click();
    }
  }

  private _handleBlur() {
    this._isTouched = true;
    this.emit("sit-blur");
  }

  private _handleFocus() {
    this.emit("sit-focus");
  }

  private _handleInvalid(e: Event) {
    e.preventDefault();
    this.invalid = true;
  }

  /** @internal */
  @watch("disabled", { waitUntilFirstUpdate: true })
  _handleDisabledChange() {
    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    this.setInvalid(false);
  }

  @watch("_isTouched", { waitUntilFirstUpdate: true })
  _handleIsTouched() {
    if (this._mixinShouldSkipSitValidation()) return;
    if (this._isTouched) {
      this.invalid = !this.input.checkValidity();
    }
  }

  private _mixinResetFormControl() {
    this._isTouched = false;
    this.checked = this.input.checked = this.defaultChecked;
    this.input.dispatchEvent(new InputEvent("reset"));
    this._mixinResetValidity(this.input);
  }
  /**
   * Checks for validity. Under the hood, HTMLFormElement's reportValidity method calls this method to check for component's validity state
   * Note that the native error popup is prevented for SGDS form components by default. Instead the validation message shows up in the feedback container of SitInput
   */
  public reportValidity(): boolean {
    return this._mixinReportValidity();
  }
  /**
   * Checks for validity without any native error popup message
   */
  public checkValidity(): boolean {
    return this._mixinCheckValidity();
  }
  /**
   * Returns the ValidityState object
   */
  public get validity(): ValidityState {
    return this._mixinGetValidity();
  }
  /**
   * Returns the validation message based on the ValidityState
   */
  public get validationMessage() {
    return this._mixinGetValidationMessage();
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.checked && this.emit("sit-check", { detail: { value: this.value } });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener("click", this._handleHostClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener("click", this._handleHostClick);
  }

  // Delegates host-targeted clicks to the internal input so that clicking anywhere
  // on the sgds-checkbox element (e.g. expanded padding inside sgds-dropdown-item) toggles
  // the checkbox. Clicks already originating from inside the shadow DOM are left alone.
  private _handleHostClick = (e: Event) => {
    if (e.composedPath()[0] === this) {
      e.stopPropagation();
      this.input.click();
    }
  };
  render() {
    const displayFeedbackStyle = this.hasFeedback === "both" || this.hasFeedback === "style";
    const displayFeedbackText = this.hasFeedback === "both" || this.hasFeedback === "text";

    return html`
      <div class="form-check">
        <input
          class=${classMap({
            "form-check-input": true,
            "is-invalid": displayFeedbackStyle && this.invalid
          })}
          type="checkbox"
          id=${this._controlId}
          aria-invalid=${this.invalid ? "true" : "false"}
          name=${ifDefined(this.name)}
          ?indeterminate=${this.indeterminate}
          ?required=${this.required}
          aria-disabled=${this.disabled ? "true" : "false"}
          aria-checked=${this.checked ? "true" : "false"}
          @change=${(e: Event) => this._handleChange(e)}
          @keydown=${this._handleKeyDown}
          @invalid=${(e: Event) => this._handleInvalid(e)}
          ?checked=${live(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          @blur=${this._handleBlur}
          @focus=${this._handleFocus}
        />
        <label for="${this._controlId}" class="form-check-label" id="${this._labelId}"><slot></slot></label>
      </div>
      ${displayFeedbackText && this.invalid
        ? html`
            <div class="invalid-feedback-container">
              <slot name="invalidIcon">
                <sgds-icon name="exclamation-circle-fill" size="md"></sgds-icon>
              </slot>
              <div id="checkbox-feedback" tabindex="0" class="invalid-feedback">
                ${this.invalidFeedback ? this.invalidFeedback : this.input.validationMessage}
              </div>
            </div>
          `
        : nothing}
    `;
  }
}

export default SitCheckbox;
