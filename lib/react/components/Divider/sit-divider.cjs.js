'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var decorators_js = require('lit/decorators.js');
var sitElement = require('../../base/sit-element.cjs.js');
var divider = require('./divider.cjs.js');

/**
 * @summary A divider is a thin line that groups content in lists and layouts. They bring clarity to a layout by grouping and dividing content in close proximity.
 */
class SitDivider extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** Sets the orientation of divider to vertical. Defaults to horizontal */
        this.orientation = "horizontal";
        /** Sets the orientation of divider to vertical. Defaults to false */
        this.thickness = "thin";
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("role", "separator");
        this.setAttribute("aria-orientation", this.orientation);
    }
}
SitDivider.styles = [divider["default"]];
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitDivider.prototype, "orientation", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitDivider.prototype, "thickness", void 0);

exports.SitDivider = SitDivider;
exports["default"] = SitDivider;
//# sourceMappingURL=sit-divider.cjs.js.map
