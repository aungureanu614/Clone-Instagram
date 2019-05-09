import React from 'react'
import styles from './Post.module.css'
import { readdirSync } from 'fs'

interface Props {
  nickname: string
  avatar: React.ReactChild
  caption: string
  image: React.ReactChild
}

const Post: React.FunctionComponent<Props> = ({
  nickname,
  avatar,
  caption,
  image,
}) => (
  <div className={styles.storyContainer}>
    <div className={styles.storyHeader}>
      {avatar}
      <span className={styles.nickname}>
        <strong>{nickname}</strong>
      </span>
    </div>
    {image}
    <div className={styles.storyHeader}>
      <span className={styles.nickname}>
        <strong>{nickname}</strong>
      </span>
      <span className={styles.caption}>{caption}</span>
    </div>
  </div>
)

export default Post
