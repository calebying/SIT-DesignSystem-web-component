'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitSubnavItem } from '../components/Subnav/sit-subnav-item.js';
import { register } from '../utils/ce-registry.js';

register("sit-subnav-item", SitSubnavItem);
var index = createComponent({
    react: React,
    tagName: "sit-subnav-item",
    elementClass: SitSubnavItem,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
