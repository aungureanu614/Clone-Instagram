import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.css'

const Header = ({ option, text, icon }) => (
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
  option: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.any, // Give icon a proper type
}
