# Vue

Web components are [fully supported in Vue](https://custom-elements-everywhere.com/#vue) and can be used directly.

## Installation

Locally install the library or use CDN by adding the script tag to entry point of the Vue application. Follow instructions in `Installation` and `Imports` documentation section

## Configuration

Tell Vue to ignore sit web components and skip component resolution.

### Vite config

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags that starts with sit as custom elements
          isCustomElement: tag => tag.includes("sit-")
        }
      }
    })
  ]
});
```

## Importing the library

Import the library and its theme once in your entry point and use it throughout your application.

```html
<!-- App.vue -->
<script setup lang="ts">
import "@sit-canvas/canvas-web-component/themes/day.css";
import "@sit-canvas/canvas-web-component";
</script>
```

## Usage

See Vue's documentation on usage with [custom elements](https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue)

### Attribute binding

```html
<template>
  <sit-footer
    :title="footerAttr.title"
    :description="footerAttr.description"
    :lastUpdatedDate="footerAttr.date"
    .:links="footerAttr.links"
  ></sit-footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const footerAttr = computed(() => ({
  title: "Canvas",
  description: "this is a description",
  date: new Date().toDateString(),
  links: [
    {
      title: "Column 1",
      links: [
        { href: "#1", label: "About Us" },
        { href: "#2", label: "This is a super long link" },
        { href: "#3", label: "Test" }
      ]
    },
    {
      title: "Column 2",
      links: [
        { href: "#1", label: "About Us" },
        { href: "#2", label: "This is a super long link" },
        { href: "#3", label: "Test" }
      ]
    }
  ]
}));
</script>
```

### v-model and event handling

```html
<template>
  <form>
    <sit-input
      @sit-input="onInput"
      v-model="inputValue"
      placeholder="Enter your name"
    ></sit-input>
    <div>Name: {{ inputValue }}</div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputValue = ref("defaultValue");

const onInput = () => {
  console.log("inputting");
};
</script>
```

### Slots

```html
<template>
  <sit-sidenav>
    <sit-sidenav-item>
      <span slot="title">SideNav Item #1</span>
      <sit-sidenav-link>sit-sidenav-link</sit-sidenav-link>
      <sit-sidenav-link href="#" disabled="">sit-sidenav-link</sit-sidenav-link>
      <sit-sidenav-link href="#">sit-sidenav-link</sit-sidenav-link>
    </sit-sidenav-item>
    <sit-sidenav-item>
      <span slot="title">SideNav Item #2</span>
      <sit-sidenav-link href="#">sit-sidenav-link</sit-sidenav-link>
      <sit-sidenav-link href="#">sit-sidenav-link</sit-sidenav-link>
    </sit-sidenav-item>
    <sit-sidenav-item href="#">
      <span slot="title">SideNav Item #3</span>
    </sit-sidenav-item>
  </sit-sidenav>
</template>
```
