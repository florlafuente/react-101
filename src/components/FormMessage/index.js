import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const FormMessage = ({ status }) => (
  <div className='form-message-container'>
    <p className='form-message-text'>
      { status === 'success' ?
        'Thanks, your form was successfully submited' :
        'There was an error, please try again later.'
      }
    </p>
  </div>
)

FormMessage.propTypes = {
  'status': PropTypes.string.isRequired
}

export default FormMessage
