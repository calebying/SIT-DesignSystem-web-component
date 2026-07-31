import { __decorate } from 'tslib';
import { html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { watch } from '../../utils/watch.js';
import css_248z from './badge.js';
import SitElement from '../../base/sit-element.js';
import { SitTooltip } from '../Tooltip/sit-tooltip.js';
import { SitCloseButton } from '../CloseButton/sit-close-button.js';
import { getTextContent } from '../../utils/slot.js';

/**
 * @summary Badges can be used to highlight important bits of information such as labels, notifications & status.
 * When the text exceeds the width, it will be truncated with a tooltip that will be displayed on hover.
 *
 * @slot default - slot for badge
 * @slot icon - The slot for icon to the left of the badge text
 *
 * @event sit-show - Emitted when the badge appears.
 * @event sit-hide - Emitted when the badge is starting to close but has not closed.
 * @event sit-after-show - Emitted after the badge has appeared
 * @event sit-after-hide - Emitted after the badge has closed
 */
class SitBadge extends SitElement {
    constructor() {
        super(...arguments);
        /** Controls the appearance of the dismissible badge. This prop only applies when dismissible is true  */
        this.show = false;
        /**
         * One or more badge variant combinations.
         * Variants include: `primary`, `accent`, `success`, `danger`, `warning`, `cyan`, `purple`, `neutral`, `white`, `info`.
         *
         * (@deprecated) The `info` variant is deprecated. Use `primary` instead.
         */
        this.variant = "primary";
        /** Manually set the outlined state to false */
        this.outlined = false;
        /** Manually set the dismissible state of the button to `false` */
        this.dismissible = false;
        /** Manually enable full width */
        this.fullWidth = false;
        this.truncated = false;
        this.text = "";
    }
    /** Closes the badge  */
    close() {
        this.show = false;
    }
    /**@internal */
    _handleShowChange() {
        if (this.show) {
            const sitShow = this.emit("sit-show", { cancelable: true });
            if (sitShow.defaultPrevented) {
                this.show = false;
                return;
            }
            // animations if any go here
            this.emit("sit-after-show");
        }
        else {
            const sitHide = this.emit("sit-hide", { cancelable: true });
            if (sitHide.defaultPrevented) {
                this.show = true;
                return;
            }
            // animations if any go here
            this.emit("sit-after-hide");
        }
    }
    /**@internal */
    _handleTruncation() {
        var _a;
        // check scroll width if its exceeding parent, it reflects truncation has happened
        const badgeLabel = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".badge-label");
        if (badgeLabel) {
            this.truncated = badgeLabel.scrollWidth > badgeLabel.clientWidth;
        }
    }
    _handleLabelSlotChange(e) {
        this.text = getTextContent(e.target);
        return;
    }
    _renderBadge() {
        const isDarkCloseButton = this.outlined || this.variant === "warning" || this.variant === "white";
        return html `<div
      class="  
          ${classMap({
            [`badge-dismissible`]: this.dismissible,
            badge: true,
            outlined: this.outlined,
            "full-width": this.fullWidth
        })}"
      aria-hidden=${this.show ? "false" : "true"}
    >
      ${!this.dismissible ? html `<slot name="icon"></slot>` : nothing}

      <span class="badge-label">
        <slot @slotchange=${this._handleLabelSlotChange}></slot>
      </span>

      ${this.dismissible
            ? html `<sit-close-button
            size="sm"
            aria-label="close the badge"
            @click=${this.close}
            tone=${isDarkCloseButton ? "fixed-dark" : "fixed-light"}
          ></sit-close-button>`
            : nothing}
    </div>`;
    }
    render() {
        return (this.dismissible && this.show) || !this.dismissible
            ? this.truncated
                ? html `<sit-tooltip content=${this.text} @sit-hide=${e => e.stopPropagation()}
            >${this._renderBadge()}</sit-tooltip
          >`
                : this._renderBadge()
            : nothing;
    }
}
SitBadge.styles = [...SitElement.styles, css_248z];
/**@internal */
SitBadge.dependencies = {
    "sit-close-button": SitCloseButton,
    "sit-tooltip": SitTooltip
};
__decorate([
    property({ type: Boolean, reflect: true })
], SitBadge.prototype, "show", void 0);
__decorate([
    property({ reflect: true })
], SitBadge.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitBadge.prototype, "outlined", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitBadge.prototype, "dismissible", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitBadge.prototype, "fullWidth", void 0);
__decorate([
    state()
], SitBadge.prototype, "truncated", void 0);
__decorate([
    state()
], SitBadge.prototype, "text", void 0);
__decorate([
    watch("show")
], SitBadge.prototype, "_handleShowChange", null);
__decorate([
    watch("text", { waitUntilFirstUpdate: true })
], SitBadge.prototype, "_handleTruncation", null);

export { SitBadge, SitBadge as default };
//# sourceMappingURL=sit-badge.js.map
