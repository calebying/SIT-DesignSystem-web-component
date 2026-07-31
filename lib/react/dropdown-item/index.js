'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitDropdownItem } from '../components/Dropdown/sit-dropdown-item.js';
import { register } from '../utils/ce-registry.js';

register("sit-dropdown-item", SitDropdownItem);
var index = createComponent({
    react: React,
    tagName: "sit-dropdown-item",
    elementClass: SitDropdownItem,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
