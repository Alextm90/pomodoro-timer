// Clock

import React from 'react';
import App from './App';
import './App.css';
import {useEffect, useRef} from 'react';

const Clock = ({ breakLength, setBreakLength, sessionLength,setSessionLength, seconds, setSeconds, minutes, setMinutes, isActive, setIsActive, breakActive, setBreakActive, secondsBreak, setSecondsBreak, minutesBreak, setMinutesBreak }) => {
const interval = useRef();
const breakInterval = useRef();

// For seconds
useEffect(() => {
   if (isActive && breakActive == false) {
    if (minutes == "00" & seconds == "00") {
      setMinutesBreak(breakLength)
      setSecondsBreak("00")
      console.log("break")
      setBreakActive(!breakActive)
    }
     interval.current = setInterval(() => {
      if (seconds == "00") {
        setSeconds(60)
        startMinutes()
      }
      setSeconds(prev => prev - 1)
      if (seconds <= 10 && seconds != "00") { 
        setSeconds((seconds) => {
            return "0" + seconds
          })
        }
      if (seconds == 1) {
        setSeconds("00")
        }
    }, 100);
    return () => clearInterval(interval.current)
  }
}, [isActive, seconds, minutes])
 
// For break
useEffect(() => {
 if (breakActive && isActive) {
    console.log("it is")
    if (minutesBreak == "00" & secondsBreak == "00") {
      console.log("break over")
      setBreakActive(!breakActive)
      setMinutes(sessionLength)
      setSeconds("00")

    }
     breakInterval.current = setInterval(() => {
      if (secondsBreak == "00") {
        setSecondsBreak(60)
        startBreakMinutes()
      }
      setSecondsBreak(prev => prev - 1)
      if (secondsBreak <= 10 && secondsBreak != "00") { 
        setSecondsBreak((secondsBreak) => {
            return "0" + secondsBreak
          })
        }
      if (secondsBreak == 1) {
        setSecondsBreak("00")
        }
    }, 100);
    return () => clearInterval(breakInterval.current)
 }
},[breakActive, secondsBreak, minutesBreak, isActive])

const startBreakMinutes = () => {
  if (secondsBreak == "00") {
    setMinutesBreak(prev => prev - 1)
  }
}

// reset
const reset = () => {
    if (isActive) {
      setIsActive(false)
      }
    setBreakActive(false)
    setSecondsBreak("00")
    setMinutesBreak(5)
    setMinutes(25)
    setSeconds("00");
    setSessionLength(25);
    setBreakLength(5);
}

// start minutes
const startMinutes = () => {
  if (seconds == "00") {
    setMinutes(prev => prev - 1)
  }
}

  return (
    <section id='clock'>
        <div id='timer-label'>Session</div>
        <div className="controls"  id='time-left'>{minutes < 10 ? "0" + `${minutes}`+`:${seconds}` : `${minutes}`+`:${seconds}`}</div>
        <div className='controls'>{minutesBreak < 10 ? "0" + `${minutesBreak}`+`:${secondsBreak}` : `${minutesBreak}`+`:${secondsBreak}`}</div>
        <button className="controls"  id='start_stop' onClick={() => setIsActive(!isActive)}>start/stop</button>
        <button className="controls"  id='reset' onClick={reset}>reset</button>
    </section>
  )
}

export default Clock
