import { html } from "lit";

export const Template = ({ active, activeSNL, activeSNIAsLink, disabledSNL, disabledSNI, sticky }) => {
  return html`
    <sit-sidenav ?sticky=${sticky}>
      <sit-sidenav-item ariaLabel="SideNavItem L1 label (menu)" ?active=${active} ?disabled=${disabledSNI}>
          <span slot="title">SideNavItem L1 label (menu) </span>
          <sit-sidenav-link
            ?active=${activeSNL}
            ?disabled=${disabledSNL}
            ><a href="#">SidenavLink L2 label</a></sit-sidenav-link
          >
          <sit-sidenav-link>
            <a href="#">SidenavLink L2 label</a>
          </sit-sidenav-link>
          <sit-sidenav-link>
            <a href="#">SidenavLink L2 label</a>
          </sit-sidenav-link>
          <sit-sidenav-item ariaLabel="SidenavItem L2 label">
            <span slot="title">
            SidenavItem L2 label
            </span>
            <sit-sidenav-link>
              <a href="#"> SidenavLink L3 label</a>
            </sit-sidenav-link>
            <sit-sidenav-link>
              <a href="#">SidenavLink L3 label</a>
            </sit-sidenav-link>
          </sit-sidenav-item>
      </sit-sidenav-item>
      <sit-sidenav-item ariaLabel="SideNavItem L1 label (menu)">
        <span slot="title">SideNavItem L1 label (menu)</span>
        <sit-sidenav-link>
            <a href="#">SidenavLink L2 label</a>
          <sit-sidenav-link>
            <a href="#">SidenavLink L2 label</a>
          </sit-sidenav-link>
      </sit-sidenav-item>
      <sit-sidenav-item ariaLabel="SidenavItem L1 label (link)" ?active=${activeSNIAsLink}>
        <a href="#">SidenavItem L1 label (link)</a>
      </sit-sidenav-item>
    </sit-sidenav>
  `;
};

export const args = {};

export const parameters = {};

export const play = undefined;
