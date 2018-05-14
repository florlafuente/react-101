import React from 'react'

export default ({ type, name, value, onChange, label }) => (
  <div>
    <label htmlFor={name}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange} />
  </div>
)