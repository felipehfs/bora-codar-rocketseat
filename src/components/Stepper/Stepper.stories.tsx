import type { Meta, StoryObj } from "@storybook/react";
import Stepper from ".";

const meta: Meta<typeof Stepper> = {
  title: "Stepper",
  component: Stepper,
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    value: 1,
  },
  render: (args) => <Stepper {...args} />,
};
