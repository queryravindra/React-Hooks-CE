import React, { useState, useMemo } from 'react';

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
      setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
      setCounterTwo(counterTwo + 1)
  }

    // In the first argument we pass in function whose return value needs to be cached, as a second paarmeter
    // we need to specify the dependencies

    // dependency is counterOne i.e., whenever counter one changes we are telling react to recompute the value and not use the cached value
    // useMemo() returns the cashed value
    const isEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

//   const isEven = () => {
//       return counterOne % 2 === 0
//   }

//   const isEven = () => {
//       let i = 0;
//       // Loop doesn't affect our return value but it does slow down the rate at which we compute the counterOne is Even or Odd
//       while(i < 2000000000) i++
//       return counterOne % 2 === 0
//   }

  return (
      <div>
          <div>
              <button onClick={incrementOne}>Count One - {counterOne}</button>
              {/* <span>{isEven() ? ' Even' : ' Odd'}</span> */}
              <span>{isEven ? ' Even' : ' Odd'}</span>
          </div>
          <div>
              <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
          </div>
      </div>
  );
}

export default Counter;
