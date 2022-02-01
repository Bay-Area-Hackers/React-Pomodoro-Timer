import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export const TimeInfo = {
  Working: '#e33627',
  ShortBreak: '#004777',
  LongBreak: '#00d679',
} as const
type TimeInfo = typeof TimeInfo[keyof typeof TimeInfo]

type Props = {
  duration: number
  colors?: TimeInfo
  isPlaying: boolean
  size?: number
  onComplete: () => void
}

export const changeHourMinSec = (remainingTime: number) => {
  // const hours = Math.floor(remainingTime / 3600)
  const minutes = Math.floor((remainingTime % 3600) / 60)
  const seconds = remainingTime % 60
  return `${minutes}:${seconds}`
}

export const Clock: React.FC<Props> = ({
  duration,
  colors = TimeInfo.Working,
  isPlaying,
  size,
  onComplete,
}) => {
  const music = new Audio('/sound/alerm.mp3')
  const completeMethod = () => {
    music.muted = false
    music.play()
    onComplete()
  }
  return (
    <div className="">
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={duration}
        colors={colors}
        size={size}
        onComplete={completeMethod}
      >
        {({ remainingTime }) => changeHourMinSec(remainingTime)}
      </CountdownCircleTimer>
    </div>
  )
}
