<script lang="ts" setup>
import "@sit-canvas/canvas-web-component/components/Skeleton/index.js"
import "@sit-canvas/canvas-web-component/components/ThumbnailCard/index.js"
</script>

<template>
  <div class="sit-container">
    <div class="sit-grid">
      <div class="col-4">
        <sit-thumbnail-card>
          <!-- skeleton for product card image -->
          <sit-skeleton
            slot="thumbnail"
            sheen
            width="var(--sit-dimension-128)"
            height="var(--sit-dimension-64)"
          />

          <!-- skeleton for product card name -->
          <sit-skeleton
            slot="title"
            sheen
            width="var(--sit-dimension-224)"
            height="var(--sit-dimension-32)"
          />

          <!-- skeleton for product card status -->
          <sit-skeleton
            sheen
            width="var(--sit-dimension-96)"
            height="var(--sit-dimension-24)"
          />

          <sit-skeleton
            slot="description"
            :rows="3"
            sheen
            width="264px"
            height="76px"
          />

          <div slot="lower">
            <sit-skeleton
              sheen
              width="var(--sit-dimension-96)"
              height="var(--sit-dimension-24)"
            />
          </div>
        </sit-thumbnail-card>
      </div>
    </div>
  </div>
</template>
