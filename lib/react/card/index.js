'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitCard } from '../components/Card/sit-card.js';
import { register } from '../utils/ce-registry.js';

register("sit-card", SitCard);
var index = createComponent({
    react: React,
    tagName: "sit-card",
    elementClass: SitCard,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
