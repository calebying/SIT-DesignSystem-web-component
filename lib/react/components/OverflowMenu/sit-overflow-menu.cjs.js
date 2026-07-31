'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var sitElement = require('../../base/sit-element.cjs.js');
var overflowMenu = require('./overflow-menu.cjs.js');
var decorators_js = require('lit/decorators.js');
var sitDropdown = require('../Dropdown/sit-dropdown.cjs.js');
var sitDropdownItem = require('../Dropdown/sit-dropdown-item.cjs.js');
var sitIcon = require('../Icon/sit-icon.cjs.js');

/**
 * @summary An overflow menu is a UI element, often represented by three dots (⋮ or …), that opens a menu with additional actions or options.
 * @slot default - The overflow menu items. Pass in sit-dropdown-items in this slot
 */
class SitOverflowMenu extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** Specifies a large or small button */
        this.size = "md";
    }
    render() {
        return lit.html `
      <sit-dropdown>
        <button slot="toggler" class="overflow-btn" aria-label="More options">
          <sit-icon name="three-dots" size=${this.size}></sit-icon>
        </button>
        <slot></slot>
      </sit-dropdown>
    `;
    }
}
SitOverflowMenu.styles = [...sitElement["default"].styles, overflowMenu["default"]];
/** @internal */
SitOverflowMenu.dependencies = {
    "sit-dropdown": sitDropdown.SitDropdown,
    "sit-dropdown-item": sitDropdownItem.SitDropdownItem,
    "sit-icon": sitIcon.SitIcon
};
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitOverflowMenu.prototype, "size", void 0);

exports.SitOverflowMenu = SitOverflowMenu;
exports["default"] = SitOverflowMenu;
//# sourceMappingURL=sit-overflow-menu.cjs.js.map
