'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var optionElement = require('../../base/option-element.cjs.js');
var sitCheckbox = require('../Checkbox/sit-checkbox.cjs.js');
var sitIcon = require('../Icon/sit-icon.cjs.js');

/**
 * @summary ComboBoxOption is the option of the Combobox
 *
 * @slot default - The label of the option
 */
class SitComboBoxOption extends optionElement.OptionElement {
    constructor() {
        super(...arguments);
        /**
         * @internal If true, this item is rendered as a checkbox item.
         * This property is controlled by its combo box parent
         */
        this.checkbox = false;
        this._renderItemContent = () => {
            return this.checkbox
                ? lit.html `
          <sit-checkbox .checked=${this.active} .disabled=${this.disabled}>
            <slot></slot>
          </sit-checkbox>
        `
                : lit.html `
          <div class="normal-item-content" role="presentation">
            <slot></slot>
            ${this.active ? lit.html ` <sit-icon name="check"></sit-icon> ` : lit.nothing}
          </div>
        `;
        };
    }
    connectedCallback() {
        super.connectedCallback();
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const parent = this.parentElement;
        if (parent === null || parent === void 0 ? void 0 : parent.multiSelect) {
            this.checkbox = true;
        }
    }
}
/** @internal */
SitComboBoxOption.dependencies = {
    "sit-icon": sitIcon.SitIcon,
    "sit-checkbox": sitCheckbox.SitCheckbox
};
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitComboBoxOption.prototype, "checkbox", void 0);

exports.SitComboBoxOption = SitComboBoxOption;
exports["default"] = SitComboBoxOption;
//# sourceMappingURL=sit-combo-box-option.cjs.js.map
