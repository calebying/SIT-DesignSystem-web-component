import SitSidenav from "@sit-canvas/canvas-web-component/react/sidenav";
import SitSidenavLink from "@sit-canvas/canvas-web-component/react/sidenav-link";
import SitSidenavItem from "@sit-canvas/canvas-web-component/react/sidenav-item";

export const Sidenav = () => {
    return (
        <SitSidenav>
            <SitSidenavItem href="">
                <span slot="title">SideNav Item #1 (control by Argstable) </span>
                <SitSidenavLink href="undefined">sit-sidenav-link (control by Argstable)</SitSidenavLink>
                <SitSidenavLink href="#" disabled="">sit-sidenav-link</SitSidenavLink>
                <SitSidenavLink href="#">sit-sidenav-link</SitSidenavLink>
            </SitSidenavItem>
            <SitSidenavItem>
                <span slot="title">SideNav Item #2</span>
                <span slot="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-layers-fill" viewBox="0 0 16 16">
                        <path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z"></path>
                        <path d="m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z"></path>
                    </svg>
                </span>
                <SitSidenavLink href="#">sit-sidenav-link</SitSidenavLink>
                <SitSidenavLink href="#">sit-sidenav-link</SitSidenavLink>
                <SitSidenavLink href="#">sit-sidenav-link</SitSidenavLink>
            </SitSidenavItem>
            <SitSidenavItem href="#">
                <span slot="title">SideNav Item #3</span>
                <span slot="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-layers-fill" viewBox="0 0 16 16">
                        <path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z"></path>
                        <path d="m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z"></path>
                    </svg>
                </span>
            </SitSidenavItem>
        </SitSidenav>
    )
}
