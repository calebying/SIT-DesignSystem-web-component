'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var sitElement = require('../../base/sit-element.cjs.js');
var watch = require('../../utils/watch.cjs.js');
var sidenavLink = require('./sidenav-link.cjs.js');

/**
 * @slot default - slot for label of anchor tag.
 */
class SitSidenavLink extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** when true, sets the active stylings of .nav-link */
        this.active = false;
        /** Disables the SitMainnavItem */
        this.disabled = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("aria-disabled", `${this.disabled}`);
    }
    _handleDisabled() {
        this.setAttribute("aria-disabled", `${this.disabled}`);
        this._anchor[0].setAttribute("aria-disabled", `${this.disabled}`);
        if (!this.disabled) {
            this._anchor[0].removeAttribute("tabindex");
        }
    }
    _handleSlotChange() {
        this._anchor[0].setAttribute("aria-disabled", `${this.disabled}`);
        /** If link is disabled, set tabindex of anchor to -1 */
        if (this.disabled) {
            this._anchor[0].setAttribute("tabindex", "-1");
            this._anchor[0].removeAttribute("href");
            this._anchor[0].setAttribute("role", "link");
        }
    }
    render() {
        return lit.html ` <slot @slotchange=${this._handleSlotChange}></slot> `;
    }
}
SitSidenavLink.styles = [...sitElement["default"].styles, sidenavLink["default"]];
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitSidenavLink.prototype, "active", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitSidenavLink.prototype, "disabled", void 0);
tslib.__decorate([
    decorators_js.queryAssignedElements({ flatten: true })
], SitSidenavLink.prototype, "_anchor", void 0);
tslib.__decorate([
    watch.watch("disabled", { waitUntilFirstUpdate: true })
], SitSidenavLink.prototype, "_handleDisabled", null);

exports.SitSidenavLink = SitSidenavLink;
exports["default"] = SitSidenavLink;
//# sourceMappingURL=sit-sidenav-link.cjs.js.map
