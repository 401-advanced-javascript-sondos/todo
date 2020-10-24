import React from 'react';
import { LoginContext } from './cotext.js';
import { JsonWebTokenError } from 'jsonwebtoken';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { If, Then, Else } from 'react-if';

// const If = props => {
//   return props.condition ? props.children : null;
// }

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
    e.target.reset();
  }

  render() {
    return (
      <>
        <If condition={this.context.loggedIn}>
          <Then>
            <Button variant="danger" onClick={this.context.logout}>Log Out!</Button>
          </Then>

          <Else>
            {/* <form onSubmit={this.handleSubmit}>
              <input name="username" onChange={this.handleChange} />
              <input name="password" onChange={this.handleChange} />
              <button>Log In!</button>
            </form> */}
            <Form inline
              onSubmit={this.handleSubmit}
              className=" mr-sm-10"
            >


              <Form.Control
                className="mr-sm-5"
                placeholder='UserName'
                name='username'
                type='text'
                onChange={this.handleChange}
              />

              <Form.Control
                className="mr-sm-5"
                placeholder='password'
                name='password'
                type='text'
                onChange={this.handleChange}
              />

              <Button type="submit" variant="dark" className="mr-sm-4" size="md">LogIn</Button>
            </Form>
          </Else>

        </If>
      </>
    )
  }
}

export default Login;