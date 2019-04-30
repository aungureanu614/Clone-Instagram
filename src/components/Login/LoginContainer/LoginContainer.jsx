import React, { Component, Fragment } from 'react'
import styles from './LoginContainer.module.css'

class LoginContainer extends Component {
  state = {
    isLoginScreen: true,
  }

  toggleSignIn = () => {
    const { isLoginScreen } = this.state

    this.setState({
      isLoginScreen: !isLoginScreen,
    })
  }

  render() {
    return (
      <div />
    )
  }
}

export default LoginContainer
