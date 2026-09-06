import { PropertyValueMap } from "lit";
import SitElement from "../../base/sit-element";
import SitCloseButton from "../CloseButton/sit-close-button";
import SitIcon from "../Icon/sit-icon";
import SitIconButton from "../IconButton/sit-icon-button";
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
export declare class SitSystemBanner extends SitElement {
    static styles: import("lit").CSSResult[];
    /**@internal */
    static dependencies: {
        "sit-close-button": typeof SitCloseButton;
        "sit-icon": typeof SitIcon;
        "sit-icon-button": typeof SitIconButton;
    };
    /** Controls the appearance of the alert  */
    show: boolean;
    /** Enables a close button that allows the user to dismiss the alert. */
    dismissible: boolean;
    /** Disables the action link that appears when text content is clamped */
    noClampAction: boolean;
    /** When true, removes max-width constraint to allow content to stretch full screen width */
    fluid: boolean;
    /** Closes the alert  */
    close(): void;
    private bannerItem;
    private banner;
    private childCount;
    private _intervalId;
    private _intervalTime;
    private _currentIndex;
    protected firstUpdated(changedProperties: PropertyValueMap<this>): void;
    disconnectedCallback(): void;
    /**@internal */
    _handleShowChange(): Promise<void>;
    private _updateActiveItem;
    private _next;
    private _prev;
    private _animateItem;
    private _startAutoCycle;
    private _stopAutoCycle;
    private _resetAutoCycle;
    private _pauseAutoCycle;
    private _resumeAutoCycle;
    render(): import("lit").TemplateResult<1>;
}
export default SitSystemBanner;
