import React, { HTMLAttributes, ReactNode } from 'react'

export const Size = {
  Small: 'px-3 py-2 text-md',
  Medium: 'px-5 py-3 text-xl',
  Large: 'px-7 py-4 text-2xl',
} as const

type Size = typeof Size[keyof typeof Size]

interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: Size
  children: string
  onClick?: () => void
}
export const Button = ({
  primary = false,
  size = Size.Medium,
  backgroundColor,
  children,
  onClick,
  ...props                                                                 
}: ButtonProps) => {
  const mode = primary
    ? 'text-white bg-blue-300'
    : 'text-black bg-white drop-shadow-md'
  return (
    <button
      type="button"
      className={`font-bold cursor-pointer rounded-full ${size} ${mode}`}
      style={{ backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
interface Props extends HTMLAttributes<HTMLButtonElement>{
  Children: ReactNode;

  variant: 'primary' | 'secondary';
}

// export const Button = ({children, ...props}: Props) => {
//   return (
//     <button{...props}>
//         {children}
//     </button>
//   )
// }