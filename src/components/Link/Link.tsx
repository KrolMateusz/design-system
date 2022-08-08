import React from 'react'
import { styled } from '@mui/material/styles'
import MuiLink from '@mui/material/Link'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'

export interface LinkProps {
  children: React.ReactNode
  href: string
  arrow?: boolean
  target?: string
  rel?: string
}

const StyledLink = styled(MuiLink)({
  fontFamily: 'TT Commons',
  position: 'relative',
  '&:hover': {
    cursor: 'pointer',
  },
})

const StyledArrowForwardSharpIcon = styled(ArrowForwardSharpIcon)(({ theme }) => ({
  position: 'absolute',
  fontSize: '0.875em',
  marginLeft: theme.spacing(0.25),
  top: '50%',
  transform: 'translateY(-50%)',
}))

const Link = ({ children, href, arrow, ...props }: LinkProps) => {
  return (
    <StyledLink
      {...props}
      href={href}
    >
      {children}
      {arrow && <StyledArrowForwardSharpIcon />}
    </StyledLink>
  )
}

export default Link
