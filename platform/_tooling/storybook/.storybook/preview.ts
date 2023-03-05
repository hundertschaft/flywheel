import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      /**
       * Enables ArgType descriptions within control panels.
       * UPSTREAM Storybook: Disabled since not working for JSDocs. Enable when this is fixed: https://github.com/storybookjs/storybook/issues/21399
       */
      expanded: false,
    },
  },
};

export default preview;
