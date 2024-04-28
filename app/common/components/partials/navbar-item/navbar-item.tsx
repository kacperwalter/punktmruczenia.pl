'use client'
import Image from 'next/image'
import Link from 'next/link'
import phoneIcon from '@/public/icons/phone-icon.svg'
import type { NavbarItemProps } from './navbar-items.types'

const NavbarItem = ({ href, label, isPhone }: NavbarItemProps) => {
  if (isPhone) {
    return (
      <Link href={href} className="phone-icon">
        <Image
          src={phoneIcon}
          alt="logo"
          width={20}
          height={20}
          style={{ marginRight: '4px' }}
        />
        {label}
      </Link>
    )
  }

  return <Link href={href}>{label}</Link>
}

export default NavbarItem
