import React from 'react'
import ReactDOM from 'react-dom'
import LogonContainer from './LogonContainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LogonContainer />, div)
  ReactDOM.unmountComponentAtNode(div)
})
