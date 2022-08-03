import React from 'react'
import { styled } from '@mui/material/styles'
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp'

const StyledLink = styled(MuiLink)({
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

const Link = ({ children, href }: MuiLinkProps) => {
  return (
    <StyledLink href={href}>
      {children}
      <StyledArrowForwardSharpIcon />
    </StyledLink>
  )
}

export default Link
