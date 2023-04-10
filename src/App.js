import './App.css';
import { useState } from 'react';
import Clock from './Clock'

function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [session, setSession] = useState(25);
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState(25);
  const [isActive, setIsActive] = useState(false);

const decrementBreak = () => {
  if (breakLength > 1) {
    setBreakLength(prevState => prevState - 1)
  }
}

const incrementBreak = () => {
  if (breakLength < 60) {
    setBreakLength(prevState => prevState + 1)

  console.log(breakLength)
  }
}

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
      <section id='length'>
        <div id="break-label">Break Length</div>
        <button id="break-decrement" onClick={decrementBreak}>decrement</button>
        <button id='break-increment' onClick={incrementBreak}>increment</button>
        <div id='break-length'>{breakLength}</div>
      </section>
      <section id='length'>
        <div id="session-label">Session Length</div>
        <button id="session-decrement" onClick={decrementSession}>decrement</button>
        <button id='session-increment' onClick={incrementSession}>increment</button>
        <div id='session-length'>{sessionLength}</div>
      </section>
      <Clock session={session} setSession={setSession} setBreakLength={setBreakLength} sessionLength={sessionLength} setSessionLength={setSessionLength} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} isActive={isActive} setIsActive={setIsActive}/>
    </div>
  );
}

export default App;