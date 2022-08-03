import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CheckboxGroup from './CheckboxGroup'

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>

const Template: ComponentStory<typeof CheckboxGroup> = (args) => <CheckboxGroup {...args} />

export const HelperText = Template.bind({})
HelperText.args = {
  options: [
    {
      checked: false,
      label: 'First Option',
      value: 'first',
    },
    {
      checked: true,
      label: 'Second Option',
      value: 'second',
    },
    {
      checked: false,
      label: 'Third Option',
      value: 'third',
    },
  ],
  formLabel: 'Pick an option',
  helperText: 'Be careful',
}

export const Error = Template.bind({})
Error.args = {
  options: [
    {
      checked: false,
      label: 'First Option',
      value: 'first',
    },
    {
      checked: false,
      label: 'Second Option',
      value: 'second',
    },
    {
      checked: false,
      label: 'Third Option',
      value: 'third',
    },
  ],
  formLabel: 'Pick an option',
  helperText: 'Error',
  error: true,
}
