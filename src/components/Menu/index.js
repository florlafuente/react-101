import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MenuItem from '../MenuItem'

export default class extends Component {
  constructor(props){
    super(props)
    this.links = [
        { 
          'path': '/',
          'name': 'Home'
        },
        { 
          'path': '/about',
          'name': 'About'
        },
        {
          'path': '/api-example',
          'name': 'Api example'
        },
        {
          'path': '/contact',
          'name': 'Contact'
        }
    ]
  }
  render() {
    return (
      <nav className='cyan'>
        <div className='nav-wrapper'>
          <NavLink to='/' className='brand-logo'>Flor Lafuente</NavLink>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {this.links.map((link, i) => (
            <MenuItem
              path={link.path}
              name={link.name} />
          ))}
          </ul>
        </div>
      </nav>
    )
  }
}
