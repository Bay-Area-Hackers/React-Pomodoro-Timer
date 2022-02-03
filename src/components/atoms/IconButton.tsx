type Props = {
  iconType: IconType
  onClick: () => void
  size?: number
}

export const IconType = {
  Close: "/img/close.svg",
  Down: "/img/down.svg",
  Linkcopy: "/img/linkcopy.svg",
  Picture: "/img/picture.svg",
  Pomoblack: "/img/pomoblack.svg",
  Pomowhite: "/img/pomowhite.svg",
  Quit: "/img/quit.svg",
  Skip: "/img/skip.svg",
  Start: "/img/start.svg",
  Stop: "/img/stop.svg",
  Twitter: "/img/twitter.svg",
  Up: "/img/up.svg",
} as const 

type IconType = typeof IconType[keyof typeof IconType]

export const IconButton: React.FC<Props> = ({ iconType, onClick, size=50 }) => {
  return (
    <div>
      <a className='hyperlinkStyle' onClick={onClick}>
        <img className='logoStyle' src={iconType} alt='logo' height={size} width={size} />
      </a>
    </div>
  )
}