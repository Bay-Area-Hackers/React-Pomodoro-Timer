import React from 'react'
import './button.css'

export const Size = {
  Small: '',
  Medium: '',
  Large: '',
} as const

type Size = typeof Size[keyof typeof Size]

interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: Size
  label: string
  onClick?: () => void
}
export const Button = ({
  primary = false,
  size = Size.Medium,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'text-white bg-blue-300'
    : 'text-black bg-transparent shadow'
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
