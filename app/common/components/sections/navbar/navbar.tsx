'use client'
import React, { useState } from 'react'

import NavbarDesktop from './navbar-desktop'
import NavbarMobile from './navbar-mobile'
import './navbar.scss'

const Navbar: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const toggleMenu = () => setIsMenuVisible(!isMenuVisible)

  return (
    <nav className="navbar">
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  )
}

export default Navbar
