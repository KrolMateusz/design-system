import React from 'react'
import { styled } from '@mui/system';

const StyledTag = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.yellow.main,
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    padding: '6px 10px',
    fontWeight: 'bold',
    transition: 'all 0.6s cubic-bezier(0.2, 1, 0.25, 1)',
    transitionProperty: 'color, background-color',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    }
}))

const Tag = ({ children, ...props }) => {
  return (
    <StyledTag {...props}>{children}</StyledTag>
  )
}

export default Tag