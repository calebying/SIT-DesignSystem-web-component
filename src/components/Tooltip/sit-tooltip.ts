import { html, PropertyValueMap } from "lit";
import { property, queryAssignedElements, state } from "lit/decorators.js";
import { Ref, createRef, ref } from "lit/directives/ref.js";
import { computePosition, offset, flip, shift, hide, autoUpdate, Strategy } from "@floating-ui/dom";
import SitElement from "../../base/sit-element";
import generateId from "../../utils/generateId";
import tooltipStyle from "./tooltip.css";

/**
 * @summary Tooltips display more information when users hover over, focus on, or interact with an element.
 * @slot default - The element to target the tooltip to.
 *
 * @event sit-show - Emitted event when show instance is called
 * @event sit-after-show - Emitted event when tooltip has been made visible to the user and CSS transitions have completed
 * @event sit-hide - Emitted event when hide instance is called
 * @event sit-after-hide - Emitted event when tooltip has hidden to the user and CSS transitions have completed
 *
 */
export class SitTooltip extends SitElement {
  static styles = [...SitElement.styles, tooltipStyle];

  /** Internal ref to the tooltip container */
  private _myTooltip: Ref<HTMLElement> = createRef();

  /** Internal ref to the actual tooltip bubble */
  private _tooltipBubble: Ref<HTMLElement> = createRef();

  /** The tooltip's content. Must be text */
  @property({ type: String }) content = "";

  /** The placement of tooltip relative to its target */
  @property({ type: String }) placement: "top" | "bottom" | "left" | "right" = "top";

  /** The method to invoke the tooltip. `hover focus` is the default value which allows tooltip to be triggered via mouse hover and keyboard focus. Add `tabindex=0` for HTMLelements that are not tabbable. */
  @property({ type: String }) trigger: "click" | "hover" | "focus" | "hover focus" = "hover focus";

  /** Is tooltip currently open */
  @state() private open = false;

  @queryAssignedElements()
  private _tooltipTargetElements: Array<HTMLElement>;

  private _cleanupAutoUpdate?: () => void;

  /** @internal Id applied to the tooltip bubble and referenced via aria-describedby on the target element(s) */
  private _tooltipId = generateId("tooltip", "bubble");

  connectedCallback() {
    super.connectedCallback();

    if (this.trigger.includes("click")) {
      document.addEventListener("click", this._handleClickOutOfElement);
    }
    document.addEventListener("keydown", this._handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this._handleClickOutOfElement);
    document.removeEventListener("keydown", this._handleKeyDown);

    if (this._cleanupAutoUpdate) {
      this._cleanupAutoUpdate();
      this._cleanupAutoUpdate = undefined;
    }
  }

  firstUpdated(changedProperties: PropertyValueMap<this>) {
    super.firstUpdated(changedProperties);

    this._tooltipTargetElements.forEach(el => {
      el.setAttribute("data-sit-tooltip", this.content);
      el.setAttribute("aria-describedby", this._tooltipId);

      if (this.trigger.includes("hover")) {
        el.addEventListener("mouseenter", () => this.show());
        el.addEventListener("mouseleave", () => this.hide());
      }
      if (this.trigger.includes("focus")) {
        el.addEventListener("focus", () => this.show());
        el.addEventListener("blur", () => this.hide());
      }
      if (this.trigger === "click") {
        el.addEventListener("click", () => this.toggle());
      }
    });
  }

  private _handleClickOutOfElement = (e: MouseEvent) => {
    if (!this.open) return;
    if (!e.composedPath().includes(this)) {
      this.hide();
    }
  };

  /** Dismisses the tooltip on Escape, per WCAG 1.4.13 (Content on Hover or Focus). */
  private _handleKeyDown = (e: KeyboardEvent) => {
    if (!this.open) return;
    if (e.key === "Escape") {
      this.hide();
    }
  };

  private _handleSlotChange(): void {
    this._tooltipTargetElements.forEach(el => {
      el.setAttribute("data-sit-tooltip", this.content);
      el.setAttribute("aria-describedby", this._tooltipId);
    });
  }

  private async updateFloatingPosition() {
    if (!this._myTooltip.value || !this._tooltipBubble.value) return;

    const { x, y, placement, strategy, middlewareData } = await computePosition(
      this._tooltipTargetElements[0],
      this._tooltipBubble.value,
      {
        strategy: "fixed" as Strategy,
        placement: this.placement,
        middleware: [offset(8), flip(), shift(), hide()]
      }
    );

    this._tooltipBubble.value.setAttribute("data-placement", placement);

    Object.assign(this._tooltipBubble.value.style, {
      position: strategy,
      left: `${x}px`,
      top: `${y}px`
    });

    const { referenceHidden, escaped } = middlewareData.hide || {};
    if (referenceHidden || escaped) {
      this._tooltipBubble.value.style.visibility = "hidden";
    } else {
      this._tooltipBubble.value.style.visibility = "visible";
    }
  }

  /** Show tooltip */
  public async show() {
    if (this.open) return;
    this.open = true;
    this.emit("sit-show");

    await this.updateComplete;
    await this.updateFloatingPosition();

    if (this._myTooltip.value && this._tooltipBubble.value) {
      this._cleanupAutoUpdate = autoUpdate(this._tooltipTargetElements[0], this._tooltipBubble.value, () =>
        this.updateFloatingPosition()
      );
    }

    this.emit("sit-after-show");
  }

  /** Hide tooltip */
  public hide() {
    if (!this.open) return;
    this.emit("sit-hide");
    this.open = false;

    if (this._cleanupAutoUpdate) {
      this._cleanupAutoUpdate();
      this._cleanupAutoUpdate = undefined;
    }

    setTimeout(() => this.emit("sit-after-hide"), 0);
  }

  /** Toggle tooltip */
  public toggle() {
    this.open ? this.hide() : this.show();
  }

  render() {
    return html`
      <div ${ref(this._myTooltip)} class="tooltip-placeholder">
        <slot @slotchange=${() => this._handleSlotChange()}></slot>
        ${this.open
          ? html`<div ${ref(this._tooltipBubble)} id=${this._tooltipId} class="tooltip" role="tooltip">
              ${this.content}
            </div>`
          : null}
      </div>
    `;
  }
}

export default SitTooltip;
