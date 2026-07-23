import { html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import { watch } from "../../utils/watch";
import badgeStyle from "./badge.css";

import SitElement from "../../base/sit-element";
import SitTooltip from "../Tooltip/sit-tooltip";
import SitCloseButton from "../CloseButton/sit-close-button";

import { getTextContent } from "../../utils/slot";

export type BadgeVariant =
  | "primary"
  | "accent"
  | "success"
  | "danger"
  | "warning"
  | "cyan"
  | "purple"
  | "neutral"
  | "white"
  | "info";

/**
 * @summary Badges can be used to highlight important bits of information such as labels, notifications & status.
 * When the text exceeds the width, it will be truncated with a tooltip that will be displayed on hover.
 *
 * @slot default - slot for badge
 * @slot icon - The slot for icon to the left of the badge text
 *
 * @event sit-show - Emitted when the badge appears.
 * @event sit-hide - Emitted when the badge is starting to close but has not closed.
 * @event sit-after-show - Emitted after the badge has appeared
 * @event sit-after-hide - Emitted after the badge has closed
 */
export class SitBadge extends SitElement {
  static styles = [...SitElement.styles, badgeStyle];

  /**@internal */
  static dependencies = {
    "sit-close-button": SitCloseButton,
    "sit-tooltip": SitTooltip
  };

  /** Controls the appearance of the dismissible badge. This prop only applies when dismissible is true  */
  @property({ type: Boolean, reflect: true }) show = false;

  /**
   * One or more badge variant combinations.
   * Variants include: `primary`, `accent`, `success`, `danger`, `warning`, `cyan`, `purple`, `neutral`, `white`, `info`.
   *
   * (@deprecated) The `info` variant is deprecated. Use `primary` instead.
   */
  @property({ reflect: true }) variant: BadgeVariant = "primary";

  /** Manually set the outlined state to false */
  @property({ type: Boolean, reflect: true }) outlined = false;

  /** Manually set the dismissible state of the button to `false` */
  @property({ type: Boolean, reflect: true }) dismissible = false;

  /** Manually enable full width */
  @property({ type: Boolean, reflect: true }) fullWidth = false;

  @state() private truncated = false;
  @state() private text = "";

  /** Closes the badge  */
  public close() {
    this.show = false;
  }

  /**@internal */
  @watch("show")
  _handleShowChange() {
    if (this.show) {
      const sitShow = this.emit("sit-show", { cancelable: true });
      if (sitShow.defaultPrevented) {
        this.show = false;
        return;
      }
      // animations if any go here

      this.emit("sit-after-show");
    } else {
      const sitHide = this.emit("sit-hide", { cancelable: true });
      if (sitHide.defaultPrevented) {
        this.show = true;
        return;
      }
      // animations if any go here

      this.emit("sit-after-hide");
    }
  }

  /**@internal */
  @watch("text", { waitUntilFirstUpdate: true })
  _handleTruncation() {
    // check scroll width if its exceeding parent, it reflects truncation has happened
    const badgeLabel = this.shadowRoot?.querySelector(".badge-label");
    if (badgeLabel) {
      this.truncated = badgeLabel.scrollWidth > badgeLabel.clientWidth;
    }
  }

  private _handleLabelSlotChange(e: Event) {
    this.text = getTextContent(e.target as HTMLSlotElement);
    return;
  }

  private _renderBadge() {
    const isDarkCloseButton = this.outlined || this.variant === "warning" || this.variant === "white";

    return html`<div
      class="  
          ${classMap({
        [`badge-dismissible`]: this.dismissible,
        badge: true,
        outlined: this.outlined,
        "full-width": this.fullWidth
      })}"
      aria-hidden=${this.show ? "false" : "true"}
    >
      ${!this.dismissible ? html`<slot name="icon"></slot>` : nothing}

      <span class="badge-label">
        <slot @slotchange=${this._handleLabelSlotChange}></slot>
      </span>

      ${this.dismissible
        ? html`<sit-close-button
            size="sm"
            aria-label="close the badge"
            @click=${this.close}
            tone=${isDarkCloseButton ? "fixed-dark" : "fixed-light"}
          ></sit-close-button>`
        : nothing}
    </div>`;
  }

  render() {
    return (this.dismissible && this.show) || !this.dismissible
      ? this.truncated
        ? html`<sit-tooltip content=${this.text} @sit-hide=${e => e.stopPropagation()}
            >${this._renderBadge()}</sit-tooltip
          >`
        : this._renderBadge()
      : nothing;
  }
}

export default SitBadge;
