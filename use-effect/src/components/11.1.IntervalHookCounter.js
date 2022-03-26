import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  // 1st way
//   const tick = () => {
//       setCount(count + 1)
//   }

  //   2nd way
  const tick = () => {
      setCount(prevCount => prevCount + 1);
  }

  // 1st way
//   useEffect(() => {
//       const interval = setInterval(tick, 1000);

//       return () => {
//           clearInterval(interval);
//       }
//   }, [count]);

   // 2nd way
  useEffect(() => {
      const interval = setInterval(tick, 1000);

      return () => {
          clearInterval(interval);
      }
  }, []);

  // whenever you want to call the function within useEffect then define the function in useEffect 
  useEffect(() => {
    //   function doSomething() {
    //       console.log(someprop);
    //   }
    //   doSomething()
      const interval = setInterval(tick, 1000);

      return () => {
          clearInterval(interval);
      }
  }, []);

  return <h1>{count}</h1>;
}

export default IntervalHookCounter;

// Another way of doing  by dependency list is use prevCount
