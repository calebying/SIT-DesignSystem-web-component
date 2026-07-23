import { html, PropertyValueMap } from "lit";
import { property } from "lit/decorators.js";
import SitElement from "../../base/sit-element";
import closeButtonStyles from "./close-button.css";
import { warnUnregisteredElements } from "../../utils/ce-registry";
/**
 * @summary Close button for closing actions. Used in Modal, Drawer, Alert and Toast.
 *
 */
export class SitCloseButton extends SitElement {
  static styles = [...SitElement.styles, closeButtonStyles];

  /** Specifies a large or small button */
  @property({ type: String, reflect: true }) size: "sm" | "md" = "md";
  /** The tone of the close button */
  @property({ type: String, reflect: true }) tone: "default" | "fixed-dark" | "fixed-light" = "default";
  /** Disables the close button, preventing click events */
  @property({ type: Boolean, reflect: true }) disabled = false;

  private _handleClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.removeEventListener("click", this._clickHandler);
    this.addEventListener("click", this._clickHandler);
  }

  private _clickHandler = () => {
    return;
  };

  firstUpdated(changedProperties: PropertyValueMap<this>) {
    super.firstUpdated(changedProperties);

    /** Cannot register sit-icon as dependency due to some circular dependencies, so we check and warn instead */
    warnUnregisteredElements("sit-icon");
  }
  render() {
    return html`
      <button class="btn-close" aria-label="Close button" ?disabled=${this.disabled} @click=${this._handleClick}>
        <sit-icon name="cross" size="sm"></sit-icon>
      </button>
    `;
  }
}

export default SitCloseButton;
