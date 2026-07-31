'use client';
import { __decorate } from 'tslib';
import { html, nothing } from 'lit';
import { property, state, queryAssignedElements } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { SitIcon } from '../Icon/sit-icon.js';
import FormControlElement from '../../base/form-control-element.js';
import { defaultValue } from '../../utils/defaultvalue.js';
import { SitFormValidatorMixin } from '../../utils/validatorMixin.js';
import { watch } from '../../utils/watch.js';
import css_248z from './checkbox-group.js';

/**
 * @summary CheckboxGroup is a form component for multiselection of checkboxes.
 *
 * @event sit-change - Emitted when the value of the CheckboxGroup changes. This happens when checkboxes are checked or unchecked.
 * @event sit-invalid - Emitted when the checkbox group's invalid state is set to true.
 * @event sit-valid - Emitted when the checkbox group's invalid state is set to false.
 *
 * @slot default - Pass in `sit-checkbox` into the default slot
 * @slot invalidIcon - The slot for invalid icon
 *
 */
class SitCheckboxGroup extends SitFormValidatorMixin(FormControlElement) {
    constructor() {
        super(...arguments);
        /** The checkbox group's label  */
        this.label = "";
        /**Feedback text for error state when validated */
        this.invalidFeedback = "Please tick at least one box if you want to proceed";
        /** Allows invalidFeedback, invalid styles to be visible. When SitCheckboxGroup is used, it overrides the value of hasFeedback on SitCheckbox with its own value. */
        this.hasFeedback = false;
        /** The checkbox group's hint text */
        this.hintText = "";
        /** Makes the checkbox group a required field. Only available for when multiselect is true */
        this.required = false;
        /** Disables native and sit validation for the checkbox group. */
        this.noValidate = false;
        /** Consolidates the values of its child checked checkboxes into a single string with semi-colon delimiter. Only available when required is true  */
        this.value = "";
        this._isTouched = false;
        /** @internal */
        this.defaultValue = "";
        this._blurredCheckboxes = new Set();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("sit-check", (e) => {
            const { value } = e.detail;
            !this.value.includes(value) && this._addValue(value);
        });
        this.addEventListener("sit-uncheck", (e) => {
            const { value } = e.detail;
            this._removeValue(value);
        });
        /** Blurring when all checkboxes are blurred */
        this.addEventListener("sit-blur", e => {
            const checkbox = e.target;
            this._blurredCheckboxes.add(checkbox);
            if (Array.from(this._blurredCheckboxes).length === this._checkboxes.length) {
                this._isTouched = true;
                this._blurredCheckboxes.clear();
            }
        });
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        if (this.value) {
            this._updateInputValue();
        }
        if (this.invalid) {
            this._updateInvalid();
        }
    }
    _renderHintText() {
        const hintTextTemplate = html ` <div class="form-text" id="${this._controlId}Help">${this.hintText}</div> `;
        return this.hintText && hintTextTemplate;
    }
    _addValue(newValue) {
        const valueArray = this.value ? this.value.split(";") : [];
        valueArray.push(newValue);
        this.value = valueArray.join(";");
        this._updateInputValue();
        this.emit("sit-change", { detail: { value: this.value } });
    }
    _removeValue(oldValue) {
        const valueArray = this.value ? this.value.split(";") : [];
        const newValueArray = valueArray.filter(v => v !== oldValue);
        this.value = newValueArray.join(";");
        this._updateInputValue();
        this.emit("sit-change", { detail: { value: this.value } });
    }
    _sanitizeSlot() {
        const checkboxes = this._checkboxes;
        checkboxes.forEach(checkbox => {
            checkbox.checked = checkbox.defaultChecked = this.value.includes(checkbox.value);
            checkbox.hasFeedback = this.hasFeedback ? "style" : null;
            if (checkbox.required) {
                console.error("Checkboxes in a group cannot have required or hasFeedback prop set to true");
                checkbox.remove();
            }
        });
        this._disabledChildCheckboxes();
    }
    _disabledChildCheckboxes() {
        if (this.disabled) {
            const checkboxes = this._checkboxes;
            checkboxes.forEach(checkbox => (checkbox.disabled = this.disabled));
        }
    }
    _handleValueChange() {
        const checkboxes = this._checkboxes;
        checkboxes.forEach(checkbox => {
            checkbox.checked = this.value.includes(checkbox.value);
        });
        this._updateInputValue();
        this._updateInvalid();
    }
    _handleIsTouched() {
        if (this._mixinShouldSkipSitValidation())
            return;
        if (this._isTouched) {
            this.invalid = !this.input.checkValidity();
            this._updateInvalid();
        }
    }
    _updateInvalid() {
        const checkboxes = this._checkboxes;
        checkboxes.forEach(ch => (ch.invalid = this.invalid));
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
    /**
     * checkbox requries a custom _mixinResetFormControl as the update of input value
     * requires to fire a reset event manually
     * */
    _mixinResetFormControl() {
        this.value = this.input.value = this.defaultValue;
        this._updateInputValue("reset");
        this._mixinResetValidity(this.input);
    }
    /**
     * when input value is set programatically, need to manually dispatch a change event
     * In order to prevent race conditions and ensure sequence of events, set input's value here instead of binding to value prop of input
     */
    async _updateInputValue(eventName = "change") {
        this.input.value = this.value;
        this.input.dispatchEvent(new InputEvent(eventName));
    }
    render() {
        return html `
      <fieldset>
        <div class="label-hint-container">
          <label class="form-label">${this.label}</label>
          ${this._renderHintText()}
        </div>
        <div class="checkbox-container">
          <slot @slotchange=${this._sanitizeSlot}></slot>
        </div>
        <input
          type="text"
          class="checkbox-group-validation-input"
          ?required=${this.required}
          tabindex="-1"
          @change=${(e) => {
            super._mixinHandleChange(e);
        }}
          .value=${live(this.value)}
          aria-describedby=${this.invalid && this.hasFeedback ? "checkbox-group-feedback" : `${this._controlId}Help`}
        />
        ${this.invalid && this.hasFeedback
            ? html `
              <div class="invalid-feedback-container">
                <slot name="invalidIcon">
                  <sit-icon name="exclamation-circle-fill" size="md"></sit-icon>
                </slot>
                <div id="checkbox-group-feedback" class="invalid-feedback">
                  ${this.invalidFeedback ? this.invalidFeedback : this.input.validationMessage}
                </div>
              </div>
            `
            : nothing}
      </fieldset>
    `;
    }
}
SitCheckboxGroup.styles = [...FormControlElement.styles, css_248z];
/**@internal */
SitCheckboxGroup.dependencies = {
    "sit-icon": SitIcon
};
__decorate([
    property({ reflect: true })
], SitCheckboxGroup.prototype, "label", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitCheckboxGroup.prototype, "invalidFeedback", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitCheckboxGroup.prototype, "hasFeedback", void 0);
__decorate([
    property({ reflect: true })
], SitCheckboxGroup.prototype, "hintText", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitCheckboxGroup.prototype, "required", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitCheckboxGroup.prototype, "noValidate", void 0);
__decorate([
    property({ reflect: true })
], SitCheckboxGroup.prototype, "value", void 0);
__decorate([
    state()
], SitCheckboxGroup.prototype, "_isTouched", void 0);
__decorate([
    defaultValue()
], SitCheckboxGroup.prototype, "defaultValue", void 0);
__decorate([
    state()
], SitCheckboxGroup.prototype, "_blurredCheckboxes", void 0);
__decorate([
    queryAssignedElements()
], SitCheckboxGroup.prototype, "_checkboxes", void 0);
__decorate([
    watch("value", { waitUntilFirstUpdate: true })
], SitCheckboxGroup.prototype, "_handleValueChange", null);
__decorate([
    watch("_isTouched", { waitUntilFirstUpdate: true })
], SitCheckboxGroup.prototype, "_handleIsTouched", null);
__decorate([
    watch("invalid", { waitUntilFirstUpdate: true })
], SitCheckboxGroup.prototype, "_updateInvalid", null);

export { SitCheckboxGroup, SitCheckboxGroup as default };
//# sourceMappingURL=sit-checkbox-group.js.map
