import { __decorate } from 'tslib';
import { html } from 'lit';
import { queryAssignedElements, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import SitElement from '../../base/sit-element.js';
import { SitIcon } from '../Icon/sit-icon.js';
import css_248z$1 from './dropdown-item.js';
import css_248z from './dropdown.js';

/**
 * @summary `SitDropdownItem` are navigation links built with `HTMLAnchorElement`. It should be used in the default slot of `SitDropdown`
 * @slot default - The default slot for SitDropdownItem. Pass in a single anchor tag per dropdown item directly for navigation items.
 */
class SitDropdownItem extends SitElement {
    constructor() {
        super(...arguments);
        /** when true, sets the active stylings of dropdown item */
        this.active = false;
        /** Disables the SitMainnavItem */
        this.disabled = false;
        /** Forwards aria-label to the inner clickable element for accessibility */
        this.ariaLabel = "";
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && this.anchor.length > 0) {
                this.anchor[0].click();
            }
        });
        this.setAttribute("role", "menuitem");
        this.setAttribute("aria-disabled", `${this.disabled}`);
    }
    render() {
        return html `
      <div
        class="dropdown-item ${classMap({
            disabled: this.disabled,
            active: this.active
        })}"
        tabindex=${this.disabled ? "-1" : "0"}
        aria-label=${ifDefined(this.ariaLabel || undefined)}
      >
        <slot></slot>
      </div>
    `;
    }
}
SitDropdownItem.styles = [css_248z, css_248z$1];
SitDropdownItem.dependencies = {
    "sit-icon": SitIcon
};
__decorate([
    queryAssignedElements({ flatten: true })
], SitDropdownItem.prototype, "anchor", void 0);
__decorate([
    property({ type: Boolean })
], SitDropdownItem.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitDropdownItem.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], SitDropdownItem.prototype, "ariaLabel", void 0);

export { SitDropdownItem, SitDropdownItem as default };
//# sourceMappingURL=sit-dropdown-item.js.map
