import React, { useState, useEffect } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log('Mouse event');
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
      console.log('useEffect called');
      window.addEventListener('mousemove', logMousePosition);

      return () => {
          console.log('Component unmounting code');
          window.removeEventListener('mousemove', logMousePosition);
      }
  },[]);

  return (
      <div>
          Hooks X - {x} Y - {y}
      </div>
  );
}

export default HookMouse;

// Even though the component is removed the event listener which belongs to that component is still listening and Executing

// we can do cleaning up or removing event listeners

// The function that is passed to useEffect can return a function which should be executed when component will unmount
// so whatever you will return basically your cleanup function