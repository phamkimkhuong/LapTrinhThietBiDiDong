import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoApp from './ToDoAp';

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;