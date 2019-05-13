import * as React from 'react'

// import styles from './LogonContainer.module.css'
import LogonForm from '../../components/LogonForm'
import Overlay from '../../components/Overlay'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
const { useState, Fragment } = React

const LogonContainer: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <Fragment>
      {isLogin ? (
        <div>
          <LogonForm actionText="Sign In">
            <Input text="email" />
            <Input text="password" />
            <Button text="Sign In" />
          </LogonForm>
          <Overlay
            greeting="Hello Friend!"
            mainText="Enter your personal details to get started"
          >
            <Button text="Sign Up" />
          </Overlay>
        </div>
      ) : (
        <div />
      )}
    </Fragment>
  )
}

export default LogonContainer
