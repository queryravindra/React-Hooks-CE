import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterThree() {

  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  
  return (
      <div>
          <div>Count - {count}</div>
          <button onClick={() => dispatch('increment')}>Increment</button>
          <button onClick={() => dispatch('decrement')}>Decrement</button>
          <button onClick={() => dispatch('reset')}>Reset</button>

          <div>Count Two - {countTwo}</div>
          <button onClick={() => dispatchTwo('increment')}>Increment</button>
          <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
          <button onClick={() => dispatchTwo('reset')}>Reset</button>
      </div>
  );
}

export default CounterThree;


// In the last example we maintain a state object to track two different counters
// To update the second counter you also have to create additional switch cases in the reducer function
// But this is fine, but if we need two counters with the exact same transitions there is a much simpler Alternative
// and that is to use multiple usereducers hook