import { html, nothing, PropertyValueMap } from "lit";
import { property, query, queryAssignedNodes } from "lit/decorators.js";
import SitElement from "../../base/sgds-element";
import SitCloseButton from "../CloseButton/sgds-close-button";
import { animateTo } from "../../utils/animate";
import { getAnimation, setDefaultAnimation } from "../../utils/animation-registry";
import { waitForEvent } from "../../utils/event";
import { watch } from "../../utils/watch";
import toastStyle from "./toast.css";
/**
 * @summary Toast allows you to convey quick messaging notifications to the user.
 *
 * @slot default - The content to pass into toast's body
 * @slot action - The content to pass into toast's action
 * @slot icon - The icon in toast.
 *
 * @event sit-show - Emitted on show.
 * @event sit-after-show - Emitted on show after animation has completed.
 * @event sit-hide - Emitted on hide.
 * @event sit-after-hide - Emitted on hide after animation has completed.
 *
 */
export class SitToast extends SitElement {
  static styles = [...SitElement.styles, toastStyle];
  /**@internal */
  static dependencies = {
    "sgds-close-button": SitCloseButton
  };
  /**@internal */
  @query("div.toast") toast: HTMLElement;
  /** Controls the appearance of toast */
  @property({ type: Boolean, reflect: true }) show = false;
  /** The header title of toast. It is required to assign a title to toast */
  @property({ type: String, reflect: true }) title = "Title";
  /** Controls whether the toast has fade animation during its appearance/disappearance */
  @property({ type: Boolean, reflect: true }) noAnimation = false;
  /** Controls if the toast will hide itself after the delay time. Works with delay property */
  @property({ type: Boolean, reflect: true }) autohide = false;
  /** The amount of time taken in miliseconds for toast to disappear after its first render. It takes effect only when autohide is set to true. Defaults to 5000ms */
  @property({ type: Number, reflect: true }) delay = 5000;
  /**The variant styles of toast */
  @property({ type: String, reflect: true }) variant: "success" | "warning" | "danger" | "info" = "info";
  /** Controls whether or not the Toast is dismissible */
  @property({ type: Boolean, reflect: true }) dismissible = false;

  /** Shows the toast */
  public async showToast() {
    if (this.show) {
      return;
    }

    this.show = true;
    return waitForEvent(this, "sit-after-show");
  }

  /** Hide the toast */
  public async hideToast() {
    if (!this.show) {
      return;
    }
    this.show = false;
    return waitForEvent(this, "sit-after-hide");
  }

  /** @internal */
  handleCloseClick() {
    this.show = false;
    this.emit("sit-close");
  }
  /**@internal */
  @watch("show", { waitUntilFirstUpdate: true })
  async handleShowChange() {
    if (this.show) {
      this.emit("sit-show");
      this.toast.classList.remove("d-none");
      const toastAnimation = getAnimation(this, "toast.show");

      if (!this.noAnimation) {
        await animateTo(this.toast, toastAnimation.keyframes, toastAnimation.options);
      }

      this.emit("sit-after-show");
    } else {
      this.emit("sit-hide");

      const toastAnimation = getAnimation(this, "toast.hide");
      if (!this.noAnimation) {
        await animateTo(this.toast, toastAnimation.keyframes, toastAnimation.options);
      }
      this.toast.classList.add("d-none");

      this.emit("sit-after-hide");
    }
  }

  protected firstUpdated(changedProperties: PropertyValueMap<this>): void {
    super.firstUpdated(changedProperties);

    if (!this.show) {
      this.toast.classList.add("d-none");
    }

    if (this._actionNodes.length === 0) {
      return this.shadowRoot.querySelector("slot[name='action']")?.classList.add("d-none");
    }
  }

  @queryAssignedNodes({ slot: "action", flatten: true })
  private _actionNodes!: Array<Node>;

  render() {
    if (this.autohide && this.show) {
      setTimeout(() => {
        this.show = false;
      }, this.delay);
    }
    return html`
      <div
        class="toast"
        role="alert"
        aria-hidden=${this.show ? "false" : "true"}
        aria-live="assertive"
        aria-atomic="true"
      >
        <slot name="icon"></slot>
        <div class="toast-content">
          <div class="toast-body">
            <div class="toast-body__title">${this.title}</div>
            <span class="toast-body__message"><slot></slot></span>
          </div>
          <slot class="toast-action" name="action"></slot>
        </div>
        ${this.dismissible
          ? html`<sgds-close-button
              class="close-btn"
              aria-label="close toast"
              @click=${this.handleCloseClick}
            ></sgds-close-button>`
          : nothing}
      </div>
    `;
  }
}

export default SitToast;

setDefaultAnimation("toast.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 400, easing: "ease" }
});
setDefaultAnimation("toast.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 400, easing: "ease" }
});
