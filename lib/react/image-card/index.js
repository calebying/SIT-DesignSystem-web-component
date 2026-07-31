'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitImageCard } from '../components/ImageCard/sit-image-card.js';
import { register } from '../utils/ce-registry.js';

register("sit-image-card", SitImageCard);
var index = createComponent({
    react: React,
    tagName: "sit-image-card",
    elementClass: SitImageCard,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
