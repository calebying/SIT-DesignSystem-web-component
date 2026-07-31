'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lit = require('lit');
var optionElement = require('../../base/option-element.cjs.js');
var sitIcon = require('../Icon/sit-icon.cjs.js');

/**
 * @summary SelectOption is the option of the Select
 *
 * @slot default - The label of the option
 */
class SitSelectOption extends optionElement.OptionElement {
    constructor() {
        super(...arguments);
        this._renderItemContent = () => {
            return lit.html `<div class="normal-item-content" role="presentation">
      <slot></slot>
      ${this.active ? lit.html ` <sit-icon name="check"></sit-icon> ` : lit.nothing}
    </div>`;
        };
    }
}
/** @internal */
SitSelectOption.dependencies = {
    "sit-icon": sitIcon.SitIcon
};

exports.SitSelectOption = SitSelectOption;
exports["default"] = SitSelectOption;
//# sourceMappingURL=sit-select-option.cjs.js.map
