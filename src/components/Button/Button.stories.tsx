import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DeleteIcon from '@mui/icons-material/DeleteSharp'
import SendIcon from '@mui/icons-material/SendSharp'
import Button, { ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['yellow', 'blue', 'violet', 'red', 'green', 'white', 'primary'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ children, ...args }: ButtonProps) => (
  <Button {...args}>{children}</Button>
)

export const Contained = Template.bind({})
Contained.args = { variant: 'contained', color: 'yellow', size: 'large', disabled: false, children: 'Large' }

export const ContainedWithStartIcon = Template.bind({})
ContainedWithStartIcon.args = {
  variant: 'contained',
  color: 'yellow',
  size: 'large',
  disabled: false,
  startIcon: <SendIcon />,
  children: 'Large',
}

export const ContainedWithEndIcon = Template.bind({})
ContainedWithEndIcon.args = {
  variant: 'contained',
  color: 'yellow',
  size: 'large',
  disabled: false,
  endIcon: <DeleteIcon />,
  children: 'Large',
}

export const ContainedWithIcons = Template.bind({})
ContainedWithIcons.args = {
  variant: 'contained',
  color: 'yellow',
  size: 'large',
  disabled: false,
  startIcon: <SendIcon />,
  endIcon: <DeleteIcon />,
  children: 'Large',
}

export const ContainedDisabledWithIcons = Template.bind({})
ContainedDisabledWithIcons.args = {
  variant: 'contained',
  color: 'yellow',
  size: 'large',
  disabled: true,
  startIcon: <SendIcon />,
  endIcon: <DeleteIcon />,
  children: 'Large',
}

export const Outlined = Template.bind({})
Outlined.args = { variant: 'outlined', color: 'yellow', size: 'large', disabled: false, children: 'Large' }

export const OutlinedWithStartIcon = Template.bind({})
OutlinedWithStartIcon.args = {
  variant: 'outlined',
  color: 'yellow',
  size: 'large',
  disabled: false,
  startIcon: <SendIcon />,
  children: 'Large',
}

export const OutlinedWithEbdIcoon = Template.bind({})
OutlinedWithEbdIcoon.args = {
  variant: 'outlined',
  color: 'yellow',
  size: 'large',
  disabled: false,
  endIcon: <DeleteIcon />,
  children: 'Large',
}

export const OutlinedWithIcons = Template.bind({})
OutlinedWithIcons.args = {
  variant: 'outlined',
  color: 'yellow',
  size: 'large',
  disabled: false,
  startIcon: <SendIcon />,
  endIcon: <DeleteIcon />,
  children: 'Large',
}

export const OutlinedDisabled = Template.bind({})
OutlinedDisabled.args = { variant: 'outlined', color: 'yellow', size: 'large', disabled: true, children: 'Large' }

export const OutlinedDisabledWithIcons = Template.bind({})
OutlinedDisabledWithIcons.args = {
  variant: 'outlined',
  color: 'yellow',
  size: 'large',
  disabled: true,
  startIcon: <SendIcon />,
  endIcon: <DeleteIcon />,
  children: 'Large',
}

export const Text = Template.bind({})
Text.args = { variant: 'text', color: 'yellow', size: 'large', disabled: false, children: 'Large' }

export const TextWithStartIcon = Template.bind({})
TextWithStartIcon.args = {
  variant: 'text',
  color: 'yellow',
  size: 'large',
  disabled: false,
  startIcon: <SendIcon />,
  children: 'Large',
}

export const TextWithEndIcon = Template.bind({})
TextWithEndIcon.args = {
  variant: 'text',
  color: 'yellow',
  size: 'large',
  disabled: false,
  endIcon: <DeleteIcon />,
  children: 'Large',
}

export const TextWithIcons = Template.bind({})
TextWithIcons.args = {
  variant: 'text',
  color: 'yellow',
  size: 'large',
  disabled: false,
  startIcon: <SendIcon />,
  endIcon: <DeleteIcon />,
  children: 'Large',
}
