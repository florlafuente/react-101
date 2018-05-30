import React from 'react'
import './index.css'

export default ({ name, value, onChange, label }) => (
  <div className='textarea-container'>
    <textarea
      className={`textarea-input ${value !== '' ? 'active' : ''}`}
      name={name}
      value={value}
      onChange={onChange} />
    <label
      className='textarea-label'
      htmlFor={name}>
      {label}
    </label>
  </div>
)
