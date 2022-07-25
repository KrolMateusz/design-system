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
      options: ['contained', 'outlined', 'text' ]
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small' ]
    },
  }
} as Meta;

const Template: Story = (args) => <Button {...args}>Button</Button>;

export const Contained = Template.bind({});
Contained.args = { variant: 'contained', color: 'yellow', size: 'large', disabled: false };

export const Outlined = Template.bind({});
Outlined.args = { variant: 'outlined', color: 'yellow', size: 'large', disabled: false };

export const Text = Template.bind({});
Text.args = { variant: 'text', color: 'yellow', size: 'large', disabled: false };
