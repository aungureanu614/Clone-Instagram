import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { render } from 'react-dom'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import SignInForm from './components/Login/SignInForm'
import RegisterForm from './components/Login/RegisterForm'

render(
  <Router>
    <Route path="/" component={App} />
    <Route path="/login" component={SignInForm} />
    <Route path="/register" component={RegisterForm} />
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
