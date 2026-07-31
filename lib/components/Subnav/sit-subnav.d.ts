import SitElement from "../../base/sit-element";
import { PropertyValueMap } from "lit";
import SitIcon from "../Icon/sit-icon";
/**
 * @summary This component provides secondary navigation within a specific section or page. It typically appears below the main navigation and offers context-specific links or actions to help users explore related content.
 *
 * @event sit-show - Emitted on show. Only for collapsed menu.
 * @event sit-after-show - Emitted on show after animation has completed. Only for collapsed menu.
 * @event sit-hide - Emitted on hide. Only for collapsed menu.
 * @event sit-after-hide - Emitted on hide after animation has completed. Only for collapsed menu.
 *
 * @slot default - Default slot of SitSubnav. Pass in SitSubnavItem elements here.
 * @slot header - Slot for rendering the sub-navigation header or section title.
 * @slot actions - Slot for inserting contextual action elements such as buttons, filters, or other controls aligned with the sub-navigation.
 *
 */
export declare class SitSubnav extends SitElement {
    static styles: import("lit").CSSResult[];
    /** @internal */
    static dependencies: {
        "sit-icon": typeof SitIcon;
    };
    /** Used only for SSR to indicate the presence of the `actions` slot. */
    hasActionsSlot: boolean;
    private nav;
    private mobileNav;
    private headerContainer;
    private toggler;
    private navGroup;
    private mobileActions;
    private isCollapsed;
    private isMenuOpen;
    private readonly hasSlotController;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValueMap<this>): void;
    updated(): void;
    private _handleResize;
    private _updateMobileLayout;
    private _handleClickOutOfElement;
    private _toggleMenu;
    private _onKeyboardToggle;
    /** Shows the menu. For when subnav is in the collapsed form */
    show(): Promise<void>;
    /** Hide the menu. For when subnav is in the collapsed form */
    hide(): Promise<void>;
    private _lockBodyScroll;
    private _unlockBodyScroll;
    private _animateToShow;
    private _animateToHide;
    handleOpenChange(): Promise<void>;
    handleCollapsedChange(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
export default SitSubnav;
