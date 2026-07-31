'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitFooterItem } from '../components/Footer/sit-footer-item.js';
import { register } from '../utils/ce-registry.js';

register("sit-footer-item", SitFooterItem);
var index = createComponent({
    react: React,
    tagName: "sit-footer-item",
    elementClass: SitFooterItem,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
