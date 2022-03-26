import React, { useState, useEffect } from 'react';

function HookCounter() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

  return (
      <div>
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
      </div>
  );
}

export default HookCounter;

// useEffect() accepts a parameter, this parameter is a function which gets executed after every render of the component

// useEffect() Hook is called after every single render
// In some cases applying the effect after every render, it creates performance problem
// so we need a way to run conditionally an effect from a functional component
// see next example