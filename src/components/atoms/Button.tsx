enum Color {
  RED = 'red-500',
}

enum ButtonSize {
  S = 'w-5',
  M = 'w-5',
  L = 'w-5',
}

type Props = {
  title: string
  onClick: Function
  color: Color
  isDisabled: boolean
  size: ButtonSize
}

export const Botton: React.FC<Props> = ({ title }) => {
  return <button>{title}</button>
}
