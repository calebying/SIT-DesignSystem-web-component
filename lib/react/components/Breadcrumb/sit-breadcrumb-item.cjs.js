'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var sitIcon = require('../Icon/sit-icon.cjs.js');
var sitLink = require('../Link/sit-link.cjs.js');
var breadcrumbItem = require('./breadcrumb-item.cjs.js');
var sitElement = require('../../base/sit-element.cjs.js');

/**
 * @summary Breadcrumb Item are navigational links used in Breadcrumb component
 *
 * @slot default - The link of the item. Pass in anchor tags into this slot
 */
class SitBreadcrumbItem extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** Indicates the link matches the current location of the page. Programmatically handled by SitBreadcrumb to set this prop to true for the last breadcrumb item  */
        this.active = false;
        this._preventNavigation = (e) => e.preventDefault();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("active")) {
            const anchor = this.querySelector("a");
            if (anchor) {
                if (this.active) {
                    anchor.setAttribute("tabindex", "-1");
                    anchor.addEventListener("click", this._preventNavigation);
                }
                else {
                    anchor.removeEventListener("click", this._preventNavigation);
                }
            }
        }
    }
    render() {
        return lit.html `
      <sit-link><slot class="nav-link"></slot></sit-link>
      <div class="separator">
        <sit-icon name="chevron-right" size="sm"></sit-icon>
      </div>
    `;
    }
}
SitBreadcrumbItem.styles = [breadcrumbItem["default"]];
SitBreadcrumbItem.dependencies = {
    "sit-link": sitLink.SitLink,
    "sit-icon": sitIcon.SitIcon
};
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitBreadcrumbItem.prototype, "active", void 0);

exports.SitBreadcrumbItem = SitBreadcrumbItem;
exports["default"] = SitBreadcrumbItem;
//# sourceMappingURL=sit-breadcrumb-item.cjs.js.map
