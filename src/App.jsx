import React, { Fragment } from 'react'

import Header from './components/common/Header'
import Icon from './components/common/Icon'

import styles from './App.module.css'
import logo from './icons/ig-logo.png'

const App = () => (
  <Fragment>
    <Header
      option="Sign In"
      text="Instagram-Clone"
      type="login"
      icon={
        <Icon
          image={logo}
          alt="Instagram icon"
          className={styles.imageContainer}
        />
      }
    />
  </Fragment>
)

export default App
