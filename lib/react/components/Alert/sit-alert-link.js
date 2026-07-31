'use client';
import { __decorate } from 'tslib';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html } from 'lit/static-html.js';
import SitElement from '../../base/sit-element.js';
import css_248z$1 from './alert-link.js';
import css_248z from '../../styles/anchor.js';

/**
 * @deprecated From v3.21.0, use a native `<a>` element directly inside `<sit-alert>` instead. The alert component now styles slotted anchor tags automatically.
 * @summary Alert link are used within the alert's message that is passed into the default slot of `<sit-alert>`
 *
 * @slot default - The text content of the anchor element
 */
class SitAlertLink extends SitElement {
    render() {
        return html `
      <a class="alert-link" href=${ifDefined(this.href)} target=${ifDefined(this.target)} tabindex="0"><slot></slot></a>
    `;
    }
}
SitAlertLink.styles = [...SitElement.styles, css_248z, css_248z$1];
__decorate([
    property({ type: String, reflect: true })
], SitAlertLink.prototype, "href", void 0);
__decorate([
    property()
], SitAlertLink.prototype, "target", void 0);

export { SitAlertLink, SitAlertLink as default };
//# sourceMappingURL=sit-alert-link.js.map
