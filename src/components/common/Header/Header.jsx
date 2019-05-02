import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = ({ text, icon, option }) => (
  <div className={styles.headerContainer}>
    <div className={styles.left}>
      {icon}
      <span className={styles.text}>{text}</span>
    </div>
    {option && (
      <Link className={styles.right} to={'/login'}>
        {option}
      </Link>
    )}
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
