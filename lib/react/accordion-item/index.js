'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitAccordionItem } from '../components/Accordion/sit-accordion-item.js';
import { register } from '../utils/ce-registry.js';

register("sit-accordion-item", SitAccordionItem);
var index = createComponent({
    react: React,
    tagName: "sit-accordion-item",
    elementClass: SitAccordionItem,
    events: {
        onSitShow: "sit-show",
        onSitAfterShow: "sit-after-show",
        onSitHide: "sit-hide",
        onSitAfterHide: "sit-after-hide"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
