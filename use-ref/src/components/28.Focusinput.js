import React, { useEffect, useRef } from 'react';

function FocusInput() {

    const inputRef = useRef(null);

    useEffect(() => {
        // focus the input element
        inputRef.current.focus()
        // react will set the refs current property to the corresponding DOM Node
    }, [])

    return (
        <div>
            <input ref={inputRef} type='text' />
        </div>
    );
}

export default FocusInput;
