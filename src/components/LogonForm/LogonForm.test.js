import React from 'react'
import ReactDOM from 'react-dom'
import LogonForm from './LogonForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LogonForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})
