'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var lit = require('lit');
var decorators_js = require('lit/decorators.js');
var classMap_js = require('lit/directives/class-map.js');
var sitElement = require('../../base/sit-element.cjs.js');
var skeleton = require('./skeleton.cjs.js');

/**
 * @summary A skeleton is a low-fidelity visual placeholder that represents the loading of interface elements
 * before they have displayed on the page.
 */
class SitSkeleton extends sitElement["default"] {
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
        return lit.html `
      <div
        class=${classMap_js.classMap({
            skeleton: true,
            "skeleton-paragraph": this.rows > 0,
            "auto-size-rows": this.rows > 0,
            sheen: this.sheen && !this.rows
        })}
        style=${Object.entries(styleMap)
            .filter(([_, v]) => v)
            .map(([k, v]) => `${k.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${v}`)
            .join("; ")}
      >
        ${this.rows > 0
            ? [...Array(this.rows).keys()].map(n => {
                const classes = { [`skeleton-row-${n}`]: true, sheen: this.sheen };
                return lit.html `<div
                class=${classMap_js.classMap(classes)}
                style=${this.borderRadius ? `border-radius: ${this.borderRadius}` : lit.nothing}
              ></div>`;
            })
            : lit.nothing}
      </div>
    `;
    }
}
SitSkeleton.styles = [skeleton["default"]];
tslib.__decorate([
    decorators_js.query(".skeleton")
], SitSkeleton.prototype, "skeleton", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitSkeleton.prototype, "width", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitSkeleton.prototype, "height", void 0);
tslib.__decorate([
    decorators_js.property({ type: String, reflect: true })
], SitSkeleton.prototype, "borderRadius", void 0);
tslib.__decorate([
    decorators_js.property({ type: Number, reflect: true })
], SitSkeleton.prototype, "rows", void 0);
tslib.__decorate([
    decorators_js.property({ type: Boolean, reflect: true })
], SitSkeleton.prototype, "sheen", void 0);
// Accessibility to add to Documentation:
// When user use a template of sit-skeletons, add one visually hidden span to indicate Loading...
// Loading labels must be unique thats why its not advisible to handle the aria labelling for users inside sit-skeleton

exports.SitSkeleton = SitSkeleton;
exports["default"] = SitSkeleton;
//# sourceMappingURL=sit-skeleton.cjs.js.map
