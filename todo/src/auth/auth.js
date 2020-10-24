import React from 'react';
import { LoginContext } from './cotext.js';

const If = props => {
  return props.condition ? props.children : null
}

class Auth extends React.Component{
  static contextType = LoginContext;

  render() {
    let okToRender = false;

    try {
       okToRender =
       this.context.loggedIn &&
        (this.props.capability
          ? this.context.user.capabilities.includes(this.props.capability)
          : true);
        // this.context.loggedIn &&  ( this.props.capability? this.context.can(this.props.capability): true);
        // console.log('login auth',this.context.loggedIn)
        // console.log('capability  auth', this.context.can(this.props.capability))

        console.log('cabi',this.context.user)
    } catch {
      console.warn('not authorized to do that');
    }
    return (
      <If condition={okToRender}>
        <div>{this.props.children}</div>
      </If>
    )  
  }
}

export default Auth;