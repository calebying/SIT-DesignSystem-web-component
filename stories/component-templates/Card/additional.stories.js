import { html } from "lit";

const StretchedTemplate = () => {
  return html`
    <div class="container">
      <sit-card stretchedLink>
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="300"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Stretched link card</h3>
        <span slot="description">stretched link card</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
    </div>
  `;
};

export const Stretched = {
  render: StretchedTemplate.bind({}),
  name: "Stretched link",
  args: {},
  parameters: {}
};

const DisabledTemplate = () => {
  return html`
    <div class="container">
      <sit-card disabled>
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="300"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Disabled card</h3>
        <span slot="description">disabled card</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
    </div>
  `;
};

export const Disabled = {
  render: DisabledTemplate.bind({}),
  name: "Disabled state",
  args: {},
  parameters: {}
};

const OrientationTemplate = () => {
  return html`
    <div class="container">
      <sit-card orientation="vertical">
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="300"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Vertical image card</h3>
        <span slot="description">vertical card</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
      <sit-card orientation="horizontal">
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="312"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Horizontal image card</h3>
        <span slot="description">horizontal card</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
    </div>
  `;
};

export const Orientation = {
  render: OrientationTemplate.bind({}),
  name: "Orientation",
  args: {},
  parameters: {}
};

const ImagePositionTemplate = () => {
  return html`
    <div class="container">
      <sit-card orientation="vertical" imagePosition="before">
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="300"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Vertical image card</h3>
        <span slot="description">vertical card with image position set to before the content</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
      <sit-card orientation="vertical" imagePosition="after">
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="300"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Vertical image card</h3>
        <span slot="description">vertical card with image position set to after the content</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
      <sit-card orientation="horizontal" imagePosition="before">
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="312"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Horizontal image card</h3>
        <span slot="description">horizontal card with image position set to before the content</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
      <sit-card orientation="horizontal" imagePosition="after">
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="312"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Horizontal image card</h3>
        <span slot="description">horizontal card with image position set to after the content</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
    </div>
  `;
};

export const ImagePosition = {
  render: ImagePositionTemplate.bind({}),
  name: "Image position",
  args: {},
  parameters: {}
};

const ImageAdjustmentTemplate = () => {
  return html`
    <div class="container">
      <sit-card orientation="vertical" imageAdjustment="default">
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="300"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Vertical image card</h3>
        <span slot="description">vertical card with image adjustment set to default</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
      <sit-card orientation="vertical" imageAdjustment="padding around">
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="300"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Vertical image card</h3>
        <span slot="description">vertical card with image adjustment set to padding around</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
      <sit-card orientation="vertical" imageAdjustment="aspect ratio">
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="300"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Vertical image card</h3>
        <span slot="description">vertical card with image adjustment set to aspect ratio</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
    </div>
  `;
};

export const ImageAdjustment = {
  render: ImageAdjustmentTemplate.bind({}),
  name: "Image adjustment",
  args: {},
  parameters: {}
};

const HideBorderTemplate = () => {
  return html`
    <div class="container">
      <sit-card hideBorder>
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="300"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Vertical image card</h3>
        <span slot="description">vertical card with no border</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
      <sit-card hideBorder>
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="300"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Vertical image card</h3>
        <span slot="description">vertical card with no border</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
      <sit-card orientation="horizontal" hideBorder>
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="300"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Horizontal image card</h3>
        <span slot="description">horizontal card with no border</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
      <sit-card orientation="horizontal" hideBorder>
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="300"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Horizontal image card</h3>
        <span slot="description">horizontal card with no border</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
    </div>
  `;
};

export const HideBorder = {
  render: HideBorderTemplate.bind({}),
  name: "Hide border",
  args: {},
  parameters: {}
};

const TintedTemplate = () => {
  return html`
    <div class="container">
      <sit-card tinted>
        <img
          slot="image"
          alt="img alternate text goes here"
          width="467"
          height="312"
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        />
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">Vertical image card</h3>
        <span slot="description">vertical card with tinted background</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
    </div>
  `;
};

export const Tinted = {
  render: TintedTemplate.bind({}),
  name: "Tinted",
  args: {},
  parameters: {}
};

const NoPaddingTemplate = () => {
  return html`
    <div class="container">
      <sit-card noPadding>
        <span slot="subtitle">SUBTITLE</span>
        <h3 slot="title">No Padding Card</h3>
        <span slot="description">card with no padding</span>
        <sit-link slot="footer">
          <a href="https://google.com" aria-label="Go somewhere"
            >Go somewhere <sit-icon name="arrow-right"></sit-icon
          ></a>
        </sit-link>
      </sit-card>
    </div>
  `;
};

export const NoPadding = {
  render: NoPaddingTemplate.bind({}),
  name: "No padding",
  args: {},
  parameters: {}
};

const OverflowMenuTemplate = () => {
  return html`
    <div class="container">
      <sit-card>
        <sit-badge variant="primary" slot="upper">New</sit-badge>
        <sit-overflow-menu slot="menu">
          <sit-dropdown-item ariaLabel="View">View</sit-dropdown-item>
          <sit-dropdown-item ariaLabel="Edit">Edit</sit-dropdown-item>
          <sit-dropdown-item ariaLabel="Delete">Delete</sit-dropdown-item>
        </sit-overflow-menu>
        <span slot="subtitle">EVENTS</span>
        <span slot="title">Innovative solutions for you</span>
        <sit-icon-list size="sm">
          <div role="listitem"><sit-icon size="md" name="calendar"></sit-icon>12 September</div>
          <div role="listitem"><sit-icon size="md" name="laptop"></sit-icon>Online</div>
        </sit-icon-list>
        <span slot="description"
          >Discover how our platform can streamline your workflow and enhance productivity. With cutting-edge technology
          and user-friendly design, we empower you to achieve more.</span
        >
        <div slot="lower">
          <sit-badge variant="neutral" outlined>Design</sit-badge>
        </div>
        <sit-link slot="footer">
          <a href="#" aria-label="Register now">Register now <sit-icon name="arrow-right"></sit-icon></a>
        </sit-link>
      </sit-card>
    </div>
  `;
};

export const OverflowMenu = {
  render: OverflowMenuTemplate.bind({}),
  name: "Overflow menu",
  args: {},
  parameters: {}
};
