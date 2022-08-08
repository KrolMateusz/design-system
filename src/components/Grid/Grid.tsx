import React from 'react'
import MuiGrid, { GridProps as MuiGridProps } from '@mui/material/Grid'

const Grid = ({ children, ...props }: MuiGridProps) => {
  return <MuiGrid {...props}>{children}</MuiGrid>
}

export default Grid
