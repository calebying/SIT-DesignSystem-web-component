'use client';

export const Mainnav = () => {
  return (
    <sit-mainnav suppressHydrationWarning>
      <sit-mainnav-item suppressHydrationWarning>
        <a href="#">ArgsTable Controlled</a>
      </sit-mainnav-item>
      <sit-mainnav-dropdown close="default" suppressHydrationWarning>
        <span slot="toggler">Dropdown</span>
        <sit-dropdown-item disabled suppressHydrationWarning>
          <a href="https://google.com">Item 1</a>
        </sit-dropdown-item>
        <sit-dropdown-item suppressHydrationWarning>
          <a href="#">Item 2</a>
        </sit-dropdown-item>
        <sit-dropdown-item suppressHydrationWarning>
          <a href="#">Item 3</a>
        </sit-dropdown-item>
      </sit-mainnav-dropdown>
      <sit-mainnav-item suppressHydrationWarning>
        <a href="#">About</a>
      </sit-mainnav-item>
      <sit-mainnav-item slot="end" suppressHydrationWarning>
        <a href="#">Contact Us</a>
      </sit-mainnav-item>
      <sit-button slot="end" suppressHydrationWarning>Login</sit-button>
    </sit-mainnav>
  );
};
