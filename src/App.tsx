import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/common/Header'
import Image from './components/common/Image'

import styles from './App.module.css'
import logo from './images/ig-logo.png'

import Home from './routes/Home'
import About from './routes/About'

const App: React.FunctionComponent = () => (
  <Router>
    <Header
      text="Instagram Clone"
      image={
        <Image
          image={logo}
          alt="Instagram icon"
          className={styles.imageContainer}
        />
      }
    />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Router>
)

export default App
