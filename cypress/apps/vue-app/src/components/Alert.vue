<template>
  <sit-alert variant="info" show dismissible title="Title">
    <sit-icon slot="icon" name="exclamation-circle-fill"></sit-icon>
    <span>This is an Alert component. You may add the dismissible option</span>
  </sit-alert>
  <sit-alert variant="success" outlined title="Hello, nice to meet you">
    <sit-icon slot="icon" name="exclamation-circle-fill"></sit-icon>
    <div>
      <p>
        Aww yeah, you successfully read this important
        <sit-alert-link href="#" target="undefined">alert message</sit-alert-link>. This example text is going to run
        a bit longer so that you can see how spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
  </sit-alert>
</template>
