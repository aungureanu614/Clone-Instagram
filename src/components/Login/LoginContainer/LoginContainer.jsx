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
    const { isLoginScreen } = this.state
    const signInAction = isLoginScreen ? 'Sign In' : 'Create Account'

    return (
      <Fragment>
        <Header
          option={signInAction}
          text="Instagram-Clone"
          icon={
            <Icon
              image={image}
              alt="Instagram icon"
              className={styles.imageContainer}
            />
          }
        />
      </Fragment>
    )
  }
}

export default LoginContainer
