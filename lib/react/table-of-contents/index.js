'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitTableOfContents } from '../components/TableOfContents/sit-table-of-contents.js';
import { register } from '../utils/ce-registry.js';

register("sit-table-of-contents", SitTableOfContents);
var index = createComponent({
    react: React,
    tagName: "sit-table-of-contents",
    elementClass: SitTableOfContents,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
