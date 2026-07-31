import { html } from "lit";

export default {
  title: "Foundation/Theming/Alternate Brand Palettes"
};

const ALT_PALETTES = [
  {
    name: "Blue",
    shades: [
      { shade: 100, hex: "#EFF5FC" },
      { shade: 200, hex: "#CEE1F6" },
      { shade: 300, hex: "#A0C5EE" },
      { shade: 400, hex: "#73A9E5" },
      { shade: 500, hex: "#4288D6" },
      { shade: 600, hex: "#356DAC" },
      { shade: 700, hex: "#285483" },
      { shade: 800, hex: "#1E3E62" },
      { shade: 900, hex: "#152B44" }
    ]
  },
  {
    name: "Cyan",
    shades: [
      { shade: 100, hex: "#E0F7FE" },
      { shade: 200, hex: "#A7E9FB" },
      { shade: 300, hex: "#47D1F6" },
      { shade: 400, hex: "#00B3E2" },
      { shade: 500, hex: "#0091B8" },
      { shade: 600, hex: "#007493" },
      { shade: 700, hex: "#005971" },
      { shade: 800, hex: "#004355" },
      { shade: 900, hex: "#002E3B" }
    ]
  },
  {
    name: "Magenta",
    shades: [
      { shade: 100, hex: "#FBF2F9" },
      { shade: 200, hex: "#F2D8ED" },
      { shade: 300, hex: "#E5B2DC" },
      { shade: 400, hex: "#D98BCB" },
      { shade: 500, hex: "#C95EB7" },
      { shade: 600, hex: "#B82EA0" },
      { shade: 700, hex: "#8E247B" },
      { shade: 800, hex: "#6A1B5D" },
      { shade: 900, hex: "#4A1341" }
    ]
  },
  {
    name: "Pink",
    shades: [
      { shade: 100, hex: "#FDF0F6" },
      { shade: 200, hex: "#F9D6E4" },
      { shade: 300, hex: "#F3AECB" },
      { shade: 400, hex: "#ED84AF" },
      { shade: 500, hex: "#E54D8C" },
      { shade: 600, hex: "#C7286A" },
      { shade: 700, hex: "#991F52" },
      { shade: 800, hex: "#74173D" },
      { shade: 900, hex: "#51102B" }
    ]
  },
  {
    name: "Purple",
    shades: [
      { shade: 100, hex: "#F6F3FB" },
      { shade: 200, hex: "#E5DBF2" },
      { shade: 300, hex: "#CEBAE7" },
      { shade: 400, hex: "#B598DC" },
      { shade: 500, hex: "#9A74CF" },
      { shade: 600, hex: "#8055BB" },
      { shade: 700, hex: "#634190" },
      { shade: 800, hex: "#49306B" },
      { shade: 900, hex: "#33214A" }
    ]
  },
  {
    name: "Red",
    shades: [
      { shade: 100, hex: "#FEF0F1" },
      { shade: 200, hex: "#FDD6D8" },
      { shade: 300, hex: "#FBADB1" },
      { shade: 400, hex: "#F88289" },
      { shade: 500, hex: "#F5424B" },
      { shade: 600, hex: "#CB2B33" },
      { shade: 700, hex: "#9E2127" },
      { shade: 800, hex: "#76191E" },
      { shade: 900, hex: "#531115" }
    ]
  }
];

const ALT_DOCS = `
Canvas products should use one of the pre-approved alternate colour palettes shipped with the library instead of defining custom hex values. Each product must pick **exactly one** colour — do not import multiple alternate palettes.

The available palettes are:

| Import path | Colour |
|-------------|--------|
| \`@sit-canvas/canvas-web-component/themes/alt/blue.css\` | Blue |
| \`@sit-canvas/canvas-web-component/themes/alt/cyan.css\` | Cyan |
| \`@sit-canvas/canvas-web-component/themes/alt/magenta.css\` | Magenta |
| \`@sit-canvas/canvas-web-component/themes/alt/pink.css\` | Pink |
| \`@sit-canvas/canvas-web-component/themes/alt/purple.css\` | Purple |
| \`@sit-canvas/canvas-web-component/themes/alt/red.css\` | Red |

Each alternate file defines \`--alt-color-100\` through \`--alt-color-900\`. Map these onto the Canvas product primary scale in your custom CSS:

\`\`\`css
/* yourCustomCss.css */
:root {
  --sit-product-primary-100: var(--alt-color-100);
  --sit-product-primary-200: var(--alt-color-200);
  --sit-product-primary-300: var(--alt-color-300);
  --sit-product-primary-400: var(--alt-color-400);
  --sit-product-primary-500: var(--alt-color-500);
  --sit-product-primary-600: var(--alt-color-600);
  --sit-product-primary-700: var(--alt-color-700);
  --sit-product-primary-800: var(--alt-color-800);
  --sit-product-primary-900: var(--alt-color-900);
}
\`\`\`

Import order matters — the alternate palette file must come after \`themes/day.css\` and before your custom mapping CSS:

\`\`\`css
@import "@sit-canvas/canvas-web-component/themes/day.css";
@import "@sit-canvas/canvas-web-component/themes/alt/blue.css"; /* pick one colour only */
@import "./yourCustomCss.css";
\`\`\`
`;

const AltPalettesTemplate = () => html`
  <div class="sit:p-layout-xs sit:flex sit:flex-col sit:gap-layout-lg">
    ${ALT_PALETTES.map(
      palette => html`
        <div class="sit:flex sit:flex-col sit:gap-text-md">
          <h4 class="sit:text-heading-sm sit:font-semibold sit:leading-sm sit:tracking-tight">${palette.name}</h4>
          <div class="sit:flex">
            ${palette.shades.map(
              (s, i) => html`
                <div
                  class="sit:relative sit:w-30 sit:h-30 sit:shrink-0 sit:rounded-md sit:shadow-2 sit:p-2 sit:flex sit:flex-col sit:justify-end sit:font-mono sit:text-label-xs sit:leading-2-xs${i >
                  0
                    ? " sit:-ml-12"
                    : ""}"
                  style="background-color: ${s.hex}; color: ${s.shade >= 500 ? "#ffffff" : "#111111"};"
                >
                  <span class="sit:font-bold">${s.shade}</span>
                  <span>${s.hex}</span>
                </div>
              `
            )}
          </div>
        </div>
      `
    )}
  </div>
`;

export const AltBrandPalettes = {
  render: AltPalettesTemplate.bind({}),
  name: "Alternate Brand Palettes",
  args: {},
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: ALT_DOCS
      }
    }
  },
  tags: ["autodocs"]
};
