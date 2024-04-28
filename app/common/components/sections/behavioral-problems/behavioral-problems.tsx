import Image from 'next/image'
import Wrapper from '../../partials/wrapper/wrapper'
import Heading from '../../partials/heading/heading'
import './behavioral-problems.scss'

const BehavioralProblems = () => {
  return (
    <section className="behavioral-problems">
      <Wrapper>
        <div className="behavioral-problems__top" id="problemy-behawioralne">
          <div className="header">
            <Image
              src={'/images/cat.png'}
              alt="Top image"
              width={200}
              height={200}
              className="behavioral-problems__image block -mt-36 lg:hidden"
            />
            <Heading type="h1" text={'Problemy behawioralne'} />

            <p>
              Co na pewno wiemy o kotach? To, że każdy jest zupełnie inny – od
              rozmruczanych kanapowców potrzebujących bliskości po kocich
              indywidualistów żyjących wyłącznie na własnych zasadach. Koty mają
              różne charaktery i preferencje, ale podobne potrzeby gatunkowe.
              Zdarza się, że opiekunowie nie potrafią ich zrozumieć.
              <br />
              <br />Z jakimi problemami można się do mnie zgłosić?
            </p>
            <ul className="text-left mx-12">
              <li>
                <p>Załatwianie się i znakowanie poza kuwetą</p>
              </li>
              <li>
                <p>Zachowania agresywne</p>
              </li>
              <li>
                <p>Konflikty z innymi kotami lub zwierzętami</p>
              </li>
              <li>
                <p>
                  {' '}
                  Zmiany w otoczeniu kota (dokocenie, remont, przeprowadzka,
                  nowy członek rodziny)
                </p>
              </li>
              <li>
                <p>Lęk, stres, fobie</p>
              </li>
              <li>
                <p>Inne zaburzenia zachowania</p>
              </li>
            </ul>
          </div>
          <Image
            src={'/images/cat.png'}
            alt="Top image"
            width={200}
            height={200}
            className="behavioral-problems__image hidden lg:block"
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default BehavioralProblems
