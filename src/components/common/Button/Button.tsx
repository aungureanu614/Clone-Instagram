import * as React from 'react'

interface ButtonProps {
  text: string
  className?: string
}

const Button: React.FunctionComponent<ButtonProps> = ({ text, className }) => (
  <button className={className}>{text}</button>
)

export default Button
