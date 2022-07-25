import React from 'react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import MuiCircularProgress, { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress'

const StyledMuiCircularProgress = styled(MuiCircularProgress)({
  strokeDasharray: '30px, 200px',
})

const Progress = ({ ...props }: MuiCircularProgressProps) => {
  return (
    <StyledMuiCircularProgress {...props} />
  )
}

export default Progress