import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { TextButton } from './components/atoms/TextButton'

const changeHourMinSec = (remainingTime: number) => {
  // const hours = Math.floor(remainingTime / 3600)
  const minutes = Math.floor((remainingTime % 3600) / 60)
  const seconds = remainingTime % 60
  return `${minutes}:${seconds}`
}
const Test = () => {
  const [isTrue, setIsTrue] = useState<boolean>(false)

  return (
    <>
      <h1 className="text-blue-600 flex justify-center py-24 text-5xl">
        Hello World
      </h1>
      <TextButton isYes={isTrue} onClick={() => setIsTrue(!isTrue)} />
      <div className="flex justify-center">
        <CountdownCircleTimer
          isPlaying
          duration={1500}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => changeHourMinSec(remainingTime)}
        </CountdownCircleTimer>
      </div>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
