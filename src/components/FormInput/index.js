import React from 'react'
import './index.css'

export default ({ type, name, value, onChange, label }) => (
  <div className='input-container'>
    <input
      className={`form-input ${value !== '' ? 'active' : ''}`}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete={name} />
    <label
      htmlFor={name}
      className='form-label'>
      {label}
    </label>
  </div>
)
