<template>
    <sit-toast show dismissible>
        <sit-icon slot="icon" name="info-circle-fill"></sit-icon>
        This is a toast notifications helklo world
    </sit-toast>
    <sit-toast-container position="bottom-start">
        <sit-toast show dismissible variant="warning">
            <sit-icon slot="icon" name="exclamation-triangle-fill"></sit-icon>
            <sit-link slot="action" href="#" target="_blank">Action</sit-link>
            This is a toast notifications
        </sit-toast>
    </sit-toast-container>
</template>
