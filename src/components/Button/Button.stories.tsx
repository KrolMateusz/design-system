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

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button
    {...args}
  >
    Large
  </Button>
)

export const Contained = Template.bind({})
Contained.args = { variant: 'contained', color: 'yellow', size: 'large', disabled: false }

export const ContainedWithStartIcon = Template.bind({})
ContainedWithStartIcon.args = { variant: 'contained', color: 'yellow', size: 'large', disabled: false, startIcon: <SendIcon /> }

export const ContainedWithEndIcon = Template.bind({})
ContainedWithEndIcon.args = { variant: 'contained', color: 'yellow', size: 'large', disabled: false, endIcon: <DeleteIcon /> }

export const ContainedWithIcons = Template.bind({})
ContainedWithIcons.args = { variant: 'contained', color: 'yellow', size: 'large', disabled: false, startIcon: <SendIcon />, endIcon: <DeleteIcon /> }

// export const Outlined = Template.bind({})
// Outlined.args = { variant: 'outlined', color: 'yellow', size: 'large', disabled: false }

export const Text = Template.bind({})
Text.args = { variant: 'text', color: 'yellow', size: 'large', disabled: false }

export const TextWithStartIcon = Template.bind({})
TextWithStartIcon.args = { variant: 'text', color: 'yellow', size: 'large', disabled: false, startIcon: <SendIcon /> }

export const TextWithEndIcon = Template.bind({})
TextWithEndIcon.args = { variant: 'text', color: 'yellow', size: 'large', disabled: false, endIcon: <DeleteIcon /> }

export const TextWithIcons = Template.bind({})
TextWithIcons.args = { variant: 'text', color: 'yellow', size: 'large', disabled: false, startIcon: <SendIcon />, endIcon: <DeleteIcon /> }
