import React, { useEffect, useState } from 'react'
import MuiTextField from '@mui/material/TextField'

export interface TextFieldProps {
  label: string
  size?: 'small' | 'medium'
  error?: boolean
  helperText?: string
  multiline?: boolean
  maxRows?: number
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  onChange: (value: string) => void
}

const TextField = ({ startAdornment, endAdornment, onChange, ...props }: TextFieldProps) => {
  const [value, setValue] = useState<string | undefined>()

  useEffect(() => {
    onChange(value)
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <MuiTextField
      InputProps={{ startAdornment, endAdornment }}
      value={value}
      onChange={handleChange}
      {...props}
    />
  )
}

export default TextField
