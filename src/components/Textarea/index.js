import React from 'react'

export default ({ name, value, onChange, label }) => (
  <div className='input-container'>
    <label htmlFor={name}>
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange} />
  </div>
)
