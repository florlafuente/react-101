import React from 'react'
import SocialMediaLink from '../SocialMediaLink'
const links = [
  {
    'img': './github.svg',
    'link': 'https://www.github.com/florlafuente'
  },
  {
    'img': './github.svg',
    'link': 'https://www.github.com/florlafuente'
  },
  {
    'img': './github.svg',
    'link': 'https://www.github.com/florlafuente'
  }
]

export default () => (
  <nav>
    {links.map((link, i) => (
      <SocialMediaLink link={link.link} src={link.img} key={i} />
    ))}
  </nav>
)
