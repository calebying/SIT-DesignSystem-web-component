import { PropertyValueMap } from "lit";
import SitElement from "../../base/sit-element";
import SitIconButton from "../IconButton/sit-icon-button";
import SitMainnavDropdown from "./sit-mainnav-dropdown";
import SitMainnavItem from "./sit-mainnav-item";
export type MainnavExpandSize = "sm" | "md" | "lg" | "xl" | "xxl" | "always" | "never";
/**
 * @summary This component is the primary means that your users will use to navigate through your portal. It includes horizontal navigation and branding to identify your site.
 *
 * @event sit-show - Emitted on show. Only for collapsed menu.
 * @event sit-after-show - Emitted on show after animation has completed. Only for collapsed menu.
 * @event sit-hide - Emitted on hide. Only for collapsed menu.
 * @event sit-after-hide - Emitted on hide after animation has completed. Only for collapsed menu.
 *
 * @slot default - Default slot of SitMainnav. Pass in SitMainnavItem elements here.
 * @slot end - Elements in this slot will be positioned to the right end of .navbar-nav. Elements in this slot will also be included in collapsed menu.
 * @slot brand - Brand slot of SitMainnav. Pass in brand logo img here
 * @slot non-collapsible - Elements in this slot will not be collapsed
 *
 */
export declare class SitMainnav extends SitElement {
    static styles: import("lit").CSSResult[];
    /** @internal */
    static dependencies: {
        "sit-icon-button": typeof SitIconButton;
    };
    private _breakpointReached;
    /** Indicates if mobile menu is open or closed */
    private expanded;
    /** Denotes the transition state of mobile mainnav menu opening  */
    private expanding;
    /** @internal */
    nav: HTMLElement;
    /** @internal */
    navbar: HTMLElement;
    /** @internal */
    header: HTMLElement;
    /** @internal */
    body: HTMLElement;
    /** @internal */
    navScroll: HTMLElement;
    /** @internal */
    nonCollapsibleSlot: HTMLSlotElement;
    /** Used only for SSR to indicate the presence of the `non-collapsible` slot. */
    hasNonCollapsibleSlot: boolean;
    /** The href link for brand logo */
    brandHref: string;
    private collapseId;
    /** The breakpoint, below which, the Navbar will collapse. When always the Navbar will always be expanded regardless of screen size. When never, the Navbar will always be collapsed */
    expand: MainnavExpandSize;
    /** When true, removes max-width constraint to allow content to stretch full screen width */
    fluid: boolean;
    /** @internal */
    breakpointReached: boolean;
    /** @internal */
    private defaultNodes;
    /** @internal */
    private endNodes;
    /** @internal */
    get defaultSlotItems(): SitMainnavItem[] | SitMainnavDropdown[];
    /** @internal */
    get endSlotItems(): SitMainnavItem[] | SitMainnavDropdown[];
    private readonly hasSlotController;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValueMap<this>): void;
    updated(): void;
    private _handleClickOutOfElement;
    private _handleSummaryClick;
    private _handleResize;
    private _handleMobileNavBound;
    private _handleMobileNav;
    private _handleDesktopNav;
    private _animateToShow;
    private _animateToHide;
    /** @internal */
    handleOpenChange(): Promise<void>;
    /** Shows the menu. For when mainnav is in the collapsed form */
    show(): Promise<void>;
    /** Hide the menu. For when mainnav is in the collapsed form */
    hide(): Promise<void>;
    private _handleDefaultSlotChange;
    private _handleSlotChange;
    render(): import("lit").TemplateResult<1>;
    _expandClass(): string;
}
export default SitMainnav;
