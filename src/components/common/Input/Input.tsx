import * as React from 'react'

interface InputProps {
  text: string
  className?: string
}

const Input: React.FunctionComponent<InputProps> = ({ text, className }) => (
  <input className={className} placeholder={text} />
)

export default Input
