import React from 'react'
import PropTypes from 'prop-types'
import TextareaAutosize from 'react-autosize-textarea'
import './index.css'

const Textarea = ({ name, value, onChange, label }) => (
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

Textarea.propTypes = {
  'name': PropTypes.string.isRequired,
  'value': PropTypes.string.isRequired,
  'onChange': PropTypes.func.isRequired,
  'label': PropTypes.string.isRequired,
}

export default Textarea
