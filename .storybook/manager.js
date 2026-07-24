import { addons } from "@storybook/manager-api";
import sitTheme from "./sitTheme";

addons.setConfig({
  theme: sitTheme,
  enableShortcuts: false
});
