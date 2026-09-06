'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { FloatingElement } from '../../base/floating-element.js';
import Modal from '../../utils/modal.js';
import css_248z from './popover.js';

/**
 * @summary A generic floating-content primitive: positions arbitrary panel
 * content relative to a trigger element, using the same Floating UI pattern
 * `sit-tooltip`/`sit-dropdown`/`sit-datepicker` already use (factored into
 * `FloatingElement`, src/base/floating-element.ts -- those 3 components are
 * NOT refactored onto it here, by design; this ships the primitive only).
 *
 * Unlike `sit-tooltip` (text-only `content` prop) this accepts arbitrary rich
 * content via a named slot, and unlike `sit-dropdown` (click-only, list-item
 * semantics) this supports a `hover` trigger too and has no opinion about
 * what's inside the panel.
 *
 * @slot default - The trigger element (an interactive element ideally --
 *   e.g. a button -- since it becomes the Floating UI reference element).
 * @slot content - The popover panel's content. Arbitrary HTML.
 *
 * @event sit-show - Emitted when the popover is shown.
 * @event sit-after-show - Emitted after the popover has shown and positioned.
 * @event sit-hide - Emitted when the popover is hidden.
 * @event sit-after-hide - Emitted after the popover has hidden.
 */
class SitPopover extends FloatingElement {
    constructor() {
        super(...arguments);
        this.referenceRef = createRef();
        this.floatingRef = createRef();
        /** How the popover opens: on trigger click, or on trigger hover (mouseenter/mouseleave). */
        this.trigger = "click";
        /** Placement relative to the trigger. Inherited from FloatingElement; re-declared here only for its own default. */
        this.placement = "bottom-start";
        /** Prevents the popover from opening. */
        this.disabled = false;
        /** Whether the popover is open. Reflects, so it can be read/set like `sit-modal`'s `open`. */
        this.open = false;
        /**
         * Accessible name for the panel (role="dialog" requires one -- axe-core's
         * aria-dialog-name rule caught this as a real violation when the panel had
         * none). Defaults to a generic but valid label rather than shipping an
         * accessibility violation out of the box; override with something specific
         * (e.g. "Account menu") whenever the trigger's own visible text doesn't
         * already make the panel's purpose obvious.
         */
        this.ariaLabel = "Popover";
        this._handleClickOutside = (e) => {
            if (!this.open || this.trigger === "hover")
                return;
            if (!e.composedPath().includes(this)) {
                this.hide();
            }
        };
        this._handleKeyDown = (e) => {
            var _a;
            if (!this.open)
                return;
            if (e.key === "Escape") {
                e.stopPropagation();
                this.hide();
                (_a = this._triggerElements[0]) === null || _a === void 0 ? void 0 : _a.focus();
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener("click", this._handleClickOutside);
        document.addEventListener("keydown", this._handleKeyDown);
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        document.removeEventListener("click", this._handleClickOutside);
        document.removeEventListener("keydown", this._handleKeyDown);
        (_a = this._focusTrap) === null || _a === void 0 ? void 0 : _a.deactivate();
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this._wireTrigger();
        if (this.open) {
            requestAnimationFrame(async () => {
                await this.updateFloatingPosition();
                this.startFloatingAutoUpdate();
            });
        }
    }
    _wireTrigger() {
        this._triggerElements.forEach(el => {
            if (this.trigger === "hover") {
                el.addEventListener("mouseenter", () => this.show());
                el.addEventListener("mouseleave", () => this.hide());
                el.addEventListener("focus", () => this.show());
                el.addEventListener("blur", () => this.hide());
            }
            else {
                el.addEventListener("click", () => this.toggle());
            }
        });
    }
    /** Shows the popover. */
    async show() {
        if (this.disabled || this.open)
            return;
        this.open = true;
        this.emit("sit-show");
        await this.updateComplete;
        await this.updateFloatingPosition();
        this.startFloatingAutoUpdate();
        if (this.floatingRef.value) {
            this._focusTrap = new Modal(this.floatingRef.value);
            this._focusTrap.activate();
        }
        this.emit("sit-after-show");
    }
    /** Hides the popover. */
    hide() {
        var _a;
        if (!this.open)
            return;
        this.emit("sit-hide");
        this.open = false;
        this.stopFloatingAutoUpdate();
        (_a = this._focusTrap) === null || _a === void 0 ? void 0 : _a.deactivate();
        this._focusTrap = undefined;
        setTimeout(() => this.emit("sit-after-hide"), 0);
    }
    /** Toggles the popover. */
    toggle() {
        this.open ? this.hide() : this.show();
    }
    render() {
        return html `
      <div class="popover-reference" ${ref(this.referenceRef)}>
        <slot></slot>
      </div>
      <div
        ${ref(this.floatingRef)}
        class="popover-panel"
        role="dialog"
        aria-label=${ifDefined(this.ariaLabel || undefined)}
        ?hidden=${!this.open}
      >
        <slot name="content"></slot>
      </div>
    `;
    }
}
SitPopover.styles = [...FloatingElement.styles, css_248z];
__decorate([
    property({ type: String, reflect: true })
], SitPopover.prototype, "trigger", void 0);
__decorate([
    property({ type: String })
], SitPopover.prototype, "placement", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitPopover.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitPopover.prototype, "open", void 0);
__decorate([
    property({ type: String })
], SitPopover.prototype, "ariaLabel", void 0);
__decorate([
    queryAssignedElements()
], SitPopover.prototype, "_triggerElements", void 0);

export { SitPopover, SitPopover as default };
//# sourceMappingURL=sit-popover.js.map
