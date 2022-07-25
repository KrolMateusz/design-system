import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "./Link"

export default {
    title: 'Components/Link',
    component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = ({ children, ...args }) => <Link {...args}>{children}</Link>

export const Standard = Template.bind({})
Standard.args = {
    children: 'Click here',
    href: '#'
}
