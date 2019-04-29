import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  headerContainer, left, right, imageContainer,
} from './Header.module.css';

const Header = ({
  option, text, image,
}) => (
  <div
    className={cx(headerContainer, imageContainer)}
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div className={left}>
      <span>{text}</span>
    </div>
    <div className={right}>{option}</div>
  </div>
);

export default Header;

Header.propTypes = {
  option: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
