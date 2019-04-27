import React from 'react';
import PropTypes from 'prop-types';
import { headerContainer, left, right } from './Header.module.css';

const Header = ({
  option, image, text, alt,
}) => (
  <div className={headerContainer}>
    <div className={left}>
      <img src={image} alt={alt} />
      <span>{text}</span>
    </div>
    <div className={right}>{option}</div>
  </div>
);

export default Header;

Header.propTypes = {
  option: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
