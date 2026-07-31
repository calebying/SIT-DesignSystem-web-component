'use client';
import { __decorate } from 'tslib';
import { html, nothing } from 'lit';
import { query, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import SitElement from '../../base/sit-element.js';
import { watch } from '../../utils/watch.js';
import { animateTo, stopAnimations } from '../../utils/animate.js';
import { setDefaultAnimation, getAnimation } from '../../utils/animation-registry.js';
import { waitForEvent } from '../../utils/event.js';
import Modal from '../../utils/modal.js';
import { HasSlotController } from '../../utils/slot.js';
import { unlockBodyScrolling, lockBodyScrolling } from '../../utils/scroll.js';
import { SM_BREAKPOINT, MD_BREAKPOINT } from '../../utils/breakpoints.js';
import { SitCloseButton } from '../CloseButton/sit-close-button.js';
import css_248z$2 from './modal.js';
import css_248z from '../../styles/header-class.js';
import css_248z$1 from '../../styles/svg.js';

/**
 * @summary The modal component inform users about a specific task and may contain critical information which users then have to make a decision.
 *
 * @slot default - The content of the Modal's body.
 * @slot title - The title of the Modal.
 * @slot description - The description of the Modal.
 * @slot footer - The content of the Modal's footer, typically used to pass in buttons for call to action.
 *
 * @event sit-close - Emitted when the modal is called to close via mouseclick of close button, overlay or via keyboard esc key. This event is cancelable; use `event.preventDefault()` to prevent the modal from closing. `event.detail.source` indicates the trigger source: 'close-button', 'overlay', or 'keyboard'.
 * @event sit-show - Emitted when the modal opens
 * @event sit-hide - Emitted when the modal closes
 * @event sit-after-show - Emitted after modal opens and the animations has completed
 * @event sit-after-hide - Emitted after modal closes and the animations has completed
 *
 */
class SitModal extends SitElement {
    constructor() {
        super(...arguments);
        /**@internal */
        this.hasSlotController = new HasSlotController(this, "footer");
        /**Indicates whether or not the modal is open. You can use this in lieu of the show/hide methods. */
        this.open = false;
        /** Removes the default animation when opening and closing of modal */
        this.noAnimation = false;
        /** Specifies a small, medium, large or fullscreen modal, the size is medium by default. */
        this.size = "md";
        /** Used only for SSR to indicate the presence of the `footer` slot. */
        this.hasFooterSlot = false;
        /** Removes the close button in the modal header. */
        this.noCloseButton = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
        this.modal = new Modal(this);
        this._resizeHandler = this._debounce(this._onWindowResize.bind(this), 200);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._removeResizeListener();
        unlockBodyScrolling(this);
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this._onWindowResize();
        this.dialog.hidden = !this.open;
        if (this.open) {
            this.addOpenListeners();
            this.modal.activate();
            lockBodyScrolling(this);
        }
    }
    updated() {
        if (!this.hasFooterSlot)
            this.hasFooterSlot = this.hasSlotController.test("footer");
    }
    _debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = window.setTimeout(() => func(...args), wait);
        };
    }
    /** Handle the window resize event. */
    _onWindowResize() {
        const panel = this.panel.getBoundingClientRect();
        const panelWidth = panel.width;
        const buttonElements = this.querySelectorAll("sit-button[slot='footer']");
        if (!this.panel)
            return;
        if (buttonElements.length <= 1)
            return;
        if (panelWidth < SM_BREAKPOINT || (this.size === "fullscreen" && panelWidth < MD_BREAKPOINT)) {
            buttonElements.forEach(buttonElement => {
                const button = buttonElement;
                button.fullWidth = true;
            });
        }
        else {
            buttonElements.forEach(buttonElement => {
                const button = buttonElement;
                button.fullWidth = false;
            });
        }
    }
    /**  Add the resize event listener. */
    _addResizeListener() {
        window.addEventListener("resize", this._resizeHandler);
    }
    /** Remove the resize event listener. */
    _removeResizeListener() {
        window.removeEventListener("resize", this._resizeHandler);
    }
    /** Shows the dialog. */
    async show() {
        if (this.open) {
            return undefined;
        }
        this.open = true;
        return waitForEvent(this, "sit-after-show");
    }
    /** Hides the dialog */
    async hide() {
        if (!this.open) {
            return undefined;
        }
        this.open = false;
        return waitForEvent(this, "sit-after-hide");
    }
    requestClose(source) {
        const sitRequestClose = this.emit("sit-close", {
            cancelable: true,
            detail: { source }
        });
        if (sitRequestClose.defaultPrevented) {
            const animation = getAnimation(this, "modal.denyClose");
            animateTo(this.panel, animation.keyframes);
            return;
        }
        this.hide();
    }
    addOpenListeners() {
        document.addEventListener("keydown", this.handleDocumentKeyDown);
    }
    removeOpenListeners() {
        document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    handleDocumentKeyDown(event) {
        if (this.open && event.key === "Escape") {
            event.stopPropagation();
            this.requestClose("keyboard");
        }
    }
    _overlayClickHandler() {
        if (this.size === "fullscreen") {
            return;
        }
        this.requestClose("overlay");
    }
    async handleOpenChange() {
        if (this.open) {
            // Show
            this.emit("sit-show");
            this.addOpenListeners();
            this.originalTrigger = document.activeElement;
            this.modal.activate();
            lockBodyScrolling(this);
            await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
            this.dialog.hidden = false;
            const panelAnimation = getAnimation(this, "modal.show");
            const overlayAnimation = getAnimation(this, "modal.overlay.show");
            !this.noAnimation &&
                (await Promise.all([
                    animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
                    animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
                ]));
            this.emit("sit-after-show");
            // Add focus on modal heading after opening it
            this.heading.focus();
            // Add resize listener only when the modal is shown
            this._addResizeListener();
        }
        else {
            // Hide
            this.emit("sit-hide");
            this.removeOpenListeners();
            this.modal.deactivate();
            await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
            const panelAnimation = getAnimation(this, "modal.hide");
            const overlayAnimation = getAnimation(this, "modal.overlay.hide");
            // Animate the overlay and the panel at the same time. Because animation durations might be different, we need to
            // hide each one individually when the animation finishes, otherwise the first one that finishes will reappear
            // unexpectedly. We'll unhide them after all animations have completed.
            !this.noAnimation &&
                (await Promise.all([
                    animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
                        this.overlay.hidden = true;
                    }),
                    animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
                        this.panel.hidden = true;
                    })
                ]));
            this.dialog.hidden = true;
            // Now that the dialog is hidden, restore the overlay and panel for next time
            this.overlay.hidden = false;
            this.panel.hidden = false;
            unlockBodyScrolling(this);
            // Restore focus to the original trigger
            const trigger = this.originalTrigger;
            if (typeof (trigger === null || trigger === void 0 ? void 0 : trigger.focus) === "function") {
                setTimeout(() => trigger.focus());
            }
            this.emit("sit-after-hide");
            // Remove resize listener when the modal is hidden
            this._removeResizeListener();
        }
    }
    render() {
        return html `
      <div
        class=${classMap({
            modal: true,
            show: this.open,
            "has-footer": this.hasFooterSlot
        })}
      >
        <div class="modal-overlay" @click=${this._overlayClickHandler}></div>

        <div
          class="modal-panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-labelledby="title"
          tabindex="-1"
        >
          <div class="modal-content">
              ${!this.noCloseButton
            ? html `<sit-close-button
                      class="modal-header__close"
                      @click="${() => this.requestClose("close-button")}"
                      aria-label="close modal"
                    ></sit-close-button>`
            : nothing}
            <div class="modal-header">
              <div class="modal-header__title-description">
                <slot class="modal-title" id="title" name="title"></slot>
                <slot name="description"></slot>
              </div>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
          </div class="modal-content">
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
    }
}
SitModal.styles = [...SitElement.styles, css_248z, css_248z$1, css_248z$2];
/**@internal */
SitModal.dependencies = {
    "sit-close-button": SitCloseButton
};
__decorate([
    query(".modal")
], SitModal.prototype, "dialog", void 0);
__decorate([
    query(".modal-panel")
], SitModal.prototype, "panel", void 0);
__decorate([
    query(".modal-overlay")
], SitModal.prototype, "overlay", void 0);
__decorate([
    query(".modal-title")
], SitModal.prototype, "heading", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitModal.prototype, "open", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitModal.prototype, "noAnimation", void 0);
__decorate([
    property({ reflect: true })
], SitModal.prototype, "size", void 0);
__decorate([
    property({ type: Boolean })
], SitModal.prototype, "hasFooterSlot", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitModal.prototype, "noCloseButton", void 0);
__decorate([
    watch("open", { waitUntilFirstUpdate: true })
], SitModal.prototype, "handleOpenChange", null);
setDefaultAnimation("modal.show", {
    keyframes: [
        { opacity: 0, transform: "scale(1) translate(0, -100%)" },
        { opacity: 1, transform: "scale(1) translate(0, 0%)" }
    ],
    options: { duration: 400, easing: "ease" }
});
setDefaultAnimation("modal.hide", {
    keyframes: [
        { opacity: 1, transform: "scale(1) translate(0, 0)" },
        { opacity: 0, transform: "scale(1) translate(0, -100%)" }
    ],
    options: { duration: 400, easing: "ease" }
});
setDefaultAnimation("modal.denyClose", {
    keyframes: [{ transform: "scale(1)" }, { transform: "scale(1.02)" }, { transform: "scale(1)" }],
    options: { duration: 400 }
});
setDefaultAnimation("modal.overlay.show", {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 400 }
});
setDefaultAnimation("modal.overlay.hide", {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    options: { duration: 400 }
});

export { SitModal, SitModal as default };
//# sourceMappingURL=sit-modal.js.map
