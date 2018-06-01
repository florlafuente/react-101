import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const FormInput = ({ type, name, value, onChange, label }) => (
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

FormInput.propTypes = {
  'type': PropTypes.string.isRequired,
  'name': PropTypes.string.isRequired,
  'value': PropTypes.string.isRequired,
  'onChange': PropTypes.func.isRequired,
  'label': PropTypes.string.isRequired,
}

export default FormInput
