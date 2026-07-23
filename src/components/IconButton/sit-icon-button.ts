import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, literal } from "lit/static-html.js";
import ButtonElement from "../../base/button-element";
import SitIcon from "../Icon/sit-icon";
import SitSpinner from "../Spinner/sit-spinner";
import iconButtonStyles from "./icon-button.css";

/**
 * @summary An icon button is a user interface element that combines an icon and a button, serving as a clickable or tabbable component.
 *
 * @event sit-blur - Emitted when the button is blurred.
 * @event sit-focus - Emitted when the button is focused.
 */
export class SitIconButton extends ButtonElement {
  static styles = [...ButtonElement.styles, iconButtonStyles];
  /** @internal */
  static dependencies = {
    "sit-icon": SitIcon,
    "sit-spinner": SitSpinner
  };

  /** The name of the icon from sit icon library */
  @property({ type: String, reflect: true }) name: string;

  private _assignIconSize(buttonSize: "xs" | "sm" | "md" | "lg") {
    if (buttonSize === "xs") return "sm";
    if (buttonSize === "sm") return "md";
    if (buttonSize === "md") return "lg";
    if (buttonSize === "lg") return "xl";
  }
  render() {
    const isLink = this.href;
    const tag = isLink ? literal`a` : literal`button`;
    return html`
          <${tag}
            class="btn btn-icon${classMap({
              disabled: this.disabled,
              active: this.active,
              [`btn-${this.variant}`]: this.variant,
              [`btn-${this.size}`]: this.size,
              loading: this.loading
            })}"
            ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
            type=${ifDefined(isLink ? undefined : "button")}
            href=${ifDefined(isLink ? this.href : undefined)}
            target=${ifDefined(isLink ? this.target : undefined)}
            download=${ifDefined(isLink ? this.download : undefined)}
            rel=${ifDefined(isLink && this.target === "_blank" ? "noreferrer noopener" : undefined)}
            role=${ifDefined(isLink ? "button" : undefined)}
            aria-disabled=${this.disabled || this.loading ? "true" : "false"}
            tabindex=${this.disabled ? "-1" : "0"}
            @click=${this._handleClick}
            @keydown=${this._handleKeydown}
            @focus=${this._handleFocus}
            @blur=${this._handleBlur}
            aria-label=${ifDefined(this.loading ? "Loading" : this.ariaLabel)}
          >
            ${
              this.loading
                ? html`<sit-spinner
                    size=${ifDefined(this._assignSpinnerSize(this.size))}
                    tone=${ifDefined(this._assignSpinnerTone(this.tone, this.variant))}
                  ></sit-spinner>`
                : html`<sit-icon
                    name=${ifDefined(this.name)}
                    size=${ifDefined(this._assignIconSize(this.size))}
                  ></sit-icon>`
            }
          </${tag}>
        `;
  }
}

export default SitIconButton;
