'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitIconList } from '../components/IconList/sit-icon-list.js';
import { register } from '../utils/ce-registry.js';

register("sit-icon-list", SitIconList);
var index = createComponent({
    react: React,
    tagName: "sit-icon-list",
    elementClass: SitIconList,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
