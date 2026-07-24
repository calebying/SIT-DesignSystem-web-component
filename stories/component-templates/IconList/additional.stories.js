import { html } from "lit";

const SizeTemplate = () => {
  return html`
    <div class="d-flex-row">
      <sit-icon-list size="sm">
        <div role="listitem"><sit-icon size="md" name="placeholder"></sit-icon>item 1</div>
        <div role="listitem"><sit-icon size="md" name="placeholder"></sit-icon>item 2</div>
        <div role="listitem"><sit-icon size="md" name="placeholder"></sit-icon>item 3</div>
      </sit-icon-list>
      <sit-icon-list>
        <div role="listitem"><sit-icon name="placeholder"></sit-icon>item 1</div>
        <div role="listitem"><sit-icon name="placeholder"></sit-icon>item 2</div>
        <div role="listitem"><sit-icon name="placeholder"></sit-icon>item 3</div>
      </sit-icon-list>
      <sit-icon-list size="lg">
        <div role="listitem"><sit-icon size="xl" name="placeholder"></sit-icon>item 1</div>
        <div role="listitem"><sit-icon size="xl" name="placeholder"></sit-icon>item 2</div>
        <div role="listitem"><sit-icon size="xl" name="placeholder"></sit-icon>item 3</div>
      </sit-icon-list>
    </div>
  `;
};

export const Sizes = {
  render: SizeTemplate.bind({}),
  name: "Sizes",
  args: {},
  parameters: {}
};
