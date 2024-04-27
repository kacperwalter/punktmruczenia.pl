'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hamburger from '@/public/icons/hamburger.svg'
import close from '@/public/icons/close.svg'
import BrandLogo from '../../partials/brand-logo/brand-logo'
import './navbar-mobile.scss'

const NavbarMobile: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
    console.log(isMenuVisible)
  }

  return (
    <nav className="navbar-mobile">
      <div className="navbar-mobile__logo">
        <BrandLogo />
      </div>
      <button
        className="navbar-mobile__hamburger"
        style={{ display: isMenuVisible ? 'none' : 'block' }}
        onClick={toggleMenu}
      >
        <Image src={hamburger} alt="hamburger" width={24} height={24} />
      </button>
      <button
        className="navbar-mobile__close"
        style={{ display: isMenuVisible ? 'block' : 'none' }}
        onClick={toggleMenu}
      >
        <Image src={close} alt="close" width={24} height={24} />
      </button>
      <div
        className={`navbar-mobile__menu ${
          isMenuVisible ? 'navbar-mobile__menu--visible open' : ''
        }`}
      >
        <ul className="navbar-mobile__navigation">
          <li className="navbar-mobile__link">
            <Link href="/o-mnie">O mnie</Link>
          </li>
          <li className="navbar-mobile__link">
            <Link href="/kwalifikacje">Kwalifikacje</Link>
          </li>
          <li className="navbar-mobile__link">
            <Link href="/problemy-behawioralne">Problemy behawioralne</Link>
          </li>
          <li className="navbar-mobile__link">
            <Link href="/konsultacja-behawioralna">
              Konsultacja behawioralna
            </Link>
          </li>
          <li className="navbar-mobile__link">
            <Link href="/kontakt">Kontakt</Link>
          </li>
          <li className="navbar-mobile__link">
            <a href="tel:+48609198974">+48 609 198 974</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarMobile
