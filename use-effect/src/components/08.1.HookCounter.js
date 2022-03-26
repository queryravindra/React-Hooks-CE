import React, { useState, useEffect } from 'react';

function HookCounter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect - Updating document title');
        document.title = `You clicked ${count} times`
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    );
}

export default HookCounter;

// For conditionally executing an effect we pass in a second parameter, this parameter is an array(of values)
// In this array we need to specify either props or state we need to watch for
// only if those props and state specify in this array we have to change the effect would be executed