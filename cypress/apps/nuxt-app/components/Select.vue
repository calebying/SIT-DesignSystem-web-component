<script lang="ts" setup>
import "@sit-canvas/canvas-web-component/components/Select/index.js";

const open = false;
</script>

<template>
  <sit-select value="1" id="select-example" label="Select label" hinttext="Select an option" placeholder="Select an option">
    <sit-select-option value="1">Afghanistan</sit-select-option>
    <sit-select-option value="2">Albania</sit-select-option>
    <sit-select-option value="3" disabled="">Algeria</sit-select-option>
  </sit-select>
</template>
