import React, { useContext } from 'react';

// import ToDo from './compnents/todo/todo.js';
import ToDoconnected from './compnents/todo/todo-connected';
// import { ToggelContext } from './cotext/show'
import Login from '../src/auth/login';
import LoginContext from '../src/auth/cotext';
import Auth from '../src/auth/auth';
import SignUp from './auth/signup';


export default class App extends React.Component {
  static contextType = LoginContext;

  render() {
    console.log('app')

    return (
      <>
        <LoginContext >
          <Login />
          <SignUp />
          <Auth condition={this.context.loggedIn}>
            <ToDoconnected />
          </Auth>
        </LoginContext>


      </>
    );
  }
}



