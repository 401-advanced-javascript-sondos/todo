import React from 'react';
import { LoginContext } from './cotext';
import { Button, Form, Col } from 'react-bootstrap'

import { If, Then, Else } from 'react-if';
// import Show from '../show/show';

// const If = props => {
//   return props.condition ? props.children : null;
// }

class SignUP extends React.Component {

  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      role: 'admin',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('signup', this.state)
    this.context.signup(this.state.username, this.state.password, this.state.email, this.state.role);
  }

  render() {
    return (
      <>
        {/* 
        <If condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit} >
            <input
              placeholder="userName"
              name="username"
              onChange={this.handleChange}
            /><br />
            <input
              placeholder="password"
              name="password"
              type="password"
              onChange={this.handleChange}
            /><br />

            <input
              placeholder="email"
              name="email"
              onChange={this.handleChange}
            /><br />
          
            <select onChange={this.handleChange} name="role">
              <option value="user" >User</option>
              <option value="admin" >Admin</option>
              <option value="editors" >Editor</option>
            </select><br/>

            <button>SignUP</button>
          </form>
        </If>
 */}


        <If condition={!this.context.loggedIn}>
          <Then>
            <Form onSubmit={this.handleSubmit}>
              <Col md={{ span: 6, offset: 3 }}>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" placeholder="Enter Username" name='username' onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name='password' onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="Email" placeholder="Email" name='email' onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formGridState">
                  <Form.Label>Role</Form.Label>
                  <Form.Control as="select" defaultValue="Choose..." name='role' onChange={this.handleChange}>
                    <option>admin</option>
                    <option>editor</option>
                    <option>user</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                            </Button>
              </Col>
            </Form>
          </Then>
        </If>
      </>
    )
  }

}

export default SignUP;