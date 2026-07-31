'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var decorators_js = require('lit/decorators.js');
var ifDefined_js = require('lit/directives/if-defined.js');
var staticHtml_js = require('lit/static-html.js');
var sitElement = require('../../base/sit-element.cjs.js');
var sitOverflowMenu = require('../OverflowMenu/sit-overflow-menu.cjs.js');
var breadcrumb = require('./breadcrumb.cjs.js');

/**
 * @summary Breadcrumbs help users to navigate and understand where they are on the current website or service.
 *
 * @slot default - The slot to pass in custom elements of `SitBreadcrumbItems`.
 *
 */
class SitBreadcrumb extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** The aria-label of nav element within breadcrumb component. */
        this.ariaLabel = "breadcrumb";
    }
    /**
     * creates `<sit-breadcrumb-item>
     *            <sit-overflow-menu>
     *              <sit-dropdown-item></sit-dropdown-item>
     *               ...
     *            </sit-overflow-menu>
     *          <sit-breadcrumb-item>`
     */
    _replaceExcessItemsWithDropdown(items) {
        const breadcrumbItem = document.createElement("sit-breadcrumb-item");
        const overflowMenu = document.createElement("sit-overflow-menu");
        overflowMenu.setAttribute("aria-haspopup", "menu");
        overflowMenu.setAttribute("size", "sm");
        const mapItems = items.filter((item, index) => {
            if (index > 0 && index < items.length - 2) {
                const clonedAnchor = item.querySelector("a");
                const clonedAnchorNode = clonedAnchor.cloneNode(true);
                const dropdownItem = document.createElement("sit-dropdown-item");
                dropdownItem.appendChild(clonedAnchorNode);
                overflowMenu.appendChild(dropdownItem);
                return;
            }
            else {
                return item;
            }
        });
        breadcrumbItem.classList.add("overflow-menu");
        breadcrumbItem.appendChild(overflowMenu);
        mapItems.splice(1, 0, breadcrumbItem);
        this.defaultSlot.replaceWith(...mapItems);
    }
    _handleSlotChange(e) {
        const items = e.target
            .assignedElements({ flatten: true })
            .filter((item) => item.tagName.toLowerCase() === "sit-breadcrumb-item");
        items.forEach((item, index) => {
            if (index === items.length - 1) {
                item.setAttribute("aria-current", "page");
                item.active = true;
            }
            else {
                item.removeAttribute("aria-current");
            }
        });
        if (items.length >= 5) {
            this._replaceExcessItemsWithDropdown(items);
        }
    }
    render() {
        return staticHtml_js.html `
      <div aria-label=${ifDefined_js.ifDefined(this.ariaLabel)}>
        <div class="breadcrumb">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `;
    }
}
SitBreadcrumb.styles = [...sitElement["default"].styles, breadcrumb["default"]];
SitBreadcrumb.dependencies = {
    "sit-overflow-menu": sitOverflowMenu.SitOverflowMenu
};
tslib.__decorate([
    decorators_js.property({ type: String })
], SitBreadcrumb.prototype, "ariaLabel", void 0);
tslib.__decorate([
    decorators_js.query("slot")
], SitBreadcrumb.prototype, "defaultSlot", void 0);

exports.SitBreadcrumb = SitBreadcrumb;
exports["default"] = SitBreadcrumb;
//# sourceMappingURL=sit-breadcrumb.cjs.js.map
