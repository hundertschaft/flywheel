import type { Meta, StoryObj } from "@storybook/react";

import { default as Component } from "./index";

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    children: "The Title of the Header",
  },
};
