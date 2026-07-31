import SitElement from '../../base/sit-element.js';
import { html } from 'lit';
import css_248z from './table-of-contents.js';

/**
 *
 * @summary Tables of contents provide a page overview and direct access to specific sections.
 *
 * @slot default - The slot for the header
 * @slot contents - The slot for the contents
 */
class SitTableOfContents extends SitElement {
    render() {
        return html `<div class="container">
      <slot></slot>
      <ul class="contents">
        <slot name="contents"></slot>
      </ul>
    </div> `;
    }
}
SitTableOfContents.styles = [...SitElement.styles, css_248z];

export { SitTableOfContents, SitTableOfContents as default };
//# sourceMappingURL=sit-table-of-contents.js.map
