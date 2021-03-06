import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import ApiExample from './routes/ApiExample'
import Contact from './routes/Contact'
import Menu from './components/Menu'
import './App.css'

export default () => (
  <Router>
    <div className='App'>
      <Route exact path='/' component={Home} />
    </div>
  </Router>
)
