import { html } from "lit";

const BasicTemplate = args => html`
  <div class="sit:h-110">
    <sit-sidebar
      active=${args.active}
      ?collapsed=${args.collapsed}
      ?scrim=${args.scrim}
      variant=${args.variant || "collapsible"}
    >
      <sit-sidebar-section title="Navigation" name="navigation" ?collapsible=${false}>
        <sit-sidebar-item title="Dashboard" name="dashboard">
          <sit-icon name="house" slot="icon"></sit-icon>
          <sit-icon name="placeholder" slot="indicator"></sit-icon>
        </sit-sidebar-item>
        <sit-sidebar-item title="Analytics" name="analytics">
          <sit-icon name="trend-up" slot="icon"></sit-icon>
        </sit-sidebar-item>
        <sit-sidebar-item title="Reports" name="reports">
          <sit-icon name="file-text" slot="icon"></sit-icon>

          <sit-badge slot="indicator" variant="danger" outlined size="sm">5</sit-badge>
        </sit-sidebar-item>
      </sit-sidebar-section>

      <sit-sidebar-section title="Settings" name="settings" collapsible>
        <sit-sidebar-item title="Account" name="account">
          <sit-icon name="user-circle" slot="icon"></sit-icon>
        </sit-sidebar-item>
        <sit-sidebar-item title="Preferences" name="preferences">
          <sit-icon name="gear" slot="icon"></sit-icon>
        </sit-sidebar-item>
      </sit-sidebar-section>
    </sit-sidebar>
  </div>
`;

const MultiLevelTemplate = args => html`
  <div class="sit:h-110">
    <sit-sidebar
      active=${args.active}
      ?collapsed=${args.collapsed}
      ?scrim=${args.scrim}
      variant=${args.variant || "collapsible"}
    >
      <sit-sidebar-section title="Navigation" name="navigation" ?collapsible=${false}>
        <!-- Level 1: Dashboard Group -->
        <sit-sidebar-group title="Dashboard" name="dashboard">
          <sit-icon name="house" slot="icon"></sit-icon>
          <!-- Level 2: Summary Group -->
          <sit-sidebar-group title="Summary" name="summary">
            <sit-icon name="building" slot="icon"></sit-icon>
            <!-- Level 3: Items under Summary -->
            <sit-sidebar-item title="Latest Sales" name="latest-sales">
              <sit-icon name="trending-up" slot="icon"></sit-icon>
            </sit-sidebar-item>
            <sit-sidebar-item title="Refunds" name="refunds">
              <sit-icon name="trending-down" slot="icon"></sit-icon>
            </sit-sidebar-item>
          </sit-sidebar-group>
          <!-- Level 2: Item -->
          <sit-sidebar-item title="Meetings" name="meetings">
            <sit-icon name="calendar" slot="icon"></sit-icon>
          </sit-sidebar-item>
          <sit-sidebar-item title="Gallery" name="gallery">
            <sit-icon name="image" slot="icon"></sit-icon>
          </sit-sidebar-item>
        </sit-sidebar-group>

        <!-- Level 1: Reports Group -->
        <sit-sidebar-group title="Reports" name="reports">
          <sit-icon name="file-text" slot="icon"></sit-icon>
          <!-- Level 2: Report Items -->
          <sit-sidebar-item title="Yearly" name="yearly">
            <sit-icon name="calendar" slot="icon"></sit-icon>
          </sit-sidebar-item>
          <sit-sidebar-item title="Monthly" name="monthly">
            <sit-icon name="calendar" slot="icon"></sit-icon>
          </sit-sidebar-item>
        </sit-sidebar-group>

        <!-- Level 1: Item -->
        <sit-sidebar-item title="Members" name="members">
          <sit-icon name="users" slot="icon"></sit-icon>
          <sit-icon name="placeholder" slot="indicator"></sit-icon>
        </sit-sidebar-item>
      </sit-sidebar-section>

      <sit-sidebar-section title="Settings" name="settings" collapsible>
        <sit-sidebar-item title="Preferences" name="preferences">
          <sit-icon name="gear" slot="icon"></sit-icon>
        </sit-sidebar-item>
      </sit-sidebar-section>
    </sit-sidebar>
  </div>
`;

const OverlayTemplate = args => html`
  <div class="sit:h-110">
    <div class="sit:bg-surface-raised sit:p-xs">
      <sit-icon-button
        data-sidebar-toggler="true"
        size="xs"
        variant="ghost"
        name="sidebar-expand"
        onclick="handleToggle()"
      ></sit-icon-button>
    </div>

    <div class="sit:relative sit:bg-white sit:h-full">
      <sit-sidebar variant="overlay" ?scrim=${args.scrim} ?collapsed=${args.collapsed} active=${args.active}>
        <div slot="upper" class="sit:font-semibold">Navigation</div>

        <sit-sidebar-section title="Main" name="main" ?collapsible=${false}>
          <sit-sidebar-item title="Dashboard" name="dashboard">
            <sit-icon name="house" slot="icon"></sit-icon>
          </sit-sidebar-item>

          <sit-sidebar-item title="Analytics" name="analytics">
            <sit-icon name="trend-up" slot="icon"></sit-icon>
          </sit-sidebar-item>

          <!-- Level 1: Reports Group -->
          <sit-sidebar-group title="Reports" name="reports">
            <sit-icon name="file-text" slot="icon"></sit-icon>
            <!-- Level 2: Report Items -->
            <sit-sidebar-item title="Yearly" name="yearly">
              <sit-icon name="calendar" slot="icon"></sit-icon>
            </sit-sidebar-item>
            <sit-sidebar-item title="Monthly" name="monthly">
              <sit-icon name="calendar" slot="icon"></sit-icon>
            </sit-sidebar-item>
          </sit-sidebar-group>
        </sit-sidebar-section>

        <sit-sidebar-section title="Settings" name="settings" collapsible>
          <sit-sidebar-item title="Account" name="account">
            <sit-icon name="user-circle" slot="icon"></sit-icon>
          </sit-sidebar-item>
        </sit-sidebar-section>
      </sit-sidebar>

      <div class="sit:p-8 sit:text-default">
        <p>Click "Toggle Sidebar" to open the overlay navigation panel.</p>
      </div>
    </div>

    <script>
      function handleToggle() {
        const sidebar = document.querySelector("Sit-sidebar");
        if (sidebar) {
          sidebar.toggleCollapsed();
        }
      }
    </script>
  </div>
`;

const DynamicTemplate = args => {
  let activeItem = args.active;

  const handleSetActive = itemName => {
    activeItem = itemName;
    const sidebar = document.querySelector("Sit-sidebar");
    if (sidebar) {
      sidebar.active = itemName;
    }
  };

  return html`
    <div class="sit:h-110 sit:flex sit:flex-col">
      <div class="sit:bg-surface-raised sit:p-4 sit:flex sit:gap-2">
        <sit-button size="xs" variant="outline" @click=${() => handleSetActive("dashboard")}> Dashboard </sit-button>
        <sit-button size="xs" variant="outline" @click=${() => handleSetActive("analytics")}> Analytics </sit-button>
        <sit-button size="xs" variant="outline" @click=${() => handleSetActive("reports")}> Reports </sit-button>
      </div>

      <div class="sit:flex-1 sit:overflow-auto">
        <sit-sidebar
          active=${activeItem}
          ?collapsed=${args.collapsed}
          ?scrim=${args.scrim}
          variant=${args.variant || "collapsible"}
        >
          <sit-sidebar-section title="Navigation" name="navigation" ?collapsible=${false}>
            <sit-sidebar-item title="Dashboard" name="dashboard">
              <sit-icon name="house" slot="icon"></sit-icon>
            </sit-sidebar-item>
            <sit-sidebar-item title="Analytics" name="analytics">
              <sit-icon name="trend-up" slot="icon"></sit-icon>
            </sit-sidebar-item>
            <sit-sidebar-item title="Reports" name="reports">
              <sit-icon name="file-text" slot="icon"></sit-icon>
            </sit-sidebar-item>
          </sit-sidebar-section>

          <sit-sidebar-section title="Settings" name="settings" collapsible>
            <sit-sidebar-item title="Account" name="account">
              <sit-icon name="user-circle" slot="icon"></sit-icon>
            </sit-sidebar-item>
          </sit-sidebar-section>
        </sit-sidebar>
      </div>
    </div>
  `;
};

const LinkedItemsTemplate = args => html`
  <div class="sit:h-110">
    <sit-sidebar
      active=${args.active}
      ?collapsed=${args.collapsed}
      ?scrim=${args.scrim}
      variant=${args.variant || "collapsible"}
    >
      <sit-sidebar-section title="Navigation" name="navigation" ?collapsible=${false}>
        <sit-sidebar-item title="Dashboard" name="dashboard">
          <sit-icon name="house" slot="icon"></sit-icon>
          <a href="/dashboard"></a>
        </sit-sidebar-item>
        <sit-sidebar-item title="Analytics" name="analytics">
          <sit-icon name="trend-up" slot="icon"></sit-icon>
          <a href="/analytics"></a>
        </sit-sidebar-item>
        <sit-sidebar-item title="Reports" name="reports">
          <sit-icon name="file-text" slot="icon"></sit-icon>
          <a href="/reports"></a>
        </sit-sidebar-item>
      </sit-sidebar-section>

      <sit-sidebar-section title="Settings" name="settings" collapsible>
        <sit-sidebar-item title="Account" name="account">
          <sit-icon name="user-circle" slot="icon"></sit-icon>
          <a href="/account"></a>
        </sit-sidebar-item>
        <sit-sidebar-item title="Preferences" name="preferences">
          <sit-icon name="gear" slot="icon"></sit-icon>
          <a href="/preferences"></a>
        </sit-sidebar-item>
      </sit-sidebar-section>
    </sit-sidebar>
  </div>
`;

export const Default = {
  render: BasicTemplate.bind({}),
  name: "Level 1",
  args: {
    active: "dashboard",
    collapsed: false,
    scrim: false,
    variant: "collapsible"
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        height: 440,
        controls: { disable: true }
      }
    }
  }
};

export const MultiLevel = {
  render: MultiLevelTemplate.bind({}),
  name: "Level 1-3 Navigation",
  args: {
    active: "latest-sales",
    collapsed: false,
    scrim: false,
    variant: "collapsible"
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        height: 440,
        controls: { disable: true }
      }
    }
  }
};

export const Overlay = {
  render: OverlayTemplate.bind({}),
  name: "Overlay sidebar",
  args: {
    variant: "overlay",
    scrim: true,
    collapsed: true,
    active: "dashboard"
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        height: 440,
        controls: { disable: true }
      }
    },
    argTypes: {
      attributes: true
    }
  }
};

export const Dynamic = {
  render: DynamicTemplate.bind({}),
  name: "Dynamic active state",
  args: {
    active: "dashboard",
    collapsed: false,
    scrim: false,
    variant: "collapsible"
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        height: 440,
        controls: { disable: true }
      }
    }
  }
};

export const LinkedItems = {
  render: LinkedItemsTemplate.bind({}),
  name: "Linked items",
  args: {
    active: "dashboard",
    collapsed: false,
    scrim: false,
    variant: "collapsible"
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        height: 440,
        controls: { disable: true }
      }
    }
  }
};
