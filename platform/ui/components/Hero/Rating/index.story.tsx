import type { Meta, StoryObj } from "@storybook/react";

import { default as Component } from "./index";

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Rating: Story = {
  args: {
    from: 1,
    to: 10,
    threshold: 6,
    timeToRespond: 3000,
    msgPositive: "Great!",
    msgNegative: "Oh bad",
  },
};
