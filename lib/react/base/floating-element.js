'use client';
import { __decorate } from 'tslib';
import { property } from 'lit/decorators.js';
import { offset, flip, shift, computePosition, autoUpdate } from '@floating-ui/dom';
import SitElement from './sit-element.js';

/**
 * Shared Floating UI positioning base, factored out of the same pattern
 * `DropdownElement` (src/base/dropdown-element.ts) and `SitTooltip`
 * (src/components/Tooltip/sit-tooltip.ts) already implement independently
 * -- computePosition + offset/flip/shift middleware, an autoUpdate tracking
 * loop with a stored cleanup function, `data-placement` written back onto
 * the floating element for placement-aware CSS.
 *
 * Deliberately NOT wired into Dropdown/Tooltip/Datepicker themselves (that
 * refactor is out of scope here) -- this exists so `sit-popover` doesn't
 * have to reinvent the same positioning glue a third time, and so a future
 * refactor of the other three has a real, working base to consolidate onto.
 *
 * A subclass provides `referenceRef`/`floatingRef` (its own `Ref`s to the
 * reference and floating elements) and can override `defaultMiddleware()`
 * for its own defaults; `floatingOpts` lets a consumer override placement/
 * middleware per-instance the same way `DropdownElement.floatingOpts` does.
 */
class FloatingElement extends SitElement {
    constructor() {
        super(...arguments);
        /** Placement passed to Floating UI's computePosition. */
        this.placement = "bottom-start";
        /** Additional configuration to pass to Floating UI, merged over this base's defaults. */
        this.floatingOpts = {};
    }
    /** Subclasses can override for their own middleware defaults (mirrors DropdownElement's). */
    defaultMiddleware() {
        return [offset(8), flip(), shift()];
    }
    async updateFloatingPosition() {
        if (!this.referenceRef.value || !this.floatingRef.value)
            return;
        const middleware = Array.isArray(this.floatingOpts.middleware) && this.floatingOpts.middleware.length > 0
            ? this.floatingOpts.middleware
            : this.defaultMiddleware();
        const opts = Object.assign(Object.assign({ strategy: "fixed", placement: this.placement }, this.floatingOpts), { middleware });
        const { x, y, strategy, placement } = await computePosition(this.referenceRef.value, this.floatingRef.value, opts);
        this.floatingRef.value.setAttribute("data-placement", placement);
        Object.assign(this.floatingRef.value.style, {
            position: strategy,
            left: `${x}px`,
            top: `${y}px`
        });
    }
    /** Starts Floating UI's autoUpdate loop; call from the subclass's show()/open logic. */
    startFloatingAutoUpdate() {
        if (!this.referenceRef.value || !this.floatingRef.value)
            return;
        this._cleanupAutoUpdate = autoUpdate(this.referenceRef.value, this.floatingRef.value, () => this.updateFloatingPosition());
    }
    /** Stops the autoUpdate loop; call from the subclass's hide()/close logic and disconnectedCallback. */
    stopFloatingAutoUpdate() {
        if (this._cleanupAutoUpdate) {
            this._cleanupAutoUpdate();
            this._cleanupAutoUpdate = undefined;
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.stopFloatingAutoUpdate();
    }
}
__decorate([
    property({ type: String })
], FloatingElement.prototype, "placement", void 0);
__decorate([
    property({ type: Object })
], FloatingElement.prototype, "floatingOpts", void 0);

export { FloatingElement, FloatingElement as default };
//# sourceMappingURL=floating-element.js.map
