import './App.css';
// import ClassCounter from './components/07.0.ClassCounter';
// import HookCounter from './components/07.1.HookCounter';
// import ClassCounter from './components/08.0.ClassCounter';
import HookCounter from './components/08.1.HookCounter';
import ClassMouse from './components/09.0.ClassMouse';
import HookMouse from './components/09.1.HookMouse';
import MouseContainer from './components/10.0.MouseContainer';
import IntervalClassCounter from './components/11.0.IntervalClassCounter';
import IntervalHookCounter from './components/11.1.IntervalHookCounter';
import DataFetching from './components/12.DataFetching';
import DataFetching2 from './components/13.DataFetching2';
import DataFetching3 from './components/14.DataFetching3';

function App() {
  return (
    <div className="App">
      {/* 06.useEffect Hook */}
      {/* 07.useEffect after render */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* 8.Conditionally run effects */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* 9.Run effects only once */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* 10.useEffect with cleanup */}
      {/* <MouseContainer /> */}
      {/* 11.useEffect with incorrect dependency */}
      <IntervalClassCounter />
      <IntervalHookCounter />
      {/* 12.Fetching Data with useEffect Part-1 */}
      {/* <DataFetching /> */}
      {/* 13.Fetching Data with useEffect Part-2 */}
      {/* <DataFetching2 /> */}
      {/* 14.Fetching Data with useEffect Part-3 */}
      <DataFetching3 />
    </div>
  );
}

export default App;

