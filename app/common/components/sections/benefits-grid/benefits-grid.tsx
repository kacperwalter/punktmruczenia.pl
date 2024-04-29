'use client'
import Benefit from '../../partials/benefit/benefit'
import Heading from '../../partials/heading/heading'
import Wrapper from '../../partials/wrapper/wrapper'
import icons from '@/public/icons'
import './benefits-grid.scss'
import { useEffect, useRef, useState } from 'react'

const BenefitsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const benefitRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // @ts-ignore
            const benefitIndex = benefitRefs.current.indexOf(entry.target)
            setActiveIndex(benefitIndex)
          }
        })
      },
      { threshold: 0.7 }
    )

    benefitRefs.current.forEach((benefitRef) => observer.observe(benefitRef))

    return () => {
      benefitRefs.current.forEach((benefitRef) =>
        observer.unobserve(benefitRef)
      )
    }
  }, [])

  const benefits = [
    { icon: 'icon-1', text: 'nauczysz się rozumieć koci język' },
    {
      icon: 'icon-2',
      text: 'dowiesz się, jak zaspokoić kluczowe potrzeby Twojego kota',
    },
    { icon: 'icon-3', text: 'zadbasz o jego komfort i kondycję' },
    {
      icon: 'icon-4',
      text: 'wyeliminujesz lub zredukujesz niepożądane zachowania',
    },
    { icon: 'icon-5', text: 'rozwiążesz problem behawioralny' },
    { icon: 'icon-6', text: 'odnajdziesz punkt mruczenia Twojego kota' },
  ]

  return (
    <section className="benefits-grid -mt-48 sm:mt-12 ">
      <Wrapper>
        <h2 className="font-[400] text-xl text-[48px] md:text-[48px]">
          Z moim wsparciem:
        </h2>

        <div className="benefits-grid__list -mr-12 lg:mx-0">
          {benefits.map((benefit, index) => (
            <div
              // @ts-ignore
              ref={(el) => (benefitRefs.current[index] = el)}
              className={`benefit px-2 ${
                index === activeIndex ? 'active' : ''
              }`}
            >
              <Benefit
                key={benefit.text}
                // @ts-ignore
                icon={icons[benefit.icon]}
                text={benefit.text}
              />
            </div>
          ))}
        </div>
        <div className="dot-container">
          {benefits.map((_, i) => (
            <img
              key={i}
              src={
                i === activeIndex
                  ? '/icons/Ellipse-8.svg'
                  : '/icons/Ellipse-9.svg'
              }
              alt={i === activeIndex ? 'Active icon' : 'Inactive icon'}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}
export default BenefitsGrid
