import SitButton from "@sit-canvas/canvas-web-component/react/button";
import SitMainnav from "@sit-canvas/canvas-web-component/react/mainnav";
import SitMainnavItem from "@sit-canvas/canvas-web-component/react/mainnav-item";
import SitMainnavDropdown from "@sit-canvas/canvas-web-component/react/mainnav-dropdown";
import SitDropdownItem from "@sit-canvas/canvas-web-component/react/dropdown-item";

export const Mainnav = () => {
  return (
    <SitMainnav>
      <img width="130" src="https://example.com/logo.svg" slot="brand" />
      <SitMainnavItem>ArgsTable Controlled </SitMainnavItem>
      <SitMainnavDropdown close="default">
        <span slot="toggler">Dropdown</span>
        <SitDropdownItem href="https://google.com">Item 1</SitDropdownItem>
        <SitDropdownItem href="#">Item 2</SitDropdownItem>
        <SitDropdownItem href="#">Item 3</SitDropdownItem>
      </SitMainnavDropdown>
      <SitMainnavItem href="#">About</SitMainnavItem>
      <SitMainnavItem href="#" slot="end">
        Contact Us
      </SitMainnavItem>
      <SitButton slot="end">Login</SitButton>
    </SitMainnav>
  );
};
