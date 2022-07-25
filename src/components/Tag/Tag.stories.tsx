import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tag from "./Tag";

export default {
    title: 'Components/Tag',
    component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag>{'#Tag'}</Tag>

export const Standard = Template.bind({})