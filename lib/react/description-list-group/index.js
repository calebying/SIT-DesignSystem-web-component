'use client';
import * as React from 'react';
import { createComponent } from '@lit/react';
import { SitDescriptionListGroup } from '../components/DescriptionList/sit-description-list-group.js';
import { register } from '../utils/ce-registry.js';

register("sit-description-list-group", SitDescriptionListGroup);
var index = createComponent({
    react: React,
    tagName: "sit-description-list-group",
    elementClass: SitDescriptionListGroup,
    events: {}
});

export { index as default };
//# sourceMappingURL=index.js.map
