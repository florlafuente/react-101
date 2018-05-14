import React from 'react'

export default ({ type, name, value, onChange }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange} />
)