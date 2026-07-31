'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitMainnavItem } from '../components/Mainnav/sit-mainnav-item.js';
import { register } from '../utils/ce-registry.js';

register("sit-mainnav-item", SitMainnavItem);
var index = createComponent({
    react: React,
    tagName: "sit-mainnav-item",
    elementClass: SitMainnavItem,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
