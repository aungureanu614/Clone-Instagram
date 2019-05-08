import * as React from 'react'

import Header from './components/common/Header'
import Icon from './components/common/Icon'
import Post from './components/Post'

import styles from './App.module.css'
import logo from './images/ig-logo.png'
import avatar from './images/avatar.jpg'
import storyphoto from './images/insta-story.jpeg'

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
    <section className={styles.storySection}>
      <Post
        nickname="Ana-Maria"
        avatar={
          <Icon image={avatar} alt="Ana avatar" className={styles.avatar} />
        }
        caption="Visiting Peles Castle!"
        image={
          <Icon
            image={storyphoto}
            alt="Peles Castle"
            className={styles.storyPhoto}
          />
        }
      />
    </section>
  </React.Fragment>
)

export default App
