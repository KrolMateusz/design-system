import React from 'react'
import Radio from '../Radio'
import MuiRadioGroup from '@mui/material/RadioGroup'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import MuiFormControl from '@mui/material/FormControl'
import MuiFormLabel from '@mui/material/FormLabel'
import MuiFormHelperText from '@mui/material/FormHelperText'

export interface RadioGroupOption {
  label: string
  value: string
  disabled?: boolean
}

export interface RadioGroupProps {
  formLabel: string
  options: RadioGroupOption[]
  defaultOptionValue: RadioGroupOption['value']
  onChange: (value: string) => void
  row?: boolean
  helperText?: string
  error?: boolean
}

const RadioGroup = ({ formLabel, options, defaultOptionValue, row, helperText, error, onChange }: RadioGroupProps) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange((event.target as HTMLInputElement).value)
  }

  return (
    <MuiFormControl
      variant={'standard'}
      error={error}
    >
      <MuiFormLabel>{formLabel}</MuiFormLabel>
      <MuiRadioGroup
        onChange={handleRadioChange}
        defaultValue={defaultOptionValue}
        row={row}
      >
        {options.map(({ value, label, disabled }) => (
          <MuiFormControlLabel
            key={value}
            value={value}
            label={label}
            disabled={disabled}
            control={<Radio />}
          />
        ))}
      </MuiRadioGroup>
      <MuiFormHelperText>{helperText}</MuiFormHelperText>
    </MuiFormControl>
  )
}

export default RadioGroup
