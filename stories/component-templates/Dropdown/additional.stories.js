import { html } from "lit";

const SitSelectCloseTemplate = args => {
  return html`
    <sit-dropdown close="default">
      <sit-button slot="toggler" variant="primary" tone="brand" ariaLabel="Default Close">
        Default Close
        <sit-icon name="chevron-down" slot="rightIcon"></sit-icon>
      </sit-button>
      <sit-dropdown-item ariaLabel="Item #1">Item #1</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Item #2">Item #2</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Item #3">Item #3</sit-dropdown-item>
    </sit-dropdown>
    <br />
    <sit-dropdown close="outside">
      <sit-button slot="toggler" variant="primary" tone="brand" ariaLabel="Close Outside">
        Close Outside
        <sit-icon name="chevron-down" slot="rightIcon"></sit-icon>
      </sit-button>
      <sit-dropdown-item ariaLabel="Item #1">Item #1</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Item #2">Item #2</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Item #3">Item #3</sit-dropdown-item>
    </sit-dropdown>
    <br />
    <sit-dropdown close="inside">
      <sit-button slot="toggler" variant="primary" tone="brand" ariaLabel="Close Inside">
        Close Inside
        <sit-icon name="chevron-down" slot="rightIcon"></sit-icon>
      </sit-button>
      <sit-dropdown-item ariaLabel="Item #1">Item #1</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Item #2">Item #2</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Item #3">Item #3</sit-dropdown-item>
    </sit-dropdown>
  `;
};

export const SitSelectClose = {
  render: SitSelectCloseTemplate.bind({}),
  name: "Sit-select close",
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

const SitSelectEventTemplate = args => {
  return html`
    <sit-dropdown id="select-event-dropdown">
      <sit-button slot="toggler" variant="primary" tone="brand" ariaLabel="Dynamic Text">
        <span id="select-toggler-text">Dynamic Text</span>
        <sit-icon name="chevron-down" slot="rightIcon"></sit-icon>
      </sit-button>
      <sit-dropdown-item ariaLabel="Item #1">Item #1</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Item #2">Item #2</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Item #3">Item #3</sit-dropdown-item>
      <sit-dropdown-item ariaLabel="item #4" disabled>item #4 (disabled)</sit-dropdown-item>
    </sit-dropdown>

    <script>
      const dropdown = document.querySelector("#select-event-dropdown");
      const togglerText = document.querySelector("#select-toggler-text");

      dropdown.addEventListener("Sit-select", e => {
        togglerText.textContent = e.detail.item.textContent.trim();
      });
    </script>
  `;
};

export const SitSelectEvent = {
  render: SitSelectEventTemplate.bind({}),
  name: "Sit-select event",
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

const SitSelectDropdownItemTemplate = args => {
  return html`
    <sit-dropdown close="outside">
      <sit-button slot="toggler" variant="primary" tone="brand" ariaLabel="Dropdown">
        Dropdown
        <sit-icon name="chevron-down" slot="rightIcon"></sit-icon>
      </sit-button>
      <sit-dropdown-item ariaLabel="Label">
        <div class="sit:grow sit:items-center">
          <sit-icon name="placeholder" size="2-xl"></sit-icon>
          <div class="sit:flex sit:flex-col sit:gap-text-2-xs">
            <span class="sit:text-label-sm sit:leading-2-xs sit:font-regular sit:tracking-normal">Label</span>
            <span class="sit:text-label-xs sit:leading-3-xs sit:font-regular sit:tracking-normal sit:text-subtle"
              >Secondary text</span
            >
          </div>
          <sit-icon name="placeholder"></sit-icon>
        </div>
      </sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Label">
        <div class="sit:grow sit:items-center">
          <sit-icon name="placeholder"></sit-icon>
          <span class="sit:text-label-sm sit:leading-2-xs sit:font-regular sit:tracking-normal sit:grow">Label</span>
          <span class="sit:text-label-xs sit:leading-3-xs sit:font-regular sit:tracking-normal sit:text-subtle"
            >Secondary text</span
          >
        </div>
      </sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Label">
        <div class="sit:grow sit:items-center sit:justify-between">
          <div class="sit:flex sit:flex-col sit:gap-text-2-xs">
            <span class="sit:text-label-sm sit:leading-2-xs sit:font-regular sit:tracking-normal">Label</span>
            <span class="sit:text-label-xs sit:leading-3-xs sit:font-regular sit:tracking-normal sit:text-subtle"
              >Secondary text</span
            >
          </div>
          <sit-badge variant="white" outlined>Badge</sit-badge>
        </div>
      </sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Label">
        <div class="sit:grow sit:items-center">
          <sit-icon name="placeholder"></sit-icon>
          <span class="sit:text-label-sm sit:leading-2-xs sit:font-regular sit:tracking-normal sit:grow">Label</span>
          <sit-switch size="sm"></sit-switch>
        </div>
      </sit-dropdown-item>
      <sit-dropdown-item ariaLabel="Label">
        <div class="sit:grow sit:items-center sit:justify-between">
          <div class="sit:flex sit:flex-col sit:gap-text-2-xs">
            <span class="sit:text-label-sm sit:leading-2-xs sit:font-regular sit:tracking-normal">Label</span>
            <span class="sit:text-label-xs sit:leading-3-xs sit:font-regular sit:tracking-normal sit:text-subtle"
              >Secondary text</span
            >
          </div>
          <sit-button variant="outline" tone="neutral" size="xs">Action</sit-button>
        </div>
      </sit-dropdown-item>
    </sit-dropdown>
  `;
};

export const SitSelectDropdownItem = {
  render: SitSelectDropdownItemTemplate.bind({}),
  name: "Sit-dropdown-item customisation",
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};
