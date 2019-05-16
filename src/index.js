import React from 'react';
import ReactDOM from 'react-dom';
import UseStateDemo from './UseStateDemo';
import UseEffectDemo from './UseEffectDemo';
import CustomHook from './CustomHook';
import TodoApp from './TodoApp';
import LazySuspense from './LazySuspense/LazySuspense';

import './styles.css';

function App() {
  return (
    <div
      className="App"
      style={{ margin: '20px auto', padding: '20px', width: 200 }}
    >
      <h1>useState Demo</h1>
      <UseStateDemo />
      <hr />
      <h1>useEffect Demo</h1>
      <UseEffectDemo />
      <hr />
      <h1>customHook Demo</h1>
      <CustomHook />
      <hr />
      <h1>Todo App</h1>
      <TodoApp />
      <h1>Lazy Suspense</h1>
      <LazySuspense />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
