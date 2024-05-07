'use client'

import { useState } from 'react'
import Image from "next/image"
import Wrapper from "../../partials/wrapper/wrapper"
import regularLogo from "@/public/images/logos/punkt_mruczenia_logo_big.svg"
import hamburger from "@/public/utils/hamburger.svg"
import './navigation.scss'

const Navigation = () => {
  return (
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
          />
      </Wrapper>
    </nav>
  )
}

export default Navigation