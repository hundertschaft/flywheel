import React from "react";

import type { Preview } from "@storybook/react";

import Shell from "@ui/shell";

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
       * DEPISSUE Storybook: Disabled since not working for JSDocs. Enable when this is fixed: https://github.com/storybookjs/storybook/issues/21399
       */
      expanded: false,
    },
  },
};

export default preview;

/**
 * Applies shell for global styling.
 * NOTE In multi theme / context environment this should be extended. See: https://storybook.js.org/docs/react/writing-stories/decorators#context-for-mocking
 */
export const decorators = [
  (Story) => (
    <div>
      <Shell>{Story()}</Shell>
    </div>
  ),
];
