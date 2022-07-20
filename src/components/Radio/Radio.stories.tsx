import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Radio from "./Radio";

export default {
    title: 'Components/Radio',
    component: Radio,
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Standard = Template.bind({})
Standard.args = {
    label: 'First'
}