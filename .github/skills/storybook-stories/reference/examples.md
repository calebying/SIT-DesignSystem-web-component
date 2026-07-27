# Story Examples Reference

Real-world component examples from the codebase to use as models when writing new stories.

## Multiple Variants (Alert)

Renders all semantic variants in a single loop using a local template:

```javascript
// stories/component-templates/Alert/additional.stories.js
import { html } from "lit";

const VariantTemplate = args => {
  const variants = [
    { variant: "Info", icon: "info-circle-fill" },
    { variant: "Success", icon: "check-circle-fill" },
    { variant: "Danger", icon: "exclamation-circle-fill" }
  ];
  return html`
    <div class="d-flex-column">
      ${variants.map(v => html`
        <sit-alert variant=${v.variant.toLowerCase()} show title="${v.variant} alert">
          <sit-icon slot="icon" name=${v.icon}></sit-icon>
          <div>Description</div>
        </sit-alert>
      `)}
    </div>
  `;
};

export const AllVariants = {
  render: VariantTemplate.bind({}),
  name: "All Variants",
  args: {},
  parameters: {},
  tags: ["!dev"]
};
```

## Inline Event Listener (SystemBanner)

Uses `<script>` inside the template for interactive demos that require DOM event wiring:

```javascript
// stories/component-templates/SystemBanner/additional.stories.js
import { html } from "lit";

const ShowMoreHookTemplate = args => html`
  <sit-system-banner show id="banner-example" dismissible>
    <sit-system-banner-item>
      Long content that will be truncated...
    </sit-system-banner-item>
  </sit-system-banner>
  <sit-modal></sit-modal>

  <script>
    const banner = document.querySelector("#banner-example");
    const modal = document.querySelector("sit-modal");
    banner.addEventListener("sit-show-more", () => {
      modal.show();
    });
  </script>
`;

export const ShowMore = {
  render: ShowMoreHookTemplate.bind({}),
  name: "Show More",
  args: {},
  parameters: {},
  tags: ["!dev"]
};
```

## Reusing Template from basic.js

`Template` is in scope via concatenation. Use `Template.bind({})` with custom args:

```javascript
// No import needed — Template comes from basic.js via concatenation
export const NoClampAction = {
  render: Template.bind({}),
  name: "No Clamp Action",
  args: {
    show: true,
    noClampAction: true
  },
  parameters: {},
  tags: ["!dev"]
};
```

## Documentation (additional.mdx)

Each additional story should have a matching doc section:

```mdx
## Show More

Triggered when the banner content overflows the clamped area. Connects to a modal.

**Key behaviors:**
- Event `sit-show-more` fires when user clicks "Show more"
- Host page decides what to do in the event handler

<Canvas of={SystemBannerStories.ShowMore}>
  <Story of={SystemBannerStories.ShowMore} />
</Canvas>
```
