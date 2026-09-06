import SitElement from "../../base/sit-element";
import SitIcon from "../Icon/sit-icon";
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarStatus = "online" | "away" | "offline";
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
export declare class SitAvatar extends SitElement {
    static styles: import("lit").CSSResult[];
    /**@internal */
    static dependencies: {
        "sit-icon": typeof SitIcon;
    };
    /** Image URL. Falls back to `initials`, then a generic person icon, if unset or if the image fails to load. */
    src: string;
    /** Accessible alt text for the image. Also used (with `initials`) as the seed for the deterministic fallback-colour hash when `initials` is unset. */
    alt: string;
    /** 1-2 letters shown when there's no image (or the image fails to load). Longer strings are used as-is -- truncate before setting this if needed. */
    initials: string;
    /** Avatar diameter. Matches this library's xs/sm/md/lg/xl size-tier convention (see sit-icon, sit-spinner). */
    size: AvatarSize;
    /** Status-dot state. Omit to render no dot at all. */
    status: AvatarStatus | undefined;
    private _imageFailed;
    private readonly _hasSlotController;
    /**@internal */
    private get _showImage();
    /**@internal */
    private get _showInitials();
    private _handleImageError;
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
    private get _fallbackVariant();
    private _renderFallback;
    render(): import("lit").TemplateResult<1>;
}
export default SitAvatar;
