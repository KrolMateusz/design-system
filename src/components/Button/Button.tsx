import React from "react";
import ButtonBase from '@mui/material/ButtonBase';
import { styled, Theme } from '@mui/system';

const getBorderColor = (variant: string, color: string, theme: Theme) => {
  if (variant === 'contained') {
    if (color === 'primary') {
      return theme.palette.white.main
    }
    return theme.palette.primary.main
  }
  return theme.palette[ color ].main
}

const getShadow = (theme: Theme, variant: string, color: string) => {
  if (variant === 'contained') {
    return {
      content: '""',
      position: 'absolute',
      transition: 'transform 0.6s cubic-bezier(0.2, 1, 0.25, 1)',
      zIndex: -1,
      top: -2,
      right: -2,
      bottom: -2,
      left: -2,
      boxShadow: theme.elevation.primary.main,
    }
  }
  return {
    content: '""',
    position: 'absolute',
    transition: 'transform 0.6s cubic-bezier(0.2, 1, 0.25, 1)',
    zIndex: -1,
    top: 4,
    left: -8,
    bottom: -4,
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(${theme.palette[ color! ].main}, ${theme.palette[ color! ].main}), linear-gradient(to right, ${theme.palette[ color! ].main}, ${theme.palette[ color! ].main}), linear-gradient(to bottom, ${theme.palette[ color! ].main}, ${theme.palette[ color! ].main}), linear-gradient(to left, ${theme.palette[ color! ].main}, ${theme.palette[ color! ].main}), linear-gradient(transparent, transparent)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '2px 100%, 2px 100%, 2px 100%, 2px 100%, calc(100% - 4px) 100%',
    backgroundPosition: 'left bottom, left bottom, right top, right top, 4px 4px'
  }
}

const StyledButton = styled(ButtonBase)<{ color?: string, size?: string, variant?: string }>(({ theme, color, size, variant }) => ({
  backgroundColor: variant === 'contained' ? theme.palette[ color! ].main : 'transparent',
  padding: size === 'large' ? `${theme.spacing(2, 3)}` : size === 'medium' ? `${theme.spacing(1, 2)}` : `4px 10px`,
  fontWeight: 700,
  textTransform: 'uppercase',
  color: variant === 'contained' ? theme.palette[ color! ].contrastText : theme.palette[ color! ].main,
  border: `2px solid ${getBorderColor(variant!, color!, theme)}`,
  position: 'relative',
  transition: 'transform 0.6s cubic-bezier(0.2, 1, 0.25, 1)',
  willChange: 'transform',
  '&::before': getShadow(theme, variant!, color!),
  '&:hover': {
    transform: 'translateX(-4px) translateY(4px)',
  },
  '&:hover::before': {
    transform: 'translateX(2px) translateY(-2px)',
  },
  '&:disabled': {
    backgroundColor: theme.palette.action.disabledBackground,
    border: `2px solid ${theme.palette.action.disabledBackground}`,
    color: theme.palette.action.disabled
  },
  '&:disabled::before': {
    boxShadow: theme.elevation.disabled.main
  }
}));

const Button = ({ children, ...props }) => {
  
  return (
    <StyledButton {...props}>{children}</StyledButton>
  );
};

export default Button;