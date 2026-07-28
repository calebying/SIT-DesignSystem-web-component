<script lang="ts" setup>
import "@sit-canvas/canvas-web-component/components/DescriptionList/index.js"
</script>

<template>
  <sit-description-list-group stacked bordered hasTitleSlot hasDescriptionSlot>
    <span slot="title"> Title Border</span>
    <span slot="description">Description</span>

    <sit-description-list>
      Label Stacked 1
      <span slot="data">Data Text Description List 1</span>
    </sit-description-list>

    <sit-description-list>
      Label Stacked 2
      <span slot="data">Data Text Description List 2</span>
    </sit-description-list>
  </sit-description-list-group>
  <sit-description-list-group stacked hasTitleSlot hasDescriptionSlot>
    <span slot="title"> Title</span>
    <span slot="description">Description</span>

    <sit-description-list>
      Label Stacked 1
      <span slot="data">Data Text Description List 1</span>
    </sit-description-list>

    <sit-description-list>
      Label Stacked 2
      <span slot="data">Data Text Description List 2</span>
    </sit-description-list>
  </sit-description-list-group>
</template>