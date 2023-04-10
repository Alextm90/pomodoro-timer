// Clock

import React from 'react';
import App from './App';
import './App.css';
import {useState, useEffect, useRef} from 'react';


const Clock = ({ setBreakLength, sessionLength, setSessionLength, seconds, setSeconds, minutes, setMinutes, isActive, setIsActive }) => {

const interval = useRef();

// For seconds
useEffect(() => {
   if (isActive) {
     interval.current = setInterval(() => {
      if (seconds == "00") {
        setSeconds(60)
        startMinutes()
      }
      if (seconds == "01" && minutes == "00") {
        setIsActive(!isActive)
        console.log(1)
      }
      setSeconds(prev => prev - 1)
      let sessionTimeLeft = document.getElementById("time-left").innerText
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
}, [isActive, seconds, minutes, seconds])
 
const reset = () => {
    if (isActive) {
      setIsActive(false)
      }
    setMinutes(25)
    setSeconds("00");
    setSessionLength(25);
    setBreakLength(5);
}

// For minutes

const startMinutes = () => {
  if (seconds == "00") {
    setMinutes(prev => prev - 1)
  }
}

  return (
    <section id='clock'>
        <div id='timer-label'>Session</div>
        <div className="controls"  id='time-left'>{minutes < 10 ? "0" + `${minutes}`+`:${seconds}` : `${minutes}`+`:${seconds}`}</div>
        <button className="controls"  id='start_stop' onClick={() => setIsActive(!isActive)}>start/stop</button>
        <button className="controls"  id='reset' onClick={reset}>reset</button>
    </section>
  )
}

export default Clock
