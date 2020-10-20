import React from 'react';

import ToDo from './compnents/todo/todo.js';
import ToDoconnected from './compnents/todo/todo-connected'
export default class App extends React.Component {
  render() {
    return (
      <>
        <ToDoconnected />
      </>
    );
  }
}

