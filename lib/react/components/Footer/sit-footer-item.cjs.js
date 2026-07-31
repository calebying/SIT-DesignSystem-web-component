'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var sitElement = require('../../base/sit-element.cjs.js');
var watch = require('../../utils/watch.cjs.js');
var footerItem = require('./footer-item.cjs.js');

/**
 * @summary The footer item component organizes links under a clear, descriptive title within the footer. It helps users easily navigate to related resources or information, ensuring clarity and accessibility.
 *
 * @slot default - The slot for the list of link items
 * @slot title - The slot for the title of the list of items
 *
 */
class SitFooterItem extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** Sets the color tone of the footer item. Inherited from the parent sit-footer. */
        this.tone = "fixed-dark";
    }
    /**@internal */
    _handleToneChange() {
        var _a;
        const defaultSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot:not([name])");
        defaultSlot === null || defaultSlot === void 0 ? void 0 : defaultSlot.assignedElements().forEach(el => {
            if (el.tagName === "SIT-LINK") {
                el.tone = this.tone === "neutral" ? "neutral" : "fixed-light";
            }
        });
    }
    _handleSlotChange(e) {
        const linkTone = this.tone === "neutral" ? "neutral" : "fixed-light";
        const assignedElements = e.target.assignedElements();
        assignedElements.forEach(el => {
            if (el.tagName === "SIT-LINK") {
                const sitLink = el;
                sitLink.tone = linkTone;
                sitLink.size = "sm";
            }
        });
    }
    render() {
        return lit.html `
      <div class="footer-item">
        <slot name="title"></slot>
        <div class="links">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `;
    }
}
SitFooterItem.styles = [...sitElement["default"].styles, footerItem["default"]];
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitFooterItem.prototype, "tone", void 0);
tslib.__decorate([
    watch.watch("tone", { waitUntilFirstUpdate: true })
], SitFooterItem.prototype, "_handleToneChange", null);

exports.SitFooterItem = SitFooterItem;
exports["default"] = SitFooterItem;
//# sourceMappingURL=sit-footer-item.cjs.js.map
