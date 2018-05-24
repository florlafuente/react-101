import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import ApiExample from './routes/ApiExample'
import Contact from './routes/Contact'
import Menu from './components/Menu'

export default () => (
  <Router>
    <Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/api-example' component={ApiExample} />
      <Route path='/contact' component={Contact} />
      <Menu />
    </Fragment>
  </Router>
)
