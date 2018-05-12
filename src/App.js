import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './routes/home'
import About from './routes/about'

export default () => (
  <Router>
    <Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </Fragment>
  </Router>
)
