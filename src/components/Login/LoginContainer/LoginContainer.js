import React, { Component } from 'react';
// import SignInForm from '../SignInForm/SignInForm';
// import RegisterForm from '../RegisterForm/RegisterForm';
import { container } from './LoginContainer.module.css';

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoginScreen: true,
    };
    this.toggleSignIn = this.toggleSignIn.bind(this);
  }

  toggleSignIn() {
    const { isLoginScreen } = this.state;
    this.setState({
      isLoginScreen: !isLoginScreen,
    });
  }

  render() {
    return (
      <div className={container} />
    );
  }
}

export default LoginContainer;
