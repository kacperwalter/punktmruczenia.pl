import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BrandLogo from '../../partials/brand-logo/brand-logo'
import hamburger from '@/public/icons/hamburger.svg'
import close from '@/public/icons/close.svg'
import BrandLogoWhite from '../../partials/brand-logo/brand-logo-footer'

const NavbarMobile = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  const closeMenu = () => {
    setIsMenuVisible(false)
  }

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '-100%' },
  }
  const navVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  }

  return (
    <motion.header
      initial={false}
      animate={isMenuVisible ? 'open' : 'closed'}
      className={`fixed flex w-full items-center z-50 justify-between p-4 xl:hidden  ${
        isMenuVisible ? 'bg-[#B96645]' : 'bg-[#FFF8EF]'
      }`}
    >
      {isMenuVisible ? <BrandLogoWhite /> : <BrandLogo />}
      <div className=" flex items-center">
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
      <motion.nav
        variants={navVariants}
        initial="closed"
        animate={isMenuVisible ? 'open' : 'closed'}
        className="fixed inset-0 z-50 top-24 w-full text-4xl lg:hidden bg-[#B96645]"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <motion.ul
          variants={variants}
          initial="open"
          animate={isMenuVisible ? 'open' : 'closed'}
          className=" flex flex-col text-[#FFF8EF] text-center text-[18px]"
        >
          <li className="w-full text-center justify-center">
            <Link
              href="#o-mnie"
              className="block leading-standard mb-4 w-full  px-4 py-4 text-center  md:px-[34px]"
              onClick={closeMenu}
            >
              O mnie
            </Link>
          </li>
          <li className="w-full text-center justify-center">
            <Link
              href="#kwalifikacje"
              className="block leading-standard mb-4 w-full  px-4 py-4 text-center  md:px-[34px]"
              onClick={closeMenu}
            >
              Kwalifikacje
            </Link>
          </li>
          <li className="w-full text-center justify-center">
            <Link
              href="#problemy-behawioralne"
              className="block leading-standard mb-4 w-full  px-4 py-4 text-center  md:px-[34px]"
              onClick={closeMenu}
            >
              Problemy behawioralne
            </Link>
          </li>
          <li className="w-full text-center justify-center">
            <Link
              href="#konsultacja-behawioralna"
              className="block leading-standard mb-4 w-full  px-4 py-4 text-center  md:px-[34px]"
              onClick={closeMenu}
            >
              Konsultacja behawioralna
            </Link>
          </li>
          <li className="w-full text-center justify-center">
            <Link
              href="#kontakt"
              className="block leading-standard mb-4 w-full  px-4 py-4 text-center  md:px-[34px]"
              onClick={closeMenu}
            >
              Kontakt
            </Link>
          </li>
          <li className="w-full text-center justify-center pt-5">
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
                onClick={closeMenu}
              />
              +48 609 198 974
            </a>
          </li>
          <li className="w-full text-center justify-center items-center flex pt-36">
            Znajdziesz mnie :
            <a href="https://www.facebook.com" className="ml-4" target="_blank">
              <Image
                src={'/icons/facebook-mobile.svg'}
                alt="Facebook"
                width={34}
                height={34}
              />
            </a>
            <a
              href="https://www.instagram.com"
              className="ml-4"
              target="_blank"
            >
              <Image
                src={'/icons/instagram-mobile.svg'}
                alt="Instagram"
                width={34}
                height={34}
              />
            </a>
          </li>
        </motion.ul>
      </motion.nav>
    </motion.header>
  )
}

export default NavbarMobile
