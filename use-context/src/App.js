import React from 'react';
import './App.css';
import ComponentC from './components/16.0.ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* 15.useContext Hook Part 1 */}
      {/* 16.useContext Hook Part 2 */}
      <UserContext.Provider value={'Ravindra'}>
        <ChannelContext.Provider value={'India'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* 17.useContext Hook Part 3 */}

    </div>
  );
}

export default App;

// There are 3 steps to implement when making use of Context
/**
 * 1.Step-1
 * - create the context
 * 
 * 2.Step-2
 * - we need to provide a value with this context
 * 
 * 3.Step-3
 * - Consume the context value
 */