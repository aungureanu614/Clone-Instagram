import React, { Component } from 'react'

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
    return <div />
  }
}

export default LoginContainer
