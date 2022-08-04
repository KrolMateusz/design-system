import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Checkbox from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Standard = Template.bind({})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Label',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Label',
  disabled: true,
}

export const Small = Template.bind({})
Small.args = {
  label: 'Small',
  size: 'small',
}
