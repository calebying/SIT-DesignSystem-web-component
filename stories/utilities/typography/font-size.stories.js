import { html } from "lit";

export default {
  title: "Utilities/Typography/Font Size",
  tags: ["!autodocs"]
};

const FONT_SIZE_SCALE = [
  { name: "12", class: "sit:text-12", variable: "--Sit-font-size-12", value: "12px (0.75rem)" },
  { name: "14", class: "sit:text-14", variable: "--Sit-font-size-14", value: "14px (0.875rem)" },
  { name: "16", class: "sit:text-16", variable: "--Sit-font-size-16", value: "16px (1rem)" },
  { name: "20", class: "sit:text-20", variable: "--Sit-font-size-20", value: "20px (1.25rem)" },
  { name: "24", class: "sit:text-24", variable: "--Sit-font-size-24", value: "24px (1.5rem)" },
  { name: "28", class: "sit:text-28", variable: "--Sit-font-size-28", value: "28px (1.75rem)" },
  { name: "32", class: "sit:text-32", variable: "--Sit-font-size-32", value: "32px (2rem)" },
  { name: "40", class: "sit:text-40", variable: "--Sit-font-size-40", value: "40px (2.5rem)" },
  { name: "48", class: "sit:text-48", variable: "--Sit-font-size-48", value: "48px (3rem)" },
  { name: "56", class: "sit:text-56", variable: "--Sit-font-size-56", value: "56px (3.5rem)" }
];

const RESPONSIVE_FONT_SIZES = {
  display: [
    {
      name: "Display SM",
      class: "sit:text-display-sm",
      variable: "--Sit-font-size-display-sm",
      responsive: "32px / 36px / 40px"
    },
    {
      name: "Display MD",
      class: "sit:text-display-md",
      variable: "--Sit-font-size-display-md",
      responsive: "36px / 44px / 48px"
    },
    {
      name: "Display LG",
      class: "sit:text-display-lg",
      variable: "--Sit-font-size-display-lg",
      responsive: "40px / 52px / 56px"
    }
  ],
  heading: [
    {
      name: "Heading SM",
      class: "sit:text-heading-sm",
      variable: "--Sit-font-size-heading-sm",
      responsive: "20px / 22px / 24px"
    },
    {
      name: "Heading MD",
      class: "sit:text-heading-md",
      variable: "--Sit-font-size-heading-md",
      responsive: "24px / 26px / 28px"
    },
    {
      name: "Heading LG",
      class: "sit:text-heading-lg",
      variable: "--Sit-font-size-heading-lg",
      responsive: "28px / 30px / 32px"
    },
    {
      name: "Heading XL",
      class: "sit:text-heading-xl",
      variable: "--Sit-font-size-heading-xl",
      responsive: "32px / 36px / 40px"
    }
  ],
  subtitle: [
    {
      name: "Subtitle SM",
      class: "sit:text-subtitle-sm",
      variable: "--Sit-font-size-subtitle-sm",
      responsive: "16px / 16px / 16px"
    },
    {
      name: "Subtitle MD",
      class: "sit:text-subtitle-md",
      variable: "--Sit-font-size-subtitle-md",
      responsive: "18px / 20px / 20px"
    }
  ],
  body: [
    {
      name: "Body SM",
      class: "sit:text-body-sm",
      variable: "--Sit-font-size-body-sm",
      responsive: "14px / 14px / 14px"
    },
    {
      name: "Body MD",
      class: "sit:text-body-md",
      variable: "--Sit-font-size-body-md",
      responsive: "16px / 16px / 16px"
    },
    {
      name: "Body LG",
      class: "sit:text-body-lg",
      variable: "--Sit-font-size-body-lg",
      responsive: "18px / 20px / 20px"
    }
  ],
  list: [
    {
      name: "List SM",
      class: "sit:text-list-sm",
      variable: "--Sit-font-size-list-sm",
      responsive: "14px / 14px / 14px"
    },
    {
      name: "List MD",
      class: "sit:text-list-md",
      variable: "--Sit-font-size-list-md",
      responsive: "16px / 16px / 16px"
    },
    {
      name: "List LG",
      class: "sit:text-list-lg",
      variable: "--Sit-font-size-list-lg",
      responsive: "18px / 20px / 20px"
    }
  ],
  label: [
    {
      name: "Label XS",
      class: "sit:text-label-xs",
      variable: "--Sit-font-size-label-xs",
      responsive: "12px / 12px / 12px"
    },
    {
      name: "Label SM",
      class: "sit:text-label-sm",
      variable: "--Sit-font-size-label-sm",
      responsive: "14px / 14px / 14px"
    },
    {
      name: "Label MD",
      class: "sit:text-label-md",
      variable: "--Sit-font-size-label-md",
      responsive: "16px / 16px / 16px"
    },
    {
      name: "Label LG",
      class: "sit:text-label-lg",
      variable: "--Sit-font-size-label-lg",
      responsive: "18px / 20px / 20px"
    }
  ],
  caption: [
    {
      name: "Caption MD",
      class: "sit:text-caption-md",
      variable: "--Sit-font-size-caption-md",
      responsive: "14px / 14px / 14px"
    }
  ],
  overline: [
    {
      name: "Overline MD",
      class: "sit:text-overline-md",
      variable: "--Sit-font-size-overline-md",
      responsive: "14px / 14px / 14px"
    }
  ],
  link: [
    {
      name: "Link XS",
      class: "sit:text-link-xs",
      variable: "--Sit-font-size-link-xs",
      responsive: "12px / 12px / 12px"
    },
    {
      name: "Link SM",
      class: "sit:text-link-sm",
      variable: "--Sit-font-size-link-sm",
      responsive: "14px / 14px / 14px"
    },
    {
      name: "Link MD",
      class: "sit:text-link-md",
      variable: "--Sit-font-size-link-md",
      responsive: "16px / 16px / 16px"
    },
    {
      name: "Link LG",
      class: "sit:text-link-lg",
      variable: "--Sit-font-size-link-lg",
      responsive: "18px / 20px / 20px"
    }
  ]
};

const copyToClipboard = (token, buttonEl) => {
  navigator.clipboard.writeText(token);
  const icon = buttonEl.querySelector("Sit-icon");
  icon.setAttribute("name", "check");
  setTimeout(() => {
    icon.setAttribute("name", "files");
  }, 3000);
};

const FontSizeTableRow = item => {
  return html`
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${item.class}</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard(item.class, e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${item.variable}</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${item.value}</code>
      </sit-table-cell>
      <sit-table-cell>
        <div class="${item.class}">Sample Text</div>
      </sit-table-cell>
    </sit-table-row>
  `;
};

const ResponsiveFontSizeTableRow = (item, customPreview) => {
  const preview = customPreview ? customPreview(item) : html`<div class="${item.class}">${item.name}</div>`;

  return html`
    <sit-table-row>
      <sit-table-cell>
        <div class="sit:flex sit:items-center sit:gap-xs">
          <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${item.class}</code>
          <button
            class="sit:flex sit:items-center sit:justify-center sit:w-8 sit:h-8 sit:cursor-pointer sit:opacity-60 sit:bg-transparent sit:border-none sit:p-0"
            @click="${e => copyToClipboard(item.class, e.target.closest("button"))}"
            aria-label="Copy token"
          >
            <sit-icon name="files"></sit-icon>
          </button>
        </div>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${item.variable}</code>
      </sit-table-cell>
      <sit-table-cell>
        <code class="sit:bg-surface-raised sit:px-xs sit:py-3-xs sit:rounded-sm">${item.responsive}</code>
      </sit-table-cell>
      <sit-table-cell> ${preview} </sit-table-cell>
    </sit-table-row>
  `;
};

export const DisplaySizes = () => html`
  <div class="sit:mb-md">
    <p class="sit:mb-md sit:text-subtle">
      Display sizes adapt across breakpoints: mobile (&lt; 1024px), tablet (≥ 1024px), desktop (≥ 1440px)
    </p>
    <sit-table>
      <sit-table-row>
        <sit-table-head>Sit Tailwind Token</sit-table-head>
        <sit-table-head>CSS Variable</sit-table-head>
        <sit-table-head>Sizes (Mobile / Tablet / Desktop)</sit-table-head>
        <sit-table-head>Preview</sit-table-head>
      </sit-table-row>
      ${RESPONSIVE_FONT_SIZES.display.map(item => ResponsiveFontSizeTableRow(item))}
    </sit-table>
  </div>
`;

export const HeadingSizes = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Sizes (Mobile / Tablet / Desktop)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${RESPONSIVE_FONT_SIZES.heading.map(item => ResponsiveFontSizeTableRow(item))}
  </sit-table>
`;

export const SubtitleSizes = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Sizes (Mobile / Tablet / Desktop)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${RESPONSIVE_FONT_SIZES.subtitle.map(item => ResponsiveFontSizeTableRow(item))}
  </sit-table>
`;

export const BodySizes = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Sizes (Mobile / Tablet / Desktop)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${RESPONSIVE_FONT_SIZES.body.map(item => ResponsiveFontSizeTableRow(item))}
  </sit-table>
`;

export const ListSizes = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Sizes (Mobile / Tablet / Desktop)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${ResponsiveFontSizeTableRow(
      RESPONSIVE_FONT_SIZES.list[2],
      () => html`
        <div class="sit:flex sit:gap-2-xl">
          <ul class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal">
            <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:my-list-lg">
              First item
            </li>
            <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:my-list-lg">
              Second item
              <ul class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal">
                <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:my-list-lg">
                  Sub item one
                </li>
                <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:mt-list-lg">
                  Sub item two
                </li>
              </ul>
            </li>
            <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:mt-list-lg">
              Third item
            </li>
          </ul>
          <ol class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal">
            <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:my-list-lg">
              First item
            </li>
            <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:my-list-lg">
              Second item
              <ol class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal">
                <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:my-list-lg">
                  Sub item one
                </li>
                <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:mt-list-lg">
                  Sub item two
                </li>
              </ol>
            </li>
            <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:mt-list-lg">
              Third item
            </li>
          </ol>
        </div>
      `
    )}
    ${ResponsiveFontSizeTableRow(
      RESPONSIVE_FONT_SIZES.list[1],
      () => html`
        <div class="sit:flex sit:gap-2-xl">
          <ul class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal">
            <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md">
              First item
            </li>
            <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md">
              Second item
              <ul class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal">
                <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md">
                  Sub item one
                </li>
                <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:mt-list-md">
                  Sub item two
                </li>
              </ul>
            </li>
            <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:mt-list-md">
              Third item
            </li>
          </ul>
          <ol class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal">
            <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md">
              First item
            </li>
            <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md">
              Second item
              <ol class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal">
                <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md">
                  Sub item one
                </li>
                <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:mt-list-md">
                  Sub item two
                </li>
              </ol>
            </li>
            <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:mt-list-md">
              Third item
            </li>
          </ol>
        </div>
      `
    )}
    ${ResponsiveFontSizeTableRow(
      RESPONSIVE_FONT_SIZES.list[0],
      () => html`
        <div class="sit:flex sit:gap-2-xl">
          <ul class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal">
            <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm">
              First item
            </li>
            <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm">
              Second item
              <ul class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal">
                <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm">
                  Sub item one
                </li>
                <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mt-list-sm">
                  Sub item two
                </li>
              </ul>
            </li>
            <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mt-list-sm">
              Third item
            </li>
          </ul>
          <ol class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal">
            <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm">
              First item
            </li>
            <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm">
              Second item
              <ol class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal">
                <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm">
                  Sub item one
                </li>
                <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mt-list-sm">
                  Sub item two
                </li>
              </ol>
            </li>
            <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mt-list-sm">
              Third item
            </li>
          </ol>
        </div>
      `
    )}
  </sit-table>
`;

export const LabelSizes = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Sizes (Mobile / Tablet / Desktop)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${RESPONSIVE_FONT_SIZES.label.map(item => ResponsiveFontSizeTableRow(item))}
  </sit-table>
`;

export const CaptionSizes = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Sizes (Mobile / Tablet / Desktop)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${RESPONSIVE_FONT_SIZES.caption.map(item =>
      ResponsiveFontSizeTableRow(
        item,
        item => html`
          <table class="sit:border-0">
            <caption class="${item.class}">
              ${item.name}
            </caption>
          </table>
        `
      )
    )}
  </sit-table>
`;

export const OverlineSizes = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Sizes (Mobile / Tablet / Desktop)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${RESPONSIVE_FONT_SIZES.overline.map(item =>
      ResponsiveFontSizeTableRow(item, item => html`<div class="${item.class} sit:uppercase">${item.name}</div>`)
    )}
  </sit-table>
`;

export const LinkSizes = () => html`
  <sit-table>
    <sit-table-row>
      <sit-table-head>Sit Tailwind Token</sit-table-head>
      <sit-table-head>CSS Variable</sit-table-head>
      <sit-table-head>Sizes (Mobile / Tablet / Desktop)</sit-table-head>
      <sit-table-head>Preview</sit-table-head>
    </sit-table-row>
    ${RESPONSIVE_FONT_SIZES.link.map(item =>
      ResponsiveFontSizeTableRow(item, item => html`<a href="#" class="${item.class} sit:underline">${item.name}</a>`)
    )}
  </sit-table>
`;

export const StaticFontSizes = () => html`
  <div class="sit:mb-2-xl">
    <h3 class="sit:mb-md">Primitive font sizes</h3>
    <sit-table>
      <sit-table-row>
        <sit-table-head>Sit Tailwind Token</sit-table-head>
        <sit-table-head>CSS Variable</sit-table-head>
        <sit-table-head>Value</sit-table-head>
        <sit-table-head>Preview</sit-table-head>
      </sit-table-row>
      ${FONT_SIZE_SCALE.map(item => FontSizeTableRow(item))}
    </sit-table>
  </div>
`;
