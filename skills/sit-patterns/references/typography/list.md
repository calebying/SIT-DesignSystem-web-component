# List Patterns Reference

Ordered and unordered lists in three size variants, supporting nested list items. Use for displaying sequential or grouped content.


## Token Composition

Lists use dedicated `text-list-*` font-size tokens (not `text-body-*`) with corresponding list spacing:

| Variant | Classes (apply to `<ul>`/`<ol>` and each `<li>`) |
|---------|---------|
| List Large Regular | `sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:my-list-lg` |
| List Medium Regular *(default)* | `sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md` |
| List Small Regular | `sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm` |

**Last item rule:** Use `sit:mt-list-*` (no bottom margin) on the last `<li>` to avoid extra whitespace.

## Unordered Lists (UL)

| Pattern Name | File Path | URL | Use Case |
|---|---|---|---|
| UL List Small Regular | `ul-body-sm.stories.js` | ul-body-sm.stories.js | Unordered list with small text |
| UL List Medium Regular | `ul-body-md.stories.js` | ul-body-md.stories.js | Unordered list with medium text |
| UL List Large Regular | `ul-body-lg.stories.js` | ul-body-lg.stories.js | Unordered list with large text |

## Ordered Lists (OL)

| Pattern Name | File Path | URL | Use Case |
|---|---|---|---|
| OL List Small Regular | `ol-body-sm.stories.js` | ol-body-sm.stories.js | Ordered list with small text |
| OL List Medium Regular | `ol-body-md.stories.js` | ol-body-md.stories.js | Ordered list with medium text |
| OL List Large Regular | `ol-body-lg.stories.js` | ol-body-lg.stories.js | Ordered list with large text |

## How to Use

Each pattern file is a JavaScript/TypeScript module exporting a Lit template. To fetch the raw template:

1. Use the URL from the table above
2. Look for the template function (e.g., `const OLBodyLgTemplate = () => html\`...\``)
3. Extract the HTML markup from the template literal
4. Adapt the markup to your list content, including nested items if needed

Copy the template structure, substitute your list items, and it's ready to use.
