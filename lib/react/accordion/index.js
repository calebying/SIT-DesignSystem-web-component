'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitAccordion } from '../components/Accordion/sit-accordion.js';
import { register } from '../utils/ce-registry.js';

register("sit-accordion", SitAccordion);
var index = createComponent({
    react: React,
    tagName: "sit-accordion",
    elementClass: SitAccordion,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
