import React from 'react'
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'

export type TextFieldProps = MuiTextFieldProps

const TextField = (props: TextFieldProps) => {
  return <MuiTextField {...props} />
}

export default TextField
