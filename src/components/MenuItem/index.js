import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ path, name }) => (
  <li>
    <NavLink 
      exact
      to={path}
      activeClassName='menu-item-active'>
      {name}
    </NavLink>
  </li>
)