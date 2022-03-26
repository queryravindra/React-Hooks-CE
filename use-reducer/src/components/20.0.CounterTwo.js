// state and action are objects

import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {

  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (
      <div>
          <div>First Counter - {count.firstCounter}</div>
          <div>Second Counter - {count.secondCounter}</div>
          <button onClick={() => dispatch({type: 'increment', value: 1 })}>Increment</button>
          <button onClick={() => dispatch({type: 'decrement', value: 1 })}>Decrement</button>
          <button onClick={() => dispatch({type: 'increment', value: 5 })}>Increment 5</button>
          <button onClick={() => dispatch({type: 'decrement', value: 5 })}>Decrement 5</button>
          <div>
            <button onClick={() => dispatch({type: 'increment2', value: 1 })}>Increment Counter 2</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 1 })}>Decrement Counter 2</button>
          </div>
          <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      </div>
  );
}

export default CounterTwo;

// What is the advantage of using this particular pattern
// 2 scenarios it could be helpful

// 1st scenario -> considering the value by which we need to increment or decreemnt the counter
// by making use of action as an object we can use additional data in reducer function

// 2 scenario -> state as an object
// suppose you want to maintain different counters that turns out to be really simple if ur state is an object
// while using state as an object we will able to keep track of two different counters

// this approach of maintaining multiple variables in single state object is suited when dealing with global state
// but right now dealing with local state
// when dealing with local state we have another way to keep track of multiple variables lets take a look at next example