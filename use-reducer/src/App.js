import './App.css';
import CounterOne from './components/19.0.CounterOne';
import CounterTwo from './components/20.0.CounterTwo';
import CounterThree from './components/21.CounterThree';
import ComponentA from './components/22.0.ComponentA';
import ComponentB from './components/22.0.ComponentB';
import ComponentC from './components/22.0.ComponentC';
import FetchingdataWithUseReducer from './components/23.FetchingdataWithUseReducer';
import FetchingDataWithUseReducer2 from './components/24.FetchingDataWithUseReducer2';


function App() {
  return (
    <div className="App">
      {/* 18.useReducer Hook */}
      {/* 19.useReducer (simple state and action) */}
      {/* <CounterOne /> */}
      {/* 20.useReducer (complex state and action) */}
      {/* <CounterTwo /> */}
      {/* 21.Multiple useReducers */}
      {/* <CounterThree /> */}
      {/* 22.useReducer with useContext */}
      {/* 23.Fetching Data with useReducer Part-1 */}
      <FetchingdataWithUseReducer />
      {/* 24.Fetching Data with useReducer Part-2 */}
      <FetchingDataWithUseReducer2 />
    </div>
  );
}

export default App;

