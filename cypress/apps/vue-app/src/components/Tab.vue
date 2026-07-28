<template>
    <sit-tab-group variant="underlined" orientation="horizontal">
        <sit-tab slot="nav" state="active" panel="one">
            <sit-icon slot="icon" name="map"></sit-icon>
            <span>hellotab</span>
        </sit-tab>
        <sit-tab slot="nav" panel="two">
            two
        </sit-tab>
        <sit-tab slot="nav" state="active" panel="three">
            three
        </sit-tab>
        <sit-tab-panel name="one">one</sit-tab-panel>
        <sit-tab-panel name="two">two</sit-tab-panel>
        <sit-tab-panel name="three">three</sit-tab-panel>
        </sit-tab-group>
        <sit-tab-group orientation="horizontal" density="compact">
        <sit-tab slot="nav" state="active" panel="one">
            hellotab
        </sit-tab>
        <sit-tab slot="nav" panel="two">
            two
        </sit-tab>
        <sit-tab slot="nav" state="active" panel="three">
            three
        </sit-tab>
        <sit-tab-panel name="one">one</sit-tab-panel>
        <sit-tab-panel name="two">two</sit-tab-panel>
        <sit-tab-panel name="three">three</sit-tab-panel>
    </sit-tab-group>
    <sit-tab-group id="tabs-lukhei-test" orientation="horizontal">
        <sit-tab slot="nav" panel="one">
          lukhei testing
        </sit-tab>
        <sit-tab slot="nav" panel="two">
          disabled
        </sit-tab>
        <sit-tab slot="nav" panel="three">
          <sit-icon slot="icon" name="placeholder"></sit-icon>
          three
        </sit-tab>

        <sit-tab-panel name="one">one</sit-tab-panel>
        <sit-tab-panel name="two">two</sit-tab-panel>
        <sit-tab-panel name="three">three</sit-tab-panel>
    </sit-tab-group>
    <sit-tab-group variant="underlined" orientation="vertical" density="compact">
        <sit-tab slot="nav" panel="one" variant="solid">
          lukhei test
        </sit-tab>
        <sit-tab slot="nav" disabled panel="two">
          cdisabled
        </sit-tab>
        <sit-tab slot="nav" panel="three">
          <sit-icon slot="icon" name="placeholder"></sit-icon>
          three
        </sit-tab>
        <sit-tab-panel name="one">one</sit-tab-panel>
        <sit-tab-panel name="two">two</sit-tab-panel>
        <sit-tab-panel name="three">three</sit-tab-panel>
    </sit-tab-group>
</template>
