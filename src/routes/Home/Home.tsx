import * as React from 'react'

import Icon from '../../components/common/Icon'
import Post from '../../components/Post'

import styles from './Home.module.css'
import avatar from '../../images/avatar.jpg'
import storyphoto from '../../images/insta-story.jpeg'

const Home: React.FunctionComponent = () => (
  <React.Fragment>
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

export default Home
