import React, { useState } from 'react';
import useDocumentTitle from '../Hooks/useDocumentTitle';

function DocTitleTwo() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `Count ${count}`
    // }, [count]);

    useDocumentTitle(count);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    );
}

export default DocTitleTwo;
