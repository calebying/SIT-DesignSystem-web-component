<script lang="ts" setup>
import "@sit-canvas/canvas-web-component/components/Accordion/index.js"

const open = false;
</script>

<template>
  <sit-accordion :open>
    <sit-accordion-item>
      <div slot="header">Accordion 1</div>
      <sit-icon slot="caret" name="arrow-bar-down"></sit-icon>
      <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        soluta eaque fugit fuga distinctio? Eum.</span>
    </sit-accordion-item>
    <sit-accordion-item disabled>
      <div slot="header">Accordion 2</div>
      <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        soluta eaque fugit fuga distinctio? Eum.</span>
    </sit-accordion-item>
    <sit-accordion-item open>
      <div slot="header">Accordion 3</div>
      <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        soluta eaque fugit fuga distinctio? Eum.</span>
    </sit-accordion-item>
  </sit-accordion>
</template>
