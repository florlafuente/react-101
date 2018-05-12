import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Fragment>
      </Router>
    )
  }
}

export default App
