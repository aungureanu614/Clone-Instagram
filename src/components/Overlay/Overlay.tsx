import * as React from 'react'
// import styles from './Overlay.module.css'

interface OverlayProps {
  greeting: string
  mainText: string
  children?: React.ReactNode
  className?: string
}

const Overlay: React.FunctionComponent<OverlayProps> = ({
  greeting,
  mainText,
  children,
}) => (
  <div>
    <h2>{greeting}</h2>
    <p>{mainText}</p>
    {children}
  </div>
)

export default Overlay
