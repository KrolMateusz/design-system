import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Select from "./Select";

export default {
    title: 'Components/Select',
    component: Select,
    argTypes: {
        variant: {
            control: 'select',
            options: [ 'filled', 'outlined', 'standard' ]
        },
        size: {
            control: 'select',
            options: [ 'small', 'medium' ]
        }
    }
} as Meta

const Template: Story = (args) => <Select {...args} />

export const Standard = Template.bind({})
Standard.args = { variant: 'outlined', size: 'medium' }
