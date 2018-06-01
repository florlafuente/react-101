import React from 'react'

export default ({ icon, link}) => (
  <a href={link} target='blank'>
    <span className={icon} />
  </a>
)