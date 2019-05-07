import * as React from 'react'

import Header from './components/common/Header'
import Icon from './components/common/Icon'

import styles from './App.module.css'
import logo from './icons/ig-logo.png'

const App: React.FunctionComponent = () => (
  <React.Fragment>
    <Header
      text="Instagram Clone"
      icon={
        <Icon
          image={logo}
          alt="Instagram icon"
          className={styles.imageContainer}
        />
      }
    />
  </React.Fragment>
)

export default App
