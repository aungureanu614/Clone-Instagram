import * as React from 'react'

interface Props {
  image: string
  alt: string
  className?: string
}

const Icon: React.FunctionComponent<Props> = ({ image, alt, className }) => (
  <img src={image} alt={alt} className={className} />
)

export default Icon
