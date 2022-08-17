import React from 'react'
import ButtonBase from '@mui/material/ButtonBase'
import { styled } from '@mui/material/styles'

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

type OutlinedShadowProps = Pick<ButtonProps, 'color' | 'disabled'>

const StyledButton = styled(ButtonBase)<ButtonProps>(
  ({ theme, color = 'yellow', size, variant = 'contained', fullWidth }) => ({
    fontWeight: 700,
    textTransform: 'uppercase',
    position: 'relative',
    transition: 'transform 0.6s cubic-bezier(0.2, 1, 0.25, 1)',
    willChange: 'transform',
    '&:disabled': {
      color: theme.palette.action.disabled,
    },
    ...(fullWidth && {
      width: '100%',
    }),
    ...(size === 'small' && {
      fontSize: '12px',
      lineHeight: '22px',
      padding: `${theme.spacing(0.5, 1.25)}`,
    }),
    ...(size === 'medium' && {
      fontSize: '14px',
      lineHeight: '24px',
      padding: `${theme.spacing(1, 2)}`,
    }),
    ...(size === 'large' && {
      fontSize: '16px',
      lineHeight: '26px',
      padding: `${theme.spacing(2, 3)}`,
    }),
    ...(variant === 'contained' && {
      backgroundColor: theme.palette[color].main,
      color: theme.palette[color].contrastText,
      border: `2px solid ${color === 'primary' ? theme.palette.white.main : theme.palette.primary.main}`,
      '&::before': {
        content: '""',
        position: 'absolute',
        transition: 'transform 0.6s cubic-bezier(0.2, 1, 0.25, 1)',
        zIndex: -1,
        top: -2,
        right: -2,
        bottom: -2,
        left: -2,
        boxShadow: theme.elevation.primary.main,
      },
      '&:disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
        border: `2px solid ${theme.palette.action.disabledBackground}`,
      },
      '&:disabled::before': {
        boxShadow: theme.elevation.disabled.main,
      },
    }),
    ...(variant === 'outlined' && {
      backgroundColor: theme.palette.white.main,
      border: `2px solid ${theme.palette[color].main}`,
      color: theme.palette[color].main,
      '&:disabled': {
        border: `2px solid ${theme.palette.action.disabledBackground}`,
      },
    }),
    ...(variant === 'text' && {
      backgroundColor: 'transparent',
      color: theme.palette[color].main,
    }),
    '&:hover': {
      ...(variant !== 'text' && {
        transform: 'translateX(-3px) translateY(3px)',
      }),
    },
    '&:hover::before': {
      ...(variant !== 'text' && {
        transform: 'translateX(2px) translateY(-2px)',
      }),
    },
  }),
)

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

const ButtonContainer = styled('div')(() => ({
  position: 'relative',
}))

const OutlinedShadow = styled('span')<OutlinedShadowProps>(({ theme, color = 'yellow', disabled }) => ({
  backgroundColor: 'transparent',
  border: `2px solid ${theme.palette[color].main}`,
  position: 'absolute',
  left: '-4px',
  right: '4px',
  bottom: '-4px',
  top: '4px',
  zIndex: -1,
  ...(disabled && {
    border: `2px solid ${theme.palette.action.disabledBackground}`,
  }),
}))

const Button = ({
  children,
  endIcon: endIconProp,
  startIcon: startIconProp,
  variant,
  color,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  const endIcon = <ButtonEndIcon>{endIconProp}</ButtonEndIcon>
  const startIcon = <ButtonStartIcon>{startIconProp}</ButtonStartIcon>

  if (variant === 'outlined') {
    return (
      <ButtonContainer>
        <StyledButton
          color={color}
          variant={variant}
          disabled={disabled}
          onClick={onClick}
          {...props}
        >
          {startIcon}
          {children}
          {endIcon}
        </StyledButton>
        <OutlinedShadow
          color={color}
          disabled={disabled}
        />
      </ButtonContainer>
    )
  }

  return (
    <StyledButton
      color={color}
      variant={variant}
      disabled={disabled}
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
