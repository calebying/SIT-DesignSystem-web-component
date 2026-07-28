<template>
    <sit-checkbox id="hehe">1</sit-checkbox>
    <sit-checkbox>2</sit-checkbox>
    <sit-checkbox>3</sit-checkbox>
    <sit-checkbox disabled>disabled</sit-checkbox>

    <form>
        <sit-checkbox-group hasFeedback invalidFeedback="Please correct the invalid options above"
            label="Select Your Preferences" hintText="Please choose one or more options:">
            <sit-checkbox value="option1" hasFeedback required>Option 1</sit-checkbox>
            <sit-checkbox indeterminate value="option2" required>Option 2 indeterminate</sit-checkbox>
            <sit-checkbox disabled value="option3" required>Option 3</sit-checkbox>
        </sit-checkbox-group>
        <sit-button type="submit">Submit</sit-button>
    </form>
</template>
