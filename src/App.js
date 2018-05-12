import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './routes/home'
import About from './routes/about'
import Menu from './components/Menu'

export default () => (
  <Router>
    <Fragment>
      <Menu />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </Fragment>
  </Router>
)
