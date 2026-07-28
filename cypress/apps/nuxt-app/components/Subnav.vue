<script lang="ts" setup>
import "@sit-canvas/canvas-web-component/components/Subnav/index.js"
</script>

<template>
  <sit-subnav>
    <h5 slot="header">STACKx Cybersecurity</h5>
    <sit-subnav-item active><a href="#">Overview</a></sit-subnav-item>
    <sit-subnav-item><a href="#">On-site Activites</a></sit-subnav-item>
    <sit-subnav-item><a href="#">Programme</a></sit-subnav-item>
    <sit-subnav-item><a href="#">Speakers</a></sit-subnav-item>
    <sit-subnav-item><a href="#">Partners</a></sit-subnav-item>
    <sit-subnav-item><a href="#">Recordings</a></sit-subnav-item>
    <sit-subnav-item><a href="#">FAQ</a></sit-subnav-item>
    <sit-button slot="actions" size="sm" fullWidth>Register</sit-button>
    <sit-button slot="actions" size="sm" fullWidth>Exhibit</sit-button>
    <sit-button slot="actions" size="sm" fullWidth>Exhibit</sit-button>
  </sit-subnav>
</template>
