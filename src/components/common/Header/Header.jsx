import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.css'
// import { BrowserRouter as Router, Link } from 'react-router-dom'

const Header = ({ text, icon, option }) => (
  <div className={styles.headerContainer}>
    <div className={styles.left}>
      {icon}
      <span className={styles.text}>{text}</span>
    </div>
    <div className={styles.right}>{option}</div>
  </div>
)

export default Header

Header.propTypes = {
  option: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
}

Header.defaultProps = {
  option: '',
}
