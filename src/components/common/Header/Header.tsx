import React from 'react'
import styles from './Header.module.css'

interface Props {
  text: string
  icon: React.ReactChild
}

const Header: React.FunctionComponent<Props> = ({ icon, text }) => (
  <div className={styles.headerContainer}>
    <div className={styles.center}>
      {icon}
      <span className={styles.text}>{text}</span>
    </div>
  </div>
)

export default Header
