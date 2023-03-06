import type { Meta, StoryObj } from "@storybook/react";

import { default as Component } from "./index";

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CounterSample: Story = {
  args: {
    title: "Story Title!",
  },
};
