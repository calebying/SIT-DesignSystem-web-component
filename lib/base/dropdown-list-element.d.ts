import { DropdownElement } from "./dropdown-element";
import { SitDropdownItem } from "../components";
import { PropertyValueMap } from "lit";
/**
 * @event sit-select - Emitted when a dropdown item is selected. `event.detail.item` is the clicked `SitDropdownItem` element.
 */
export declare class DropdownListElement extends DropdownElement {
    static styles: import("lit").CSSResult[];
    /**@internal */
    private menu;
    /** @internal */
    nextDropdownItemNo: number;
    /** @internal */
    prevDropdownItemNo: number;
    hidden: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValueMap<this>): void;
    protected handleSelectSlot(e: KeyboardEvent | MouseEvent): void;
    private _resetMenu;
    protected _handleKeyboardMenuItemsEvent(e: KeyboardEvent): void;
    private _getMenuItems;
    private _getActiveMenuItems;
    private _setMenuItem;
}
export interface IDropdownListElement {
    item: SitDropdownItem;
}
