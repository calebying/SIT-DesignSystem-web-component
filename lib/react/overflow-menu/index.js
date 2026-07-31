'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitOverflowMenu } from '../components/OverflowMenu/sit-overflow-menu.js';
import { register } from '../utils/ce-registry.js';

register("sit-overflow-menu", SitOverflowMenu);
var index = createComponent({
    react: React,
    tagName: "sit-overflow-menu",
    elementClass: SitOverflowMenu,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
