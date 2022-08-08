import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Select from './Select'
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Age',
  options: [
    {
      label: 'Ten',
      value: 10,
    },
    {
      label: 'Twenty',
      value: 20,
    },
    {
      label: 'Thirty',
      value: 30,
    },
  ],
}

export const Error = Template.bind({})
Error.args = {
  label: 'Age',
  options: [
    {
      label: 'Ten',
      value: 10,
    },
    {
      label: 'Twenty',
      value: 20,
    },
    {
      label: 'Thirty',
      value: 30,
    },
  ],
  error: true,
  helperText: 'Some error',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Age',
  options: [
    {
      label: 'Ten',
      value: 10,
    },
    {
      label: 'Twenty',
      value: 20,
    },
    {
      label: 'Thirty',
      value: 30,
    },
  ],
  disabled: true,
}

export const Icon = Template.bind({})
Icon.args = {
  label: 'Age',
  options: [
    {
      label: 'Ten',
      value: 10,
    },
    {
      label: 'Twenty',
      value: 20,
    },
    {
      label: 'Thirty',
      value: 30,
    },
  ],
  icon: <AccountBalanceSharpIcon />,
}
