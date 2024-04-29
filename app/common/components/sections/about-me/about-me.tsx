'use client'

import Image from 'next/image'
import Wrapper from '../../partials/wrapper/wrapper'
import Heading from '../../partials/heading/heading'
import './about-me.scss'
import type { AboutMeProps } from './about-me.types'
import { useState } from 'react'

const AboutMe = ({ content }: AboutMeProps) => {
  const [isContentVisible, setIsContentVisible] = useState(false)

  const handleButtonClick = () => {
    setIsContentVisible(!isContentVisible)
  }
  return (
    <section className="about-me" id="o-mnie">
      <Wrapper>
        <div className="about-me__top">
          <div className="relative">
            <Image
              className="hidden xl:block absolute z-0 transform translate-x-1/3 translate-y-1/4"
              src={'/icons/gradient-img.svg'}
              width={1000}
              height={1000}
              alt=""
            />
            <Image
              src={content.aboutMeTopImage}
              alt="Top image"
              width={200}
              height={200}
              className="about-me__image relative z-10"
            />
          </div>

          <div className="header">
            <Heading type="h1" text={content.aboutMeHeading} />

            <p>
              Punkt Mruczenia powstał z miłości do zwierząt i przekonania, że
              bez kotów nic nie byłoby takie samo. W mojej pracy kieruję się
              empatią, stawiam na pozytywne wzmocnienia, korzystam z fachowej
              wiedzy i literatury ekspertów z zakresu zoopsychologii oraz
              kociego behawioru.
              <br />
              <br />
              Jestem absolwentką studiów podyplomowych na kierunku psychologia
              zwierząt na Uniwersytecie SWPS w Poznaniu. Ukończyłam zaawansowany
              kurs dla behawiorystów kotów prowadzony przez lek. wet. Martynę
              Woszczyło.{' '}
              <span
                className={`${
                  isContentVisible ? 'opacity-100' : 'opacity-30 md:opacity-100'
                }`}
              >
                Biorę udział w szkoleniach i kursach,{' '}
              </span>
              <span
                className={`${
                  isContentVisible ? 'opacity-100' : 'opacity-20 md:opacity-100'
                }`}
              >
                które pozwalają lepiej zrozumieć złożoność{' '}
              </span>
              <span
                className={`${
                  isContentVisible ? 'opacity-100' : 'opacity-10 md:opacity-100'
                }`}
              >
                zachowania kotów.
              </span>
            </p>
          </div>
        </div>
        <div className="lg:-mt-12 hidden xl:block md:ml-[18rem] lg:ml-[24rem] relative xl:ml-[30rem]  z-[-1]">
          <Image src="/icons/line-2.svg" alt="hero" width={600} height={300} />
        </div>

        {isContentVisible && (
          <div className="about-me__bottom md:-mt-32">
            <div className="relative">
              <Image
                className="hidden xl:block absolute z-0 transform translate-x-1/3 translate-y-1/4"
                src={'/icons/gradient-img.svg'}
                width={1000}
                height={1000}
                alt=""
              />
              <Image
                src={content.aboutMeFirstContentImage}
                alt="Top image"
                width={200}
                height={200}
                className="about-me__image relative z-10"
              />
            </div>

            <p>
              Kocham wszystkie zwierzęta, ale to właśnie kotom oddałam
              największy kawałek mojego futrzastego serca. Przez moje ręce
              przewinęło się sporo bezdomnych kotów i psów. Nie wszystkim udało
              się pomóc na czas, ale każdy z nich odcisnął swoją łapkę na
              ścieżce, która prowadzi tutaj, do Punktu Mruczenia.
              <br />
              <br />
              Na co dzień jestem kocią mamą Uli, adoptowanej, niesłyszącej
              trikolorki ze zwyrodnieniem kręgosłupa szyjnego. To Ula dała mi
              najważniejszą lekcję życia ze zwierzakiem: nie wychodź z
              oczekiwaniami, daj przestrzeń, wesprzyj w zapewnieniu komfortu, a
              być może wydarzy się magia.
            </p>

            <Image
              src={content.aboutMeSecondContentImage}
              alt="Top image"
              width={200}
              height={200}
              className="about-me__image mt-12"
            />
          </div>
        )}
        <button
          onClick={handleButtonClick}
          className="md:hidden text-2xl -mt-12 z-50"
        >
          {isContentVisible ? 'Zobacz mniej' : 'Zobacz więcej'}
          <Image
            className="ml-4"
            src="/icons/chevron-down.svg"
            alt="hero"
            width={14}
            height={14}
            style={{
              transform: isContentVisible ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </button>
        <div className="md:block hidden">
          <div className="about-me__bottom md:mt-12 ">
            <Image
              src={'/images/about-c.png'}
              alt="Top image"
              width={200}
              height={200}
              className="about-me__image"
            />

            <p>
              Kocham wszystkie zwierzęta, ale to właśnie kotom oddałam
              największy kawałek mojego futrzastego serca. Przez moje ręce
              przewinęło się sporo bezdomnych kotów i psów. Nie wszystkim udało
              się pomóc na czas, ale każdy z nich odcisnął swoją łapkę na
              ścieżce, która prowadzi tutaj, do Punktu Mruczenia.
              <br />
              <br />
              Na co dzień jestem kocią mamą Uli, adoptowanej, niesłyszącej
              trikolorki ze zwyrodnieniem kręgosłupa szyjnego. To Ula dała mi
              najważniejszą lekcję życia ze zwierzakiem: nie wychodź z
              oczekiwaniami, daj przestrzeń, wesprzyj w zapewnieniu komfortu, a
              być może wydarzy się magia.
            </p>

            <div className="relative">
              <Image
                className="hidden xl:block absolute z-0"
                src={'/images/gradient-2.png'}
                width={1000}
                height={1000}
                alt=""
                style={{
                  width: '250px',
                  height: '250px',
                  right: -50,
                  bottom: 50,
                }}
              />
              <Image
                src={content.aboutMeSecondContentImage}
                alt="Top image"
                width={200}
                height={200}
                className="about-me__image relative z-10"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default AboutMe
