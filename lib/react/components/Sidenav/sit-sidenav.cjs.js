'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var sitElement = require('../../base/sit-element.cjs.js');
var classMap_js = require('lit/directives/class-map.js');
var sidenav = require('./sidenav.cjs.js');

/**
 * @summary The side navigation is used to display a list of links to move between pages within a related category.
 * It is used as a secondary form of navigation where the primary navigation is located hierachically above the page frame.
 * Maximum three levels of navigations are allowed.
 *
 * @slot default - Default slot for SitSidenavItem element.
 * @cssproperty --sidenav-sticky-top - set the top value of the sticky sidenav. Defaults to 0rem
 */
class SitSidenav extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** Apply position sticky to the sidenav */
        this.sticky = false;
    }
    /** @internal */
    get items() {
        return [...(this.defaultNodes || [])].filter((node) => typeof node.tagName !== "undefined");
    }
    async onToggle(event) {
        const target = event.target;
        const isSidenavLink = target.tagName === "SIT-SIDENAV-LINK";
        // Let the event pass through the DOM so that it can be
        // prevented from the outside if a user so desires.
        if (event.defaultPrevented || isSidenavLink) {
            // No toggling when the user prevents it.
            return;
        }
        const items = [...this.items];
        if (items && !items.length) {
            // no toggling when there aren't items.
            return;
        }
    }
    render() {
        return lit.html `
      <nav class=${classMap_js.classMap({ sticky: this.sticky })}>
        <div>
          <slot @click=${this.onToggle}></slot>
        </div>
      </nav>
    `;
    }
}
SitSidenav.styles = [...sitElement["default"].styles, sidenav["default"]];
tslib.__decorate([
    decorators_js.property({ type: Boolean, attribute: true })
], SitSidenav.prototype, "sticky", void 0);
tslib.__decorate([
    decorators_js.queryAssignedElements()
], SitSidenav.prototype, "defaultNodes", void 0);

exports.SitSidenav = SitSidenav;
exports["default"] = SitSidenav;
//# sourceMappingURL=sit-sidenav.cjs.js.map
