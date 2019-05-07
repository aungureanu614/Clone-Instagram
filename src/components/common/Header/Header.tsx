import React from 'react'
import styles from './Header.module.css'

interface HeaderOptions {
  text: string;
  icon: JSX.Element;
}

const Header = (options: HeaderOptions) => (
  <div className={styles.headerContainer}>
    <div className={styles.left}>
      {options.icon}
      <span className={styles.text}>{options.text}</span>
    </div>
  </div>
)

export default Header
