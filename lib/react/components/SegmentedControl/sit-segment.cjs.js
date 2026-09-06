'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var classMap_js = require('lit/directives/class-map.js');
var sitElement = require('../../base/sit-element.cjs.js');
var segment = require('./segment.cjs.js');

/**
 * @summary A single segment (option) inside a `<sit-segmented-control>`. Not
 * useful outside that context -- its selected/roving-tabindex state is owned
 * and driven entirely by the parent group, the same way `<sit-radio>` is
 * driven by `<sit-radio-group>`.
 *
 * The roving tab stop is the currently *selected* segment (`tabindex="0"` on
 * its internal button when `selected`, `"-1"` otherwise) -- the same rule
 * `<sit-radio-group>` applies to its own `<sit-radio>` children.
 *
 * @slot default - The segment's label content (text and/or an icon).
 */
class SitSegment extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** This segment's value, compared against the group's `value`. */
        this.value = "";
        /** Whether this segment is the selected one. Set by the parent group -- don't set this directly. */
        this.selected = false;
        /** Disables this individual segment. */
        this.disabled = false;
    }
    /** Sets focus on this segment's internal button. Called by the parent group after a roving-tabindex keyboard move. */
    focus(options) {
        var _a;
        (_a = this._button) === null || _a === void 0 ? void 0 : _a.focus(options);
    }
    /** Removes focus from this segment's internal button. */
    blur() {
        var _a;
        (_a = this._button) === null || _a === void 0 ? void 0 : _a.blur();
    }
    render() {
        return lit.html `
      <button
        type="button"
        class=${classMap_js.classMap({ segment: true, selected: this.selected })}
        role="radio"
        aria-checked=${this.selected ? "true" : "false"}
        ?disabled=${this.disabled}
        tabindex=${this.selected ? "0" : "-1"}
      >
        <slot></slot>
      </button>
    `;
    }
}
SitSegment.styles = [...sitElement["default"].styles, segment["default"]];
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitSegment.prototype, "value", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitSegment.prototype, "selected", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitSegment.prototype, "disabled", void 0);
tslib.__decorate([
    decorators_js.query("button")
], SitSegment.prototype, "_button", void 0);

exports.SitSegment = SitSegment;
exports["default"] = SitSegment;
//# sourceMappingURL=sit-segment.cjs.js.map
