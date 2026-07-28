<script lang="ts" setup>
import "@sit-canvas/canvas-web-component/components/ComboBox/index.js";

const open = false;
</script>

<template>
    <sit-combo-box
        label="Fruits" 
        hintText="single select" 
        name="combobox" 
        placeholder="ComboBox" 
        value="1"
        multiselect
        >
            <sit-combo-box-option value="1">One</sit-combo-box-option>
            <sit-combo-box-option value="2">Two</sit-combo-box-option>
      </sit-combo-box>
</template>
