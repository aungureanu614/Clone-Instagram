import * as React from 'react'
import styles from './LogonForm.module.css'

interface LogonFormProps {
  actionText: string
  children?: React.ReactNode
  className?: string
}

const LogonForm: React.FunctionComponent<LogonFormProps> = ({
  actionText,
  children,
  className,
}) => (
  <form className={className}>
    <h2>{actionText}</h2>
    {children}
  </form>
)

export default LogonForm
