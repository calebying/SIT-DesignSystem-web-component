'use client';
import { __decorate } from 'tslib';
import { html, nothing } from 'lit';
import { query, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import SitElement from '../../base/sit-element.js';
import css_248z from './skeleton.js';

/**
 * @summary A skeleton is a low-fidelity visual placeholder that represents the loading of interface elements
 * before they have displayed on the page.
 */
class SitSkeleton extends SitElement {
    constructor() {
        super(...arguments);
        /** Sets the width of skeleton. Pass value in string with length units like pixels or percentage. */
        this.width = "";
        /** Sets the height of skeleton. Pass value in string with length units like pixels or percentage. */
        this.height = "";
        /** Sets the border radius of skeleton. Pass value in string with length units like pixels and percentage
         * When `row` is defined, the borderRadius is forwarded down to the border radius of each skeleton row */
        this.borderRadius = "";
        /** Adds a sheening animated effect to the skeleton  */
        this.sheen = false;
    }
    render() {
        const styleMap = {
            width: this.width || undefined,
            height: this.height || undefined,
            borderRadius: this.borderRadius || undefined
        };
        return html `
      <div
        class=${classMap({
            skeleton: true,
            "skeleton--paragraph": this.rows > 0,
            "skeleton--auto-size-rows": this.rows > 0,
            skeleton__sheen: this.sheen && !this.rows
        })}
        style=${Object.entries(styleMap)
            .filter(([_, v]) => v)
            .map(([k, v]) => `${k.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${v}`)
            .join("; ")}
      >
        ${this.rows > 0
            ? [...Array(this.rows).keys()].map(() => {
                const classes = { skeleton__row: true, skeleton__sheen: this.sheen };
                return html `<div
                class=${classMap(classes)}
                style=${this.borderRadius ? `border-radius: ${this.borderRadius}` : nothing}
              ></div>`;
            })
            : nothing}
      </div>
    `;
    }
}
SitSkeleton.styles = [css_248z];
__decorate([
    query(".skeleton")
], SitSkeleton.prototype, "skeleton", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitSkeleton.prototype, "width", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitSkeleton.prototype, "height", void 0);
__decorate([
    property({ type: String, reflect: true })
], SitSkeleton.prototype, "borderRadius", void 0);
__decorate([
    property({ type: Number, reflect: true })
], SitSkeleton.prototype, "rows", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SitSkeleton.prototype, "sheen", void 0);
// Accessibility to add to Documentation:
// When user use a template of sit-skeletons, add one visually hidden span to indicate Loading...
// Loading labels must be unique thats why its not advisible to handle the aria labelling for users inside sit-skeleton

export { SitSkeleton, SitSkeleton as default };
//# sourceMappingURL=sit-skeleton.js.map
