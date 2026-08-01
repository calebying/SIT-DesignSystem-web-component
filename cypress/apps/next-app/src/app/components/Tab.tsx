'use client';

export const Tab = () => {
  return (
    <>
      <sit-tab-group variant="underlined" orientation="horizontal" suppressHydrationWarning>
        <sit-tab slot="nav" state="active" panel="one" suppressHydrationWarning>
          <sit-icon slot="icon" name="map" suppressHydrationWarning></sit-icon>
          <span>hellotab</span>
        </sit-tab>
        <sit-tab slot="nav" panel="two" suppressHydrationWarning>two</sit-tab>
        <sit-tab slot="nav" state="active" panel="three" suppressHydrationWarning>three</sit-tab>
        <sit-tab-panel name="one" suppressHydrationWarning>one</sit-tab-panel>
        <sit-tab-panel name="two" suppressHydrationWarning>two</sit-tab-panel>
        <sit-tab-panel name="three" suppressHydrationWarning>three</sit-tab-panel>
      </sit-tab-group>

      <sit-tab-group orientation="horizontal" density="compact" suppressHydrationWarning>
        <sit-tab slot="nav" state="active" panel="one" suppressHydrationWarning>hellotab</sit-tab>
        <sit-tab slot="nav" panel="two" suppressHydrationWarning>two</sit-tab>
        <sit-tab slot="nav" state="active" panel="three" suppressHydrationWarning>three</sit-tab>
        <sit-tab-panel name="one" suppressHydrationWarning>one</sit-tab-panel>
        <sit-tab-panel name="two" suppressHydrationWarning>two</sit-tab-panel>
        <sit-tab-panel name="three" suppressHydrationWarning>three</sit-tab-panel>
      </sit-tab-group>

      <sit-tab-group id="tabs-lukhei-test" orientation="horizontal" suppressHydrationWarning>
        <sit-tab slot="nav" panel="one" suppressHydrationWarning>lukhei testing</sit-tab>
        <sit-tab slot="nav" panel="two" suppressHydrationWarning>disabled</sit-tab>
        <sit-tab slot="nav" panel="three" suppressHydrationWarning>
          <sit-icon slot="icon" name="placeholder" suppressHydrationWarning></sit-icon>
          three
        </sit-tab>
        <sit-tab-panel name="one" suppressHydrationWarning>one</sit-tab-panel>
        <sit-tab-panel name="two" suppressHydrationWarning>two</sit-tab-panel>
        <sit-tab-panel name="three" suppressHydrationWarning>three</sit-tab-panel>
      </sit-tab-group>

      <sit-tab-group variant="underlined" orientation="vertical" density="compact" suppressHydrationWarning>
        <sit-tab slot="nav" panel="one" variant="solid" suppressHydrationWarning>lukhei test</sit-tab>
        <sit-tab slot="nav" disabled panel="two" suppressHydrationWarning>cdisabled</sit-tab>
        <sit-tab slot="nav" panel="three" suppressHydrationWarning>
          <sit-icon slot="icon" name="placeholder" suppressHydrationWarning></sit-icon>
          three
        </sit-tab>
        <sit-tab-panel name="one" suppressHydrationWarning>one</sit-tab-panel>
        <sit-tab-panel name="two" suppressHydrationWarning>two</sit-tab-panel>
        <sit-tab-panel name="three" suppressHydrationWarning>three</sit-tab-panel>
      </sit-tab-group>
    </>
  );
};
