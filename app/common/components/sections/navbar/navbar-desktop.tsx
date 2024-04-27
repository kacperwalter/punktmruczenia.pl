// NavbarDesktop.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/icons/logo-nav.svg'
import { linksLeft, linksRight } from '@/app/data/navigationItems'
import NavbarItem from '../../partials/navbar-item/navbar-item'

const NavbarDesktop = () => {
  return (
    <div className="navbar-desktop">
      <div className="navbar-desktop__content-left">
        {linksLeft.map((link) => (
          <NavbarItem key={link.href} {...link} />
        ))}
      </div>

      <div>
        <Link href="#" className="navbar-desktop__logo">
          <Image src={logo} alt="logo" width={140} height={120} />
        </Link>
      </div>

      <div className="navbar-desktop__content-right" aria-hidden>
        {linksRight.map((link) => (
          <NavbarItem key={link.href} {...link} />
        ))}
      </div>
    </div>
  )
}

export default NavbarDesktop
