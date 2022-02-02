type Props = {
    isYes: boolean
    iconType: string
    onClick: () => void
  }

  

  export const IconButton: React.FC<Props> = ({ isYes, iconType, onClick }) => {
    let iconDict: { [key:string]: string } = {
      'close': "/img/close.svg",
      'down': "/img/down.svg",
      "linkcopy": "/img/linkcopy.svg",
      "picture": "/img/picture.svg",
      "pomoblack": "/img/pomoblack.svg",
      'pomowhite': "/img/pomowhite.svg",
      'quit': "/img/quit.svg",
      'skip': "/img/skip.svg",
      'start': "/img/start.svg",
      'stop': "/img/stop.svg",
      'twitter': "/img/twitter.svg",
      'up': "/img/up.svg",
    };
  
    const iconPath = iconDict[iconType]

    return (
      <div>
        <a className='hyperlinkStyle' onClick={onClick}>
          <img className='logoStyle' src={iconPath} alt='logo' height={50} width={50}></img>
        </a>
        {isYes ? 'Yes' : 'No'}
      </div>
    )
  }

