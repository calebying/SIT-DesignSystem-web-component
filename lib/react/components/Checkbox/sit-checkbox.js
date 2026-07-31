'use client';
import { __decorate } from 'tslib';
import { html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { SitIcon } from '../Icon/sit-icon.js';
import FormControlElement from '../../base/form-control-element.js';
import { defaultValue } from '../../utils/defaultvalue.js';
import { SitFormValidatorMixin } from '../../utils/validatorMixin.js';
import { watch } from '../../utils/watch.js';
import css_248z$1 from './checkbox.js';
import css_248z from '../../styles/form-check.js';

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
class SitCheckbox extends SitFormValidatorMixin(FormControlElement) {
    constructor() {
        super(...arguments);
        /** Draws the checkbox in a checked state. */
        this.checked = false;
        /** @internal Gets or sets the default value used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
        this.defaultChecked = false;
        /** Marks the checkbox input as indeterminate , with indeterminate logo  */
        this.indeterminate = false;
        /** Makes the checkbox a required field. */
        this.required = false;
        /** Disables native and sit validation for the checkbox. */
        this.noValidate = false;
        /**Feedback text for error state when validated */
        this.invalidFeedback = "";
        this._isTouched = false;
        // Delegates host-targeted clicks to the internal input so that clicking anywhere
        // on the sit-checkbox element (e.g. expanded padding inside sit-dropdown-item) toggles
        // the checkbox. Clicks already originating from inside the shadow DOM are left alone.
        this._handleHostClick = (e) => {
            if (e.composedPath()[0] === this) {
                e.stopPropagation();
                this.input.click();
            }
        };
    }
    /** Simulates a click on the checkbox. */
    click() {
        this.input.click();
    }
    /** Sets focus on the checkbox. */
    focus(options) {
        this.input.focus(options);
    }
    /** Removes focus from the checkbox. */
    blur() {
        this.input.blur();
    }
    _handleChange(e) {
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
    _handleKeyDown(event) {
        const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
        if (event.key === "Enter" && !hasModifier) {
            this.click();
        }
    }
    _handleBlur() {
        this._isTouched = true;
        this.emit("sit-blur");
    }
    _handleFocus() {
        this.emit("sit-focus");
    }
    _handleInvalid(e) {
        e.preventDefault();
        this.invalid = true;
    }
    /** @internal */
    _handleDisabledChange() {
        // Disabled form controls are always valid, so we need to recheck validity when the state changes
        this.setInvalid(false);
    }
    _handleIsTouched() {
        if (this._mixinShouldSkipSitValidation())
            return;
        if (this._isTouched) {
            this.invalid = !this.input.checkValidity();
        }
    }
    _mixinResetFormControl() {
        this._isTouched = false;
        this.checked = this.input.checked = this.defaultChecked;
        this.input.dispatchEvent(new InputEvent("reset"));
        this._mixinResetValidity(this.input);
    }
    /**
     * Checks for validity. Under the hood, HTMLFormElement's reportValidity method calls this method to check for component's validity state
     * Note that the native error popup is prevented for Canvas form components by default. Instead the validation message shows up in the feedback container of SitInput
     */
    reportValidity() {
        return this._mixinReportValidity();
    }
    /**
     * Checks for validity without any native error popup message
     */
    checkValidity() {
        return this._mixinCheckValidity();
    }
    /**
     * Returns the ValidityState object
     */
    get validity() {
        return this._mixinGetValidity();
    }
    /**
     * Returns the validation message based on the ValidityState
     */
    get validationMessage() {
        return this._mixinGetValidationMessage();
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.checked && this.emit("sit-check", { detail: { value: this.value } });
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("click", this._handleHostClick);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("click", this._handleHostClick);
    }
    render() {
        const displayFeedbackStyle = this.hasFeedback === "both" || this.hasFeedback === "style";
        const displayFeedbackText = this.hasFeedback === "both" || this.hasFeedback === "text";
        return html `
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
          @change=${(e) => this._handleChange(e)}
          @keydown=${this._handleKeyDown}
          @invalid=${(e) => this._handleInvalid(e)}
          ?checked=${live(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          @blur=${this._handleBlur}
          @focus=${this._handleFocus}
        />
        <label for="${this._controlId}" class="form-check-label" id="${this._labelId}"><slot></slot></label>
      </div>
      ${displayFeedbackText && this.invalid
            ? html `
            <div class="invalid-feedback-container">
              <slot name="invalidIcon">
                <sit-icon name="exclamation-circle-fill" size="md"></sit-icon>
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
SitCheckbox.styles = [...FormControlElement.styles, css_248z, css_248z$1];
/**@internal */
SitCheckbox.dependencies = {
    "sit-icon": SitIcon
};
__decorate([
    property({ type: String, reflect: true })
], SitCheckbox.prototype, "value", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitCheckbox.prototype, "checked", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitCheckbox.prototype, "hasFeedback", void 0);
__decorate([
    defaultValue("checked")
], SitCheckbox.prototype, "defaultChecked", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitCheckbox.prototype, "indeterminate", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitCheckbox.prototype, "required", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitCheckbox.prototype, "noValidate", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitCheckbox.prototype, "invalidFeedback", void 0);
__decorate([
    state()
], SitCheckbox.prototype, "_isTouched", void 0);
__decorate([
    watch("disabled", { waitUntilFirstUpdate: true })
], SitCheckbox.prototype, "_handleDisabledChange", null);
__decorate([
    watch("_isTouched", { waitUntilFirstUpdate: true })
], SitCheckbox.prototype, "_handleIsTouched", null);

export { SitCheckbox, SitCheckbox as default };
//# sourceMappingURL=sit-checkbox.js.map
