'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import SitElement from '../../base/sit-element.js';
import { SitIcon } from '../Icon/sit-icon.js';
import css_248z from './step.js';

/**
 * @summary A single step within an sit-stepper. Manages its own active, completed, and disabled states based on props set by the parent stepper.
 *
 * @slot default - Optional content displayed below the step header label
 */
class SitStep extends SitElement {
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
        return html `
      <div class="stepper-item-container">
        <div
          class="stepper-item ${classMap({
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
            ${this.iconName ? html `<sit-icon name=${this.iconName} size="md"></sit-icon>` : this.stepIndex + 1}
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
SitStep.styles = [...SitElement.styles, css_248z];
/** @internal */
SitStep.dependencies = { "sit-icon": SitIcon };
__decorate([
    property({ type: String, reflect: true })
], SitStep.prototype, "stepHeader", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitStep.prototype, "iconName", void 0);
__decorate([
    property({ type: Object })
], SitStep.prototype, "component", void 0);
__decorate([
    property({ type: Boolean })
], SitStep.prototype, "clickable", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitStep.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitStep.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitStep.prototype, "completed", void 0);
__decorate([
    property({ type: Number })
], SitStep.prototype, "stepIndex", void 0);
__decorate([
    property({ type: String })
], SitStep.prototype, "orientation", void 0);
__decorate([
    property({ type: Boolean })
], SitStep.prototype, "isFirstOfType", void 0);

export { SitStep, SitStep as default };
//# sourceMappingURL=sit-step.js.map
