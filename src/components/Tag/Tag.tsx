import React from 'react'
import { styled } from '@mui/material/styles'

export interface TagProps {
  children: string | number
}

const StyledTag = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.yellow.main,
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  fontFamily: 'Roboto',
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: 700,
  padding: '6px 10px',
  transition: 'all 0.6s cubic-bezier(0.2, 1, 0.25, 1)',
  transitionProperty: 'color, background-color',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}))

const Tag = ({ children }: TagProps) => {
  return <StyledTag>{children}</StyledTag>
}

export default Tag
