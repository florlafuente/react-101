import React from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import './index.css'

export default ({ name, value, onChange, label }) => (
  <div className='textarea-container'>
    <TextareaAutosize
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
