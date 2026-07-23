import { html } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import SitElement from "../../base/sit-element";
import iconListStyles from "./icon-list.css";
/**
 * @summary A IconList can be used to display content related to the same topic. Each list item begins an icon.
 *
 * @slot default - The list items of IconList. Each list items should have aria attribute role="listitem" added
 */
export class SitIconList extends SitElement {
  static styles = [...SitElement.styles, iconListStyles];

  /** Sets the aria-role of the sit-icon-list */
  @property({ type: String, reflect: true }) role = "list";
  /** The size of icon list. Changes the font-size the list items */
  @property({ type: String, reflect: true }) size: "sm" | "md" | "lg" = "md";

  render() {
    return html`
      <div class=${classMap({ [this.size]: this.size })}>
        <slot></slot>
      </div>
    `;
  }
}

export default SitIconList;
