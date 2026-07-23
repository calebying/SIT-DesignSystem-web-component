import { html } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import SitElement from "../../base/sit-element";
import SitIcon from "../Icon/sit-icon";
import stepStyle from "./step.css";

/**
 * @summary A single step within an sit-stepper. Manages its own active, completed, and disabled states based on props set by the parent stepper.
 *
 * @slot default - Optional content displayed below the step header label
 */
export class SitStep extends SitElement {
  static styles = [...SitElement.styles, stepStyle];
  /** @internal */
  static dependencies = { "sit-icon": SitIcon };

  /** The header text for the step */
  @property({ type: String, reflect: true })
  stepHeader = "";

  /** Optional icon name to display instead of step number */
  @property({ type: String, reflect: true })
  iconName: string | undefined;

  /** Optional component reference associated with this step. Retrievable via `sit-stepper.getComponent()`. */
  @property({ type: Object })
  component: unknown;

  /** Whether this step is clickable */
  @property({ type: Boolean })
  clickable = false;

  /** Whether this step is currently active */
  @property({ type: Boolean, reflect: true })
  active = false;

  /** Whether this step is currently disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Whether this step is completed */
  @property({ type: Boolean, reflect: true })
  completed = false;

  /** @internal The index of this step within the stepper */
  @property({ type: Number })
  stepIndex = 0;

  /** @internal Orientation of parent stepper (horizontal or vertical) */
  @property({ type: String })
  orientation: "horizontal" | "vertical" = "horizontal";

  /** @internal Whether this step is the first sit-step of its type in the slot */
  @property({ type: Boolean })
  isFirstOfType = false;

  render() {
    const isValidClickable = !this.disabled && this.clickable;

    return html`
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
          @keydown=${isValidClickable ? (e: KeyboardEvent) => this._handleKeyDown(e) : null}
        >
          <div class="stepper-marker">
            ${this.iconName ? html`<sit-icon name=${this.iconName} size="md"></sit-icon>` : this.stepIndex + 1}
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
  _handleClick(e?: PointerEvent) {
    if (e) {
      const ele = e.target as HTMLElement;

      // Allow user to have custom slotted item with attribute 'data-clickable' to skip i-sit-click
      // To handle if there are clickable objects within the slot
      if (ele.hasAttribute("data-clickable")) return;
    }

    this.emit("i-sit-click", { detail: { stepIndex: this.stepIndex } });
  }

  /**@internal */
  _handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this._handleClick();
    }
  }
}

export default SitStep;
