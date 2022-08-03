import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import RadioGroup from './RadioGroup'

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  formLabel: 'Form label',
  options: [
    {
      label: 'First',
      value: 'first',
    },
    {
      label: 'Second',
      value: 'second',
    },
    {
      label: 'Third',
      value: 'third',
    },
  ],
  defaultOptionValue: 'first',
}

export const HelperText = Template.bind({})
HelperText.args = {
  formLabel: 'Form label',
  options: [
    {
      label: 'First',
      value: 'first',
    },
    {
      label: 'Second',
      value: 'second',
    },
    {
      label: 'Third',
      value: 'third',
    },
  ],
  defaultOptionValue: 'first',
  helperText: 'Information label',
}

export const Error = Template.bind({})
Error.args = {
  formLabel: 'Form label',
  options: [
    {
      label: 'First',
      value: 'first',
    },
    {
      label: 'Second',
      value: 'second',
    },
    {
      label: 'Third',
      value: 'third',
    },
  ],
  defaultOptionValue: 'first',
  helperText: 'Error',
  error: true,
}
