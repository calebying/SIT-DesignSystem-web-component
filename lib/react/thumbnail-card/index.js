'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitThumbnailCard } from '../components/ThumbnailCard/sit-thumbnail-card.js';
import { register } from '../utils/ce-registry.js';

register("sit-thumbnail-card", SitThumbnailCard);
var index = createComponent({
    react: React,
    tagName: "sit-thumbnail-card",
    elementClass: SitThumbnailCard,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
