import React from 'react'
import Image from 'next/image'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <Image
        src={'/icons/logo-footer.svg'}
        alt="Top image"
        width={0}
        height={0}
        className="contact-me__image"
      />
    </footer>
  )
}

export default Footer
