import { useState } from 'react';

function useCounter(initialCount = 0, value) {
    // const [count, setCount] = useState(0);
    const [count, setCount] = useState(initialCount);
    
    const increment = () => {
        // setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + value);
    }

    const decrement = () => {
        // setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - value);
    }

    const reset = () => {
        setCount(initialCount);
    }

    return [count, increment, decrement, reset];
}

export default useCounter;

// our custom Hook going to return array of values
