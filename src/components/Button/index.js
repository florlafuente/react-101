import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Button = ({ action, value }) => (
  <button
    className='btn'
    onClick={action}>
    {value}
  </button>
)

Button.propTypes = {
  'action': PropTypes.func.isRequired,
  'value': PropTypes.string.isRequired
}

export default Button