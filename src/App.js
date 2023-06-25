import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import { useState } from 'react';
import Clock from './Clock';

function App() {

  // State for break
  const [breakLength, setBreakLength] = useState(5);
  const [breakActive, setBreakActive] = useState(false);
  const [secondsBreak, setSecondsBreak] = useState("00");
  const [minutesBreak, setMinutesBreak] = useState(5);
  
  // State for session
  const [sessionLength, setSessionLength] = useState(25);
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState(25);

  // State for both
  const [isActive, setIsActive] = useState(false);

// Break controls
const decrementBreak = () => {
if (isActive === false) {
    if (breakLength > 1) {
     setBreakLength(prevState => prevState - 1)
    }
    if (breakLength > 10 && minutesBreak != 10) {
      console.log("10")
      setMinutesBreak(prevState => prevState - 1)
    }
    if (minutesBreak <= 10 && breakLength > 1) {
      console.log("9")
      setMinutesBreak((minutesBreak) => minutesBreak - 1)
    }
    if (minutesBreak == "00" && secondsBreak == "00" || minutesBreak == "00" && secondsBreak > 0) {
      setMinutesBreak(minutesBreak)
      setSecondsBreak(secondsBreak)
    }
  }
}

const incrementBreak = () => {
if (isActive === false) {
   if (breakLength < 60) {
      setBreakLength(prevState => prevState + 1)
    }
   if (breakLength > 10 && minutesBreak > 10) {
      setMinutesBreak(prevState => prevState + 1)
    }
    if (minutesBreak <= 10 && breakLength > 0) {
      console.log("9")
      setMinutesBreak((prevState) => prevState + 1)
    }
  }
}

// Session controls
const decrementSession = () => {
if (isActive === false) {
    if (sessionLength > 1) {
      setSessionLength(prevState => prevState - 1)
    }
    if (sessionLength > 10 && minutes != 10) {
      console.log("10")
      setMinutes(prevState => prevState - 1)
    }
    if (minutes <= 10 && sessionLength > 1) {
      console.log("9")
      setMinutes((minutes) => minutes - 1)
    }
    if (minutes == "00" && seconds == "00" || minutes == "00" && seconds > 0) {
      setMinutes(minutes)
      setSeconds(seconds)
    }
  }
}

const incrementSession = () => {
if (isActive === false) {
   if (sessionLength < 60) {
      setSessionLength(prevState => prevState + 1)
    }
   if (sessionLength > 10 && minutes > 10) {
      setMinutes(prevState => prevState + 1)
    }
    if (minutes <= 10 && sessionLength > 0) {
      console.log("9")
      setMinutes((prevState) => prevState + 1)
    }
  }
}

  return (
    <div className="App">
        <div id='break-container'>
          <div id="break-label">Break Length</div>
          <div className='control-container'>
            <div id="break-decrement" className='timer_controls' onClick={decrementBreak}><FontAwesomeIcon icon={faMinus}/></div>
            <div id='break-length'>{breakLength}</div>
            <div id='break-increment' className='timer_controls' onClick={incrementBreak}><FontAwesomeIcon icon={faPlus}/></div>
          </div>
        </div>
        <div id='session-container'>
          <div id="session-label">Session Length</div>
          <div className='control-container'>
            <div id="session-decrement" className='timer_controls' onClick={decrementSession}><FontAwesomeIcon icon={faMinus}/></div>
            <div id='session-length'>{sessionLength}</div>
            <div id='session-increment' className='timer_controls' onClick={incrementSession}><FontAwesomeIcon icon={faPlus}/></div>
          </div>
        </div>
      <Clock sessionLength={sessionLength} setSessionLength={setSessionLength} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} isActive={isActive} setIsActive={setIsActive} breakLength={breakLength} setBreakLength={setBreakLength} secondsBreak={secondsBreak} setSecondsBreak={setSecondsBreak} minutesBreak={minutesBreak} setMinutesBreak={setMinutesBreak} breakActive={breakActive} setBreakActive={setBreakActive}/>
    </div>
  );
}

export default App;