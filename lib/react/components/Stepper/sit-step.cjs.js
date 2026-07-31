'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var classMap_js = require('lit/directives/class-map.js');
var sitElement = require('../../base/sit-element.cjs.js');
var sitIcon = require('../Icon/sit-icon.cjs.js');
var step = require('./step.cjs.js');

/**
 * @summary A single step within an sit-stepper. Manages its own active, completed, and disabled states based on props set by the parent stepper.
 *
 * @slot default - Optional content displayed below the step header label
 */
class SitStep extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** The header text for the step */
        this.stepHeader = "";
        /** Whether this step is clickable */
        this.clickable = false;
        /** Whether this step is currently active */
        this.active = false;
        /** Whether this step is currently disabled */
        this.disabled = false;
        /** Whether this step is completed */
        this.completed = false;
        /** @internal The index of this step within the stepper */
        this.stepIndex = 0;
        /** @internal Orientation of parent stepper (horizontal or vertical) */
        this.orientation = "horizontal";
        /** @internal Whether this step is the first sit-step of its type in the slot */
        this.isFirstOfType = false;
    }
    render() {
        const isValidClickable = !this.disabled && this.clickable;
        return lit.html `
      <div class="stepper-item-container">
        <div
          class="stepper-item ${classMap_js.classMap({
            first: this.isFirstOfType,
            active: this.active,
            completed: this.completed,
            clickable: this.clickable,
            vertical: this.orientation === "vertical",
            disabled: this.disabled
        })}"
          tabindex=${isValidClickable ? "0" : "-1"}
          aria-current=${this.active ? "step" : "false"}
          aria-disabled=${this.disabled || (!this.active && !this.completed) ? "true" : "false"}
          @click="${isValidClickable ? e => this._handleClick(e) : null}"
          @keydown=${isValidClickable ? (e) => this._handleKeyDown(e) : null}
        >
          <div class="stepper-marker">
            ${this.iconName ? lit.html `<sit-icon name=${this.iconName} size="md"></sit-icon>` : this.stepIndex + 1}
          </div>

          <div class="stepper-detail">
            <div class="stepper-label">${this.stepHeader}</div>
            <slot class="stepper-slot"></slot>
          </div>
        </div>
      </div>
    `;
    }
    /**@internal */
    _handleClick(e) {
        if (e) {
            const ele = e.target;
            // Allow user to have custom slotted item with attribute 'data-clickable' to skip i-sit-click
            // To handle if there are clickable objects within the slot
            if (ele.hasAttribute("data-clickable"))
                return;
        }
        this.emit("i-sit-click", { detail: { stepIndex: this.stepIndex } });
    }
    /**@internal */
    _handleKeyDown(event) {
        if (event.key === "Enter") {
            this._handleClick();
        }
    }
}
SitStep.styles = [...sitElement["default"].styles, step["default"]];
/** @internal */
SitStep.dependencies = { "sit-icon": sitIcon.SitIcon };
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitStep.prototype, "stepHeader", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitStep.prototype, "iconName", void 0);
tslib.__decorate([
    decorators_js.property({ type: Object })
], SitStep.prototype, "component", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean })
], SitStep.prototype, "clickable", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitStep.prototype, "active", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitStep.prototype, "disabled", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitStep.prototype, "completed", void 0);
tslib.__decorate([
    decorators_js.property({ type: Number })
], SitStep.prototype, "stepIndex", void 0);
tslib.__decorate([
    decorators_js.property({ type: String })
], SitStep.prototype, "orientation", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean })
], SitStep.prototype, "isFirstOfType", void 0);

exports.SitStep = SitStep;
exports["default"] = SitStep;
//# sourceMappingURL=sit-step.cjs.js.map
