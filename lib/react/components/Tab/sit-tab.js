'use client';
import { __decorate } from 'tslib';
import { html } from 'lit';
import { query, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import SitElement from '../../base/sit-element.js';
import css_248z from './tab.js';
import { watch } from '../../utils/watch.js';

let id = 0;
/**
 * @summary Tabs are used within tab group to activate the tab panels
 *
 * @slot default - The slot for label of tab
 * @slot icon - The slot to place leading icon.
 *
 */
class SitTab extends SitElement {
    constructor() {
        super(...arguments);
        this.attrId = ++id;
        this.componentId = `sit-tab-${this.attrId}`;
        /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
        this.panel = "";
        /** Draws the tab in an active state. When used with tab group, this state is already managed. Use it to set the initial active tab on first load of page */
        this.active = false;
        /** When true, sets tab to disabled state */
        this.disabled = false;
        /** An accessible label for the tab. Use this when the tab's text content does not adequately describe its purpose. */
        this.ariaLabel = "";
    }
    connectedCallback() {
        super.connectedCallback();
        // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
        this.id = this.id.length > 0 ? this.id : this.componentId;
        this.setAttribute("role", "tab");
    }
    /** Sets focus to the tab. */
    focus(options) {
        var _a, _b;
        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".tab")) === null || _b === void 0 ? void 0 : _b.focus(options);
    }
    /** Removes focus from the tab. */
    blur() {
        this.tab.blur();
    }
    /**@internal */
    handleActiveChange() {
        this.setAttribute("aria-selected", this.active ? "true" : "false");
    }
    /**@internal */
    handleDisabledChange() {
        this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
        if (this.disabled)
            this.active = false;
    }
    render() {
        return html `
      <div
        data-testid="inner-tab"
        tabindex=${this.disabled ? "-1" : "0"}
        class="tab"
        aria-label=${ifDefined(this.ariaLabel || undefined)}
      >
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `;
    }
}
SitTab.styles = [css_248z];
__decorate([
    query(".tab")
], SitTab.prototype, "tab", void 0);
__decorate([
    property({ reflect: true })
], SitTab.prototype, "panel", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitTab.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitTab.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], SitTab.prototype, "ariaLabel", void 0);
__decorate([
    watch("active")
], SitTab.prototype, "handleActiveChange", null);
__decorate([
    watch("disabled")
], SitTab.prototype, "handleDisabledChange", null);

export { SitTab, SitTab as default };
//# sourceMappingURL=sit-tab.js.map
