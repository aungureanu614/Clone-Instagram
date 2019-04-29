import React from 'react';
import PropTypes from 'prop-types';
// import cx from 'classnames';
import {
  headerContainer, left, right,
} from './Header.module.css';

const Header = ({
  option, text, icon,
}) => (
  <div className={(headerContainer)}>
    <div className={left}>
      {icon}
      <span>{text}</span>
    </div>
    <div className={right}>{option}</div>
  </div>
);

export default Header;

Header.propTypes = {
  option: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
