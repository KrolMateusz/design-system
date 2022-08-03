import React from 'react'
import ButtonBase from '@mui/material/ButtonBase'
import { styled } from '@mui/material/styles'
import { Theme } from '@mui/system'

// export type ButtonProps = Pick<MuiButtonProps, 'children' | 'color' | 'variant' | 'size' | 'startIcon' | 'endIcon'>
export interface ButtonProps {
  /**
   * The content of the component.
   */
  children: React.ReactNode
  /**
   * The color of the component.
   * @default 'yellow'
   */
  color?: 'primary' | 'yellow' | 'blue' | 'violet' | 'red' | 'green' | 'white'
  /**
   * The variant of the component.
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text'
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean
  /**
   * The content of the component.
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const getBorderColor = (variant: string, color: string, theme: Theme) => {
  if (variant === 'contained') {
    if (color === 'primary') {
      return theme.palette.white.main
    }
    return theme.palette.primary.main
  }
  return theme.palette[color].main
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
    backgroundImage: `linear-gradient(${theme.palette[color!].main}, ${
      theme.palette[color!].main
    }), linear-gradient(to right, ${theme.palette[color!].main}, ${
      theme.palette[color!].main
    }), linear-gradient(to bottom, ${theme.palette[color!].main}, ${
      theme.palette[color!].main
    }), linear-gradient(to left, ${theme.palette[color!].main}, ${
      theme.palette[color!].main
    }), linear-gradient(transparent, transparent)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '2px 100%, 2px 100%, 2px 100%, 2px 100%, calc(100% - 4px) 100%',
    backgroundPosition: 'left bottom, left bottom, right top, right top, 4px 4px',
  }
}

const StyledButton = styled(ButtonBase)<ButtonProps>(({ theme, color, size, variant, fullWidth }) => ({
  ...(fullWidth && {
    width: '100%',
  }),
  backgroundColor: variant === 'contained' ? theme.palette[color!].main : 'transparent',
  padding: size === 'large' ? `${theme.spacing(2, 3)}` : size === 'medium' ? `${theme.spacing(1, 2)}` : '4px 10px',
  fontWeight: 700,
  textTransform: 'uppercase',
  color: variant === 'contained' ? theme.palette[color!].contrastText : theme.palette[color!].main,
  border: variant === 'text' ? '' : `2px solid ${getBorderColor(variant!, color!, theme)}`,
  position: 'relative',
  transition: 'transform 0.6s cubic-bezier(0.2, 1, 0.25, 1)',
  willChange: 'transform',
  '&::before': variant !== 'text' && getShadow(theme, variant!, color!),
  '&:hover': variant !== 'text' && {
    transform: 'translateX(-4px) translateY(4px)',
  },
  '&:hover::before': variant !== 'text' && {
    transform: 'translateX(2px) translateY(-2px)',
  },
  '&:disabled': {
    backgroundColor: variant !== 'text' && theme.palette.action.disabledBackground,
    border: variant !== 'text' && `2px solid ${theme.palette.action.disabledBackground}`,
    color: theme.palette.action.disabled,
  },
  '&:disabled::before': variant !== 'text' && {
    boxShadow: theme.elevation.disabled.main,
  },
}))

const ButtonEndIcon = styled('span')(({ theme }) => ({
  display: 'inherit',
  marginRight: `-${theme.spacing(0.5)}`,
  marginLeft: theme.spacing(1),
  '& > *:nth-of-type(1)': {
    fontSize: 22,
  },
}))

const ButtonStartIcon = styled('span')(({ theme }) => ({
  display: 'inherit',
  marginRight: theme.spacing(1),
  marginLeft: `-${theme.spacing(0.5)}`,
  '& > *:nth-of-type(1)': {
    fontSize: 22,
  },
}))

const Button = ({ children, endIcon: endIconProp, startIcon: startIconProp, onClick, ...props }: ButtonProps) => {
  const endIcon = <ButtonEndIcon>{endIconProp}</ButtonEndIcon>
  const startIcon = <ButtonStartIcon>{startIconProp}</ButtonStartIcon>

  return (
    <StyledButton
      onClick={onClick}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  )
}

export default Button
