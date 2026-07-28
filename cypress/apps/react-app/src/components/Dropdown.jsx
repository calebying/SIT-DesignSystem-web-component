import SitDropdown from "@sit-canvas/canvas-web-component/react/dropdown";
import SitDropdownItem from "@sit-canvas/canvas-web-component/react/dropdown-item";
import SitButton from "@sit-canvas/canvas-web-component/react/button"
export const Dropdown = () => {
    return (
        <SitDropdown drop="down">
            <SitButton slot="toggler">Dropdown</SitButton>
            <SitDropdownItem href="#" target="_self">item #1 (argsTable controlled)</SitDropdownItem>
            <SitDropdownItem href="https://google.com">item #2</SitDropdownItem>
            <SitDropdownItem href="#" disabled="">item #3</SitDropdownItem>
        </SitDropdown>
    )
}