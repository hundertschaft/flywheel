import type { Meta, StoryObj } from "@storybook/react";

import { default as Component } from "./index";

const meta = {
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Counter: Story = {
  args: {
    title: "Story Title!",
  },
};
