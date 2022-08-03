import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select'
import MuiFormHelperText from '@mui/material/FormHelperText'
import MuiBox from '@mui/material/Box'
import MuiSvgIcon from '@mui/material/SvgIcon'

export interface SelectOptions {
  label: string
  value: string | number
}

export interface SelectProps {
  options: SelectOptions[]
  label: string
  size?: 'small' | 'medium'
  variant?: 'filled' | 'outlined' | 'standard'
  disabled?: boolean
  error?: boolean
  helperText?: string
  icon?: React.ReactNode
  onChange: (value: string | number) => void
}

const Select = ({ label, options, size, disabled, error, helperText, icon, onChange, ...props }: SelectProps) => {
  const [state, setState] = useState('')

  useEffect(() => {
    onChange(state)
  }, [state])

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string)
  }
  const selectIconProps = {
    notched: true,
    displayEmpty: true,
    renderValue: (value: string) => {
      return (
        <MuiBox sx={{ display: 'flex', gap: 1 }}>
          <MuiSvgIcon color='primary'>{icon}</MuiSvgIcon>
          {value}
        </MuiBox>
      )
    },
  }
  return (
    <FormControl
      sx={{ minWidth: 120 }}
      size={size}
      disabled={disabled}
      error={error}
    >
      <InputLabel
        {...(icon ? { shrink: true } : {})}
        id={label}
      >
        {label}
      </InputLabel>
      <MuiSelect
        {...props}
        {...(icon ? selectIconProps : {})}
        labelId={label}
        label={label}
        onChange={handleChange}
      >
        {options.map(({ label, value }) => (
          <MenuItem
            key={value}
            value={value}
          >
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <MuiFormHelperText>{helperText}</MuiFormHelperText>}
    </FormControl>
  )
}

export default Select
