import { __decorate } from 'tslib';
import { nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit/static-html.js';
import SitElement from '../../base/sit-element.js';
import { watch } from '../../utils/watch.js';
import { SitCloseButton } from '../CloseButton/sit-close-button.js';
import { SitIcon } from '../Icon/sit-icon.js';
import css_248z from './alert.js';

/**
 * @summary Alerts provide short, timely, and relevant information for your users. It can be a simple text message or customised HTML content with paragraphs, headings and links.
 *
 * @slot default - The alert's main content.
 * @slot icon - An icon to show in the alert. Pass in sit-icon size="md" elements.
 * @slot action - An action button or link to show in the alert.
 *
 * @event sit-show - Emitted when the alert appears.
 * @event sit-hide - Emitted after the alert closes.
 *
 */
class SitAlert extends SitElement {
    constructor() {
        super(...arguments);
        /** Controls the appearance of the alert  */
        this.show = false;
        /** Enables a close button that allows the user to dismiss the alert. */
        this.dismissible = false;
        /** The alert's theme variant. */
        this.variant = "info";
        /** Controls the alert visual between a lighter outline and a solid darker variant. */
        this.outlined = false;
        /** The title of the alert. Only text is allowed */
        this.title = "";
    }
    /** Closes the alert  */
    close() {
        this.show = false;
    }
    /**@internal */
    _handleShowChange() {
        this.show ? this.emit("sit-show") : this.emit("sit-hide");
    }
    render() {
        return (this.dismissible && this.show) || !this.dismissible
            ? html `
          <div
            class="${classMap({
                alert: true,
                show: this.show,
                [`alert-dismissible`]: this.dismissible,
                outlined: this.outlined
            })}"
            role="alert"
            aria-hidden=${this.show ? "false" : "true"}
          >
            <slot name="icon" class=${classMap({ "alert-icon__outlined": this.outlined })}></slot>
            <div class="alert-content">
              <div class="alert-content__upper">
                ${this.title ? html `<div class="alert-title">${this.title}</div>` : nothing}
                <slot class="alert-content__description"></slot>
              </div>
              <slot class="alert-content__action" name="action"></slot>
            </div>
            ${this.dismissible
                ? html `<sit-close-button
                  aria-label="close the alert"
                  @click=${this.close}
                  tone=${this.outlined || this.variant === "warning" ? "fixed-dark" : "fixed-light"}
                ></sit-close-button>`
                : nothing}
          </div>
        `
            : nothing;
    }
}
SitAlert.styles = [...SitElement.styles, css_248z];
/**@internal */
SitAlert.dependencies = {
    "sit-close-button": SitCloseButton,
    "sit-icon": SitIcon
};
__decorate([
    property({ type: Boolean, reflect: true })
], SitAlert.prototype, "show", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitAlert.prototype, "dismissible", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitAlert.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitAlert.prototype, "outlined", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitAlert.prototype, "title", void 0);
__decorate([
    watch("show")
], SitAlert.prototype, "_handleShowChange", null);

export { SitAlert, SitAlert as default };
//# sourceMappingURL=sit-alert.js.map
