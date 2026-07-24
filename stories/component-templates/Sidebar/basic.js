import { html } from "lit";

export const Template = args => html`
  <div class="sit:h-175">
    <sit-sidebar active=${args.active} ?collapsed=${args.collapsed} ?scrim=${args.scrim}>
      <div slot="upper">Canvas Sidebar</div>

      <!-- Main Navigation Section -->
      <sit-sidebar-section title="Main" name="main" ?collapsible=${false}>
        <sit-sidebar-group title="Dashboard" name="dashboard">
          <sit-icon name="house" slot="icon"></sit-icon>
          <sit-sidebar-group title="Summary" name="summary">
            <sit-icon name="building" slot="icon"></sit-icon>
            <sit-sidebar-item title="Latest Sales" name="latest-sales">
              <sit-icon name="building" slot="icon"></sit-icon>
              <a href="#"></a>
            </sit-sidebar-item>
            <sit-sidebar-item title="Refunds" name="refunds">
              <sit-icon name="building" slot="icon"></sit-icon>
            </sit-sidebar-item>
          </sit-sidebar-group>

          <sit-sidebar-item title="Meetings" name="meetings">
            <sit-icon name="calendar" slot="icon"></sit-icon>
            <a href="#"></a>
          </sit-sidebar-item>
          <sit-sidebar-item title="Gallery" name="gallery">
            <sit-icon name="camera" slot="icon"></sit-icon>
            <a href="#"></a>
          </sit-sidebar-item>
        </sit-sidebar-group>

        <sit-sidebar-group title="Reports" name="reports">
          <sit-icon name="file-text" slot="icon"></sit-icon>
          <sit-icon name="placeholder" slot="indicator"></sit-icon>

          <sit-sidebar-item title="Yearly" name="yearly">
            <sit-icon name="house" slot="icon"></sit-icon>
          </sit-sidebar-item>
          <sit-sidebar-item title="Monthly" name="monthly">
            <sit-icon name="house" slot="icon"></sit-icon>
          </sit-sidebar-item>
        </sit-sidebar-group>

        <sit-sidebar-item title="Public Members" name="public-members">
          <sit-icon name="user-circle" slot="icon"></sit-icon>
          <sit-icon name="summary" slot="indicator"></sit-icon>
        </sit-sidebar-item>
      </sit-sidebar-section>

      <!-- Configuration Section (Collapsible) -->
      <sit-sidebar-section title="Configuration" name="configuration" collapsible separator>
        <sit-sidebar-item title="Settings" name="settings">
          <sit-icon name="gear" slot="icon"></sit-icon>
        </sit-sidebar-item>
      </sit-sidebar-section>

      <!-- Support Section -->
      <sit-sidebar-section>
        <sit-sidebar-item title="Help & Support" name="help-support">
          <sit-icon name="question-circle" slot="icon"></sit-icon>
          <span
            slot="indicator"
            class="sit:bg-error-default sit:text-fixed-light sit:rounded-full sit:w-5 sit:h-5 sit:flex sit:items-center sit:justify-center sit:text-xs sit:font-semibold"
            >3</span
          >
        </sit-sidebar-item>
      </sit-sidebar-section>

      <sit-sidebar-section slot="lower">
        <sit-sidebar-item title="Premium Features" name="premium-features">
          <sit-icon name="star" slot="icon"></sit-icon>
        </sit-sidebar-item>
      </sit-sidebar-section>
    </sit-sidebar>
  </div>
`;

export const args = {
  active: "meetings",
  collapsed: false,
  scrim: true
};

export const parameters = {
  layout: "fullscreen",
  docs: {
    story: {
      inline: false,
      height: 700
    }
  }
};

export const play = undefined;
