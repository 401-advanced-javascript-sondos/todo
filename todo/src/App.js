import React, { useContext } from 'react';
import { Container, Navbar, Col, Row } from 'react-bootstrap';
import '../src/compnents/todo/todo.scss';

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

          <Navbar bg="primary" variant="dark" id="home">
            <Col>
              <h2>
                <Navbar.Brand href="#home" >Home</Navbar.Brand>
              </h2>
            </Col>
            <Col className="end">

              <Login />
            </Col>

          </Navbar>
          <SignUp />
          <Auth condition={this.context.loggedIn}>
            <ToDoconnected />
          </Auth>
        </LoginContext>


      </>
    );
  }
}



