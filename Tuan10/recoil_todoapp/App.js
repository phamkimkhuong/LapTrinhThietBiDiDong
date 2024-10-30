import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoApp from './ToDoAp';

const App = () => {
  return (
    <RecoilRoot>
      <TodoApp />
    </RecoilRoot>
  );
};

export default App;
