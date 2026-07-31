# Canvas Breakpoint Utilities

Helps developers apply responsive styles using Canvas breakpoint prefixes.

## Syntax

With the `sit` Tailwind prefix, responsive variants go **after** the prefix:

```
sit:<breakpoint>:<utility>
```

**Correct:** `sit:sm:hidden`, `sit:lg:flex-row`, `sit:md:grid-cols-3`

**Wrong:** `sm:sit:hidden`, `lg:sit:flex-row` (variant before prefix does NOT work)

## Available Breakpoints

| Prefix | CSS Variable | Min-width |
|--------|-------------|-----------|
| `sit:xs:` | `--sit-breakpoint-xs` | 320px |
| `sit:sm:` | `--sit-breakpoint-sm` | 512px |
| `sit:md:` | `--sit-breakpoint-md` | 768px |
| `sit:lg:` | `--sit-breakpoint-lg` | 1024px |
| `sit:xl:` | `--sit-breakpoint-xl` | 1280px |
| `sit:2-xl:` | `--sit-breakpoint-2-xl` | 1440px |
| `sit:3-xl:` | `--sit-breakpoint-3-xl` | 1680px (sidebar layouts) |

## How It Works

Breakpoints are mobile-first (`min-width`). A class like `sit:md:hidden` applies `display: none` at 768px and above.

Stack breakpoints from smallest to largest — each overrides the previous:

```html
<div class="sit:grid sit:grid-cols-1 sit:sm:grid-cols-2 sit:lg:grid-cols-4">
```

## Common Patterns

| Pattern | Example |
|---------|---------|
| Responsive columns | `sit:grid sit:grid-cols-1 sit:sm:grid-cols-2 sit:lg:grid-cols-4` |
| Stack to row | `sit:flex sit:flex-col sit:md:flex-row` |
| Show at breakpoint | `sit:hidden sit:md:inline-flex` |
| Hide at breakpoint | `sit:block sit:lg:hidden` |
| Responsive padding | `sit:p-sm sit:md:p-lg sit:xl:p-2-xl` |
| Responsive gap | `sit:gap-xs sit:md:gap-md sit:xl:gap-xl` |

---

**For AI Agents**: Always place the breakpoint variant after the `sit:` prefix (`sit:md:flex-row`), never before it. This is a Tailwind v4 prefix requirement. All standard Tailwind utilities support responsive variants with this syntax.
