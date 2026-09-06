import { Ref } from "lit/directives/ref.js";
import type { Placement } from "@floating-ui/dom";
import FloatingElement from "../../base/floating-element";
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
export declare class SitPopover extends FloatingElement {
    static styles: import("lit").CSSResult[];
    protected referenceRef: Ref<HTMLElement>;
    protected floatingRef: Ref<HTMLElement>;
    /** How the popover opens: on trigger click, or on trigger hover (mouseenter/mouseleave). */
    trigger: "click" | "hover";
    /** Placement relative to the trigger. Inherited from FloatingElement; re-declared here only for its own default. */
    placement: Placement;
    /** Prevents the popover from opening. */
    disabled: boolean;
    /** Whether the popover is open. Reflects, so it can be read/set like `sit-modal`'s `open`. */
    open: boolean;
    /**
     * Accessible name for the panel (role="dialog" requires one -- axe-core's
     * aria-dialog-name rule caught this as a real violation when the panel had
     * none). Defaults to a generic but valid label rather than shipping an
     * accessibility violation out of the box; override with something specific
     * (e.g. "Account menu") whenever the trigger's own visible text doesn't
     * already make the panel's purpose obvious.
     */
    ariaLabel: string;
    private _triggerElements;
    private _focusTrap?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: Map<string, unknown>): void;
    private _wireTrigger;
    private _handleClickOutside;
    private _handleKeyDown;
    /** Shows the popover. */
    show(): Promise<void>;
    /** Hides the popover. */
    hide(): void;
    /** Toggles the popover. */
    toggle(): void;
    render(): import("lit").TemplateResult<1>;
}
export default SitPopover;
