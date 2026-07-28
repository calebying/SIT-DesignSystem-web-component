<template>
	<sit-mainnav>
		<img width="130" src="https://example.com/logo.svg" slot="brand">
		<sit-mainnav-item>ArgsTable Controlled </sit-mainnav-item>
		<sit-mainnav-dropdown close="default">
			<span slot="toggler">Dropdown</span>
			<sit-dropdown-item href="https://google.com">Item 1</sit-dropdown-item>
			<sit-dropdown-item href="#">Item 2</sit-dropdown-item>
			<sit-dropdown-item href="#">Item 3</sit-dropdown-item>
		</sit-mainnav-dropdown>
		<sit-mainnav-item href="#">About</sit-mainnav-item>
		<sit-mainnav-item href="#" slot="end">Contact Us</sit-mainnav-item>
		<sit-button slot="end">Login</sit-button>
	</sit-mainnav>
</template>
