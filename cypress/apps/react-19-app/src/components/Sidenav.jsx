

export const Sidenav = () => {
    return (
        <sit-sidenav>
      <sit-sidenav-item>
          <span slot="title">SideNavItem L1 label (menu) </span>
          <sit-sidenav-link><a href="#">SidenavLink L2 label</a></sit-sidenav-link>
          <sit-sidenav-link> 
            <a href="#">SidenavLink L2 label</a>
          </sit-sidenav-link>
          <sit-sidenav-link>
            <a href="#">SidenavLink L2 label</a>
          </sit-sidenav-link>
          <sit-sidenav-item>
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
      <sit-sidenav-item>
        <span slot="title">SideNavItem L1 label (menu)</span>
        <sit-sidenav-link> 
            <a href="#">SidenavLink L2 label</a>
          <sit-sidenav-link>
            <a href="#">SidenavLink L2 label</a>
          </sit-sidenav-link>
      </sit-sidenav-link></sit-sidenav-item>
      <sit-sidenav-item>
        <a href="#">SidenavItem L1 label (link)</a>
      </sit-sidenav-item>
    </sit-sidenav>
    )
}
