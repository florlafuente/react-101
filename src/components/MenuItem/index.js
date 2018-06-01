import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.css'

const MenuItem = ({ path, name }) => (
    <NavLink 
      exact
      to={path}
      className='menu-item'
      activeClassName='menu-item-active'>
      {name}
    </NavLink>
)

MenuItem.propTypes = {
  'path': PropTypes.string.isRequired,
  'name': PropTypes.string.isRequired
}

export default MenuItem