import React from 'react'
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

export interface CheckboxProps extends MuiCheckboxProps {
    /**
      * The label to display next to checkbox
    */
    label?: string;
}

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  if (!!label) {
    return (
      <MuiFormControlLabel control={<MuiCheckbox {...props} />} label={label} />
    )
  }
  return (
    <MuiCheckbox {...props} />
  )
}

export default Checkbox