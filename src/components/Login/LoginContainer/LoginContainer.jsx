import React, { Component, Fragment } from 'react'

import Header from '../../common/Header'
import Icon from '../../common/Icon'

import styles from './LoginContainer.module.css'
import image from '../../../icons/ig-logo.png'

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
