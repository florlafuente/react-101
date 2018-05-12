import React from 'react'
import MenuItem from '../MenuItem'

const links = [
  { 
    'path': '/',
    'name': 'Home'
  },
  { 
    'path': '/about',
    'name': 'About'
  }
]

export default () => (
  <nav>
    {links.map((link, i) => (
      <MenuItem
        path={link.path}
        name={link.name} />
    ))}
  </nav>
)