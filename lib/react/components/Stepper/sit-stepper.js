'use client';
import { __decorate } from 'tslib';
import { html, nothing } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import SitElement from '../../base/sit-element.js';
import { defaultValue } from '../../utils/defaultvalue.js';
import { watch } from '../../utils/watch.js';
import css_248z from './stepper.js';
import { SitIcon } from '../Icon/sit-icon.js';
import { HasSlotController } from '../../utils/slot.js';

/**
 * @summary Steppers are used to inform users which step they are at in a form or a process
 *
 * @event sit-next-step - Emitted right before the next step is reached. Event is fired when nextStep method is called.
 * @event sit-previous-step - Emitted right before the previous step is reached. Event is fired when previousStep method is called.
 * @event sit-last-step - Emitted right before the last step is reached. Event is fired when lastStep method is called.
 * @event sit-first-step - Emitted right before the first step is reached. Event is fired when firstStep method is called.
 * @event sit-arrived - Emitted right after the activeStep has updated its state, when upcoming step has arrived. Call `getComponent()` on the stepper to get the current step's component.
 * @event sit-reset - Emitted right before the step is reset to its defaultActiveStep. Event is fired when reset method is called.
 * @slot default - slot for sit-step children
 *
 */
class SitStepper extends SitElement {
    constructor() {
        super(...arguments);
        /** The metadata of stepper, type `IStepMetaData`. Deprecated: use sit-step child components instead.
         * @deprecated Use sit-step child components instead of the steps property
         */
        this.steps = [];
        /** The current state of active step. Defaults to 0 */
        this.activeStep = 0;
        /** The orientation of stepper. By default, the stepper is of horizontal orientation */
        this.orientation = "horizontal";
        /** When true, the stepper's steps will be clickable */
        this.clickable = false;
        /** When true, the stepper's steps can only be clicked in a linear manner */
        this.linear = false;
        /** @internal Gets or sets the default activeStep used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
        this.defaultActiveStep = 0;
        /** @internal */
        this._items = [];
        this._totalSteps = 0;
        /** @internal Bound i-sit-click handler for proper event listener removal */
        this._boundHandleItemClick = this._handleStepClick.bind(this);
        /**
         * Indicates the presence of the default slot.
         * Used to switch between slotted sit-step children and the legacy steps property.
         * @type {boolean}
         * @internal
         * @default false
         */
        this.hasDefaultSlot = false;
        this.hasSlotController = new HasSlotController(this, "[default]");
    }
    connectedCallback() {
        super.connectedCallback();
        this._totalSteps = this.steps.length;
        this.addEventListener("i-sit-click", this._boundHandleItemClick);
    }
    /** @internal */
    _handleSlotChange() {
        this._items = this._slotNodes;
        this._totalSteps = this._items.length;
        this._updateStepItems();
    }
    updated() {
        if (!this.hasDefaultSlot)
            this.hasDefaultSlot = this.hasSlotController.test("[default]");
    }
    /** @internal Updates step item properties based on active step and clickable state */
    _updateStepItems() {
        if (this._items && this._items.length > 0) {
            this._items.forEach((item, index) => {
                item.stepIndex = index;
                item.active = this.activeStep === index;
                item.completed = item.completed || this.activeStep > index;
                item.clickable = this.linear
                    ? !item.disabled && this.clickable && (this.activeStep - 1 == index || this.activeStep + 1 == index)
                    : !item.disabled && this.clickable;
                item.orientation = this.orientation;
                if (this._items.length > 1) {
                    item.isFirstOfType = index === 0;
                    item.classList.toggle("last", index === this._items.length - 1);
                }
            });
        }
    }
    /** Returns the component associated with the given step index. Defaults to the current activeStep if no argument is provided. */
    getComponent(step = this.activeStep) {
        var _a, _b;
        const items = this.hasDefaultSlot ? this._items : this.steps;
        if (items && items.length > 0) {
            return (_a = items[step]) === null || _a === void 0 ? void 0 : _a.component;
        }
        return (_b = this.steps[step]) === null || _b === void 0 ? void 0 : _b.component;
    }
    /** Moves the active step forward one step */
    nextStep() {
        var _a;
        this.emit("sit-next-step");
        if (this.activeStep < this._totalSteps - 1) {
            if (!((_a = this._slotNodes[this.activeStep + 1]) === null || _a === void 0 ? void 0 : _a.disabled)) {
                this.activeStep++;
            }
        }
    }
    /** Moves the active step back one step */
    previousStep() {
        var _a;
        this.emit("sit-previous-step");
        if (this.activeStep > 0) {
            if (!((_a = this._slotNodes[this.activeStep - 1]) === null || _a === void 0 ? void 0 : _a.disabled)) {
                this.activeStep--;
            }
        }
    }
    /** Changes the active step to the last step */
    lastStep() {
        this.emit("sit-last-step");
        if (this.activeStep !== this._totalSteps - 1) {
            this.activeStep = this._totalSteps - 1;
        }
    }
    /** Changes active step to the first step */
    firstStep() {
        this.emit("sit-first-step");
        if (this.activeStep > 0) {
            this.activeStep = 0;
        }
    }
    /** Resets the Stepper to its initial active step state */
    reset() {
        this.emit("sit-reset");
        this.activeStep = this.defaultActiveStep;
    }
    /**@internal */
    _onStepperItemClick(index) {
        this.activeStep = index;
    }
    /**@internal */
    _handleActiveStepChange() {
        this._updateStepItems();
        this.emit("sit-arrived");
    }
    /**@internal */
    _handleClickableChange() {
        this._updateStepItems();
    }
    /**@internal */
    _handleOrientationChange() {
        this._updateStepItems();
    }
    /**@internal */
    _handleKeyDown(event, index) {
        if (event.key === "Enter") {
            this._onStepperItemClick(index);
        }
    }
    /**@internal */
    _handleStepClick(e) {
        var _a;
        const event = e;
        e.stopPropagation();
        const stepIndex = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.stepIndex;
        this._onStepperItemClick(stepIndex);
    }
    render() {
        return html `
      <div
        class="stepper ${classMap({
            [`${this.orientation}`]: this.orientation,
            clickable: this.clickable
        })}"
      >
        <slot @slotchange=${this._handleSlotChange}></slot>

        ${!this.hasDefaultSlot
            ? this.steps.map(({ stepHeader: step, iconName }, index) => {
                return html `
                <div class="stepper-item-container">
                  <div
                    class="stepper-item ${classMap({
                    "is-active": this.activeStep === index,
                    "is-completed": this.activeStep > index,
                    "is-clickable": this.clickable && this.activeStep > index
                })}"
                    tabindex=${this.clickable && this.activeStep > index ? "0" : "-1"}
                    aria-current=${this.activeStep === index ? "step" : "false"}
                    aria-disabled=${this.activeStep <= index ? "true" : "false"}
                    @click="${this.clickable ? () => this._onStepperItemClick(index) : null}"
                    @keydown=${this.clickable ? (e) => this._handleKeyDown(e, index) : null}
                  >
                    <div class="stepper-marker">
                      ${iconName ? html `<sit-icon name=${iconName} size="md"></sit-icon>` : index + 1}
                    </div>
                    <div class="stepper-detail">${step}</div>
                  </div>
                </div>
              `;
            })
            : nothing}
      </div>
    `;
    }
}
SitStepper.styles = [...SitElement.styles, css_248z];
/** @internal */
SitStepper.dependencies = { "sit-icon": SitIcon };
__decorate([
    property({ type: Array })
], SitStepper.prototype, "steps", void 0);
__decorate([
    property({ type: Number, reflect: true })
], SitStepper.prototype, "activeStep", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitStepper.prototype, "orientation", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitStepper.prototype, "clickable", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitStepper.prototype, "linear", void 0);
__decorate([
    defaultValue("activeStep")
], SitStepper.prototype, "defaultActiveStep", void 0);
__decorate([
    queryAssignedElements()
], SitStepper.prototype, "_slotNodes", void 0);
__decorate([
    property({ type: Boolean })
], SitStepper.prototype, "hasDefaultSlot", void 0);
__decorate([
    watch("activeStep", { waitUntilFirstUpdate: true })
], SitStepper.prototype, "_handleActiveStepChange", null);
__decorate([
    watch("clickable", { waitUntilFirstUpdate: true })
], SitStepper.prototype, "_handleClickableChange", null);
__decorate([
    watch("orientation", { waitUntilFirstUpdate: true })
], SitStepper.prototype, "_handleOrientationChange", null);

export { SitStepper, SitStepper as default };
//# sourceMappingURL=sit-stepper.js.map
