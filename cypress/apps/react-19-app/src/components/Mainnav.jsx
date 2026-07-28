
export const Mainnav = () => 
  <sit-mainnav>
      <img alt="canvas logo" width="130" src="https://example.com/logo.svg" slot="brand" />
      <sit-mainnav-item>
        <a href="#">ArgsTable Controlled</a>
      </sit-mainnav-item>
      <sit-mainnav-item>
        <a href="#">About</a>
      </sit-mainnav-item>
      <sit-mainnav-dropdown>
        <span slot="toggler">Dropdown</span>
        <sit-dropdown-item><a href="https://google.com">Item 1</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 2</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
      </sit-mainnav-dropdown>
      <sit-mainnav-item slot="end">
        <a href="#">Contact Us</a>
      </sit-mainnav-item>
      <sit-button slot="end">Login</sit-button>
      <dev-console-widget slot="non-collapsible" iconcolor="black" iconwidth="28px" iconheight="28px"></dev-console-widget>
    </sit-mainnav>
