import React, { useState } from 'react';

function HookCounterObject() {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  

  return (
      <form>
          <input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
          <input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
          <h2>Your first name is - {name.firstName}</h2>
          <h2>Your last name is - {name.lastName}</h2>
          <h2>{JSON.stringify(name)}</h2>
      </form>
  );
}

export default HookCounterObject;

// If I start typing the lastName the firstName property disappears from the state variable,
// the reason it happens becz useState doesnot automatically merge and update the object
// this is the key difference to setState which come across in class components
// setState will merge the state where as useState will not merge state you have to do it manually