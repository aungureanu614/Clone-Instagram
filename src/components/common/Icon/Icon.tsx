import React from 'react'

interface IconOptions {
  image: string;
  alt: string;
  className: string;
}

const Icon = (icon: IconOptions) => (
  <img src={icon.image} alt={icon.alt} className={icon.className} />
)

export default Icon
