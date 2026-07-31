import { __decorate } from 'tslib';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html } from 'lit/static-html.js';
import SitElement from '../../base/sit-element.js';
import { SitOverflowMenu } from '../OverflowMenu/sit-overflow-menu.js';
import css_248z from './breadcrumb.js';

/**
 * @summary Breadcrumbs help users to navigate and understand where they are on the current website or service.
 *
 * @slot default - The slot to pass in custom elements of `SitBreadcrumbItems`.
 *
 */
class SitBreadcrumb extends SitElement {
    constructor() {
        super(...arguments);
        /** The aria-label of nav element within breadcrumb component. */
        this.ariaLabel = "breadcrumb";
    }
    /**
     * creates `<sit-breadcrumb-item>
     *            <sit-overflow-menu>
     *              <sit-dropdown-item></sit-dropdown-item>
     *               ...
     *            </sit-overflow-menu>
     *          <sit-breadcrumb-item>`
     */
    _replaceExcessItemsWithDropdown(items) {
        const breadcrumbItem = document.createElement("sit-breadcrumb-item");
        const overflowMenu = document.createElement("sit-overflow-menu");
        overflowMenu.setAttribute("aria-haspopup", "menu");
        overflowMenu.setAttribute("size", "sm");
        const mapItems = items.filter((item, index) => {
            if (index > 0 && index < items.length - 2) {
                const clonedAnchor = item.querySelector("a");
                const clonedAnchorNode = clonedAnchor.cloneNode(true);
                const dropdownItem = document.createElement("sit-dropdown-item");
                dropdownItem.appendChild(clonedAnchorNode);
                overflowMenu.appendChild(dropdownItem);
                return;
            }
            else {
                return item;
            }
        });
        breadcrumbItem.classList.add("overflow-menu");
        breadcrumbItem.appendChild(overflowMenu);
        mapItems.splice(1, 0, breadcrumbItem);
        this.defaultSlot.replaceWith(...mapItems);
    }
    _handleSlotChange(e) {
        const items = e.target
            .assignedElements({ flatten: true })
            .filter((item) => item.tagName.toLowerCase() === "sit-breadcrumb-item");
        items.forEach((item, index) => {
            if (index === items.length - 1) {
                item.setAttribute("aria-current", "page");
                item.active = true;
            }
            else {
                item.removeAttribute("aria-current");
            }
        });
        if (items.length >= 5) {
            this._replaceExcessItemsWithDropdown(items);
        }
    }
    render() {
        return html `
      <div aria-label=${ifDefined(this.ariaLabel)}>
        <div class="breadcrumb">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `;
    }
}
SitBreadcrumb.styles = [...SitElement.styles, css_248z];
SitBreadcrumb.dependencies = {
    "sit-overflow-menu": SitOverflowMenu
};
__decorate([
    property({ type: String })
], SitBreadcrumb.prototype, "ariaLabel", void 0);
__decorate([
    query("slot")
], SitBreadcrumb.prototype, "defaultSlot", void 0);

export { SitBreadcrumb, SitBreadcrumb as default };
//# sourceMappingURL=sit-breadcrumb.js.map
