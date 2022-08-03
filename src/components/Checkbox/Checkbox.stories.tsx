import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Checkbox from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Standard = Template.bind({})
