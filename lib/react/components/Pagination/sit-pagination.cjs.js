'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var sitElement = require('../../base/sit-element.cjs.js');
var watch = require('../../utils/watch.cjs.js');
var sitButton = require('../Button/sit-button.cjs.js');
var sitIcon = require('../Icon/sit-icon.cjs.js');
var sitIconButton = require('../IconButton/sit-icon-button.cjs.js');
var pagination = require('./pagination.cjs.js');

/**
 * @summary The Pagination component enables the user to select a specific page from a range of pages
 *
 * @event sit-page-change - Event is emitted when `handleNextButton`, `handlePrevButton`, `handleNextEllipsisButton` and `handlePrevEllipsisButton` was called.
 * @eventDetail {ISitPaginationPageChangeEventDetail} sit-page-change
 *
 **/
class SitPagination extends sitElement["default"] {
    constructor() {
        super(...arguments);
        /** Inserts the length value from a given sets of data objects*/
        this.dataLength = 0;
        /** Sets the starting active page upon render*/
        this.currentPage = 1;
        /** Sets the amount of data objects to be displayed per page */
        this.itemsPerPage = 5;
        /** Sets the variant of the pagination. */
        this.variant = "default";
        /** Sets the page direction button to contain text and/or icon */
        this.navigation = "icon-button";
        /** Sets the size of all page items. */
        this.size = "md";
        /**
         * The number of pages to show besides first and last page. First and last page always appears
         */
        this._limit = 4;
        this.ellipsisContent = lit.html `
    <span aria-hidden="true">…</span>
    <span class="sr-only" role="text">Ellipsis</span>
  `;
        this._renderFirstEllipsis = () => {
            const pagesLengthWithinTotalLimit = this.pages.length <= 7;
            const isHidden = pagesLengthWithinTotalLimit || !(this.pages.length !== this._limit && this.currentPage > 4);
            if (isHidden) {
                return null;
            }
            return lit.html `
      <div class="page-item">
        <span class="page-link ellipsis">${this.ellipsisContent}</span>
      </div>
    `;
        };
        this._getNavButton = (direction, clickHandler, isDisabled) => {
            const icon = lit.html `<sit-icon
      size=${this.size}
      name=${direction === "Prev" ? "arrow-left" : "arrow-right"}
      slot=${direction === "Prev" ? "leftIcon" : "rightIcon"}
    ></sit-icon>`;
            return lit.html `
      <sit-button
        tone="neutral"
        ariaLabel=${direction === "Prev" ? "Previous" : "Next"}
        size=${this.size}
        @click=${isDisabled ? undefined : clickHandler}
        ?disabled=${isDisabled}
        variant="ghost"
        >${icon}${direction}</sit-button
      >
    `;
        };
    }
    /**@internal */
    _handleValueChange() {
        this.emit("sit-page-change", { detail: { currentPage: this.currentPage } });
        /**
         * Always showing 7 li at a time.
         * The case when both ellipsis is not needed
         */
        if (this.pages.length <= 7) {
            return (this._limit = 5);
        }
        /**
         * The case when currentPage is reaching the endPage
         */
        if (this.pages.length - this.currentPage <= 3) {
            return (this._limit = 4);
        }
        /**
         * The case when currentPage is after 4
         */
        if (this.currentPage > 4) {
            return (this._limit = 3);
        }
        else {
            return (this._limit = 4);
        }
    }
    _handlePageClick(event) {
        const target = event.target;
        const clickedItem = target.closest(".page-item");
        if (clickedItem) {
            const clickedPage = Number(clickedItem.getAttribute("key"));
            if (clickedPage !== this.currentPage) {
                this.currentPage = clickedPage;
            }
        }
    }
    _handleNextButton() {
        this.currentPage = this.currentPage + 1;
    }
    _handlePrevButton() {
        this.currentPage = this.currentPage - 1;
    }
    get pages() {
        const pages = [];
        for (let i = 1; i <= Math.ceil(this.dataLength / this.itemsPerPage); i++) {
            pages.push(i);
        }
        return pages;
    }
    _handleKeyDown(event, action, number, isPrevButton) {
        // role="button" spans must activate on both Enter and Space per the ARIA APG button pattern.
        // Space also needs preventDefault() so it does not scroll the page (the browser only skips
        // that default action for real <button>/<input> elements, not ARIA-only buttons).
        if (event.key === " ") {
            event.preventDefault();
        }
        if (event.key === "Enter" || event.key === " ") {
            switch (action) {
                case "pageNumber":
                    this.currentPage = number;
                    break;
                case "directionButton":
                    if (isPrevButton) {
                        this._handlePrevButton();
                    }
                    else {
                        this._handleNextButton();
                    }
                    break;
            }
        }
    }
    _renderFirstPage() {
        return lit.html `
      <div key=${1} class="page-item ${this.currentPage === 1 ? "active" : ""}">
        <span
          role="button"
          class="page-link"
          aria-label=${this.currentPage === 1 ? `Current Page, Page 1` : "Go to Page 1"}
          aria-current="${this.currentPage === 1}"
          tabindex="0"
          @click=${this._handlePageClick}
          @keydown=${(e) => this._handleKeyDown(e, "pageNumber", 1)}
          >1</span
        >
      </div>
    `;
    }
    _getAllPageNumbers() {
        const pagesToShow = [];
        for (let i = 1; i <= this.pages.length; i++) {
            pagesToShow.push(i);
        }
        return pagesToShow;
    }
    _getPageNumbers() {
        const pagesToShow = [];
        let sanitizeStartPage = 2;
        let endPage;
        if (this._limit === 3) {
            sanitizeStartPage = this.currentPage - Math.floor(this._limit / 2);
        }
        if (this._limit === 4) {
            sanitizeStartPage = this.currentPage - Math.floor(this._limit / 2);
            if (this.currentPage + this._limit > this.pages.length) {
                sanitizeStartPage = this.pages.length - this._limit;
            }
        }
        if (sanitizeStartPage <= 1) {
            sanitizeStartPage = 2;
        }
        endPage = sanitizeStartPage + this._limit - 1;
        if (endPage >= this.pages.length) {
            endPage = this.pages.length - 1;
        }
        for (let i = sanitizeStartPage; i <= endPage; i++) {
            pagesToShow.push(i);
        }
        return pagesToShow;
    }
    _renderPgNumbers(pagesToShow) {
        return pagesToShow.map(number => lit.html `
        <div key=${number} class="page-item ${this.currentPage === number ? "active" : ""}">
          <span
            role="button"
            class="page-link"
            tabindex="0"
            aria-label=${this.currentPage === number ? `Current Page, Page ${number}` : `Go to Page ${number}`}
            aria-current="${this.currentPage === number}"
            @click=${this._handlePageClick}
            @keydown=${(e) => this._handleKeyDown(e, "pageNumber", number)}
            >${number}</span
          >
        </div>
      `);
    }
    _renderLastEllipsis() {
        const shouldRenderEllipsis = this.pages.length !== this._limit;
        if (this.pages.length <= 7) {
            return null;
        }
        if (!shouldRenderEllipsis ||
            this._limit >= this.pages.length ||
            this.pages.length - this.currentPage < this._limit) {
            return null;
        }
        return lit.html `
      <div class="page-item">
        <span class="page-link ellipsis ">${this.ellipsisContent}</span>
      </div>
    `;
    }
    _renderLastPage() {
        return lit.html `
      <div key=${this.pages.length} class="page-item ${this.currentPage === this.pages.length ? "active" : ""}">
        <span
          role="button"
          class="page-link"
          aria-label=${this.currentPage === this.pages.length
            ? `Current Page, Page ${this.pages.length}`
            : `Go to Page ${this.pages.length}`}
          aria-current="${this.currentPage === this.pages.length}"
          tabindex="0"
          @click=${this._handlePageClick}
          @keydown=${(e) => this._handleKeyDown(e, "pageNumber", this.pages.length)}
          >${this.pages.length}</span
        >
      </div>
    `;
    }
    _renderDirectionButton(directionLabel, clickHandler) {
        const nextNavDisableCondition = this.currentPage === this.pages.length || this.pages.length <= 1;
        const prevNavDisableCondition = this.currentPage === 1;
        const isDisabled = directionLabel === "Prev" ? prevNavDisableCondition : nextNavDisableCondition;
        if (this.navigation === "button") {
            return lit.html `${this._getNavButton(directionLabel, clickHandler, isDisabled)}`;
        }
        if (this.navigation === "icon-button") {
            return lit.html `${this._getIconButton(directionLabel, clickHandler, isDisabled)}`;
        }
        return lit.html `${lit.nothing}`;
    }
    _getIconButton(direction, clickHandler, isDisabled) {
        return lit.html `
      <sit-icon-button
        tone="neutral"
        ariaLabel=${direction === "Prev" ? "Previous" : "Next"}
        size=${this.size}
        @click=${isDisabled ? undefined : clickHandler}
        ?disabled=${isDisabled}
        variant="ghost"
        name=${direction === "Prev" ? "arrow-left" : "arrow-right"}
      ></sit-icon-button>
    `;
    }
    _renderDescriptionPagination() {
        return lit.html `
      ${this._renderDirectionButton("Prev", this._handlePrevButton)}
      <div class="pagination-description">Page ${this.currentPage} of ${this.pages.length}</div>
      ${this._renderDirectionButton("Next", this._handleNextButton)}
    `;
    }
    _renderDefaultPagination() {
        return lit.html `
      ${this._renderDirectionButton("Prev", this._handlePrevButton)} ${this._renderFirstPage()}
      ${this._renderFirstEllipsis()} ${this._renderPgNumbers(this._getPageNumbers())} ${this._renderLastEllipsis()}
      ${this.pages.length <= 1 ? lit.nothing : this._renderLastPage()}
      ${this._renderDirectionButton("Next", this._handleNextButton)}
    `;
    }
    _renderNumberPagination() {
        return lit.html ` ${this._renderPgNumbers(this._getAllPageNumbers())} `;
    }
    _renderButtonPagination() {
        return lit.html `
      ${this._renderDirectionButton("Prev", this._handlePrevButton)}
      ${this._renderDirectionButton("Next", this._handleNextButton)}
    `;
    }
    render() {
        return lit.html `
      <nav aria-label="pagination" role="navigation">
        <div class="pagination pagination-${this.size}">
          ${this.variant === "description" ? this._renderDescriptionPagination() : lit.nothing}
          ${this.variant === "default" ? this._renderDefaultPagination() : lit.nothing}
          ${this.variant === "number" ? this._renderNumberPagination() : lit.nothing}
          ${this.variant === "button" ? this._renderButtonPagination() : lit.nothing}
        </div>
      </nav>
    `;
    }
}
SitPagination.styles = [...sitElement["default"].styles, pagination["default"]];
/**@internal */
SitPagination.dependencies = {
    "sit-icon-button": sitIconButton.SitIconButton,
    "sit-button": sitButton.SitButton,
    "sit-icon": sitIcon.SitIcon
};
tslib.__decorate([
    decorators_js.property({ type: Number })
], SitPagination.prototype, "dataLength", void 0);
tslib.__decorate([
    decorators_js.property({ type: Number })
], SitPagination.prototype, "currentPage", void 0);
tslib.__decorate([
    decorators_js.property({ type: Number })
], SitPagination.prototype, "itemsPerPage", void 0);
tslib.__decorate([
    decorators_js.property({ type: String })
], SitPagination.prototype, "variant", void 0);
tslib.__decorate([
    decorators_js.property({ type: String })
], SitPagination.prototype, "navigation", void 0);
tslib.__decorate([
    decorators_js.property({ type: String })
], SitPagination.prototype, "size", void 0);
tslib.__decorate([
    decorators_js.state()
], SitPagination.prototype, "_limit", void 0);
tslib.__decorate([
    watch.watch("currentPage", { waitUntilFirstUpdate: false })
], SitPagination.prototype, "_handleValueChange", null);

exports.SitPagination = SitPagination;
exports["default"] = SitPagination;
//# sourceMappingURL=sit-pagination.cjs.js.map
