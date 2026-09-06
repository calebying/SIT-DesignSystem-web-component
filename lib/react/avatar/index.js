'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitAvatar } from '../components/Avatar/sit-avatar.js';
import { register } from '../utils/ce-registry.js';

register("sit-avatar", SitAvatar);
var index = createComponent({
    react: React,
    tagName: "sit-avatar",
    elementClass: SitAvatar,
    events: {
        onSitError: "sit-error"
    }
});

export { index as default };
//# sourceMappingURL=index.js.map
