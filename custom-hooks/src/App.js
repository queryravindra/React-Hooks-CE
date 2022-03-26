import './App.css';
import DocTitleOne from './components/31.0.DocTitleOne';
import DocTitleTwo from './components/31.1.DocTitleTwo';
import CounterOne from './components/32.0.CounterOne';
import CounterTwo from './components/32.1.CounterTwo';
import UserForm from './components/33.0.UserForm';

function App() {
  return (
    <div className="App">
      {/* 31.useDocument custom Hook */}
      <DocTitleOne />
      <DocTitleTwo />
      {/* 32.useCounter custom Hook */}
      <CounterOne />
      <CounterTwo />
      {/* 32.useInput custom Hook */}
      <UserForm />
    </div>
  );
}

export default App;
