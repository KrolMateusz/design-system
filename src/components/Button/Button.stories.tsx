import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['yellow', 'blue', 'violet', 'red', 'green', 'white', 'primary']
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined' ]
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small' ]
    },
  }
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story = (args) => <Button {...args}>Button</Button>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { variant: 'contained', color: 'primary', size: 'large', disabled: true };
