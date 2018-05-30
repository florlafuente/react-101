import React from 'react'

export default ({ src, link}) => (
  <a href={link} target='blank'>
    <img src={src} />
  </a>
)