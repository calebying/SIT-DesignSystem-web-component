<template>
    <form id="radio-submit">
        <sit-radio-group required hasFeedback invalidFeedback="wrong" label="Select an option" hintText="Hint text">
            <sit-radio value="1">Option 1</sit-radio>
            <sit-radio value="2">Option 2</sit-radio>
            <sit-radio value="3" disabled>Option 3</sit-radio>
        </sit-radio-group>
        <sit-button type="submit">Submit</sit-button>
    </form>
</template>
