'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var ref_js = require('lit/directives/ref.js');
var dropdownListElement = require('../../base/dropdown-list-element.cjs.js');
var watch = require('../../utils/watch.cjs.js');
var dropdownMenu = require('./dropdown-menu.cjs.js');
var dropdown = require('./dropdown.cjs.js');

/**
 * @summary `SitDropdown` toggles contextual overlays for displaying lists of links.
 * @slot default - slot for sit-dropdown-item passed into dropdown's menu
 * @slot toggler - slot for the toggler that triggers the open and closing of menu, typically a button. Only pass in a single element into this slot
 *
 */
class SitDropdown extends dropdownListElement.DropdownListElement {
    constructor() {
        super();
        /** Controls auto-flipping of menu */
        this.noFlip = false;
        /** When true, aligns right edge of menu with right edge of button */
        this.menuAlignRight = false;
        /** The drop position of menu relative to the toggle button */
        this.drop = "down";
        /** Controls the close behaviour of dropdown menu. By default menu auto-closes when SitDropdownItem or area outside dropdown is clicked */
        this.close = "default";
        this.menuRef = ref_js.ref();
    }
    async _handleClick(e) {
        if (this.disabled)
            return;
        const slottedToggler = this._toggler[0];
        if (!slottedToggler) {
            this.toggleMenu();
            return;
        }
        if (e.composedPath().includes(slottedToggler)) {
            this.toggleMenu();
            return;
        }
        // Click landed in the toggler-container's empty area (passed through pointer-events: none)
        if (!this.menuIsOpen)
            return;
        const menu = this.menuRef.value;
        if (menu && e.composedPath().includes(menu))
            return;
        this.hideMenu();
    }
    _handleCloseMenu() {
        const button = this._toggler[0];
        button === null || button === void 0 ? void 0 : button.focus();
    }
    async connectedCallback() {
        super.connectedCallback();
        this.addEventListener("sit-hide", this._handleCloseMenu);
    }
    async disconnectedCallback() {
        this.removeEventListener("sit-hide", this._handleCloseMenu);
    }
    async firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        if (this.menuIsOpen) {
            await this.updateFloatingPosition();
        }
        this._handleDisabled();
    }
    _handleTogglerSlotChange(e) {
        const slot = e.target;
        const elements = slot.assignedElements({ flatten: true });
        const button = elements[0];
        if (button) {
            button.setAttribute("aria-haspopup", "menu");
            button.setAttribute("aria-expanded", String(this.menuIsOpen));
        }
    }
    _handleMenuIsOpenChange() {
        const button = this._toggler[0];
        if (button) {
            button.setAttribute("aria-expanded", String(this.menuIsOpen));
        }
    }
    _handleDisabled() {
        const button = this._toggler[0];
        if (button) {
            if (this.disabled) {
                button.setAttribute("disabled", "true");
            }
            else {
                button.hasAttribute("disabled") && button.removeAttribute("disabled");
            }
        }
    }
    render() {
        return lit.html `
      <div class="dropdown" @click=${this._handleClick}>
        <div class="toggler-container" ${ref_js.ref(this.myDropdown)}>
          <slot name="toggler" @slotchange=${this._handleTogglerSlotChange}></slot>
        </div>
        <div class="dropdown-menu" role="menu" ${ref_js.ref(this.menuRef)}>
          <slot id="default" @click=${this.handleSelectSlot}></slot>
        </div>
      </div>
    `;
    }
}
SitDropdown.styles = [...dropdownListElement.DropdownListElement.styles, dropdown["default"], dropdownMenu["default"]];
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true, state: false })
], SitDropdown.prototype, "noFlip", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true, state: false })
], SitDropdown.prototype, "menuAlignRight", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true, state: false })
], SitDropdown.prototype, "drop", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true, state: false })
], SitDropdown.prototype, "close", void 0);
tslib.__decorate([
    decorators_js.queryAssignedElements({ slot: "toggler", flatten: true })
], SitDropdown.prototype, "_toggler", void 0);
tslib.__decorate([
    watch.watch("menuIsOpen")
], SitDropdown.prototype, "_handleMenuIsOpenChange", null);
tslib.__decorate([
    watch.watch("disabled", { waitUntilFirstUpdate: true })
], SitDropdown.prototype, "_handleDisabled", null);

exports.SitDropdown = SitDropdown;
exports["default"] = SitDropdown;
//# sourceMappingURL=sit-dropdown.cjs.js.map
