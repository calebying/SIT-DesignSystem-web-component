'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitIconCard } from '../components/IconCard/sit-icon-card.js';
import { register } from '../utils/ce-registry.js';

register("sit-icon-card", SitIconCard);
var index = createComponent({
    react: React,
    tagName: "sit-icon-card",
    elementClass: SitIconCard,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
