import type { StoryObj, Meta } from "@storybook/react";
import { PriceTag } from ".";

const meta: Meta<typeof PriceTag> = {
  title: "PriceTag",
  component: PriceTag,
};

export default meta;

type Story = StoryObj<typeof PriceTag>;

export const Default: Story = {
  render: (args) => <PriceTag {...args} />,
};
