<script setup lang="ts">
const steps = [
    {
        stepHeader: "Personal Details",
        component: "1 test"
    },
    {
        stepHeader: "Address and Contact Information",
        component: "2 test"
    },
    {
        stepHeader: "Review",
        component: "3 test"
    }
]
</script>

<template>
    <sit-stepper .steps="steps" .activeStep="1"></sit-stepper>
</template>
