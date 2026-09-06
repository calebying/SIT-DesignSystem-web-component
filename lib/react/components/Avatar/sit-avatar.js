'use client';
import { __decorate } from 'tslib';
import { html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import SitElement from '../../base/sit-element.js';
import { SitIcon } from '../Icon/sit-icon.js';
import { HasSlotController } from '../../utils/slot.js';
import css_248z from './avatar.js';

/**
 * The 8 --sit-{variant}-surface-default tokens this component's deterministic
 * hash-to-palette scheme picks from for the fallback (initials/icon)
 * background -- the same 8 semantic colour families sit-badge's `variant`
 * exposes as a public prop (minus its `white`/deprecated-`info` entries,
 * which don't read as distinct "identity colours" the way the other 8 do).
 */
const AVATAR_FALLBACK_PALETTE = [
    "primary",
    "accent",
    "success",
    "danger",
    "warning",
    "cyan",
    "purple",
    "neutral"
];
/**
 * @summary An avatar: an image with an initials/icon fallback, size variants
 * matching this library's size-tier convention, and an optional status dot
 * (online/away/offline, or arbitrary slotted content).
 *
 * @slot status - Custom status-dot content. Overrides/augments the built-in
 *   online/away/offline dot driven by the `status` attribute -- set both to
 *   layer custom content (e.g. an icon) inside the coloured dot.
 *
 * @csspart avatar - the outer circle (image, initials, or fallback icon)
 * @csspart status-dot - the status indicator
 *
 * @event sit-error - Emitted when `src` is set but the image fails to load
 *   (the component has already fallen back to initials/icon by the time this
 *   fires -- listen for this only if you need to know the fallback happened).
 */
class SitAvatar extends SitElement {
    constructor() {
        super(...arguments);
        /** Accessible alt text for the image. Also used (with `initials`) as the seed for the deterministic fallback-colour hash when `initials` is unset. */
        this.alt = "";
        /** Avatar diameter. Matches this library's xs/sm/md/lg/xl size-tier convention (see sit-icon, sit-spinner). */
        this.size = "md";
        /** Status-dot state. Omit to render no dot at all. */
        this.status = undefined;
        this._imageFailed = false;
        this._hasSlotController = new HasSlotController(this, "status");
    }
    /**@internal */
    get _showImage() {
        return !!this.src && !this._imageFailed;
    }
    /**@internal */
    get _showInitials() {
        return !this._showImage && !!this.initials;
    }
    _handleImageError() {
        this._imageFailed = true;
        this.emit("sit-error");
    }
    /**
     * Deterministic hash-to-palette-index scheme: a simple string hash (djb2-
     * style, `hash = hash * 31 + charCode`) over `initials` (falling back to
     * `alt`, then the tag's own random-per-instance nothing -- an avatar with
     * neither still needs SOME background) reduced mod 8 into
     * AVATAR_FALLBACK_PALETTE. Deterministic on purpose: the same person's
     * initials/name always resolve to the same colour across renders and
     * page loads (no per-instance randomness), the same way GitHub/Slack-style
     * avatar colour assignment works.
     */
    get _fallbackVariant() {
        const seed = this.initials || this.alt || "sit-avatar";
        let hash = 0;
        for (let i = 0; i < seed.length; i++) {
            hash = (hash * 31 + seed.charCodeAt(i)) | 0;
        }
        return AVATAR_FALLBACK_PALETTE[Math.abs(hash) % AVATAR_FALLBACK_PALETTE.length];
    }
    _renderFallback() {
        const variant = this._fallbackVariant;
        return html `
      <div
        class="avatar-fallback"
        part="avatar"
        style="--avatar-fallback-bg: var(--sit-${variant}-surface-default); --avatar-fallback-color: var(--sit-${variant}-color-fixed-light, var(--sit-color-fixed-light));"
      >
        ${this._showInitials
            ? html `<span class="avatar-initials">${this.initials}</span>`
            : html `<sit-icon name="user-circle" size="md" aria-hidden="true"></sit-icon>`}
      </div>
    `;
    }
    render() {
        const showStatus = !!this.status || this._hasSlotController.test("status");
        return html `
      ${this._showImage
            ? html `<img
            class="avatar-image"
            part="avatar"
            src=${this.src}
            alt=${ifDefined(this.alt || undefined)}
            @error=${this._handleImageError}
          />`
            : this._renderFallback()}
      ${showStatus
            ? html `<span
            class=${classMap({ "status-dot": true, [`status-${this.status}`]: !!this.status })}
            part="status-dot"
          >
            <slot name="status"></slot>
          </span>`
            : nothing}
    `;
    }
}
SitAvatar.styles = [...SitElement.styles, css_248z];
/**@internal */
SitAvatar.dependencies = {
    "sit-icon": SitIcon
};
__decorate([
    property({ type: String, reflect: true })
], SitAvatar.prototype, "src", void 0);
__decorate([
    property({ type: String })
], SitAvatar.prototype, "alt", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitAvatar.prototype, "initials", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitAvatar.prototype, "size", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitAvatar.prototype, "status", void 0);
__decorate([
    state()
], SitAvatar.prototype, "_imageFailed", void 0);

export { SitAvatar, SitAvatar as default };
//# sourceMappingURL=sit-avatar.js.map
