'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import Wrapper from "../../partials/wrapper/wrapper"
import regularLogo from "@/public/images/logos/punkt_mruczenia_logo_big.svg"
import whiteLogo from "@/public/images/logos/punkt_mruczenia_logo_white.svg"
import hamburger from "@/public/utils/hamburger.svg"
import cross from "@/public/utils/cross.svg"
import regularPhoneIcon from "@/public/icons/contact/phone.svg"
import whitePhoneIcon from "@/public/icons/contact/phone-white.svg"
import whiteInstagramIcon from "@/public/icons/social/instagram-white.svg"
import whiteFacebookIcon from "@/public/icons/social/facebook-white.svg"
import './navigation.scss'

const Navigation = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  return (
    <>
      <nav className="mobile-navigation">
        <Wrapper>
            <Image 
              className='mobile-navigation__logo'
              src={regularLogo}
              width={500}
              height={500}
              alt=""
            />

            <Image
              className='mobile-navigation__hamburger'
              src={hamburger}
              width={500}
              height={500}
              alt="Hamburger menu icon"
              onClick={toggleDropdownVisibility}
            />
        </Wrapper>

        <div className={`mobile-navigation__dropdown ${isDropdownVisible ? "mobile-navigation__dropdown--open" : ""}`}>
          <Wrapper>
              <Image 
                className='mobile-navigation__logo'
                src={whiteLogo}
                width={500}
                height={500}
                alt=""
              />

              <Image
                className='mobile-navigation__cross'
                src={cross}
                width={500}
                height={500}
                alt="Hamburger menu icon"
                onClick={toggleDropdownVisibility}
              />
          </Wrapper>

          <div className="mobile-navigation__dropdown-menu">
            <ul>
              <li><a onClick={toggleDropdownVisibility} href="#about-me">O mnie</a></li>
              <li><a onClick={toggleDropdownVisibility} href="#qualifications">Kwalifikacje</a></li>
              <li><a onClick={toggleDropdownVisibility} href="#behavioral-problems">Problemy behawioralne</a></li>
              <li><a onClick={toggleDropdownVisibility} href="#consultation">Konsultacja behawioralna</a></li>
              <li><a onClick={toggleDropdownVisibility} href="#contact">Kontakt</a></li>
            </ul>

            <div className='mobile-navigation__dropdown-contact'>
              <Image
                src={whitePhoneIcon}
                className="white-phone"
                width={500}
                height={500}
                alt="White phone icon"
              />

              <a href="tel:+48609198974" className="mobile-navigation__dropdown-contact-link">
                <p>+48 609 198 974</p>
              </a>
            </div>
          </div>

          <div className='mobile-navigation__dropdown-socials'>
            <p>Znajdziesz mnie:</p>

            <div className="mobile-navigation__dropdown-socials-links">
              <Link href="https://www.facebook.com/profile.php?id=61558144896025">
                <Image
                  src={whiteFacebookIcon}
                  width={500}
                  height={500}
                  alt="White facebook icon"
                />
              </Link>

              <Link href="https://www.instagram.com/punktmruczenia/">
                <Image
                  src={whiteInstagramIcon}
                  width={500}
                  height={500}
                  alt="White instagram icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <nav className="desktop-navigation">
        <Wrapper>
          <ul>
            <li><a href="#about-me">O mnie</a></li>
            <li><a href="#qualifications">Kwalifikacje</a></li>
            <li><a href="#behavioral-problems">Problemy behawioralne</a></li>
          </ul>

          <Link href="#hero" className='desktop-navigation__home'>
            <Image
               src={regularLogo}
               width={1000}
               height={1000}
               alt='Logo punkt mruczenia'
              />
          </Link>

          <ul>
            <li><a href="#consultation">Konsultacja behawioralna</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>

          <div className="desktop-navigation__contact">
            <Image
              src={regularPhoneIcon}
              width={1000}
              height={1000}
              alt='Phone icon'
            />

            <a href="tel:+48609198974" className="desktop-navigation__contact-link">
              <p>+48 609 198 974</p>
            </a>
          </div>
        </Wrapper>
      </nav>
    </>
  )
}

export default Navigation