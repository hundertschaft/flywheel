import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.@(stories|story).@(js|jsx|ts|tsx)",

    // DEPISSUE Storybook PNPM Compatibility: This can lead to recursive story sourcing from symlinked packages within the node_modules folder. Alternative is to provide the list of files directly since adding "!(/node_modules)" to the glob doesn't work See here: https://github.com/storybookjs/storybook/issues/11181#issuecomment-1455449562

    // UI Workspace
    "../node_modules/ui/**/*.mdx)",
    "../node_modules/ui/**/*.@(stories|story).@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    // Telemetry for Storybook Team
    disableTelemetry: false,
    enableCrashReports: true,
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
