'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import SitElement from '../../base/sit-element.js';
import css_248z from './segment.js';

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
class SitSegment extends SitElement {
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
        return html `
      <button
        type="button"
        class=${classMap({ segment: true, selected: this.selected })}
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
SitSegment.styles = [...SitElement.styles, css_248z];
__decorate([
    property({ type: String, reflect: true })
], SitSegment.prototype, "value", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitSegment.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitSegment.prototype, "disabled", void 0);
__decorate([
    query("button")
], SitSegment.prototype, "_button", void 0);

export { SitSegment, SitSegment as default };
//# sourceMappingURL=sit-segment.js.map
