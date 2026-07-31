import { TemplateResult } from "lit";
import SitElement from "../../base/sit-element";
import SitButton from "../Button/sit-button";
import SitIcon from "../Icon/sit-icon";
import SitIconButton from "../IconButton/sit-icon-button";
import type { ISitPaginationPageChangeEventDetail } from "./types";
export type { ISitPaginationPageChangeEventDetail };
export type Navigation = "button" | "icon-button";
/**
 * @summary The Pagination component enables the user to select a specific page from a range of pages
 *
 * @event sit-page-change - Event is emitted when `handleNextButton`, `handlePrevButton`, `handleNextEllipsisButton` and `handlePrevEllipsisButton` was called.
 * @eventDetail {ISitPaginationPageChangeEventDetail} sit-page-change
 *
 **/
export declare class SitPagination extends SitElement {
    static styles: import("lit").CSSResult[];
    /**@internal */
    static dependencies: {
        "sit-icon-button": typeof SitIconButton;
        "sit-button": typeof SitButton;
        "sit-icon": typeof SitIcon;
    };
    /** Inserts the length value from a given sets of data objects*/
    dataLength: number;
    /** Sets the starting active page upon render*/
    currentPage: number;
    /** Sets the amount of data objects to be displayed per page */
    itemsPerPage: number;
    /** Sets the variant of the pagination. */
    variant: "default" | "number" | "button" | "description";
    /** Sets the page direction button to contain text and/or icon */
    navigation: Navigation;
    /** Sets the size of all page items. */
    size: "sm" | "md";
    /**
     * The number of pages to show besides first and last page. First and last page always appears
     */
    private _limit;
    /**@internal */
    _handleValueChange(): 3 | 5 | 4;
    private _handlePageClick;
    private _handleNextButton;
    private _handlePrevButton;
    private get pages();
    private _handleKeyDown;
    private _renderFirstPage;
    private _getAllPageNumbers;
    private _getPageNumbers;
    private _renderPgNumbers;
    private ellipsisContent;
    private _renderFirstEllipsis;
    private _renderLastEllipsis;
    private _renderLastPage;
    private _renderDirectionButton;
    private _getNavButton;
    private _getIconButton;
    private _renderDescriptionPagination;
    private _renderDefaultPagination;
    private _renderNumberPagination;
    private _renderButtonPagination;
    render(): TemplateResult<1>;
}
export default SitPagination;
