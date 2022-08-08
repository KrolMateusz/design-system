import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Link, { LinkProps } from './Link'

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = ({ children, ...args }: LinkProps) => <Link {...args}>{children}</Link>

export const Standard = Template.bind({})
Standard.args = {
  children: 'Click here',
  href: '#',
}

export const WithArrow = Template.bind({})
WithArrow.args = {
  children: 'Click here',
  href: '#',
  arrow: true,
}

export const NewTab = Template.bind({})
NewTab.args = {
  children: 'Click here',
  href: '#',
  arrow: true,
  target: '_blank',
  rel: 'noopener',
}
