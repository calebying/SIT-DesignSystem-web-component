import { __decorate } from 'tslib';
import { property } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';
import SitElement from '../../base/sit-element.js';
import css_248z$1 from './spinner.js';
import css_248z from '../../styles/text-variants.js';
import { nothing } from 'lit';

/**
 * @summary Spinners notify the users that their request is being processed.
 *
 */
class SitSpinner extends SitElement {
    constructor() {
        super(...arguments);
        /** The variant of spinner. Deprecated in favor of `tone` @deprecated */
        this.variant = "primary";
        /** The color tones of spinner, replaces variant prop */
        this.tone = "brand";
        /** Specifies a small, medium or large button, the size is medium by default. */
        this.size = "md";
        /** Orientation of label relative to the spinner */
        this.orientation = "vertical";
    }
    render() {
        return html `
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
          ${this.label ? nothing : html `<span class="sr-only">Loading...</span>`}
        </div>
        ${this.label ? html `<span class="spinner-wrapper__label">${this.label}</span>` : nothing}
      </div>
    `;
    }
}
SitSpinner.styles = [...SitElement.styles, css_248z, css_248z$1];
__decorate([
    property({ type: String, reflect: true })
], SitSpinner.prototype, "variant", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitSpinner.prototype, "tone", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitSpinner.prototype, "size", void 0);
__decorate([
    property({ reflect: true, type: String })
], SitSpinner.prototype, "label", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitSpinner.prototype, "orientation", void 0);

export { SitSpinner, SitSpinner as default };
//# sourceMappingURL=sit-spinner.js.map
