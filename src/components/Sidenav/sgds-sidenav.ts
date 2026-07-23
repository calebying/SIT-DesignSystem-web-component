import { html } from "lit";
import { property, queryAssignedElements } from "lit/decorators.js";
import SitElement from "../../base/sgds-element";
import SitSidenavItem from "./sgds-sidenav-item";
import { classMap } from "lit/directives/class-map.js";
import sidenavStyle from "./sidenav.css";

/**
 * @summary The side navigation is used to display a list of links to move between pages within a related category.
 * It is used as a secondary form of navigation where the primary navigation is located hierachically above the page frame.
 * Maximum three levels of navigations are allowed.
 *
 * @slot default - Default slot for SitSidenavItem element.
 * @cssproperty --sidenav-sticky-top - set the top value of the sticky sidenav. Defaults to 0rem
 */
export class SitSidenav extends SitElement {
  static styles = [...SitElement.styles, sidenavStyle];

  /** Apply position sticky to the sidenav */
  @property({ type: Boolean, attribute: true })
  sticky = false;

  /** @internal */
  @queryAssignedElements()
  private defaultNodes!: SitSidenavItem[];

  /** @internal */
  get items(): SitSidenavItem[] {
    return [...(this.defaultNodes || [])].filter(
      (node: HTMLElement) => typeof node.tagName !== "undefined"
    ) as SitSidenavItem[];
  }

  async onToggle(event: Event): Promise<void> {
    const target = event.target as SitSidenavItem;
    const isSidenavLink = target.tagName === "SGDS-SIDENAV-LINK";
    // Let the event pass through the DOM so that it can be
    // prevented from the outside if a user so desires.
    if (event.defaultPrevented || isSidenavLink) {
      // No toggling when the user prevents it.
      return;
    }
    const items = [...this.items] as SitSidenavItem[];

    if (items && !items.length) {
      // no toggling when there aren't items.
      return;
    }
  }

  render() {
    return html`
      <nav class=${classMap({ sticky: this.sticky })}>
        <div>
          <slot @click=${this.onToggle}></slot>
        </div>
      </nav>
    `;
  }
}

export default SitSidenav;
