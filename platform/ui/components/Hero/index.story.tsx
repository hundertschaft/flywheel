import type { Meta, StoryObj } from "@storybook/react";

import { default as Component } from "./index";

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  args: {
    welcomeMsg: "Welcome Message!",
    children:
      "This is the text under the welcome message. A paragraph tag is used to wrap the content.",
  },
};
