import React from 'react';

// import ToDo from './compnents/todo/todo.js';
import ToDoconnected from './compnents/todo/todo-connected';
// import { ToggelContext } from './cotext/show'

export default class App extends React.Component {
  render() {
    return (
      <>
          <ToDoconnected />
      </>
    );
  }
}

