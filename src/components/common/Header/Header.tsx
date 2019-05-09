import * as React from 'react'
import { Link } from 'react-router-dom'
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
    <div className={styles.linkContainer}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/about" className={styles.link}>
        About
      </Link>
    </div>
  </div>
)

export default Header
