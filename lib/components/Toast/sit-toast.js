import { __decorate } from 'tslib';
import { html, nothing } from 'lit';
import { query, property, queryAssignedNodes } from 'lit/decorators.js';
import SitElement from '../../base/sit-element.js';
import { SitCloseButton } from '../CloseButton/sit-close-button.js';
import { animateTo } from '../../utils/animate.js';
import { setDefaultAnimation, getAnimation } from '../../utils/animation-registry.js';
import { waitForEvent } from '../../utils/event.js';
import { watch } from '../../utils/watch.js';
import css_248z from './toast.js';

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
class SitToast extends SitElement {
    constructor() {
        super(...arguments);
        /** Controls the appearance of toast */
        this.show = false;
        /** The header title of toast. It is required to assign a title to toast */
        this.title = "Title";
        /** Controls whether the toast has fade animation during its appearance/disappearance */
        this.noAnimation = false;
        /** Controls if the toast will hide itself after the delay time. Works with delay property */
        this.autohide = false;
        /** The amount of time taken in miliseconds for toast to disappear after its first render. It takes effect only when autohide is set to true. Defaults to 5000ms */
        this.delay = 5000;
        /**The variant styles of toast */
        this.variant = "info";
        /** Controls whether or not the Toast is dismissible */
        this.dismissible = false;
    }
    /** Shows the toast */
    async showToast() {
        if (this.show) {
            return;
        }
        this.show = true;
        return waitForEvent(this, "sit-after-show");
    }
    /** Hide the toast */
    async hideToast() {
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
    async handleShowChange() {
        if (this.show) {
            this.emit("sit-show");
            this.toast.classList.remove("d-none");
            const toastAnimation = getAnimation(this, "toast.show");
            if (!this.noAnimation) {
                await animateTo(this.toast, toastAnimation.keyframes, toastAnimation.options);
            }
            this.emit("sit-after-show");
        }
        else {
            this.emit("sit-hide");
            const toastAnimation = getAnimation(this, "toast.hide");
            if (!this.noAnimation) {
                await animateTo(this.toast, toastAnimation.keyframes, toastAnimation.options);
            }
            this.toast.classList.add("d-none");
            this.emit("sit-after-hide");
        }
    }
    firstUpdated(changedProperties) {
        var _a;
        super.firstUpdated(changedProperties);
        if (!this.show) {
            this.toast.classList.add("d-none");
        }
        if (this._actionNodes.length === 0) {
            return (_a = this.shadowRoot.querySelector("slot[name='action']")) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
        }
    }
    render() {
        if (this.autohide && this.show) {
            setTimeout(() => {
                this.show = false;
            }, this.delay);
        }
        return html `
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
            ? html `<sit-close-button
              class="close-btn"
              aria-label="close toast"
              @click=${this.handleCloseClick}
            ></sit-close-button>`
            : nothing}
      </div>
    `;
    }
}
SitToast.styles = [...SitElement.styles, css_248z];
/**@internal */
SitToast.dependencies = {
    "sit-close-button": SitCloseButton
};
__decorate([
    query("div.toast")
], SitToast.prototype, "toast", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitToast.prototype, "show", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitToast.prototype, "title", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitToast.prototype, "noAnimation", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitToast.prototype, "autohide", void 0);
__decorate([
    property({ type: Number, reflect: true })
], SitToast.prototype, "delay", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitToast.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitToast.prototype, "dismissible", void 0);
__decorate([
    watch("show", { waitUntilFirstUpdate: true })
], SitToast.prototype, "handleShowChange", null);
__decorate([
    queryAssignedNodes({ slot: "action", flatten: true })
], SitToast.prototype, "_actionNodes", void 0);
setDefaultAnimation("toast.show", {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 400, easing: "ease" }
});
setDefaultAnimation("toast.hide", {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    options: { duration: 400, easing: "ease" }
});

export { SitToast, SitToast as default };
//# sourceMappingURL=sit-toast.js.map
