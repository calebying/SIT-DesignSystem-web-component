'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import SitElement from '../../base/sit-element.js';
import { watch } from '../../utils/watch.js';
import css_248z from './tab-panel.js';

let id = 0;
/**
 * @summary Tab panels are used inside tab groups to display tabbed content.
 * @slot - The tab panel's content.
 *
 */
class SitTabPanel extends SitElement {
    constructor() {
        super(...arguments);
        this.attrId = ++id;
        this.componentId = `sit-tab-panel-${this.attrId}`;
        /** The tab panel's name. */
        this.name = "";
        /** When true, the tab panel will be shown. When used with tab-group, this property is already being managed */
        this.active = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id = this.id.length > 0 ? this.id : this.componentId;
        this.setAttribute("role", "tabpanel");
    }
    _handleActiveChange() {
        this.setAttribute("aria-hidden", this.active ? "false" : "true");
        this.inert = !this.active;
    }
    render() {
        return html `
      <slot
        class=${classMap({
            "tab-panel": true,
            "tab-panel--active": this.active
        })}
      ></slot>
    `;
    }
}
SitTabPanel.styles = [...SitElement.styles, css_248z];
__decorate([
    property({ reflect: true })
], SitTabPanel.prototype, "name", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitTabPanel.prototype, "active", void 0);
__decorate([
    watch("active")
], SitTabPanel.prototype, "_handleActiveChange", null);

export { SitTabPanel, SitTabPanel as default };
//# sourceMappingURL=sit-tab-panel.js.map
