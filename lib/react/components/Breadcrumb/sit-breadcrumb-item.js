'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { SitIcon } from '../Icon/sit-icon.js';
import { SitLink } from '../Link/sit-link.js';
import css_248z from './breadcrumb-item.js';
import SitElement from '../../base/sit-element.js';

/**
 * @summary Breadcrumb Item are navigational links used in Breadcrumb component
 *
 * @slot default - The link of the item. Pass in anchor tags into this slot
 */
class SitBreadcrumbItem extends SitElement {
    constructor() {
        super(...arguments);
        /** Indicates the link matches the current location of the page. Programmatically handled by SitBreadcrumb to set this prop to true for the last breadcrumb item  */
        this.active = false;
        this._preventNavigation = (e) => e.preventDefault();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("active")) {
            const anchor = this.querySelector("a");
            if (anchor) {
                if (this.active) {
                    anchor.setAttribute("tabindex", "-1");
                    anchor.addEventListener("click", this._preventNavigation);
                }
                else {
                    anchor.removeEventListener("click", this._preventNavigation);
                }
            }
        }
    }
    render() {
        return html `
      <sit-link><slot class="nav-link"></slot></sit-link>
      <div class="separator">
        <sit-icon name="chevron-right" size="sm"></sit-icon>
      </div>
    `;
    }
}
SitBreadcrumbItem.styles = [css_248z];
SitBreadcrumbItem.dependencies = {
    "sit-link": SitLink,
    "sit-icon": SitIcon
};
__decorate([
    property({ type: Boolean, reflect: true })
], SitBreadcrumbItem.prototype, "active", void 0);

export { SitBreadcrumbItem, SitBreadcrumbItem as default };
//# sourceMappingURL=sit-breadcrumb-item.js.map
