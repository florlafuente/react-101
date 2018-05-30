import React from 'react'
import './index.css'

export default ({ status }) => (
  <div className='form-message-container'>
    <p className='form-message-text'>
      { status === 'success' ?
        'Thanks, your form was successfully submited' :
        'There was an error, please try again later.'
      }
    </p>
  </div>
)