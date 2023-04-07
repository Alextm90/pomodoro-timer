import './App.css';
import { useState } from 'react';
import Clock from './Clock'


function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [session, setSession] = useState(25);

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
  if (sessionLength > 1) {
  setSessionLength(prevState => prevState - 1)
   setSession(prevState => prevState - 1)
  }
}

const incrementSession = () => {
    if (sessionLength < 60) {
  setSessionLength(prevState => prevState + 1)
  setSession(prevState => prevState + 1)
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
      <Clock session={session} setSession={setSession} setBreakLength={setBreakLength} setSessionLength={setSessionLength}/>
    </div>
  );
}

export default App;
