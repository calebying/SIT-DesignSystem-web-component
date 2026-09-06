import { property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { classMap } from "lit/directives/class-map.js";
import SitElement from "../../base/sit-element";
import spinnerStyle from "./spinner.css";
import textStyles from "../../styles/text-variants.css";
import { nothing } from "lit";
/**
 * @summary Spinners notify the users that their request is being processed.
 *
 */
export class SitSpinner extends SitElement {
  static styles = [...SitElement.styles, textStyles, spinnerStyle];
  /** The variant of spinner. Deprecated in favor of `tone` @deprecated */
  @property({ type: String, reflect: true }) variant: SpinnerVariant = "primary";
  /** The color tones of spinner, replaces variant prop */
  @property({ type: String, reflect: true }) tone: SpinnerTone = "brand";
  /** Specifies a small, medium or large button, the size is medium by default. */
  @property({ type: String, reflect: true }) size: "xs" | "sm" | "md" | "lg" | "xl" = "md";
  /** Text label of the spinner */
  @property({ reflect: true, type: String }) label: string;
  /** Orientation of label relative to the spinner */
  @property({ type: String, reflect: true }) orientation: "horizontal" | "vertical" = "vertical";

  render() {
    return html`
      <div
        class="spinner-wrapper ${classMap({
          "spinner-wrapper--horizontal": this.orientation === "horizontal"
        })}"
      >
        <div
          class="spinner-wrapper__spinner ${classMap({
            [`spinner-wrapper__spinner--${this.size}`]: this.size
          })}"
          role="status"
        >
          ${this.label ? nothing : html`<span class="sr-only">Loading...</span>`}
        </div>
        ${this.label ? html`<span class="spinner-wrapper__label">${this.label}</span>` : nothing}
      </div>
    `;
  }
}
export type SpinnerTone = "brand" | "neutral" | "inverse" | "fixed-light" | "fixed-dark";
export type SpinnerVariant = "primary" | "neutral";

export default SitSpinner;
