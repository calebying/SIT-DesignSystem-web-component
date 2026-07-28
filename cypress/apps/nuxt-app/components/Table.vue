<script lang="ts" setup>
import "@sit-canvas/canvas-web-component/components/Table/index.js"
import "@sit-canvas/canvas-web-component/components/Badge/index.js"
import "@sit-canvas/canvas-web-component/components/Link/index.js"
import "@sit-canvas/canvas-web-component/components/IconButton/index.js"
</script>

<template>
  <sit-table rowheader="[&quot;#&quot;, &quot;First Names&quot;, &quot;Last Name&quot;, &quot;Username&quot;]"
    tabledata="[
        [&quot;1&quot;, &quot;John&quot;, &quot;Doe&quot;, &quot;@johndoe&quot;],
        [&quot;2&quot;, &quot;Jane&quot;, &quot;Doe&quot;, &quot;@janedoe&quot;],
        [&quot;3&quot;, &quot;Bob&quot;, &quot;Smith&quot;, &quot;@bobsmith&quot;]
    ]"
    hasDefaultSlot
  >
    <sit-table-row>
      <sit-table-head>#</sit-table-head>
      <sit-table-head>First name</sit-table-head>
      <sit-table-head>Last name</sit-table-head>
      <sit-table-head>Username</sit-table-head>
      <sit-table-head>Action</sit-table-head>
    </sit-table-row>

    <sit-table-row>
      <sit-table-cell>1</sit-table-cell>
      <sit-table-cell>John</sit-table-cell>
      <sit-table-cell>Doe</sit-table-cell>
      <sit-table-cell>
        <sit-link>
          <a href="#">@johndoe</a>
        </sit-link>
      </sit-table-cell>
      <sit-table-cell> </sit-table-cell>
    </sit-table-row>

    <sit-table-row>
      <sit-table-cell>2</sit-table-cell>
      <sit-table-cell>Jane</sit-table-cell>
      <sit-table-cell>Doe</sit-table-cell>
      <sit-table-cell>
        <sit-link>
          <a href="#">@janedoe</a>
        </sit-link>
      </sit-table-cell>
      <sit-table-cell>
        <sit-icon-button name="three-dots-vertical"></sit-icon-button>
      </sit-table-cell>
    </sit-table-row>

    <sit-table-row>
      <sit-table-cell>3</sit-table-cell>
      <sit-table-cell>Bob</sit-table-cell>
      <sit-table-cell>Smith</sit-table-cell>
      <sit-table-cell>
        <sit-link>
          <a href="#">@bobsmith</a>
        </sit-link>
      </sit-table-cell>
      <sit-table-cell>
        <sit-badge outlined> active </sit-badge>
      </sit-table-cell>
    </sit-table-row>
  </sit-table>
</template>