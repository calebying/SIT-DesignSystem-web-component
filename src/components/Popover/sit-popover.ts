import { html } from "lit";
import { property, queryAssignedElements } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { Ref, createRef, ref } from "lit/directives/ref.js";
import type { Placement } from "@floating-ui/dom";
import FloatingElement from "../../base/floating-element";
import Modal from "../../utils/modal";
import popoverStyle from "./popover.css";

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
export class SitPopover extends FloatingElement {
  static styles = [...FloatingElement.styles, popoverStyle];

  protected referenceRef: Ref<HTMLElement> = createRef();
  protected floatingRef: Ref<HTMLElement> = createRef();

  /** How the popover opens: on trigger click, or on trigger hover (mouseenter/mouseleave). */
  @property({ type: String, reflect: true }) trigger: "click" | "hover" = "click";

  /** Placement relative to the trigger. Inherited from FloatingElement; re-declared here only for its own default. */
  @property({ type: String }) placement: Placement = "bottom-start";

  /** Prevents the popover from opening. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Whether the popover is open. Reflects, so it can be read/set like `sit-modal`'s `open`. */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Accessible name for the panel (role="dialog" requires one -- axe-core's
   * aria-dialog-name rule caught this as a real violation when the panel had
   * none). Defaults to a generic but valid label rather than shipping an
   * accessibility violation out of the box; override with something specific
   * (e.g. "Account menu") whenever the trigger's own visible text doesn't
   * already make the panel's purpose obvious.
   */
  @property({ type: String }) ariaLabel = "Popover";

  @queryAssignedElements()
  private _triggerElements: Array<HTMLElement>;

  private _focusTrap?: Modal;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this._handleClickOutside);
    document.addEventListener("keydown", this._handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this._handleClickOutside);
    document.removeEventListener("keydown", this._handleKeyDown);
    this._focusTrap?.deactivate();
  }

  firstUpdated(changedProperties: Map<string, unknown>) {
    super.firstUpdated(changedProperties);
    this._wireTrigger();
    if (this.open) {
      requestAnimationFrame(async () => {
        await this.updateFloatingPosition();
        this.startFloatingAutoUpdate();
      });
    }
  }

  private _wireTrigger() {
    this._triggerElements.forEach(el => {
      if (this.trigger === "hover") {
        el.addEventListener("mouseenter", () => this.show());
        el.addEventListener("mouseleave", () => this.hide());
        el.addEventListener("focus", () => this.show());
        el.addEventListener("blur", () => this.hide());
      } else {
        el.addEventListener("click", () => this.toggle());
      }
    });
  }

  private _handleClickOutside = (e: MouseEvent) => {
    if (!this.open || this.trigger === "hover") return;
    if (!e.composedPath().includes(this)) {
      this.hide();
    }
  };

  private _handleKeyDown = (e: KeyboardEvent) => {
    if (!this.open) return;
    if (e.key === "Escape") {
      e.stopPropagation();
      this.hide();
      this._triggerElements[0]?.focus();
    }
  };

  /** Shows the popover. */
  public async show() {
    if (this.disabled || this.open) return;
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
  public hide() {
    if (!this.open) return;
    this.emit("sit-hide");
    this.open = false;

    this.stopFloatingAutoUpdate();
    this._focusTrap?.deactivate();
    this._focusTrap = undefined;

    setTimeout(() => this.emit("sit-after-hide"), 0);
  }

  /** Toggles the popover. */
  public toggle() {
    this.open ? this.hide() : this.show();
  }

  render() {
    return html`
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

export default SitPopover;
