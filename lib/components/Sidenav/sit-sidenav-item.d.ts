import { PropertyValueMap } from "lit";
import SitElement from "../../base/sit-element";
import SitIcon from "../Icon/sit-icon";
/**
 * @description SitSidenavItem can function as either a menu type or a link type. Its type is determined by the children slotted into the default slot.
 * A single anchor tag element passed into the default slot converts SitSidenavItem to a link type while passing in SitSidenavLink components into the default slots makes it a menu type.
 *
 * @event sit-toggle - Emitted when the sidenav item's button is clicked. Only applicable to menu type.
 * @event sit-show - Emitted on show. Only applicable to menu type.
 * @event sit-after-show - Emitted on show after animation has completed. Only applicable to menu type.
 * @event sit-hide - Emitted on hide. Only applicable to menu type.
 * @event sit-after-hide - Emitted on hide after animation has completed. Only applicable to menu type.
 *
 * @slot default - default slot for SitSidenavLink and second level SitSidenavItem. For link type SitSidenavItem, pass in a single anchor tag to the default slot. For menu type, pass in SitSidenavLink to the default slot
 * @slot title - title slot for the content of SitSidenavItem's menu button element. Only applicable to menu type
 * @slot icon - icon slot for the content of SitSidenavItem's menu button element. Only applicable to menu type
 * @slot caret-icon - The slot for the caret arrow icon of SitSidenavItem. Only applicable to menu type.
 */
export declare class SitSidenavItem extends SitElement {
    static styles: import("lit").CSSResult[];
    /** @internal */
    static dependencies: {
        "sit-icon": typeof SitIcon;
    };
    body: HTMLElement;
    /** @internal */
    header: HTMLElement;
    /**
     *  when true, toggles the sidenav-item to open on first load and set the active stylings.
     */
    active: boolean;
    /**
     * Disables the SitSidenavItem
     */
    disabled: boolean;
    /**
     * Accessible label for the sidenav item's menu button. Forwarded to the button's aria-label attribute.
     */
    ariaLabel: string;
    private isLink;
    /**
     * @internal Forwards to id attribute of div.collapse and aria-controls attribute of button in SitSidenavItem. By default, SitSidenavItem auto-generates a unique id. Override the default id by specifiying your own
     */
    private _collapseId;
    /**
     * @internal Forwards to id attribute of button and aria-labelledby attribute of ul.sidenav-list in SitSidenavItem. By default, SitSidenavItem auto-generates a unique id. Override the default id by specifiying your own
     */
    private _buttonId;
    private _levelId;
    private _firstLevelId;
    private _secondLevelId;
    private _thirdLevelId;
    /** @internal */
    private index;
    private _onToggle;
    /** Shows the sidenav item. Only applicable to sit-sidenav-item that are of menu types */
    show(): Promise<void>;
    /** Hide the sidenav item.  Only applicable to sit-sidenav-item that are of menu types */
    hide(): Promise<void>;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValueMap<this>): void;
    /**
     * Sets active to true to open menu ,
     * evaluating based on whether any of the child in any level is active
     * If at least 1 child is active, parent item should be active
     */
    private _handleOpenMenu;
    private _handleSummaryClick;
    private _handleSummaryKeyDown;
    _handleOpenChange(): Promise<void>;
    private _items;
    private _handleSlotChange;
    render(): import("lit").TemplateResult<1>;
}
export default SitSidenavItem;
