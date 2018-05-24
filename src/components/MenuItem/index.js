import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default ({ path, name }) => (
    <NavLink 
      exact
      to={path}
      className='menu-item'
      activeClassName='menu-item-active'>
      {name}
    </NavLink>
)