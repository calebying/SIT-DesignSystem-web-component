<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(async () => {
  await import("@sit-canvas/canvas-web-component/components/Mainnav/index.js");
});
import "@sit-canvas/canvas-web-component/components/Dropdown/index.js";  
</script>

<template>
  <sit-mainnav expand="lg">
    <img width="130" src="https://example.com/logo.svg" slot="brand">
    <sit-mainnav-item active>
        <a href="#">Home</a>
    </sit-mainnav-item>
    <sit-mainnav-item disabled><a href="#">About</a></sit-mainnav-item>
    <sit-mainnav-item slot="end" class="test test2"><a href="#">Info</a></sit-mainnav-item>
    <sit-mainnav-item slot="end" id="night-theme"><a href="#"><sit-icon name="lightbulb"></sit-icon></a></sit-mainnav-item>
    <sit-mainnav-dropdown>
        <span slot="toggler">Dropdown</span>
        <sit-dropdown-item disabled><a href="https://www.google.com/">Item 1</a></sit-dropdown-item>
        <sit-dropdown-item><a href="https://www.google.com/">Item 2</a></sit-dropdown-item>
        <sit-dropdown-item active><a href="#">Item 3</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
        <sit-dropdown-item><a href="#">Item 3</a></sit-dropdown-item>
    </sit-mainnav-dropdown>
    <sit-mainnav-dropdown>
        <span slot="toggler">Dropdown</span>
        <sit-dropdown-item>Item 1</sit-dropdown-item>
        <sit-dropdown-item>Item 2</sit-dropdown-item>
        <sit-dropdown-item>Item 3</sit-dropdown-item>
    </sit-mainnav-dropdown>
    <sit-button slot="end">Login</sit-button>
    <!-- <dev-console-widget slot="non-collapsible" iconColor="black" iconWidth="28px" iconHeight="28px">
    </dev-console-widget> -->
  </sit-mainnav>
</template>
