import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Tag, { TagProps } from './Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = ({ children }: TagProps) => <Tag>{children}</Tag>

export const Standard = Template.bind({})
Standard.args = {
  children: '#tag',
}
