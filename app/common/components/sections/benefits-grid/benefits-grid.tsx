'use client'
import Benefit from '../../partials/benefit/benefit'
import Heading from '../../partials/heading/heading'
import Wrapper from '../../partials/wrapper/wrapper'
import icons from '@/public/icons'
import './benefits-grid.scss'
import { useState } from 'react'

const BenefitsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0)

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
    <section className="benefits-grid -mt-48 sm:mt-0">
      <Wrapper>
        <Heading type="h1" text="Z moim wsparciem:" />

        <div className="benefits-grid__list">
          {benefits.map((benefit, index) => (
            <div
              className={`benefit ${index === activeIndex ? 'active' : ''}`}
              onTouchStart={() => setActiveIndex(index)}
            >
              <Benefit
                key={index}
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
