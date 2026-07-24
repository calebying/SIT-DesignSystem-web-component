import { html } from "lit";

export const SolidVariant = {
  render: Template.bind({}),
  name: "Solid variant",
  args: { variant: "solid" },
  parameters: {}
};
export const UnderlinedDensityCompact = {
  render: Template.bind({}),
  name: "Compact density for underlined tabs",
  args: { density: "compact" },
  parameters: {}
};
export const SolidDensityCompact = {
  render: Template.bind({}),
  name: "Compact density for solid tabs",
  args: { density: "compact", variant: "solid" },
  parameters: {}
};

export const OrientationUnderlined = {
  render: Template.bind({}),
  name: "Vertical orientation for underlined tabs",
  args: { orientation: "vertical" },
  parameters: {}
};
export const OrientationSolid = {
  render: Template.bind({}),
  name: "Vertical orientation for solid tabs",
  args: { orientation: "vertical", variant: "solid" },
  parameters: {}
};

const EventsTemplate = () => {
  return html`
    <div>
      <div id="event-log" class="sit:mb-lg sit:p-lg sit:bg-surface-raised sit:rounded-md">
        <strong>Event Log:</strong>
        <div id="log-content" class="sit:mt-sm sit:font-mono sit:text-xs"></div>
      </div>

      <sit-tab-group id="event-tab-group">
        <sit-tab slot="nav" panel="general" ariaLabel="General">General</sit-tab>
        <sit-tab slot="nav" panel="settings" ariaLabel="Settings">Settings</sit-tab>
        <sit-tab slot="nav" panel="advanced" ariaLabel="Advanced">Advanced</sit-tab>

        <sit-tab-panel name="general">
          <p>General tab content. Switch tabs to see the events being triggered.</p>
        </sit-tab-panel>
        <sit-tab-panel name="settings">
          <p>Settings tab content. The event log above shows which tab is active.</p>
        </sit-tab-panel>
        <sit-tab-panel name="advanced">
          <p>Advanced tab content. Use event.detail.name to track tab changes.</p>
        </sit-tab-panel>
      </sit-tab-group>
    </div>

    <script>
      const tabGroup = document.querySelector("#event-tab-group");
      const logContent = document.querySelector("#log-content");

      function addLog(message) {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = document.createElement("div");
        logEntry.textContent = timestamp + " - " + message;
        logContent.insertBefore(logEntry, logContent.firstChild);

        // Keep only last 5 entries
        while (logContent.children.length > 5) {
          logContent.removeChild(logContent.lastChild);
        }
      }

      tabGroup.addEventListener("Sit-tab-show", e => {
        addLog('Sit-tab-show: Panel "' + e.detail.name + '" is now active');

        // Example side effect: You can perform actions when a tab is shown
        console.log("Tab shown:", e.detail.name);
      });

      tabGroup.addEventListener("Sit-tab-hide", e => {
        addLog('Sit-tab-hide: Panel "' + e.detail.name + '" was hidden');

        // Example side effect: You can perform cleanup when a tab is hidden
        console.log("Tab hidden:", e.detail.name);
      });
    </script>
  `;
};

export const Events = {
  render: EventsTemplate.bind({}),
  name: "Tab events",
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};
