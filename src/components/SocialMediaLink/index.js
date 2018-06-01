import React from 'react'
import './index.css'

export default ({ icon, link}) => (
  <a href={link} target='blank' className='social-nav-link'>
    <span className={icon} />
  </a>
)