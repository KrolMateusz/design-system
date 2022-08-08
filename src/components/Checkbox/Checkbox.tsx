import React from 'react'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import MuiCheckbox from '@mui/material/Checkbox'

export interface CheckboxProps {
  /**
   * The label to display next to checkbox
   */
  label?: string
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean
  /**
   * The label to display next to checkbox
   */
  disabled?: boolean
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium'
  name: string
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  if (label) {
    return (
      <MuiFormControlLabel
        control={<MuiCheckbox {...props} />}
        label={label}
      />
    )
  }
  return <MuiCheckbox {...props} />
}

export default Checkbox
