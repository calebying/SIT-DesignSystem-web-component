'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import css_248z from './option.js';
import SitElement from './sit-element.js';

class OptionElement extends SitElement {
    constructor() {
        super(...arguments);
        /**
         * @internal when true, sets the active stylings.
         * This property is controlled by its nearest parent e.g. Select or Combo box
         */
        this.active = false;
        /** Disables the Item */
        this.disabled = false;
    }
    connectedCallback() {
        super.connectedCallback();
        // Follows the W3C APG listbox pattern: Select/ComboBox render their menu as
        // role="listbox", so each option must be role="option" (not "menuitem").
        this.setAttribute("role", "option");
        this.setAttribute("aria-disabled", `${this.disabled}`);
        this.setAttribute("aria-selected", `${this.active}`);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("active")) {
            this.setAttribute("aria-selected", `${this.active}`);
        }
        if (changedProperties.has("disabled")) {
            this.setAttribute("aria-disabled", `${this.disabled}`);
        }
    }
    render() {
        const classes = {
            disabled: this.disabled,
            active: this.active
        };
        return html `
      <div class="dropdown-item ${classMap(classes)}" tabindex=${this.disabled ? "-1" : "0"}>
        ${this._renderItemContent()}
      </div>
    `;
    }
}
OptionElement.styles = [css_248z];
__decorate([
    property({ type: Boolean, reflect: true })
], OptionElement.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], OptionElement.prototype, "disabled", void 0);
__decorate([
    property({ type: String, reflect: true })
], OptionElement.prototype, "value", void 0);

export { OptionElement };
//# sourceMappingURL=option-element.js.map
