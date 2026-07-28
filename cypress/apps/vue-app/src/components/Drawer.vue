<script setup lang="ts">
const showDrawer = () => {
    const drawer = document.querySelector("sit-drawer");
    drawer?.show();
};
const closeDrawer = () => {
    const drawer = document.querySelector("sit-drawer");
    drawer?.hide();
};
</script>

<template>
    <sit-button @click="showDrawer">Open end Drawer</sit-button>
    <sit-drawer label="" placement="end">
        This is a Drawer
        <sit-button @click="closeDrawer" slot="footer" variant="link" class="close-drawer">Close</sit-button>
        <sit-button slot="footer" variant="primary" type="submit" form="formA">Submit</sit-button>
    </sit-drawer>
</template>
