import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
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

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  borderRadius: 0,
  '& fieldset': {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 0,
  },
  '&.Mui-focused fieldset': {
    border: `2px solid ${theme.palette.primary.main}`,
  },
}))

const TextField = ({ startAdornment, endAdornment, onChange, ...props }: TextFieldProps) => {
  const [value, setValue] = useState<string | undefined>()

  useEffect(() => {
    onChange(value)
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <StyledTextField
      InputLabelProps={{ style: { fontSize: 20 } }}
      InputProps={{ startAdornment, endAdornment, style: { fontSize: 20 } }}
      value={value}
      onChange={handleChange}
      {...props}
    />
  )
}

export default TextField
