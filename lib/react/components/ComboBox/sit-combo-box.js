'use client';
import { __decorate } from 'tslib';
import { live } from 'lit/directives/live.js';
import { html, nothing } from 'lit';
import { property, queryAsync, queryAssignedElements, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';
import { SelectElement } from '../../base/select-element.js';
import { watch } from '../../utils/watch.js';
import { SitBadge } from '../Badge/sit-badge.js';
import { SitIcon } from '../Icon/sit-icon.js';
import css_248z$1 from './combo-box.js';
import css_248z from '../../styles/form-text-control.js';
import { SitComboBoxOption } from './sit-combo-box-option.js';
import { repeat } from 'lit/directives/repeat.js';
import { SitSpinner } from '../Spinner/sit-spinner.js';

/**
 * @summary ComboBox component is used for users to make one or more selections from a list through user input, keyboard or mouse actions
 *
 * @slot default - default slot to pass in sit-combo-box-option
 *
 * @event sit-select - Emitted when the combo box's selected value changes.
 * @event sit-change - Emitted when the combo box's value changes.
 * @event sit-input -  Emitted when user input is received and its value changes. `event.detail = { displayValue }`
 * @eventDetail {ISitComboBoxInputEventDetail} sit-input
 * @event sit-focus -  Emitted when user input is focused.
 * @event sit-blur -  Emitted when user input is blurred.
 * @event sit-invalid - Emitted when the combo box's invalid state is set to true.
 * @event sit-valid - Emitted when the combo box's invalid state is set to false.
 * @event sit-scroll-end - Emitted once when the menu is scrolled to within `scrollBottomOffset` pixels of the bottom. Resets when the user scrolls back up.
 */
class SitComboBox extends SelectElement {
    constructor() {
        super(...arguments);
        /** If true, renders multiple checkbox selection items. If false, single-select. */
        this.multiSelect = false;
        /** If true, renders badge that fills width of combobox */
        this.badgeFullWidth = false;
        /** If true, a clear button will be enabled on focus */
        this.clearable = false;
        /** Disables native and sit validation for the combo box. */
        this.noValidate = false;
        /** Enables the asynchronous behaviour of a combo box. When true, filterFunction is ignored and filtering is done remotely. */
        this.async = false;
        /** When filtering remotely and there are no results, set this to true to enable no options feedback on the menu. Applicable for async combo box only. */
        this.emptyMenuAsync = false;
        /** Number of pixels from the bottom of the menu at which the sit-scroll-end event fires. */
        this.scrollBottomOffset = 0;
        /** The function used to filter the menu list, given the user's input value. */
        this.filterFunction = (inputValue, item) => {
            return item.label.toLowerCase().startsWith(inputValue.toLowerCase());
        };
        this.optionList = [];
        this.emptyMenuAfterFiltering = false;
        // Used to show and hide the clear button
        this.isFocused = false;
        // Used to determine if the scroll reached the end with offset
        this.isScrollEnd = false;
        /** Template for the suffix icon */
        this.suffixIconTemplate = html `<sit-icon
    name=${this.menuIsOpen ? "chevron-up" : "chevron-down"}
    size="md"
  ></sit-icon>`;
        this.prefixIconTemplate = html `${nothing}`;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("focus", async () => {
            this.isFocused = true;
        });
        this.addEventListener("blur", async () => {
            this.isFocused = false;
        });
        this.addEventListener("keydown", (e) => {
            var _a, _b;
            if (e.key === "Enter" &&
                ((_b = (_a = e.target.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".form-clearable")) === null || _b === void 0 ? void 0 : _b.matches(":focus"))) {
                this._handleClear();
            }
        });
        this.addEventListener("sit-hide", async (e) => {
            if (!e.detail.isOutside) {
                const sitInput = await this._input;
                sitInput.focus();
            }
            this.options.forEach(o => o.removeAttribute("hidden"));
            // reset emptyMenu state
            this.emptyMenuAfterFiltering = false;
        });
    }
    async firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        if (this.async)
            this.filterFunction = () => true;
        this.menuList.forEach(o => {
            const comboBoxOption = document.createElement("sit-combo-box-option");
            comboBoxOption.innerText = o.label;
            comboBoxOption.value = o.value;
            comboBoxOption.checkbox = this.multiSelect;
            comboBoxOption.active = this.value.includes(o.value);
            this.appendChild(comboBoxOption);
        });
        this._setupValidation(this.menuList);
        if (this.menuIsOpen) {
            await this.updateFloatingPosition();
        }
    }
    async _handleDefaultSlotChange(e) {
        const assignedElements = e.target.assignedElements({
            flatten: true
        });
        assignedElements.forEach(option => {
            // Handling of click events
            if (option.hasAttribute("disabled"))
                return false;
            if (option.clickEventAdded)
                return false;
            option.addEventListener("click", (evt) => {
                evt.preventDefault();
                const optionTarget = evt.target;
                if (this.multiSelect) {
                    optionTarget.active ? this._handleItemUnselect(evt) : this._handleItemSelected(evt);
                }
                else {
                    this._handleItemSelected(evt);
                }
                return false;
            });
            option.clickEventAdded = true;
            option.addEventListener("keydown", (evt) => {
                if (evt.key === "Enter") {
                    this.close = "outside";
                    const optionTarget = evt.target;
                    optionTarget.click();
                }
            });
        });
        /** this will trigger _updateValueAndDisplayValue */
        await this.updateComplete;
        this.optionList = await this._getMenuListFromOptions(assignedElements);
        this._setupValidation(this.optionList);
    }
    async _setupValidation(list) {
        var _a;
        if (this.value && list.length > 0) {
            const valueArray = this.value.split(";");
            const initialSelectedItem = list.filter(({ value }) => valueArray.includes(value));
            this.selectedItems = [...initialSelectedItem, ...this.selectedItems];
            if (!this.multiSelect) {
                this.displayValue = (_a = initialSelectedItem[0]) === null || _a === void 0 ? void 0 : _a.label;
            }
        }
        /** We want to run validation regardless of value or list present */
        this.multiSelect ? (this.input = await this._multiSelectInput) : (this.input = await this._input);
        this._mixinValidate(this.input);
    }
    async _handleValueChange() {
        this.options.forEach(o => o.removeAttribute("hidden"));
        const sitInput = await this._input;
        this._mixinSetFormValue();
        if (this.multiSelect) {
            this._mixinValidate(this.input);
        }
        else {
            this._mixinValidate(sitInput);
        }
        // When value is updated by user and it doesn't map to selectedItems, we should re-map selectedItems
        const selectedItemVal = this.selectedItems.map(val => val.value).join(";");
        if (selectedItemVal !== this.value) {
            this._updateValueAndDisplayValue(this.optionList);
        }
        if (!this._isTouched && this.value === "")
            return;
        if (this._mixinShouldSkipSitValidation())
            return;
        this.invalid = !this._mixinReportValidity();
    }
    /** Emits sit-change and sit-select events. Call after setting this.value from user interaction. */
    _emitChangeEvents() {
        this._mixinSetFormValue();
        this.emit("sit-change");
        if (this.value) {
            this.emit("sit-select");
        }
    }
    _handleOptionListChange() {
        this._updateValueAndDisplayValue(this.optionList);
    }
    _handleMenuListChange() {
        const newMenu = this.menuList.map(o => {
            const comboBoxOption = document.createElement("sit-combo-box-option");
            comboBoxOption.innerText = o.label;
            comboBoxOption.value = o.value;
            comboBoxOption.checkbox = this.multiSelect;
            comboBoxOption.active = this.value.includes(o.value);
            return comboBoxOption;
        });
        this.replaceChildren(...newMenu);
    }
    _updateValueAndDisplayValue(list) {
        var _a;
        const valueArray = this.value.split(";");
        const initialSelectedItem = list.filter(({ value }) => valueArray.includes(value));
        this.selectedItems = [...initialSelectedItem];
        // When the new filtered items don't match value we update it
        const updatedValue = initialSelectedItem.map(item => item.value).join(";");
        if (updatedValue !== this.value) {
            this.value = updatedValue;
        }
        // Disabling this condition for async combobox so that the display value in the input will not clear when menu options changes
        if (!this.multiSelect && !this.async) {
            this.displayValue = ((_a = initialSelectedItem[0]) === null || _a === void 0 ? void 0 : _a.label) || "";
        }
        this.options.forEach(o => (o.active = valueArray.includes(o.value)));
    }
    // Called each time the user types in the <sit-input>, we set .value and show the menu
    async _handleInputChange(e) {
        const input = e.target;
        this.displayValue = input.value;
        this.emit("sit-input", { detail: { displayValue: this.displayValue } });
        this.invalid = false;
        this.showMenu();
        // reset menu list when displayValue is cleared
        if (this.displayValue === "" && !this.multiSelect) {
            this.selectedItems = [];
            this.value = this.selectedItems.join(";");
            this.options.forEach(o => (o.active = false));
            this._emitChangeEvents();
        }
        // There is a race condition in certain situations where this.optionList is not fully updated during slotchange
        // Hence instead of using this.optionList, we have to perform a query on the <sit-combo-box-option> elements
        const optionList = this.options.map(o => ({ value: o.value, label: o.textContent.trim() }));
        this.filteredList = optionList.filter(item => this.filterFunction(this.displayValue, item));
        // Filtering for slots
        this.emptyMenuAfterFiltering = this.filteredList.length === 0;
        const filteredValues = this.filteredList.map(l => l.value);
        this.options.forEach(o => {
            if (!filteredValues.includes(o.value)) {
                o.hidden = true;
            }
            else {
                o.hidden = false;
            }
        });
    }
    /**
     * Called whenever an <sit-combo-box-option> dispatches sit-select"
     */
    async _handleItemSelected(e) {
        var _a, _b, _c;
        const itemEl = e.target;
        if (itemEl.disabled)
            return;
        const itemLabel = (_b = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
        const itemValueAttr = (_c = itemEl.getAttribute("value")) !== null && _c !== void 0 ? _c : itemLabel;
        const foundItem = this.filteredList.find(i => i.value.toString() === itemValueAttr) || {
            label: itemLabel,
            value: itemValueAttr
        };
        if (this.multiSelect) {
            if (!this.selectedItems.some(i => i.value === foundItem.value)) {
                this.selectedItems = [...this.selectedItems, foundItem];
            }
            this.value = this.selectedItems.map(i => i.value).join(";");
            itemEl.active = true;
        }
        else {
            // Single-select
            // Only update active states if a new item is selected
            if (this.selectedItems.length === 0 || this.selectedItems[0].value !== foundItem.value) {
                // Remove active from all options
                this.options.forEach(o => (o.active = false));
                itemEl.active = true;
                this.selectedItems = [foundItem];
                this.value = foundItem.value.toString();
                this.displayValue = foundItem.label;
                this.hideMenu();
            }
        }
        this._emitChangeEvents();
    }
    _handleItemUnselect(e) {
        var _a, _b, _c;
        const itemEl = e.target;
        if (itemEl.disabled)
            return;
        itemEl.removeAttribute("active");
        const itemLabel = (_b = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
        const itemValueAttr = (_c = itemEl.getAttribute("value")) !== null && _c !== void 0 ? _c : itemLabel;
        const foundItem = this.filteredList.find(i => i.value.toString() === itemValueAttr) || {
            label: itemLabel,
            value: itemValueAttr
        };
        this.selectedItems = this.selectedItems.filter(i => i.value !== foundItem.value);
        this.value = this.selectedItems.map(i => i.value).join(";");
        this._emitChangeEvents();
    }
    async _handleBadgeDismissed(e, item) {
        var _a;
        e.preventDefault();
        const removedValue = item.value;
        (_a = this.options) === null || _a === void 0 ? void 0 : _a.forEach(o => (o.value === removedValue ? (o.active = false) : null));
        this.selectedItems = this.selectedItems.filter(i => i.value !== item.value);
        this.value = this.selectedItems.map(i => i.value).join(";");
        this._emitChangeEvents();
    }
    async _handleMultiSelectKeyDown(e) {
        var _a;
        // Only do this in multi-select mode
        if (!this.multiSelect) {
            return;
        }
        if (e.key === "Backspace" && this.multiSelect) {
            if (this.displayValue.trim() === "" && this.selectedItems.length > 0) {
                const removedValue = this.selectedItems[this.selectedItems.length - 1].value;
                (_a = this.options) === null || _a === void 0 ? void 0 : _a.forEach(o => (o.value === removedValue ? (o.active = false) : null));
                this.selectedItems = this.selectedItems.slice(0, -1);
                this.value = this.selectedItems.map(i => i.value).join(";");
                this._emitChangeEvents();
            }
        }
    }
    _handleFocus() {
        this.emit("sit-focus");
    }
    async _handleInputBlur(e) {
        e.preventDefault();
        this.emit("sit-blur");
        if (this.multiSelect) {
            const displayValueMatchedSelectedItems = this.selectedItems.filter(({ label }) => this.displayValue === label);
            if (displayValueMatchedSelectedItems.length <= 0) {
                this.displayValue = "";
            }
        }
        else {
            // Single select
            if (this.selectedItems.length > 0) {
                this.displayValue = this.selectedItems[0].label;
            }
            else {
                this.displayValue = "";
            }
        }
    }
    // For clearing the value
    async _handleClear() {
        var _a;
        this.value = this.displayValue = "";
        (_a = this.options) === null || _a === void 0 ? void 0 : _a.forEach(o => (o.active = false));
        this._emitChangeEvents();
        const sitInput = await this._input;
        sitInput.focus();
        this.showMenu();
    }
    /** For form reset  */
    async _mixinResetFormControl() {
        this.value = this.defaultValue;
        if (!this.multiSelect) {
            //reset menu
            this.options.forEach(o => {
                o.active = o.value === this.value;
            });
            const initialOption = this.options.filter(o => o.value === this.value);
            if (initialOption.length <= 0) {
                this.displayValue = "";
            }
            else {
                this.displayValue = initialOption[0].textContent.trim();
            }
            this._mixinResetValidity(await this._input);
        }
        else {
            const valueArray = this.value.split(";");
            // reset menu
            this.options.forEach(o => {
                o.active = valueArray.includes(o.value);
            });
            const initialOption = this.options.filter(o => valueArray.includes(o.value));
            this.selectedItems = initialOption.map(o => ({ value: o.value, label: o.textContent.trim() }));
            this._mixinResetValidity(await this._multiSelectInput);
        }
    }
    /**
     * Handles scroll events on the menu. Emits `sit-scroll-end` once when the
     * scroll position reaches within `scrollBottomOffset` pixels of the bottom.
     * The event is suppressed until the user scrolls back up, preventing repeated
     * emissions while the menu stays at the bottom.
     */
    async _handleScroll(e) {
        const ele = e.target;
        if (ele) {
            const endOfScroll = ele.scrollHeight - ele.clientHeight;
            const offset = Math.max(0, this.scrollBottomOffset);
            if (ele.scrollTop >= endOfScroll - offset) {
                if (!this.isScrollEnd) {
                    this.emit("sit-scroll-end");
                }
                this.isScrollEnd = true;
            }
            else {
                this.isScrollEnd = false;
            }
        }
    }
    /**
     * Used `repeat` helper from Lit to render instead of .map:
     * The reassigning of value is affecting the truncation on badge as it is not triggering the slot change event.
     *
     * To compare this to lit-html's default handling for lists, consider reversing a large list of names:
     * For a list created using Array.map, lit-html maintains the DOM nodes for the list items, but reassigns the values
     * For a list created using repeat, the repeat directive reorders the existing DOM nodes, so the nodes representing the first list item move to the last position.
     */
    _renderInput(showClearButton) {
        const wantFeedbackStyle = this.hasFeedback;
        const showButton = showClearButton;
        return html `
      <div
        ${ref(this.myDropdown)}
        class="form-control-group ${classMap({
            disabled: this.disabled,
            readonly: this.readonly,
            "is-invalid": this.invalid && wantFeedbackStyle
        })}"
        @click=${this._handleClick}
      >
        ${this.prefixIconTemplate}
        <div class="combobox-input-container">
          ${this.multiSelect
            ? html `
                ${repeat(this.selectedItems, item => item.value, item => html `<sit-badge
                      outlined
                      variant="neutral"
                      show
                      ?dismissible=${!(this.readonly || this.disabled)}
                      ?fullwidth=${this.badgeFullWidth}
                      @sit-hide=${e => this._handleBadgeDismissed(e, item)}
                      >${item.label}</sit-badge
                    >`)}
              `
            : nothing}
          <input
            class="form-control"
            type="text"
            id=${this._controlId}
            name=${ifDefined(this.name)}
            placeholder=${ifDefined(this.placeholder)}
            aria-invalid=${this.invalid ? "true" : "false"}
            ?autofocus=${this.autofocus}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            .value=${this.displayValue ? this.displayValue.trim() : ""}
            @input=${this._handleInputChange}
            @blur=${this._handleInputBlur}
            @focus=${this._handleFocus}
            aria-describedby=${ifDefined(this.invalid && this.hasFeedback ? `${this._controlId}-invalid` : undefined)}
            aria-labelledby="${this._labelId} ${this._controlId}Help ${this.invalid && this.hasFeedback
            ? `${this._controlId}-invalid`
            : ""}"
            .autocomplete=${this.autocomplete}
          />
        </div>

        ${showButton
            ? html `
              <sit-icon
                id=${`${this._controlId}-combobox-clear-button`}
                tabindex="0"
                class="form-clearable"
                name="xcircle-fill"
                size="md"
                @click=${this._handleClear}
                aria-label="Clear selections"
                role="button"
              ></sit-icon>
            `
            : nothing}
        ${this.suffixIconTemplate}
      </div>
    `;
    }
    _renderFeedbackMenu() {
        if (this.loading) {
            return this._renderLoadingMenu();
        }
        // When async, the filtering is done by remote server, so we do not check for emptyMenu of combobox filterFunction
        if (this.async) {
            return this.emptyMenuAsync || this.optionList.length === 0 ? this._renderEmptyMenu() : nothing;
        }
        else {
            return this.optionList.length === 0 || // no options at all
                (this.emptyMenuAfterFiltering && this.optionList.length > 0) // check if filtering results in empty menu
                ? this._renderEmptyMenu()
                : nothing;
        }
    }
    render() {
        const showClearButton = (this.isFocused || this.menuIsOpen) && this.value !== "" && this.clearable && !this.readonly;
        return html `
      <div
        class=${classMap({
            "form-control-container": true,
            "m-width-256": true,
            disabled: this.disabled,
            combobox: true
        })}
        @keydown=${this._handleMultiSelectKeyDown}
      >
        ${this._renderLabel()}
        <!-- The input -->
        ${this._renderInput(showClearButton)} ${this._renderFeedback()}

        <div
          id=${this.dropdownMenuId}
          class="dropdown-menu"
          part="menu"
          tabindex="-1"
          role="menu"
          aria-label=${this.label || "Options"}
          ${ref(this.menuRef)}
          @scroll=${this._handleScroll}
        >
          <slot
            id="default"
            class=${classMap({ "d-none": this.loading || this.emptyMenuAsync || this.optionList.length === 0 })}
            @slotchange=${this._handleDefaultSlotChange}
          ></slot>
          ${this._renderFeedbackMenu()}
        </div>
      </div>

      <!-- Required an input element for constraint validation -->
      ${this.multiSelect
            ? html `<input
            .value=${live(this.value)}
            id="multi-select-input-tracker"
            class="visually-hidden"
            ?required=${this.required}
            tabindex="-1"
            aria-hidden="true"
            .autocomplete=${this.autocomplete}
          />`
            : nothing}
    `;
    }
}
SitComboBox.styles = [...SelectElement.styles, css_248z, css_248z$1];
SitComboBox.childName = "sit-combo-box-option";
/** @internal */
SitComboBox.dependencies = {
    [SitComboBox.childName]: SitComboBoxOption,
    "sit-icon": SitIcon,
    "sit-badge": SitBadge,
    "sit-spinner": SitSpinner
};
__decorate([
    property({ type: Boolean, reflect: true })
], SitComboBox.prototype, "multiSelect", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitComboBox.prototype, "badgeFullWidth", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitComboBox.prototype, "clearable", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitComboBox.prototype, "noValidate", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitComboBox.prototype, "async", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitComboBox.prototype, "emptyMenuAsync", void 0);
__decorate([
    property({ type: Number, reflect: true })
], SitComboBox.prototype, "scrollBottomOffset", void 0);
__decorate([
    property()
], SitComboBox.prototype, "filterFunction", void 0);
__decorate([
    queryAsync("input#multi-select-input-tracker")
], SitComboBox.prototype, "_multiSelectInput", void 0);
__decorate([
    queryAssignedElements({ flatten: true, selector: "sit-combo-box-option" })
], SitComboBox.prototype, "options", void 0);
__decorate([
    state()
], SitComboBox.prototype, "optionList", void 0);
__decorate([
    state()
], SitComboBox.prototype, "emptyMenuAfterFiltering", void 0);
__decorate([
    state()
], SitComboBox.prototype, "isFocused", void 0);
__decorate([
    state()
], SitComboBox.prototype, "isScrollEnd", void 0);
__decorate([
    watch("value", { waitUntilFirstUpdate: true })
], SitComboBox.prototype, "_handleValueChange", null);
__decorate([
    watch("optionList", { waitUntilFirstUpdate: true })
], SitComboBox.prototype, "_handleOptionListChange", null);
__decorate([
    watch("menuList", { waitUntilFirstUpdate: true })
], SitComboBox.prototype, "_handleMenuListChange", null);
//TODO:
// Replace this.optionList ?
// During slotchange event _handleDefaultSlotChange, we try to populate this.optionList to obtain value attribute and textContent as label from <sit-combo-box-option>
// However, it has race conditions in certain situation like nextjs, where the last option's label (essentially the slot of <sit-combo-box-option>) may not be available immediately.
// To circumvent this, I avoid relying on this.optionList to perform filterFunction onInput handler and query this.options directly at the point of user typing.
// To prevent confusion, this.optionList should ideally be removed in future iterations

export { SitComboBox, SitComboBox as default };
//# sourceMappingURL=sit-combo-box.js.map
