'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import SitElement from '../../base/sit-element.js';
import css_248z from './overflow-menu.js';
import { property } from 'lit/decorators.js';
import { SitDropdown } from '../Dropdown/sit-dropdown.js';
import { SitDropdownItem } from '../Dropdown/sit-dropdown-item.js';
import { SitIcon } from '../Icon/sit-icon.js';

/**
 * @summary An overflow menu is a UI element, often represented by three dots (⋮ or …), that opens a menu with additional actions or options.
 * @slot default - The overflow menu items. Pass in sit-dropdown-items in this slot
 */
class SitOverflowMenu extends SitElement {
    constructor() {
        super(...arguments);
        /** Specifies a large or small button */
        this.size = "md";
    }
    render() {
        return html `
      <sit-dropdown>
        <button slot="toggler" class="overflow-btn" aria-label="More options">
          <sit-icon name="three-dots" size=${this.size}></sit-icon>
        </button>
        <slot></slot>
      </sit-dropdown>
    `;
    }
}
SitOverflowMenu.styles = [...SitElement.styles, css_248z];
/** @internal */
SitOverflowMenu.dependencies = {
    "sit-dropdown": SitDropdown,
    "sit-dropdown-item": SitDropdownItem,
    "sit-icon": SitIcon
};
__decorate([
    property({ type: String, reflect: true })
], SitOverflowMenu.prototype, "size", void 0);

export { SitOverflowMenu, SitOverflowMenu as default };
//# sourceMappingURL=sit-overflow-menu.js.map
