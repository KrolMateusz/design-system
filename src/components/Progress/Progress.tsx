import React from 'react'
import MuiCircularProgress, { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress'

export interface ProgressProps {
  color?: 'primary' | 'yellow'
}

const Progress = ({ ...props }: MuiCircularProgressProps) => {
  return <MuiCircularProgress {...props} />
}

export default Progress
