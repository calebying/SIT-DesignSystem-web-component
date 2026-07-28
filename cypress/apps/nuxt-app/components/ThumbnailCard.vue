
<script lang="ts" setup>
import "@sit-canvas/canvas-web-component/components/ThumbnailCard/index.js";
import "@sit-canvas/canvas-web-component/components/Badge/index.js";
import "@sit-canvas/canvas-web-component/components/IconList/index.js";
import "@sit-canvas/canvas-web-component/components/Icon/index.js";
import "@sit-canvas/canvas-web-component/components/Link/index.js";


</script>
<template>
     <sit-thumbnail-card orientation="vertical">
        <img slot="thumbnail" alt="img alternate text goes here" width="48" height="48" src="https://example.com/logo.svg">
        <sit-badge variant="primary" slot="upper">New</sit-badge>
        <span slot="subtitle">EXPLORE THE FEATURES</span>
        <span slot="title">Innovative Solutions for You</span>
        <sit-icon-list size="sm">
          <div role="listitem"><sit-icon size="md" name="calendar"></sit-icon>12 September</div>
          <div role="listitem"><sit-icon size="md" name="laptop"></sit-icon>Online</div>
        </sit-icon-list>
        <span slot="description">Discover how our platform can streamline your workflow and enhance productivity. With cutting-edge technology
          and user-friendly design, we empower you to achieve more.</span>
        <div slot="lower">
          <sit-badge variant="neutral" outlined="">Design</sit-badge>
        </div>
        <sit-link slot="footer">
          <a href="#">Register now <sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-thumbnail-card>
</template>