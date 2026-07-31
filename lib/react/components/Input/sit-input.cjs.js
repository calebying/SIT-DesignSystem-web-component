'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var classMap_js = require('lit/directives/class-map.js');
var ifDefined_js = require('lit/directives/if-defined.js');
var live_js = require('lit/directives/live.js');
var staticHtml_js = require('lit/static-html.js');
var formControlElement = require('../../base/form-control-element.cjs.js');
var formPlaceholder = require('../../styles/form-placeholder.cjs.js');
var formTextControl = require('../../styles/form-text-control.cjs.js');
var defaultvalue = require('../../utils/defaultvalue.cjs.js');
var validatorMixin = require('../../utils/validatorMixin.cjs.js');
var watch = require('../../utils/watch.cjs.js');
var sitSpinner = require('../Spinner/sit-spinner.cjs.js');
var input = require('./input.cjs.js');
var sitIcon = require('../Icon/sit-icon.cjs.js');

/**
 * @summary Text inputs allow your users to enter letters, numbers and symbols on a single line.
 *
 * @slot icon - The slot for leading icon of text input
 * @slot trailing-icon - The slot for trailing icon of text input. When present, it overrides valid icon and loading spinner rendered when valid prop or loading prop are true
 * @slot action - The slot for call to action of the text input. It is recommended to use sit-icon-button within this slot
 * @event sit-change - Emitted when an alteration to the control's value is committed by the user.
 * @event sit-input - Emitted when the control receives input and its value changes.
 * @event sit-focus - Emitted when input is in focus.
 * @event sit-blur - Emitted when input is not in focus.
 * @event sit-invalid - Emitted when input is invalid
 * @event sit-valid - Emitted when input is valid
 *
 */
class SitInput extends validatorMixin.SitFormValidatorMixin(formControlElement["default"]) {
    constructor() {
        super(...arguments);
        this.type = "text";
        /** The input's placeholder text. */
        this.placeholder = "placeholder";
        /** Autofocus the input */
        this.autofocus = false;
        /** Makes the input readonly. */
        this.readonly = false;
        /** Controlling of autocomplete behaviour */
        this.autocomplete = "on";
        /**Gets or sets the default value used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
        this.defaultValue = "";
        /** Marks the component as valid. */
        this.valid = false;
        /** Marks the component as loading. */
        this.loading = false;
        /** Makes the input a required field. */
        this.required = false;
        /** Disables native and sit validation for the input. */
        this.noValidate = false;
        /**The input's value attribute. */
        this.value = "";
        this._isTouched = false;
        this._showPassword = false;
    }
    /** Sets focus on the input. */
    focus(options) {
        this.input.focus(options);
    }
    /** Sets blur on the input. */
    blur() {
        this.input.blur();
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
     * Checks for validity without any native error popup message
     */
    setValidity(flags, message, anchor) {
        return this._mixinSetValidity(flags, message, anchor);
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
    _handleFocus() {
        this.emit("sit-focus");
    }
    _handleBlur() {
        const sitBlur = this.emit("sit-blur", { cancelable: true });
        if (this._mixinShouldSkipSitValidation())
            return;
        if (sitBlur.defaultPrevented)
            return;
        this.setInvalid(!this._mixinCheckValidity());
        this._isTouched = true;
    }
    _handleClick() {
        this.focus();
    }
    _handleChange(e) {
        this.value = this.input.value;
        const sitChange = this.emit("sit-change", { cancelable: true });
        if (sitChange.defaultPrevented)
            return;
        super._mixinHandleChange(e);
    }
    _handleInputChange(e) {
        this.value = this.input.value;
        const sitInput = this.emit("sit-input", { cancelable: true });
        if (sitInput.defaultPrevented)
            return;
        super._mixinHandleInputChange(e);
    }
    /** @internal */
    _handleIsTouched() {
        if (this._mixinShouldSkipSitValidation())
            return;
        if (this._isTouched) {
            this.setInvalid(!this._mixinCheckValidity());
        }
    }
    _handleDisabledChange() {
        // Disabled form controls are always valid, so we need to recheck validity when the state changes
        this.setInvalid(false);
    }
    _renderInput() {
        const wantFeedbackStyle = this.hasFeedback === "both" || this.hasFeedback === "style";
        const wantFeedbackText = this.hasFeedback === "both" || this.hasFeedback === "text";
        const ariaDescribedBy = [
            this.hintText ? `${this._controlId}Help` : "",
            this.invalid && wantFeedbackText ? `${this._controlId}-invalid` : ""
        ]
            .filter(Boolean)
            .join(" ") || undefined;
        return staticHtml_js.html `
      <div
        class="form-control-group ${classMap_js.classMap({
            disabled: this.disabled,
            readonly: this.readonly,
            "is-invalid": this.invalid && wantFeedbackStyle
        })}"
        @click=${this._handleClick}
      >
        <slot name="icon"></slot>
        ${this.prefix ? staticHtml_js.html `<span class="form-control-prefix">${this.prefix}</span>` : lit.nothing}
        <input
          class="form-control"
          type=${this._inputType()}
          id=${this._controlId}
          name=${ifDefined_js.ifDefined(this.name)}
          placeholder=${ifDefined_js.ifDefined(this.placeholder)}
          aria-invalid=${this.invalid ? "true" : "false"}
          pattern=${ifDefined_js.ifDefined(this.pattern)}
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          .value=${live_js.live(this.value)}
          minlength=${ifDefined_js.ifDefined(this.minlength)}
          maxlength=${ifDefined_js.ifDefined(this.maxlength)}
          min=${ifDefined_js.ifDefined(this.min)}
          max=${ifDefined_js.ifDefined(this.max)}
          step=${ifDefined_js.ifDefined(this.step)}
          @input=${(e) => this._handleInputChange(e)}
          @change=${(e) => this._handleChange(e)}
          @invalid=${() => this.setInvalid(true)}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          aria-describedby=${ifDefined_js.ifDefined(ariaDescribedBy)}
          .autocomplete=${this.autocomplete}
        />
        ${this.type === "password" ? this._renderPasswordToggle() : lit.nothing}
        ${this.suffix ? staticHtml_js.html `<span class="form-control-suffix">${this.suffix}</span>` : lit.nothing}
        <slot name="trailing-icon">
          ${this.loading ? staticHtml_js.html `<sit-spinner size="sm"></sit-spinner>` : lit.nothing}
          ${this.valid ? staticHtml_js.html `<sit-icon name="check-circle-fill" class="valid-icon"></sit-icon>` : lit.nothing}
        </slot>
      </div>
    `;
    }
    _renderPasswordToggle() {
        return staticHtml_js.html `<sit-icon
      tabIndex="0"
      role="button"
      name=${this._showPassword ? "eye-slash-fill" : "eye-fill"}
      @click=${() => (this._showPassword = !this._showPassword)}
    ></sit-icon>`;
    }
    _inputType() {
        if (this.type === "password" && this._showPassword) {
            return "text";
        }
        return this.type;
    }
    _renderFeedback() {
        const wantFeedbackText = this.hasFeedback === "both" || this.hasFeedback === "text";
        return this.invalid && wantFeedbackText
            ? staticHtml_js.html ` <div class="invalid-feedback-container">
          <sit-icon name="exclamation-circle-fill" size="md"></sit-icon>
          <div id="${this._controlId}-invalid" class="invalid-feedback">
            ${this.invalidFeedback ? this.invalidFeedback : this.input.validationMessage}
          </div>
        </div>`
            : staticHtml_js.html `${this._renderHintText()}`;
    }
    _renderLabel() {
        const labelTemplate = staticHtml_js.html `
      <label
        for=${this._controlId}
        id=${this._labelId}
        class=${classMap_js.classMap({
            "form-label": true,
            required: this.required
        })}
        >${this.label}</label
      >
    `;
        return this.label && labelTemplate;
    }
    _renderHintText() {
        const hintTextTemplate = staticHtml_js.html ` <div id="${this._controlId}Help" class="form-text">${this.hintText}</div> `;
        return this.hintText && hintTextTemplate;
    }
    render() {
        return staticHtml_js.html `
      <div
        class="form-control-container ${classMap_js.classMap({
            disabled: this.disabled
        })}"
      >
        ${this._renderLabel()}
        <div class="form-control-row">
          ${this._renderInput()}
          <slot name="action"></slot>
        </div>
        ${this._renderFeedback()}
      </div>
    `;
    }
}
SitInput.styles = [...formControlElement["default"].styles, formTextControl["default"], formPlaceholder["default"], input["default"]];
/** @internal */
SitInput.dependencies = {
    "sit-spinner": sitSpinner.SitSpinner,
    "sit-icon": sitIcon.SitIcon
};
tslib.__decorate([
    decorators_js.property({ reflect: true })
], SitInput.prototype, "type", void 0);
tslib.__decorate([
    decorators_js.property({ type: String })
], SitInput.prototype, "prefix", void 0);
tslib.__decorate([
    decorators_js.property({ type: String })
], SitInput.prototype, "suffix", void 0);
tslib.__decorate([
    decorators_js.property({ type: Number, reflect: true })
], SitInput.prototype, "minlength", void 0);
tslib.__decorate([
    decorators_js.property({ type: Number, reflect: true })
], SitInput.prototype, "maxlength", void 0);
tslib.__decorate([
    decorators_js.property()
], SitInput.prototype, "min", void 0);
tslib.__decorate([
    decorators_js.property()
], SitInput.prototype, "max", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitInput.prototype, "placeholder", void 0);
tslib.__decorate([
    decorators_js.property({ type: String })
], SitInput.prototype, "pattern", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitInput.prototype, "autofocus", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitInput.prototype, "readonly", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitInput.prototype, "autocomplete", void 0);
tslib.__decorate([
    decorators_js.property()
], SitInput.prototype, "step", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitInput.prototype, "hasFeedback", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitInput.prototype, "invalidFeedback", void 0);
tslib.__decorate([
    defaultvalue.defaultValue()
], SitInput.prototype, "defaultValue", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitInput.prototype, "valid", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitInput.prototype, "loading", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitInput.prototype, "required", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitInput.prototype, "noValidate", void 0);
tslib.__decorate([
    decorators_js.property({ reflect: true })
], SitInput.prototype, "value", void 0);
tslib.__decorate([
    decorators_js.state()
], SitInput.prototype, "_isTouched", void 0);
tslib.__decorate([
    decorators_js.state()
], SitInput.prototype, "_showPassword", void 0);
tslib.__decorate([
    watch.watch("_isTouched", { waitUntilFirstUpdate: true })
], SitInput.prototype, "_handleIsTouched", null);
tslib.__decorate([
    watch.watch("disabled", { waitUntilFirstUpdate: true })
], SitInput.prototype, "_handleDisabledChange", null);

exports.SitInput = SitInput;
exports["default"] = SitInput;
//# sourceMappingURL=sit-input.cjs.js.map
