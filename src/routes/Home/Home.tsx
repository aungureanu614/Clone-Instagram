import * as React from 'react'

import Image from '../../components/common/Image'
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
          <Image image={avatar} alt="Ana avatar" className={styles.avatar} />
        }
        caption="Visiting Peles Castle!"
        image={
          <Image
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
