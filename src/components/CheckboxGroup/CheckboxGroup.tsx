import React, { useEffect, useState } from 'react'
import MuiFormLabel from '@mui/material/FormLabel'
import MuiFormControl from '@mui/material/FormControl'
import MuiFormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import MuiFormHelperText from '@mui/material/FormHelperText'
import Checkbox from '../Checkbox'

export interface CheckboxOption {
  label: string
  value: string
  checked: boolean
}

export interface CheckboxGroupProps {
  options: CheckboxOption[]
  formLabel: string
  helperText: string
  onChange: (values: string[]) => void
  error?: boolean
}

const CheckboxGroup = ({ options, formLabel, helperText, error, onChange }: CheckboxGroupProps) => {
  const [state, setState] = useState(
    options.reduce<Record<string, boolean>>(
      (acc, { value, checked }) => ({
        ...acc,
        [value]: checked,
      }),
      {},
    ),
  )

  useEffect(() => {
    const checkedCheckboxState = Object.entries(state).filter(([key, value]) => value && key)
    const checkedCheckboxValues = checkedCheckboxState.map((entry) => entry[0])
    onChange(checkedCheckboxValues)
  }, [state])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }))
  }

  return (
    <MuiFormControl
      error={error}
      component={'fieldset'}
      variant={'standard'}
    >
      <MuiFormLabel>{formLabel}</MuiFormLabel>
      <MuiFormGroup>
        {options.map(({ label, value }) => (
          <FormControlLabel
            key={value}
            label={label}
            control={
              <Checkbox
                onChange={handleChange}
                checked={state[value]}
                name={value}
              />
            }
          />
        ))}
      </MuiFormGroup>
      <MuiFormHelperText>{helperText}</MuiFormHelperText>
    </MuiFormControl>
  )
}

export default CheckboxGroup
