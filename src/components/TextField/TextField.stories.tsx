import React from 'react'
import { Story, Meta } from '@storybook/react'
import TextField, { TextFieldProps } from './TextField'
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleSharp from '@mui/icons-material/AccountCircleSharp'

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta

const Template: Story<TextFieldProps> = (args: TextFieldProps) => <TextField {...args} />

export const Standard = Template.bind({})
Standard.args = {
  label: 'Hello',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Hello',
  error: true,
  helperText: 'Some error'
}

export const StartIcon = Template.bind({})
StartIcon.args = {
  label: 'Input with icon',
  startAdornment: (<InputAdornment position='start'><AccountCircleSharp /></InputAdornment>),
}

export const EndIcon = Template.bind({})
EndIcon.args = {
  label: 'Input with icon',
  endAdornment: (<InputAdornment position='end'><AccountCircleSharp /></InputAdornment>),
}
