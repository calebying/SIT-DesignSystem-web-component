# Canvas Text Color Utilities Skill

Canvas text color utilities use the `sit:text-{token}` pattern. All colors are theme-aware (automatically switching between day/night) unless a `fixed` variant is used.

## Core Concept

All Canvas text utilities follow the `sit:text-{variant}-{modifier}` pattern with the `sit:` prefix.

> **Common mistake**: The word "color" never appears in the class name. Do NOT write `sit:text-color-muted`, `sit:text-color-default`, etc. The correct classes are `sit:text-muted`, `sit:text-default`, etc.

For definitions of suffix modifiers (`default`, `emphasis`, `muted`, `fixed-light`, `fixed-dark`, `inverse`, `surface`), see **[color-semantics](color-semantics.md)**.

## Quick Decision Guide

| What you need | Token to use |
|---|---|
| Body / paragraph text | `sit:text-default`, `sit:text-subtle`, `sit:text-muted` |
| Inverted surface text | `sit:text-inverse` |
| On a fixed dark background | `sit:text-fixed-light` |
| On a fixed light background | `sit:text-fixed-dark` |
| Headings | `sit:text-heading-default` |
| Display / hero headline | `sit:text-display-default` |
| Body copy | `sit:text-body-default` or `sit:text-body-subtle` |
| Form labels | `sit:text-label-default` |
| Links | `sit:text-link-default` / `sit:text-link-emphasis` |
| Success / error / warning messages | `sit:text-{success\|danger\|warning}-default` |
| Brand-colored text | `sit:text-primary-default` or `sit:text-accent-default` |

## Token Categories

Three categories cover all text color needs:

**1. Semantic base** — content hierarchy that adapts to theme (`text-default`, `text-subtle`, `text-muted`, `text-inverse`, `text-fixed-light`, `text-fixed-dark`)

**2. Semantic** — named semantic colors for specific meanings (`primary`, `accent`, `success`, `danger`, `warning`, `purple`, `cyan`, `neutral` — each with `default`, `emphasis`, `fixed-light`, `fixed-dark`)

**3. Typography roles** — purpose-specific tokens for structured content (`display-default`, `heading-default`, `body-default`, `body-subtle`, `label-default`, `link-default`, `link-emphasis`)

## Reference Documentation

| Topic | File |
|---|---|
| Semantic base colors (default, subtle, muted, inverse, fixed) | [text-color/base.md](text-color/base.md) |
| Semantic colors (primary, success, danger, warning…) | [text-color/semantic.md](text-color/semantic.md) |
| Typography role tokens (display, heading, body, label, link) | [text-color/typography-roles.md](text-color/typography-roles.md) |

---

**For AI agents**: When no specific color is requested, start with typography role tokens (`heading-default`, `body-default`, `label-default`, `link-default`) for structured content. Use semantic base tokens for generic text hierarchy. Reserve semantic colors for state or brand meaning. Prefer Canvas components (`<sit-*>`) when available.
