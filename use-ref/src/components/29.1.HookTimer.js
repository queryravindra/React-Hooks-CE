import React, { useState, useEffect, useRef } from 'react';

function HookTimer() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef()

    useEffect(() => {
      intervalRef.current = setInterval(() => {
          setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    
      return () => {
        clearInterval(intervalRef.current);
      };
    }, []);
    

    return (
        <div>
            Hook Timer - {timer}
            {/* <button onClick={() => clearInterval(interval)}>Clear Hook Timer</button> */}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    );
}

export default HookTimer;

// We will clear the interval within the Effect Hook but not from an event handler, this is where useRef comes to rescue
// Although useRef can hold reference to a DOM Node using ref attribute,it can also used to store any mutable value
// And what is great about useRef is that the value will persist through the re-renders while also not causing 
// any additional renders when its value changes

// 2nd usage for useRef() Hook it can be used to craete a generic container which can hold a mutable value similar to 
// instance properties on a class components
// This generic container doesnot cause re-renders when the data it stores changes, at the same time it also remembers the stored data
// even after other state variables cause a re-render of this component
