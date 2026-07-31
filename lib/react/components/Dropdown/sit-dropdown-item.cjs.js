'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var classMap_js = require('lit/directives/class-map.js');
var ifDefined_js = require('lit/directives/if-defined.js');
var sitElement = require('../../base/sit-element.cjs.js');
var sitIcon = require('../Icon/sit-icon.cjs.js');
var dropdownItem = require('./dropdown-item.cjs.js');
var dropdown = require('./dropdown.cjs.js');

/**
 * @summary `SitDropdownItem` are navigation links built with `HTMLAnchorElement`. It should be used in the default slot of `SitDropdown`
 * @slot default - The default slot for SitDropdownItem. Pass in a single anchor tag per dropdown item directly for navigation items.
 */
class SitDropdownItem extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** when true, sets the active stylings of dropdown item */
        this.active = false;
        /** Disables the SitMainnavItem */
        this.disabled = false;
        /** Forwards aria-label to the inner clickable element for accessibility */
        this.ariaLabel = "";
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && this.anchor.length > 0) {
                this.anchor[0].click();
            }
        });
        this.setAttribute("role", "menuitem");
        this.setAttribute("aria-disabled", `${this.disabled}`);
    }
    render() {
        return lit.html `
      <div
        class="dropdown-item ${classMap_js.classMap({
            disabled: this.disabled,
            active: this.active
        })}"
        tabindex=${this.disabled ? "-1" : "0"}
        aria-label=${ifDefined_js.ifDefined(this.ariaLabel || undefined)}
      >
        <slot></slot>
      </div>
    `;
    }
}
SitDropdownItem.styles = [dropdown["default"], dropdownItem["default"]];
SitDropdownItem.dependencies = {
    "sit-icon": sitIcon.SitIcon
};
tslib.__decorate([
    decorators_js.queryAssignedElements({ flatten: true })
], SitDropdownItem.prototype, "anchor", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean })
], SitDropdownItem.prototype, "active", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitDropdownItem.prototype, "disabled", void 0);
tslib.__decorate([
    decorators_js.property({ type: String })
], SitDropdownItem.prototype, "ariaLabel", void 0);

exports.SitDropdownItem = SitDropdownItem;
exports["default"] = SitDropdownItem;
//# sourceMappingURL=sit-dropdown-item.cjs.js.map
