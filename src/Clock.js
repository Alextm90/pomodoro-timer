import React from 'react';
import App from './App';
import './App.css';
import {useState, useEffect, useRef} from 'react';


const Clock = ( { session, setSession, setBreakLength, setSessionLength }) => {

    const [isActive, setIsActive] = useState(false);
    const prevName = useRef();
    const interval = useRef()


useEffect(() => {
   if (isActive) {
    console.log("active");
     interval.current = setInterval(() => {
          setSession(prev => prev - 1)
          let sessionTimeLeft = document.getElementById("time-left").innerText
          if (sessionTimeLeft <= 0) {
            setSession(0)
          }
    }, 1000);
    return () => clearInterval(interval.current)
  }
}, [isActive])



const reset = () => {
    if (isActive) {
    setIsActive(false)
    }
    setSession(25);
    setSessionLength(25)
    setBreakLength(5);
}
  return (
    <section id='clock'>
        <div id='timer-label'>Session</div>
        <div className="controls"  id='time-left'>{session}</div>
        <div className="controls"  id='start_stop' onClick={() => setIsActive(!isActive)}>start/stop</div>
        <div className="controls"  id='reset' onClick={reset}>reset</div>
    </section>
  )
}

export default Clock