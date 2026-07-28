<script lang="ts" setup>
import "@sit-canvas/canvas-web-component/components/Button/index.js"

const variant = 'primary';
</script>

<template>
  <sit-button :variant hasRightIconSlot>
    <span class="testing">Hello</span>
    <sit-icon slot="rightIcon" name="arrow-bar-up"></sit-icon>
  </sit-button>
</template>
