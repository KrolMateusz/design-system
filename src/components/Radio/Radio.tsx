import React from 'react'
import MuiRadio, { RadioProps as MuiRadioProps } from '@mui/material/Radio'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

export interface RadioProps extends MuiRadioProps {
    label?: string;
}

const Radio = ({ label, ...props }: RadioProps) => {
  if (!!label) {
    return (
      <MuiFormControlLabel control={<MuiRadio {...props} />} label={label} />
    )
  }
  return (
    <MuiRadio {...props} />
  )
}

export default Radio