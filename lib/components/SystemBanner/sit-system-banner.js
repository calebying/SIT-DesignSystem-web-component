import { __decorate } from 'tslib';
import { html, nothing } from 'lit';
import { property, queryAssignedElements, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import SitElement from '../../base/sit-element.js';
import { SitCloseButton } from '../CloseButton/sit-close-button.js';
import { animateTo } from '../../utils/animate.js';
import { setDefaultAnimation, getAnimation } from '../../utils/animation-registry.js';
import { watch } from '../../utils/watch.js';
import { SitIcon } from '../Icon/sit-icon.js';
import { SitIconButton } from '../IconButton/sit-icon-button.js';
import css_248z from './system-banner.js';
import { NoClampActionContext, SystemBannerChildCountContext } from './system-banner-context.js';
import { provide } from '@lit/context';

/**
 * @summary The system banner component for displaying important messages to users at the application level.
 * Each banner can contain up to 5 banner items that cycle automatically every 5 seconds. Pagination appears when there are multiple items, allowing users to navigate between them. The banner can also be made dismissible with a close button.
 * `sit-system-banner-item` is the subcomponent for `sit-system-banner`. Each banner item represents a message in the system banner.
 *
 * @slot default - The slot to pass in `sit-system-banner-item`
 *
 * @event sit-show - Emitted when the banner has start to appear on screen
 * @event sit-hide - Emitted when the banner is disappearing from the screen
 */
class SitSystemBanner extends SitElement {
    constructor() {
        super(...arguments);
        /** Controls the appearance of the alert  */
        this.show = false;
        /** Enables a close button that allows the user to dismiss the alert. */
        this.dismissible = false;
        /** Disables the action link that appears when text content is clamped */
        this.noClampAction = false;
        /** When true, removes max-width constraint to allow content to stretch full screen width */
        this.fluid = false;
        this._intervalId = null;
        this._intervalTime = 5000;
        this._currentIndex = 0;
    }
    /** Closes the alert  */
    close() {
        this.show = false;
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.childCount = this.bannerItem.length;
        if (!this.show) {
            this.banner.classList.add("d-none");
        }
        else {
            this.childCount > 1 && this._startAutoCycle();
            this.addEventListener("mouseenter", this._pauseAutoCycle.bind(this));
            this.addEventListener("mouseleave", this._resumeAutoCycle.bind(this));
            this.addEventListener("focus", this._pauseAutoCycle.bind(this));
            this.addEventListener("blur", this._resumeAutoCycle.bind(this));
        }
        this._updateActiveItem();
        if (this.childCount > 5) {
            console.warn("It is not recommended to have more than 5 <sit-system-banner-item> elements.");
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._stopAutoCycle();
    }
    /**@internal */
    async _handleShowChange() {
        if (this.show) {
            this.childCount > 1 && this._startAutoCycle();
            this.emit("sit-show");
            this.banner.classList.remove("d-none");
        }
        else {
            this._stopAutoCycle();
            this.emit("sit-hide");
            this.banner.classList.add("d-none");
        }
    }
    _updateActiveItem() {
        const items = this.bannerItem;
        items.forEach((item, i) => {
            if (i === this._currentIndex) {
                item.setAttribute("active", "");
            }
            else {
                item.removeAttribute("active");
            }
        });
    }
    _next() {
        const items = this.bannerItem;
        this._currentIndex = (this._currentIndex + 1) % items.length;
        this._updateActiveItem();
        this._animateItem(items[this._currentIndex], "next");
        this._resetAutoCycle();
    }
    _prev() {
        const items = this.bannerItem;
        this._currentIndex = (this._currentIndex - 1 + items.length) % items.length;
        this._updateActiveItem();
        this._animateItem(items[this._currentIndex], "prev");
        this._resetAutoCycle();
    }
    async _animateItem(item, direction) {
        // Cancel any existing animations before starting a new one
        item.getAnimations().forEach(a => a.cancel());
        // Start the slide-down animation
        const bannerLoopMessage = getAnimation(this, `banner.item.${direction}`);
        await animateTo(item, bannerLoopMessage.keyframes, bannerLoopMessage.options);
    }
    _startAutoCycle() {
        this._stopAutoCycle(); // avoid duplicates
        this._intervalId = setInterval(() => this._next(), this._intervalTime);
    }
    _stopAutoCycle() {
        if (this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = null;
        }
    }
    _resetAutoCycle() {
        this._stopAutoCycle();
        this._startAutoCycle();
    }
    _pauseAutoCycle() {
        this._stopAutoCycle();
    }
    _resumeAutoCycle() {
        if (this.show && this.childCount > 1) {
            this._startAutoCycle();
        }
    }
    render() {
        return html `
      <div class="banner-wrapper">
        <div
          class="${classMap({
            banner: true
        })}"
          role="alert"
          aria-hidden=${this.show ? "false" : "true"}
        >
          <div class="content">
            <slot id="loop-slot"></slot>
          </div>
          ${this.childCount > 1
            ? html ` <div class="pagination">
                <sit-icon-button
                  name="chevron-left"
                  tone="fixed-light"
                  variant="ghost"
                  size="xs"
                  @click=${this._prev}
                ></sit-icon-button>
                <span>${this._currentIndex + 1}/${this.childCount}</span>
                <sit-icon-button
                  name="chevron-right"
                  tone="fixed-light"
                  variant="ghost"
                  size="xs"
                  @click=${this._next}
                ></sit-icon-button>
              </div>`
            : nothing}
          ${this.dismissible
            ? html `
                <sit-close-button
                  aria-label="close the alert"
                  @click=${this.close}
                  tone="fixed-light"
                ></sit-close-button>
              `
            : nothing}
        </div>
      </div>
    `;
    }
}
SitSystemBanner.styles = [...SitElement.styles, css_248z];
/**@internal */
SitSystemBanner.dependencies = {
    "sit-close-button": SitCloseButton,
    "sit-icon": SitIcon,
    "sit-icon-button": SitIconButton
};
__decorate([
    property({ type: Boolean, reflect: true })
], SitSystemBanner.prototype, "show", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitSystemBanner.prototype, "dismissible", void 0);
__decorate([
    provide({ context: NoClampActionContext })
    /** When true, all its children SitSystemBannerItem's message will be truncated with ellipsis only */
    ,
    property({ type: Boolean })
], SitSystemBanner.prototype, "noClampAction", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitSystemBanner.prototype, "fluid", void 0);
__decorate([
    queryAssignedElements({ flatten: true })
], SitSystemBanner.prototype, "bannerItem", void 0);
__decorate([
    query(".banner")
], SitSystemBanner.prototype, "banner", void 0);
__decorate([
    provide({ context: SystemBannerChildCountContext }),
    state()
], SitSystemBanner.prototype, "childCount", void 0);
__decorate([
    state()
], SitSystemBanner.prototype, "_intervalId", void 0);
__decorate([
    state()
], SitSystemBanner.prototype, "_currentIndex", void 0);
__decorate([
    watch("show", { waitUntilFirstUpdate: true })
], SitSystemBanner.prototype, "_handleShowChange", null);
setDefaultAnimation("banner.item.next", {
    keyframes: [
        { opacity: 0, transform: "translateY(-100%)" },
        { opacity: 1, transform: "translateY(0)" }
    ],
    options: {
        duration: 500,
        easing: "cubic-bezier(0.45,0.05,0.55,0.95)"
    }
});
setDefaultAnimation("banner.item.prev", {
    keyframes: [
        { opacity: 0, transform: "translateY(100%)" },
        { opacity: 1, transform: "translateY(0)" }
    ],
    options: {
        duration: 500,
        easing: "cubic-bezier(0.45,0.05,0.55,0.95)"
    }
});

export { SitSystemBanner, SitSystemBanner as default };
//# sourceMappingURL=sit-system-banner.js.map
