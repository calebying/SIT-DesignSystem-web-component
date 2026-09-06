'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var sitElement = require('../../base/sit-element.cjs.js');
var watch = require('../../utils/watch.cjs.js');
var sitSegment = require('./sit-segment.cjs.js');
var segmentedControl = require('./segmented-control.cjs.js');

/**
 * @summary A grouped single-choice control: a connected row of segments with
 * one active at a time. Reuses `<sit-radio-group>`'s ARIA/keyboard pattern
 * (role="radiogroup" + role="radio" children, roving tabindex, Arrow keys to
 * move selection, Space to select) applied to button-styled segments instead
 * of radio inputs.
 *
 * Unlike a native radio group, a segmented control always has exactly one
 * segment selected -- there's no valid "nothing selected" visual state for a
 * connected button row the way an unchecked radio group is valid. If `value`
 * doesn't match any segment (including being unset), the first non-disabled
 * segment is selected automatically once segments are known (on slotchange).
 *
 * @slot default - `<sit-segment>` children.
 *
 * @event sit-change - Emitted when the selected segment changes (click or keyboard).
 * @eventDetail {ISitSegmentedControlChangeEventDetail} sit-change
 */
class SitSegmentedControl extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** The selected segment's value. */
        this.value = "";
        /** Disables every segment in the group. */
        this.disabled = false;
        /** Segment size. */
        this.size = "md";
    }
    _handleSlotChange() {
        var _a;
        this._disableChildSegments();
        this._syncSelection();
        const segments = this._segments;
        if (segments.length > 0 && !segments.some(s => s.selected)) {
            const firstEnabled = (_a = segments.find(s => !s.disabled)) !== null && _a !== void 0 ? _a : segments[0];
            this.value = firstEnabled.value;
            this._syncSelection();
        }
    }
    _syncSelection() {
        this._segments.forEach(segment => {
            segment.selected = segment.value === this.value;
        });
    }
    _disableChildSegments() {
        if (this.disabled) {
            this._segments.forEach(segment => (segment.disabled = true));
        }
    }
    _selectSegment(segment, { moveFocus = false } = {}) {
        if (segment.disabled || segment.value === this.value)
            return;
        this.value = segment.value;
        this._syncSelection();
        this.emit("sit-change", { detail: { value: this.value } });
        if (moveFocus)
            segment.focus();
    }
    _handleClick(event) {
        const target = event.target.closest("sit-segment");
        if (!target)
            return;
        this._selectSegment(target);
    }
    _handleKeyDown(event) {
        var _a;
        if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
            return;
        }
        const segments = this._segments.filter(segment => !segment.disabled);
        if (segments.length === 0)
            return;
        const current = (_a = segments.find(segment => segment.selected)) !== null && _a !== void 0 ? _a : segments[0];
        if (event.key === " ") {
            event.preventDefault();
            this._selectSegment(current, { moveFocus: true });
            return;
        }
        const incr = ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
        let index = segments.indexOf(current) + incr;
        if (index < 0)
            index = segments.length - 1;
        if (index > segments.length - 1)
            index = 0;
        event.preventDefault();
        this._selectSegment(segments[index], { moveFocus: true });
    }
    /**@internal */
    _handleDisabledChange() {
        this._disableChildSegments();
    }
    render() {
        return lit.html `
      <div
        class="segmented-control"
        role="radiogroup"
        aria-label=${this.ariaLabel}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `;
    }
}
SitSegmentedControl.styles = [...sitElement["default"].styles, segmentedControl["default"]];
/**@internal */
SitSegmentedControl.dependencies = {
    "sit-segment": sitSegment.SitSegment
};
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitSegmentedControl.prototype, "value", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitSegmentedControl.prototype, "disabled", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitSegmentedControl.prototype, "size", void 0);
tslib.__decorate([
    decorators_js.property({ type: String })
], SitSegmentedControl.prototype, "ariaLabel", void 0);
tslib.__decorate([
    decorators_js.queryAssignedElements()
], SitSegmentedControl.prototype, "_segments", void 0);
tslib.__decorate([
    watch.watch("disabled", { waitUntilFirstUpdate: true })
], SitSegmentedControl.prototype, "_handleDisabledChange", null);

exports.SitSegmentedControl = SitSegmentedControl;
exports["default"] = SitSegmentedControl;
//# sourceMappingURL=sit-segmented-control.cjs.js.map
