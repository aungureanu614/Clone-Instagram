import React, { Component } from 'react';
// import SignInForm from '../SignInForm/SignInForm';
// import RegisterForm from '../RegisterForm/RegisterForm';
import Header from '../../common/Header/Header';
import { container } from './LoginContainer.module.css';
import image from '../../../icons/ig-logo.png';

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
    const { isLoginScreen } = this.state;
    const option = isLoginScreen ? 'Sign In' : 'Create Account';
    return (
      <div className={container}>
        <Header
          option={option}
          text="Instagram-Clone"
          image={image}
        />
      </div>
    );
  }
}

export default LoginContainer;
