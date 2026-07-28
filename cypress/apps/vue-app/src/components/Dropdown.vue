<template>
    <div>
        <sit-dropdown menuVariant="default" drop="down">
            <sit-button slot="toggler" role="button">
            Dropdown
            <sit-icon name="chevron-down" slot="rightIcon"></sit-icon>
            </sit-button>
            <sit-dropdown-item active>
            sdfjhskfjhs ksljdhfskljdfh sdkljfhasdasdasdasdsadasdasd sdf
            </sit-dropdown-item>
            <sit-dropdown-item>
            <div href="#">Home</div>
            </sit-dropdown-item>
            <sit-dropdown-item>
            <sit-checkbox>Hello</sit-checkbox>
            </sit-dropdown-item>
            <sit-dropdown-item active>
            <a href="https://google.com" target="_blank"><sit-icon name="placeholder"></sit-icon>Option target
                blank</a>
            </sit-dropdown-item>
            <sit-dropdown-item disabled>
            <a href="#"><sit-icon name="placeholder"></sit-icon>Option disabled</a>
            </sit-dropdown-item>
            <sit-dropdown-item>
            <a href="#"><sit-icon name="placeholder"></sit-icon>Option label</a>
            </sit-dropdown-item>
            <sit-dropdown-item disabled><sit-icon name="placeholder"></sit-icon>Option label</sit-dropdown-item>
            <sit-dropdown-item><sit-icon name="placeholder"></sit-icon>Option label</sit-dropdown-item>
            <sit-dropdown-item><sit-icon name="placeholder"></sit-icon>Option label</sit-dropdown-item>
            <sit-dropdown-item><sit-icon name="placeholder"></sit-icon>Option label</sit-dropdown-item>
            <sit-dropdown-item><sit-icon name="placeholder"></sit-icon>Option label</sit-dropdown-item>
        </sit-dropdown>
    </div>
</template>
