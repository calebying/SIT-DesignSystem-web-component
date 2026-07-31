'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var decorators_js = require('lit/decorators.js');
var inputValidationController = require('./inputValidationController.cjs.js');

/**
 * @summary The FormValidationMixin used by the form components
 * @param superClass
 * @returns
 */
const SitFormValidatorMixin = (superClass) => {
    class ToBeValidatedElement extends superClass {
        // TypeScript requires mixin constructors to have rest parameter of type any[]
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(...args) {
            super(...args);
            this._isTouched = false;
            this._internals = this.attachInternals();
        }
        connectedCallback() {
            var _a;
            super.connectedCallback();
            /** Idempotency guarantee — always create so reset can clear validity even with noValidate */
            (_a = this.inputValidationController) !== null && _a !== void 0 ? _a : (this.inputValidationController = new inputValidationController.InputValidationController(this));
        }
        async firstUpdated(changedProperties) {
            super.firstUpdated(changedProperties);
            /* Either input or sit-input. For example, quantity-toggle uses sit-input */
            this.input =
                this.shadowRoot.querySelector("input") ||
                    (await this.sitInput) ||
                    this.shadowRoot.querySelector("textarea") ||
                    (await this.sitDatepickerInput);
            this._mixinSetFormValue();
            if (this._mixinShouldSkipSitValidation())
                return;
            this._mixinValidate(this.input);
        }
        /**
         * Native lifecycle of Form-Associated Custom Element Callbacks
         */
        formResetCallback() {
            if (this._mixinResetFormControl) {
                this._mixinResetFormControl();
            }
            else {
                this.value = this.defaultValue;
                this._mixinResetValidity(this.input);
            }
            this._mixinSetFormValue();
        }
        /**
         *
         * Methods use by classes using this mixin
         */
        /**
         * OnChange of form component
         * 1. Make value of control accessible via FormData
         * 2. Run change handler
         */
        _mixinHandleChange(e) {
            this._mixinSetFormValue();
            if (this._mixinShouldSkipSitValidation())
                return;
            this.inputValidationController.handleChange(e);
        }
        /**
         * OnChange of form component
         * 1. Make value of control accessible via FormData
         * 2. Run input handler
         */
        _mixinHandleInputChange(e) {
            this._mixinSetFormValue();
            if (this._mixinShouldSkipSitValidation())
                return;
            this.inputValidationController.handleInput(e);
        }
        /**
         * During form resetting,
         * 1. ValidityState is reset (always, regardless of noValidate)
         * 2. invalid reactive prop is updated after the reset (always)
         * 3. Reset touched state to false for a pristine form (always)
         * 4. Revalidates the ValidityState (but do not update invalid prop)
         * to prepare for the next validity check (skipped when noValidate)
         */
        _mixinResetValidity(input) {
            this.inputValidationController.resetValidity();
            this.inputValidationController.updateInvalidState();
            this._isTouched ? (this._isTouched = false) : null;
            if (this._mixinShouldSkipSitValidation())
                return;
            this.inputValidationController.validateInput(input);
        }
        _mixinValidate(input) {
            if (this._mixinShouldSkipSitValidation())
                return;
            this.inputValidationController.validateInput(input);
        }
        _mixinSetFormValue() {
            const value = this.value;
            this._internals.setFormValue(value);
        }
        _mixinCheckValidity() {
            if (this._mixinShouldSkipSitValidation())
                return true;
            return this.inputValidationController.checkValidity();
        }
        _mixinReportValidity() {
            if (this._mixinShouldSkipSitValidation())
                return true;
            return this.inputValidationController.reportValidity();
        }
        _mixinGetValidity() {
            return this._internals.validity;
        }
        _mixinGetValidationMessage() {
            return this._internals.validationMessage;
        }
        _mixinSetValidity(flags, message, anchor) {
            if (this._mixinShouldSkipSitValidation())
                return;
            return this.inputValidationController.setValidity(flags, message, anchor);
        }
        // Only check for noValidate prop
        _mixinShouldSkipSitValidation() {
            const form = this.closest("form");
            return (form === null || form === void 0 ? void 0 : form.noValidate) || this.noValidate;
        }
    }
    ToBeValidatedElement.formAssociated = true;
    tslib.__decorate([
        decorators_js.queryAsync("sit-input")
    ], ToBeValidatedElement.prototype, "sitInput", void 0);
    tslib.__decorate([
        decorators_js.queryAsync("sit-datepicker-input")
    ], ToBeValidatedElement.prototype, "sitDatepickerInput", void 0);
    return ToBeValidatedElement;
};

exports.SitFormValidatorMixin = SitFormValidatorMixin;
//# sourceMappingURL=validatorMixin.cjs.js.map
