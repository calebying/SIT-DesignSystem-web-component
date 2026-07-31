'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitMainnavDropdown } from '../components/Mainnav/sit-mainnav-dropdown.js';
import { register } from '../utils/ce-registry.js';

register("sit-mainnav-dropdown", SitMainnavDropdown);
var index = createComponent({
    react: React,
    tagName: "sit-mainnav-dropdown",
    elementClass: SitMainnavDropdown,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
