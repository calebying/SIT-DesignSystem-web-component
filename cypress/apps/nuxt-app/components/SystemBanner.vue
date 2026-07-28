<script lang="ts" setup>
import "@sit-canvas/canvas-web-component/components/SystemBanner/index.js"
import "@sit-canvas/canvas-web-component/components/Link/index.js"
import "@sit-canvas/canvas-web-component/components/Button/index.js"
</script>

<template>
<sit-system-banner show="">
  <sit-system-banner-item>
    <sit-icon slot="icon" name="placeholder" size="md"></sit-icon>
    <div>
      Etiam suscipit nisi eget porta cursus. Ut sit amet felis aliquet, pellentesque mi at, vulputate nunc. Vivamus ac
      facilisis tellus.
    </div>
    <sit-link size="sm" variant="light" slot="action"><a href="#">Action link<sit-icon name="arrow-right" size="md"></sit-icon></a></sit-link>
  </sit-system-banner-item>
  <sit-system-banner-item>
    <sit-icon slot="icon" name="placeholder" size="md"></sit-icon>
    <div>
      Etiam suscipit nisi eget porta cursus. Ut sit amet felis aliquet, pellentesque mi at, vulputate nunc. Vivamus ac
      facilisis tellus. Maecenas ac libero scelerisque tellus maximus accumsan a vehicula arcu. Aenean quis leo gravida,
      congue sapien eu, rhoncus
    </div>
    <sit-button href="#" slot="action" size="sm" tone="fixed-light" variant="outline">
      Action button
      <sit-icon name="arrow-right" slot="rightIcon" size="md"></sit-icon>
    </sit-button>
  </sit-system-banner-item>
  <sit-system-banner-item>
    <sit-icon slot="icon" name="placeholder" size="md"></sit-icon>
    <div>
      Etiam suscipit nisi eget porta cursus. Ut sit amet felis aliquet, pellentesque mi at, vulputate nunc. Vivamus ac
      facilisis tellus. Maecenas ac libero scelerisque tellus maximus accumsan a vehicula arcu. Aenean quis leo gravida,
      congue sapien eu, rhoncus
    </div>
    <sit-link size="sm" variant="light" slot="action"><a href="#">Action link<sit-icon name="arrow-right" size="md"></sit-icon></a></sit-link>
  </sit-system-banner-item>
</sit-system-banner>
</template>
