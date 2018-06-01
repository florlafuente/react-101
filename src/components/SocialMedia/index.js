import React from 'react'
import SocialMediaLink from '../SocialMediaLink'
import './index.css'

const links = [
  {
    'icon': 'icon-social-github',
    'link': 'https://www.github.com/florlafuente'
  },
  {
    'icon': 'icon-social-instagram',
    'link': 'https://www.instagram.com/flora.lafuente'
  },
  {
    'icon': 'icon-social-twitter',
    'link': 'https://www.twitter.com/florigatitos'
  },
  {
    'icon': 'icon-social-tumblr',
    'link': 'https://quesepabordar.tumblr.com'
  }
]

export default () => (
  <nav className='social-media-nav'>
    {links.map((link, i) => (
      <SocialMediaLink link={link.link} icon={link.icon} key={i} />
    ))}
  </nav>
)
