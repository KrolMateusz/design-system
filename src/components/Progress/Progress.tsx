import React from 'react'
import MuiCircularProgress, { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress'

const Progress = ({ ...props }: MuiCircularProgressProps) => {
  return (
    <MuiCircularProgress {...props}  />
  )
}

export default Progress