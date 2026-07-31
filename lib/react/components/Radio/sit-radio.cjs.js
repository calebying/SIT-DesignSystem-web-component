'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var classMap_js = require('lit/directives/class-map.js');
var ifDefined_js = require('lit/directives/if-defined.js');
var sitElement = require('../../base/sit-element.cjs.js');
var formLabel = require('../../styles/form-label.cjs.js');
var formCheck = require('../../styles/form-check.cjs.js');
var generateId = require('../../utils/generateId.cjs.js');
var watch = require('../../utils/watch.cjs.js');
var radio = require('./radio.cjs.js');

/**
 * @summary Radio allows the user to select one option from a set while seeing all available options.
 *
 * @slot default - The label of the radio input
 *
 * @event sit-focus - Emitted when the control gains focus.
 * @event sit-blur - Emitted when the control loses focus.
 */
class SitRadio extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /**
         * Draws the radio in a checked state. When used with SitRadioGroup, the value prop of SitRadioGroup overrides the checked prop
         */
        this.checked = false;
        /** Disables the radio. */
        this.disabled = false;
        /** Marks the radio input as invalid. Replace the pseudo :invalid selector for absent in custom elements */
        this.invalid = false;
        /** Automatically focuses the radio input when it becomes checked. */
        this.autofocus = false;
        this.radioId = generateId["default"]("radio");
    }
    connectedCallback() {
        super.connectedCallback();
        this.setInitialAttributes();
        this.addEventListeners();
    }
    handleCheckedChange() {
        var _a;
        if (this.checked && this.autofocus) {
            (_a = this.input) === null || _a === void 0 ? void 0 : _a.focus();
        }
        this.setAttribute("tabindex", this.checked ? "0" : "-1");
    }
    handleDisabledChange() {
        this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleBlur() {
        this.emit("sit-blur");
    }
    handleClick() {
        if (!this.disabled) {
            this.checked = true;
        }
    }
    handleFocus() {
        this.emit("sit-focus");
    }
    addEventListeners() {
        this.addEventListener("blur", () => this.handleBlur());
        this.addEventListener("click", () => this.handleClick());
        this.addEventListener("focus", () => this.handleFocus());
    }
    setInitialAttributes() {
        this.setAttribute("tabindex", "-1");
        this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    render() {
        return lit.html `
      <div class="form-check">
        <input
          class=${classMap_js.classMap({
            "form-check-input": true,
            "is-invalid": this.invalid
        })}
          type="radio"
          id=${ifDefined_js.ifDefined(this.radioId)}
          value=${ifDefined_js.ifDefined(this.value)}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          aria-disabled=${this.disabled ? "true" : "false"}
          aria-checked=${this.checked ? "true" : "false"}
          @click=${this.handleClick}
        />
        <label for="${ifDefined_js.ifDefined(this.radioId)}" aria-label=${ifDefined_js.ifDefined(this.ariaLabel)} class="form-check-label">
          <slot></slot>
        </label>
      </div>
    `;
    }
}
SitRadio.styles = [...sitElement["default"].styles, formCheck["default"], formLabel["default"], radio["default"]];
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitRadio.prototype, "checked", void 0);
tslib.__decorate([
    decorators_js.property()
], SitRadio.prototype, "value", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitRadio.prototype, "disabled", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitRadio.prototype, "invalid", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: false })
], SitRadio.prototype, "autofocus", void 0);
tslib.__decorate([
    decorators_js.query("input")
], SitRadio.prototype, "input", void 0);
tslib.__decorate([
    watch.watch("checked")
], SitRadio.prototype, "handleCheckedChange", null);
tslib.__decorate([
    watch.watch("disabled", { waitUntilFirstUpdate: true })
], SitRadio.prototype, "handleDisabledChange", null);

exports.SitRadio = SitRadio;
exports["default"] = SitRadio;
//# sourceMappingURL=sit-radio.cjs.js.map
