import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const SocialMediaLink = ({ icon, link}) => (
  <a href={link} target='blank' className='social-nav-link'>
    <span className={icon} />
  </a>
)

SocialMediaLink.propTypes = {
  'icon': PropTypes.string.isRequired,
  'link': PropTypes.string.isRequired
}

export default SocialMediaLink
