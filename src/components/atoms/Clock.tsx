import React from 'react'
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
  let minutes = String(Math.floor((remainingTime % 3600) / 60))
  if (minutes.length == 1) {
    minutes = '0' + minutes
  }
  let seconds = String(remainingTime % 60)
  if (seconds.length == 1) {
    seconds = '0' + seconds
  }
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
