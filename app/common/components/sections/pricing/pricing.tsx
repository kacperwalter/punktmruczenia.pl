'use client'

import Image from 'next/image'
import Wrapper from '../../partials/wrapper/wrapper'
import './pricing.scss'
import Heading from '../../partials/heading/heading'
import { useState } from 'react'

const Pricing = () => {
  const [isOpenStac, setIsOpenStac] = useState(false)
  const [isOpenOnline, setIsOpenOnline] = useState(false)
  return (
    <section className="pricing">
      <div className="pricing__top">
        <div className="flex flex-col items-center  ">
          <div className="image-container ">
            <Image
              src={'/images/consultation-stac.png'}
              alt="Top image"
              width={305}
              height={305}
              className="pricing__image  rounded-[2.4rem] "
            />
            <div className="image-text flex justify-between">
              <div>
                <Heading type="h3" text="Konsultacja stacjonarna" />
                <Heading type="h3" text="160-200zł" />
              </div>
              <div
                onClick={() => setIsOpenStac(!isOpenStac)}
                className="cursor-pointer self-end z-50"
              >
                <Image
                  src={'/icons/arrow-down.svg'}
                  alt="arrow up"
                  width={50}
                  height={50}
                  className={isOpenStac ? 'transform rotate-180' : ''}
                />
              </div>
            </div>
          </div>
          <div
            className={`border-2 border-[#F79C80] rounded-[2.4rem] border-t-0 rounded-t-none px-12 -mt-8 md:px-24 ${
              isOpenStac ? 'block' : 'hidden'
            }`}
          >
            <ul className="text-left text-3xl py-12 md:py-36 font-semibold  max-w-sm list-disc md:max-w-3xl text-[#B96645] space-y-12">
              <li className="mb-8">
                Konsultacja w domu opiekuna (dojazd na terenie
                Chodzieży/Poznania, spotkanie trwa ok. 1,5-2 h)
              </li>
              <li className="mb-8">Wywiad</li>
              <li className="mb-8">Ustalenie planu terapii behawioralnej</li>
              <li className="mb-8">
                Przesłanie raportu z konsultacji wraz z zaleceniami
              </li>
              <li className="mb-8">
                Telefoniczna lub mailowa kontrola po konsultacji
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="image-container">
            <Image
              src={'/images/consultation-online.png'}
              alt="Top image"
              width={300}
              height={300}
              className="pricing__image"
            />
            <div className="image-text flex justify-between">
              <div>
                {' '}
                <Heading type="h3" text="Konsultacja online" />
                <Heading type="h3" text="150zł" />
              </div>

              <div
                onClick={() => setIsOpenOnline(!isOpenOnline)}
                className="cursor-pointer self-end z-50"
              >
                <Image
                  src={'/icons/arrow-down.svg'}
                  alt="arrow up"
                  width={50}
                  height={50}
                  className={isOpenOnline ? 'transform rotate-180' : ''}
                />
              </div>
            </div>
          </div>
          <div
            className={`border-2 border-[#F79C80] rounded-[2.4rem] border-t-0 rounded-t-none -mt-8 px-12 md:px-24 ${
              isOpenOnline ? 'block' : 'hidden'
            }`}
          >
            <ul className="text-left text-3xl py-36 font-semibold max-w-sm list-disc md:max-w-3xl text-[#B96645] space-y-12">
              <li className="mb-8">
                Konsultacja w domu opiekuna (dojazd na terenie
                Chodzieży/Poznania, spotkanie trwa ok. 1,5-2 h)
              </li>
              <li className="mb-8">Wywiad</li>
              <li className="mb-8">Ustalenie planu terapii behawioralnej</li>
              <li className="mb-8">
                Przesłanie raportu z konsultacji wraz z zaleceniami
              </li>
              <li className="mb-8">
                Telefoniczna lub mailowa kontrola po konsultacji
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
