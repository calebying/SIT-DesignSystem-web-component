# Basic Details Card

A bordered card that displays a set of key-value pairs for a single entity, with an optional edit action. Use to present read-only summary information about a record.

## When to use

- Displaying entity metadata (ID, name, description, contact info)
- Summary panels on detail/profile pages
- Anywhere a user needs to review field values before taking an action

## Block anatomy

```
Basic details card
├── Card title (h5, subtitle/md-semibold)
├── Key-value list (flex-col, gap-text-md)
│   └── Field (repeat per field)
│       ├── Label (div, label/md-semibold)
│       └── Value (div, label/md-regular) or sit-link for URLs/emails
└── Action (sit-button, optional)
```

## Complete block

```html
<div class="sit:bg-surface-default sit:border sit:border-muted sit:rounded-lg sit:p-component-xs sit:flex sit:flex-col sit:gap-5">

  <!-- Card title -->
  <h5 class="sit:text-subtitle-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-heading-default sit:mb-0">
    Basic details
  </h5>

  <!-- Key-value pairs -->
  <div class="sit:flex sit:flex-col sit:gap-text-md">

    <div class="sit:flex sit:flex-col sit:gap-text-2-xs">
      <div class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-label-default">Application ID</div>
      <div class="sit:text-label-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-label-default">Fantastic-Grizzly-Bear-0f4bed5f-ea64-41a6-9b16-49d7eb84b81c</div>
    </div>

    <div class="sit:flex sit:flex-col sit:gap-text-2-xs">
      <div class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-label-default">Organisation</div>
      <div class="sit:text-label-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-label-default">[GVT] APEX</div>
    </div>

    <div class="sit:flex sit:flex-col sit:gap-text-2-xs">
      <div class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-label-default">Description</div>
      <div class="sit:text-label-md sit:font-regular sit:leading-xs sit:tracking-normal sit:text-label-default">This application provides secure access to government services and APIs, enabling seamless integration with external systems.</div>
    </div>

    <div class="sit:flex sit:flex-col sit:gap-text-2-xs">
      <div class="sit:text-label-md sit:font-semibold sit:leading-xs sit:tracking-normal sit:text-label-default">Email</div>
      <sit-link><a href="mailto:petrine@tech.gov.sg">petrine@tech.gov.sg</a></sit-link>
    </div>

  </div>

  <!-- Action -->
  <sit-button variant="primary">
    <sit-icon name="pencil" slot="leftIcon"></sit-icon>
    Edit details
  </sit-button>

</div>
```

## Customisation notes

- Add or remove `<div class="sit:flex sit:flex-col sit:gap-text-2-xs">` blocks for each field
- Use `<sit-link><a href="...">...</a></sit-link>` for any value that is a URL or email address
- The action button is optional — omit entirely if the card is view-only
- `sit:gap-5` (20px) is used for the card's internal section gap; this is a raw token as no semantic token maps to 20px
