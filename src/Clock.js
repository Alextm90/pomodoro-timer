import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import beep from "./beep.mp3";
import './App.css';
import {useEffect, useRef} from 'react';

const Clock = ({ breakLength, setBreakLength, sessionLength,setSessionLength, seconds, setSeconds, minutes, setMinutes, isActive, setIsActive, breakActive, setBreakActive, secondsBreak, setSecondsBreak, minutesBreak, setMinutesBreak }) => {
  
const interval = useRef();
const breakInterval = useRef();
const timeInterval = useRef();

let sound = document.getElementById("beep");

// For seconds
useEffect(() => {
   if (isActive && breakActive == false) {
    if (minutes == "00" & seconds == "00") {
       sound.play();
   timeInterval.current = setTimeout(() => {  
     setBreakActive(true)
     console.log("true")
     }, 2000);
     return () => clearTimeout(timeInterval.current)
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
    }, 1000);
    return () => clearInterval(interval.current)
  }
}, [isActive, seconds, minutes])
 

// For break
useEffect(() => {
 if (breakActive && isActive) {
    console.log("it is")
    if (minutesBreak == "00" && secondsBreak == "00") {
      sound.play();
    timeInterval.current = setTimeout(() => {
      console.log("break over")
      setMinutesBreak(breakLength)
      setSecondsBreak("00")
      setBreakActive(false)
      setMinutes(sessionLength)
      setSeconds("00")
     }, 2000);
     return () => clearTimeout(timeInterval.current)
    }
     breakInterval.current = setInterval(() => {
      if (secondsBreak == "00") {
        console.log(1)
        setSecondsBreak(60)
        startBreakMinutes()
      }
      setSecondsBreak(prev => prev - 1)
      if (secondsBreak <= 10 && secondsBreak != "00") { 
        console.log(2)
        setSecondsBreak((secondsBreak) => {
            return "0" + secondsBreak
          })
        }
      if (secondsBreak == 1) {
        console.log(3)
        setSecondsBreak("00")
        }
    }, 1000);
    return () => clearInterval(breakInterval.current)
 }
},[breakActive, secondsBreak, minutesBreak, isActive])

const startBreakMinutes = () => {
  if (secondsBreak == "00") {
    console.log(4)
    setMinutesBreak(prev => prev - 1)
  }
}

// reset
const reset = () => {
let sound = document.getElementById("beep");
    if (isActive) {
      setIsActive(false)
      }
    sound.pause();
    sound.currentTime = 0;
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
        <div id='timer-label'>{breakActive == false ? "Session" : "Break"}</div>
        <div id='time-left'>{breakActive ? minutesBreak < 10 ? "0" + `${minutesBreak}`+`:${secondsBreak}` : `${minutesBreak}`+`:${secondsBreak}` : minutes < 10 ? "0" + `${minutes}`+`:${seconds}` : `${minutes}`+`:${seconds}`}</div>
        <div id="control-container">
          <div className="controls"  id='start_stop' onClick={() => setIsActive(!isActive)}>
            <div id='play'><FontAwesomeIcon size="6x" icon={faPlay}/></div>
            <div id='pause'><FontAwesomeIcon size="6x" icon={faPause}/></div>
          </div>
            <div id='background-one'></div>
            <div id='background-two'></div>
            <div id='background-three'></div>
            <div id='background-four'></div>
            <div className="controls" id='reset' onClick={reset}><FontAwesomeIcon size="2x" icon={faRotateLeft}/>
          </div>
        </div>
        <audio src={beep}  id="beep"></audio>
    </section>
  )
}

export default Clock;
