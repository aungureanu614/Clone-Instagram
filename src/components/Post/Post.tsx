import React from 'react'
import styles from './Post.module.css'

interface Props {
  nickname: string
  avatar: string
  caption: string
  image: string
}

const Post: React.FunctionComponent<Props> = ({
  nickname,
  avatar,
  caption,
  image,
}) => (
  <div>
    {nickname}
    {avatar}
    {caption}
    {image}
  </div>
)

export default Post
