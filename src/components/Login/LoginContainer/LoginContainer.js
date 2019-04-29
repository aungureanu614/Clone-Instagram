import React, { Component } from 'react';
// import SignInForm from '../SignInForm/SignInForm';
// import RegisterForm from '../RegisterForm/RegisterForm';
import Header from '../../common/Header/Header';
import { container, imageContainer } from './LoginContainer.module.css';
import image from '../../../icons/ig-logo.png';
import Icon from '../../common/Icon/Icon';

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
    const signInAction = isLoginScreen ? 'Sign In' : 'Create Account';
    return (
      <div className={container}>
        <Header
          option={signInAction}
          text="Instagram-Clone"
          icon={<Icon image={image} alt="Instagram icon" className={imageContainer} />}
        />
      </div>
    );
  }
}

export default LoginContainer;
