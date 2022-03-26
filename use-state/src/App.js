import './App.css';
import ClassCounter from './components/02.ClassCounter';
// import HookCounter from './components/02.HookCounter';
import HookCounter from './components/03.HookCounterPrevState';
import HookCounterObject from './components/04.HookCounterObject';
import HookCounterArray from './components/05.HookCounterArray';

function App() {
  return (
    <div className="App">
      {/* 2.useState Hook */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* 3.useState with previous state */}
      <HookCounter />
      {/* 4.useState with object */}
      <HookCounterObject />
      {/* 5.useState with Array */}
      <HookCounterArray />
    </div>
  );
}

export default App;
