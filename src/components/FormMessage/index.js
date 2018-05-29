import React from 'react'

export default ({ status }) => (
  <div>
    <p>
      { status === 'success' ?
        'Thanks, your form was successfully submited' :
        'There was an error, please try again later.'
      }
    </p>
  </div>
)