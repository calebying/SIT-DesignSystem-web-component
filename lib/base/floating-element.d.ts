import { Ref } from "lit/directives/ref.js";
import { Placement, Middleware } from "@floating-ui/dom";
import SitElement from "./sit-element";
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
export declare abstract class FloatingElement extends SitElement {
    /** The subclass's ref to the reference (trigger) element. */
    protected abstract referenceRef: Ref<HTMLElement>;
    /** The subclass's ref to the floating (panel/bubble) element. */
    protected abstract floatingRef: Ref<HTMLElement>;
    /** Placement passed to Floating UI's computePosition. */
    placement: Placement;
    /** Additional configuration to pass to Floating UI, merged over this base's defaults. */
    floatingOpts: {
        placement?: Placement;
        middleware?: Array<Middleware>;
    };
    private _cleanupAutoUpdate?;
    /** Subclasses can override for their own middleware defaults (mirrors DropdownElement's). */
    protected defaultMiddleware(): Middleware[];
    protected updateFloatingPosition(): Promise<void>;
    /** Starts Floating UI's autoUpdate loop; call from the subclass's show()/open logic. */
    protected startFloatingAutoUpdate(): void;
    /** Stops the autoUpdate loop; call from the subclass's hide()/close logic and disconnectedCallback. */
    protected stopFloatingAutoUpdate(): void;
    disconnectedCallback(): void;
}
export default FloatingElement;
