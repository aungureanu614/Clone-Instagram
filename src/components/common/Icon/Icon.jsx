import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ image, alt, className }) => (
  <img src={image} alt={alt} className={className} />
)

Icon.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Icon.defaultProps = {
  className: '',
}

export default Icon
