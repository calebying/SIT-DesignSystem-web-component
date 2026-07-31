'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var watch = require('../../utils/watch.cjs.js');
var sitElement = require('../../base/sit-element.cjs.js');
var subnavItem = require('./subnav-item.cjs.js');

/**
 * @slot default - slot for SitSubnavItem element.
 *
 *  */
class SitSubnavItem extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** when true, sets the active stylings of the navigation item */
        this.active = false;
        /** Disables the SitSubnavItem */
        this.disabled = false;
    }
    _handleDisabled() {
        this.setAttribute("aria-disabled", `${this.disabled}`);
    }
    _handleSlotChange(e) {
        const slot = e.target;
        const assignedElements = slot.assignedElements({ flatten: true });
        const anchorItems = assignedElements.filter(item => item.tagName.toLowerCase() === "a" || item.tagName.toLowerCase() === "sit-link");
        if (anchorItems.length > 1) {
            console.error("More than one anchor tag is added to sit-subnav-item");
            return;
        }
        if (anchorItems.length === 0) {
            const nodes = slot.assignedNodes({ flatten: true });
            nodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const hyperlink = document.createElement("a");
                    hyperlink.textContent = node.textContent;
                    node.parentNode.replaceChild(hyperlink, node);
                }
            });
        }
        if (anchorItems.length === 1) {
            const anchor = anchorItems[0];
            if (this.active) {
                anchor.setAttribute("aria-current", "true");
            }
            if (this.disabled) {
                anchor.setAttribute("href", "javascript:void(0)");
                anchor.setAttribute("tabindex", "-1");
            }
        }
    }
    render() {
        return lit.html `<slot @slotchange=${this._handleSlotChange}></slot>`;
    }
}
SitSubnavItem.styles = [...sitElement["default"].styles, subnavItem["default"]];
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitSubnavItem.prototype, "active", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitSubnavItem.prototype, "disabled", void 0);
tslib.__decorate([
    watch.watch("disabled")
], SitSubnavItem.prototype, "_handleDisabled", null);

exports.SitSubnavItem = SitSubnavItem;
exports["default"] = SitSubnavItem;
//# sourceMappingURL=sit-subnav-item.cjs.js.map
