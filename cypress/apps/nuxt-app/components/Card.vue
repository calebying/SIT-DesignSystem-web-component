<script lang="ts" setup>
import "@sit-canvas/canvas-web-component/components/Card/index.js";
import "@sit-canvas/canvas-web-component/components/Link/index.js";
</script>

<template>
  <div class="sit-container">
    <div class="sit-grid">
      <sit-card class="sit-col-4 sit-col-sm-4 sit-col-md-4 sit-col-lg-4" hasImageSlot>
        <img slot="image" alt="img alternate text goes here" width="286" height="191"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80">
        <span slot="subtitle">SUBTITLE</span>
        <span slot="title">Vertical Image Card</span>
        <span slot="description">default vertical card default vertical card default vertical card default vertical card default vertical card</span>
        <sit-link slot="link">
          <a href="#" disabled>SM light dom anchor<sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-card>
      <sit-card class="sit-col-3 sit-col-sm-4 sit-col-md-4 sit-col-lg-4" hasImageSlot>
        <img slot="image" alt="img alternate text goes here" width="286" height="191"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80">
        <span slot="subtitle">SUBTITLE</span>
        <span slot="title">Vertical Image Card</span>
        <span slot="description">default vertical card</span>
        <sit-link slot="link">
          <a href="#">SM light dom anchor<sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-card>
      <sit-card class="sit-col-2 sit-col-sm-4 sit-col-md-4 sit-col-lg-4" hasImageSlot>
        <img slot="image" alt="img alternate text goes here" width="286" height="191"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80">
        <span slot="subtitle">SUBTITLE</span>
        <span slot="title">Vertical Image Card</span>
        <span slot="description">default vertical card</span>
        <sit-link slot="link">
          <a href="#">SM light dom anchor<sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-card>
      <sit-card class="sit-col-2 sit-col-sm-4 sit-col-md-4 sit-col-lg-4" hasImageSlot>
        <img slot="image" alt="img alternate text goes here" width="286" height="191"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80">
        <span slot="subtitle">SUBTITLE</span>
        <span slot="title">Vertical Image Card</span>
        <span slot="description">default vertical card</span>
        <sit-link slot="link">
          <a href="#">SM light dom anchor<sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-card>
    </div>
  </div>
</template>
