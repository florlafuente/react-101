import React from 'react'
import './index.css'

export default ({ action, value }) => (
  <button 
    className='btn'
    onClick={action}>
    {value}
  </button>
)