import React from 'react'
import { Story, Meta } from '@storybook/react'
import TextField, { TextFieldProps } from './TextField'

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta

const Template: Story<TextFieldProps> = (args: TextFieldProps) => <TextField {...args} />

export const PrimaryTextField = Template.bind({})
PrimaryTextField.args = {
  label: 'Hello',
}
