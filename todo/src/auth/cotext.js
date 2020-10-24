import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import base64 from 'base-64';

require('dotenv').config();

const API = process.env.URL || "https://api-js401.herokuapp.com"
export const LoginContext = React.createContext();

// var todoAPI = 'https://todoapi-ahmad.herokuapp.com/api/v1/user/signin';

const testLogins = {
    testAdmin: process.env.REACT_APP_ADMIN_TOKEN || '',
    testEditor: process.env.REACT_APP_EDITOR_TOKEN || '',
    testUser: process.env.REACT_APP_USER_TOKEN || '',
};


class LoginProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            login: this.login,
            logout: this.logout,
            user: {},
            can: this.can,
            signup:this.signup
        };
    }

    // can = (action)=> {
    //     const actions = {
    //         admin: ['update', 'delete', 'read'],
    //         user : ['read'],
    //         editor: ['edit', 'read']
    //     };

    //     const role = this.state.user.capabilities;
    //     console.log("role : ",role)
    //     // console.log("actions[role].includes(action): ",actions[role].includes(action))
    //     // return actions[role].includes(action)

    // }


    can = capability => {
        // console.log('role',capability)
        console.log('check role',this.state.user.capabilities)

        return this.state.user?.capabilities?.includes(capability);
      };


    login = async (username, password) => {
        console.log('user', username, password)
        // This is foul and unsafe ... but when working offline / testmode ess oh kay
        if (testLogins[username]) {
            this.validateToken(testLogins[username]);
        }
        else {
            const encodedData = base64.encode(`${username}:${password}`);
            let result = await fetch(`${API}/signin`, {
                // fetch(todoAPI, {
                method: 'post',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Authorization': `Basic ${encodedData}`
                },
            });
            let data = await result.json();
            this.validateToken(data.token)

        }
    }

    validateToken = token => {
        console.log(token)

        try {
               let user = jwt.decode(token, process.env.REACT_APP_SECRET);
            console.log('user', user)
            console.log('all good');
            this.setLoginState(true, token, user);
        }
        catch (e) {
            this.setLoginState(false, null, {});
            console.log('Token Validation Error', e);
        }

    };

    logout = () => {
        this.setLoginState(false, null, {});
    };

    setLoginState = (loggedIn, token, user) => {
        cookie.save('auth', token);
        this.setState({ token, loggedIn, user });
    };

    componentDidMount() {
        // get the cookie -> validate cookie -> of valid -> update the state 
        const cookieToken = cookie.load('auth');
        const token = cookieToken || null;
        this.validateToken(token);
    }


    signup = async (username, password, email, role) => {
console.log('here')
        try {
            const results = await fetch(`${API}/signup`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({ username, password, email, role })
            });
            let res = await results.json();
            this.validateToken(res.token);
        } catch (ex) {
            console.log('error');

        }
    }


    render() {
        console.log('indes context', this.state)
        return (
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}

export default LoginProvider;
