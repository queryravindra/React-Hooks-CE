import React, { useState, useCallback } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    // useCallback() accepts callback function as its first parameter and array of dependencies as its second paarmeter
    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1);
    }, [salary]);

    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    );
}

export default ParentComponent;

// Considering a scenario where there are lots of components and updating a single component is going to re-render all the 20 or 30
// or even 50 components you would then start performance issues
// To improve performance we have to restrict re-renders only components that need to re-render

// so how do we optimize this, well the answer is React.memo()
// React.memo() is a hoc that will prevent a functional component from being re-rendered if its props or state donot change

// after using React.memo() the buttons are re-rendering

// when dealing with functions we always have to consider the reference equality
// Even though the two functions have exact same behaviour it doesnt mean they are equal to each other
// so the function before the re-render is different to function after the re-render
// and since the function is a prop React.memo() sees that the prop has changed and will not prevent the re-render

// so how we will fix this, how do we tell react that there is no need to create new increemntSalary() function when we update the age
// the answer is useCallback() hook