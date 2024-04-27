import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BrandLogo from '../../partials/brand-logo/brand-logo'
import hamburger from '@/public/icons/hamburger.svg'
import close from '@/public/icons/close.svg'
import BrandLogoWhite from '../../partials/brand-logo/brand-logo-footer'

const NavbarMobile = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  return (
    <header
      className={`fixed z-50 flex w-full items-center justify-between p-4 lg:hidden ${
        isMenuVisible ? 'bg-[#B96645]' : 'bg-[#FFF8EF]'
      }`}
    >
      {isMenuVisible ? <BrandLogoWhite /> : <BrandLogo />}
      <div className="ml-5 flex items-center">
        <button onClick={toggleMenu}>
          <span className="sr-only">Open main menu</span>
          <Image
            src={isMenuVisible ? close : hamburger}
            alt="menu"
            width={42}
            height={42}
          />
        </button>
      </div>
      {isMenuVisible ? (
        <nav
          className="fixed inset-0 top-24  h-0  w-full text-4xl  opacity-0  lg:!hidden bg-[#B96645]"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 1,
            height: '0px',
            minHeight: '100vh',
          }}
        >
          <ul className=" flex flex-col font-semibold text-white text-center">
            <li className="w-full text-center justify-center">
              <Link
                href="#o-mnie"
                className="block leading-standard mb-4 w-full  px-4 py-4 text-center  md:px-[34px]"
              >
                O mnie
              </Link>
            </li>
            <li className="w-full text-center justify-center">
              <Link
                href="/kwalifikacje"
                className="block leading-standard mb-4 w-full  px-4 py-4 text-center  md:px-[34px]"
              >
                Kwalifikacje
              </Link>
            </li>
            <li className="w-full text-center justify-center">
              <Link
                href="/problemy-behawioralne"
                className="block leading-standard mb-4 w-full  px-4 py-4 text-center  md:px-[34px]"
              >
                Problemy behawioralne
              </Link>
            </li>
            <li className="w-full text-center justify-center">
              <Link
                href="/konsultacja-behawioralna"
                className="block leading-standard mb-4 w-full  px-4 py-4 text-center  md:px-[34px]"
              >
                Konsultacja behawioralna
              </Link>
            </li>
            <li className="w-full text-center justify-center">
              <Link
                href="/kontakt"
                className="block leading-standard mb-4 w-full  px-4 py-4 text-center  md:px-[34px]"
              >
                Kontakt
              </Link>
            </li>
            <li className="w-full text-center justify-center">
              <a
                href="tel:+48609198974"
                className="block leading-standard mb-4 w-full  px-4 py-4 text-center  md:px-[34px]"
              >
                <Image
                  src="/icons/phone-mobile.svg"
                  alt="phone"
                  width={34}
                  height={34}
                  className="mr-4"
                />
                +48 609 198 974
              </a>
            </li>
            <li className="w-full text-center justify-center flex pt-36">
              Znajdziesz mnie :
              <a href="https://www.facebook.com" className="ml-4">
                <Image
                  src={'/icons/facebook-mobile.svg'}
                  alt="Facebook"
                  width={34}
                  height={34}
                />
              </a>
              <a href="https://www.instagram.com" className="ml-4">
                <Image
                  src={'/icons/instagram-mobile.svg'}
                  alt="Instagram"
                  width={34}
                  height={34}
                />
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

export default NavbarMobile
