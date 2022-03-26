import React, { useState } from 'react';

function HookCounterArray() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([ ...items, {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
    }])
  }

  return (
      <div>
      <button onClick={addItem}>Add a number</button>
          <ul>
              {
                  items.map(item => (
                      <li key={item.id}>{item.value}</li>
                  ))
              }
          </ul>
      </div>
  );
}

export default HookCounterArray;

// In case of object the setter function doesnt merge and update
// In case of Array the setter function doesn't automatically append the item to the end of the list. we need to handle that manually
// using spread operator
