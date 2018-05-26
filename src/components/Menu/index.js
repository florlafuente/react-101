import React, { Component } from 'react'
import MenuItem from '../MenuItem'
import './index.css'

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
      <nav className='menu-container'>
        {this.links.map((link, i) => (
          <MenuItem
            key={i}
            path={link.path}
            name={link.name} />
        ))}
      </nav>
    )
  }
}
