import { html } from "lit";

const ShowMoreHookTemplate = args => {
  return html`
    <sit-system-banner show id="system-banner__show-more-example" dismissible>
      <sit-system-banner-item>
        <strong>Etiam suscipit nisi eget porta cursus.</strong> Ut sit amet felis aliquet, pellentesque mi at, vulputate
        nunc. Vivamus ac facilisis tellus. Maecenas ac libero scelerisque tellus maximus accumsan a vehicula arcu.
        Aenean quis leo gravida, congue sapien eu, rhoncus ac libero scelerisque tellus maximus accumsan a vehicula
        arcu. Aenean quis leo gravida, congue sapien eu, rhoncus
        <sit-link size="sm" variant="light" slot="action"
          ><a href="#">Action link<sit-icon name="arrow-right"></sit-icon></a
        ></sit-link>
      </sit-system-banner-item>
    </sit-system-banner>
    <sit-modal>
      <strong>Etiam suscipit nisi eget porta cursus.</strong> Ut sit amet felis aliquet, pellentesque mi at, vulputate
      nunc. Vivamus ac facilisis tellus. Maecenas ac libero scelerisque tellus maximus accumsan a vehicula arcu. Aenean
      quis leo gravida, congue sapien eu, rhoncus ac libero scelerisque tellus maximus accumsan a vehicula arcu. Aenean
      quis leo gravida, congue sapien eu, rhoncus
    </sit-modal>

    <script>
      const banner = document.querySelector("#system-banner__show-more-example");
      const modal = document.querySelector("Sit-modal");
      banner.addEventListener("Sit-show-more", () => {
        modal.show();
      });
    </script>
  `;
};

export const Dismissible = {
  render: Template.bind({}),
  name: "Dismissible",
  args: {
    dismissible: true,
    show: true
  },
  parameters
};

export const ShowMore = {
  render: ShowMoreHookTemplate.bind({}),
  name: "Show more",
  args: {},
  parameters
};

export const NoClampAction = {
  render: Template.bind({}),
  name: "No clamp action",
  args: {
    show: true,
    noClampAction: true
  },
  parameters
};
export const Fluid = {
  render: Template.bind({}),
  name: "Fluid",
  args: {
    fluid: true,
    show: true
  },
  parameters,
  tags: []
};

const BadgeSlotTemplate = args => {
  return html`
    <sit-system-banner show>
      <sit-system-banner-item>
        <sit-badge slot="badge" variant="danger" outlined>Critical</sit-badge>
        <strong>Important system update available.</strong> Review the latest security patches and feature updates for
        your system.
        <sit-link size="sm" variant="light" slot="action"
          ><a href="#">Learn more<sit-icon name="arrow-right"></sit-icon></a
        ></sit-link>
      </sit-system-banner-item>
      <sit-system-banner-item>
        <sit-badge slot="badge" variant="warning" outlined>Alert</sit-badge>
        <strong>Scheduled maintenance window.</strong> Services will be temporarily unavailable during the maintenance
        period.
        <sit-button href="#" slot="action" size="sm" tone="fixed-light" variant="outline">
          View schedule
          <sit-icon name="arrow-right" slot="rightIcon" size="md"></sit-icon>
        </sit-button>
      </sit-system-banner-item>
    </sit-system-banner>
  `;
};

export const BadgeSlot = {
  render: BadgeSlotTemplate.bind({}),
  name: "Badge slot",
  args: {},
  parameters
};
