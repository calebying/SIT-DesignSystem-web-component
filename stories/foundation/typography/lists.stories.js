import { html } from "lit";
import NonInteractiveDocsPage from "../../../.storybook/NonInteractiveDocsPage";

export default {
  title: "Foundation/Typography/Lists",
  parameters: {
    docs: { page: NonInteractiveDocsPage }
  }
};

const UListTemplate = () => html`
  <ul>
    <li>hello world</li>
    <li>
      hello world
      <ul>
        <li>Sub of Second</li>
        <li>Another Sub</li>
      </ul>
    </li>
    <li>hello world</li>
    <li>hello world</li>
  </ul>
`;

const OListTemplate = () => html`
  <ol>
    <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..</li>
    <li>
      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
      <ol>
        <li>Sub of Second</li>
        <li>Another Sub</li>
      </ol>
    </li>
    <li>hello world</li>
    <li>hello world</li>
    <li>hello world</li>
    <li>hello world</li>
    <li>hello world</li>
    <li>hello world</li>
    <li>hello world</li>
    <li>hello world</li>
    <li>hello world</li>
  </ol>
`;

export const ULists = {
  render: UListTemplate.bind({}),
  name: "Unordered Lists"
};

export const OLists = {
  render: OListTemplate.bind({}),
  name: "Ordered Lists"
};

const ListLargeRegularTemplate = () => html`
  <div class="sit:flex sit:gap-2-xl">
    <ul class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal">
      <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:my-list-lg">First item</li>
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
      <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:mt-list-lg">Third item</li>
    </ul>
    <ol class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal">
      <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:my-list-lg">First item</li>
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
      <li class="sit:text-list-lg sit:font-regular sit:leading-md sit:tracking-normal sit:mt-list-lg">Third item</li>
    </ol>
  </div>
`;

export const ListLargeRegular = {
  render: ListLargeRegularTemplate.bind({}),
  name: "List Large Regular"
};

const ListMediumRegularTemplate = () => html`
  <div class="sit:flex sit:gap-2-xl">
    <ul class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal">
      <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md">First item</li>
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
      <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:mt-list-md">Third item</li>
    </ul>
    <ol class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal">
      <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:my-list-md">First item</li>
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
      <li class="sit:text-list-md sit:font-regular sit:leading-xs sit:tracking-normal sit:mt-list-md">Third item</li>
    </ol>
  </div>
`;

export const ListMediumRegular = {
  render: ListMediumRegularTemplate.bind({}),
  name: "List Medium Regular"
};

const ListSmallRegularTemplate = () => html`
  <div class="sit:flex sit:gap-2-xl">
    <ul class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal">
      <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm">First item</li>
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
      <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mt-list-sm">Third item</li>
    </ul>
    <ol class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal">
      <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:my-list-sm">First item</li>
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
      <li class="sit:text-list-sm sit:font-regular sit:leading-2-xs sit:tracking-normal sit:mt-list-sm">Third item</li>
    </ol>
  </div>
`;

export const ListSmallRegular = {
  render: ListSmallRegularTemplate.bind({}),
  name: "List Small Regular"
};
