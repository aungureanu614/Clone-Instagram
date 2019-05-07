import * as React from 'react'

import Header from './components/common/Header'
import Icon from './components/common/Icon'
import Post from './components/Post'

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
    <section>
      <Post nickname={"Ana"}
        avatar={"path/to/file"}
        caption={"Ana building react"}
        image={"path/to/image"}
      />
    </section>
  </React.Fragment>
)

export default App
