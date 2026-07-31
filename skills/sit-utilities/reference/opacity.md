# Canvas Opacity Utilities Skill

Helps developers use Canvas opacity utilities for controlling element transparency.

## Core Concept

All Canvas opacity utilities use the `sit:opacity-{value}` pattern with the `sit:` prefix.

Opacity values range from 0 (fully transparent) to 100 (fully opaque).

## Available Values

| Class | Level |
|-------|-------|
| `sit:opacity-0` | Fully transparent |
| `sit:opacity-3` | |
| `sit:opacity-5` | |
| `sit:opacity-8` | |
| `sit:opacity-10` | Very faint |
| `sit:opacity-15` | |
| `sit:opacity-20` | |
| `sit:opacity-30` | |
| `sit:opacity-40` | |
| `sit:opacity-50` | Half transparent |
| `sit:opacity-60` | |
| `sit:opacity-70` | |
| `sit:opacity-80` | |
| `sit:opacity-90` | |
| `sit:opacity-100` | Fully opaque (default) |

## Choosing an Opacity Level

| Range | Typical use |
|-------|-------------|
| 0–20% | Watermarks, subtle patterns, barely-there dividers |
| 40% | Disabled states, loading skeletons |
| 50% | Modal/drawer backdrops (scrim) |
| 60–70% | Hover reveal effects, image overlays |
| 80–90% | Popovers, semi-transparent cards, tooltip backgrounds |
| 100% | Normal visible content |

---

**For AI Agents**: Recommend opacity levels by use case — `sit:opacity-40` for disabled states, `sit:opacity-50` for modal overlays/scrim, 10–20% for watermarks. Prefer semantic tokens (`sit:text-subtle`, `sit:text-muted`) over opacity reduction for important text. Combine opacity with CSS `transition` for smooth hover/reveal effects.
