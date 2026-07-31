---
name: "sit-data-visualisation"
description: "Use this skill when users ask about data visualisation, charts, graphs, or dashboards in an Canvas application. Covers ECharts setup and applying the Canvas colour palette to charts."
metadata:
  author: sit-canvas
  version: "0.0.0"
  audience: external
  category: pattern
---

# Canvas Data Visualisation Pattern

Canvas does not bundle a charting library. For data visualisation, use **Apache ECharts** and apply the Canvas colour palette so charts remain visually consistent with your design system.

---

## Prerequisites

- Complete base project setup per **[sit-getting-started](../sit-getting-started/SKILL.md)**.
- Install and configure ECharts independently — see [https://echarts.apache.org/](https://echarts.apache.org/).

---

## Installing ECharts

ECharts is not included in `@sit-canvas/canvas-web-component`. Install it separately:

```bash
npm install echarts
```

Then import and initialise per the [ECharts getting started guide](https://echarts.apache.org/handbook/en/get-started):

```js
import * as echarts from "echarts";

const chart = echarts.init(document.getElementById("chart"));
chart.setOption(option);
```

---

## Canvas Colour Palette for ECharts

Apply the Canvas palette by setting the `color` array in your chart option. The values below are the raw hex values of the Canvas data-visualisation primitive tokens:

| Token | Hex |
|-------|-----|
| `--sit-purple-600` | `#ac1cdb` |
| `--sit-cyan-600` | `#00758d` |
| `--sit-green-600` | `#0e7c3d` |
| `--sit-blue-600` | `#0269d0` |
| `--sit-yellow-600` | `#7e6917` |

### Per-chart (recommended)

Set `color` directly in the chart option. ECharts cycles through the colours sequentially across series:

```js
const option = {
  color: ["#ac1cdb", "#00758d", "#0e7c3d", "#0269d0", "#7e6917"],
  // ... rest of chart option
};
```

### Global theme (all charts on the page)

Register a named theme once at app startup, then pass the theme name when initialising each chart:

```js
import * as echarts from "echarts";

echarts.registerTheme("sit", {
  color: ["#ac1cdb", "#00758d", "#0e7c3d", "#0269d0", "#7e6917"],
});

const chart = echarts.init(document.getElementById("chart"), "sit");
```

---

## For AI Agents

1. ECharts is **not provided by Canvas** — always tell users to install it separately from [https://echarts.apache.org/](https://echarts.apache.org/).
2. The five Canvas palette colours are fixed hex values taken from the primitive tokens. Do not reference CSS variables inside the ECharts `color` array — ECharts does not resolve CSS custom properties.
3. For a single chart, set `color` in the option object. For multiple charts sharing the same palette, use `echarts.registerTheme()` once at app startup.
4. Palette order: purple → cyan → green → blue → yellow. ECharts cycles through them automatically across series.
