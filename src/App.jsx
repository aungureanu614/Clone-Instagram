import React, { Component, Fragment } from 'react'
// import LoginContainer from './components/Login/LoginContainer'
import styles from './index.css'
import image from './icons/ig-logo.png'
import Header from './components/common/Header'
import Icon from './components/common/Icon'

const App = () => (
  <Fragment>
    <Header
      option="Sign In"
      text="Instagram-Clone"
      icon={
        <Icon
          image={image}
          alt="Instagram icon"
          className="imageContainer"
        />
      }
    />
    <div>HI</div>
  </Fragment>
)

export default App
