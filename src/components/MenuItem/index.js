import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ path, name }) => (
    <NavLink 
      exact
      to={path}
      activeClassName='menu-item-active'>
      {name}
    </NavLink>
)