'use client';
import { __decorate } from 'tslib';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit/static-html.js';
import SitElement from '../../base/sit-element.js';
import css_248z from './toast-container.js';

/**
 * @summary ToastContainer is the container component to position `sit-toast` in screen. When there is multiple toasts in the container, the toast components are stacked vertically.
 *
 * @slot default - The slot for `sit-toast` elements
 *
 */
class SitToastContainer extends SitElement {
    render() {
        return html `
      <div
        class=${classMap({
            "toast-container": true,
            [this.position]: this.position
        })}
      >
        <slot></slot>
      </div>
    `;
    }
}
SitToastContainer.styles = [css_248z];
__decorate([
    property({ type: String, reflect: true })
], SitToastContainer.prototype, "position", void 0);

export { SitToastContainer, SitToastContainer as default };
//# sourceMappingURL=sit-toast-container.js.map
