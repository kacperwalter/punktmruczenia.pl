import Image from 'next/image'
import Wrapper from '../../partials/wrapper/wrapper'
import Heading from '../../partials/heading/heading'
import './behavioral-problems.scss'

const BehavioralProblems = () => {
  return (
    <section className="behavioral-problems">
      <Wrapper>
        <div className="behavioral-problems__top">
          <div className="header">
            <Heading type="h3" text={'Problemy behawioralne'} />

            <p>
              Co na pewno wiemy o kotach? To, że każdy jest zupełnie inny – od
              rozmruczanych kanapowców potrzebujących bliskości po kocich
              indywidualistów żyjących wyłącznie na własnych zasadach. Koty mają
              różne charaktery i preferencje, ale podobne potrzeby gatunkowe.
              Zdarza się, że opiekunowie nie potrafią ich zrozumieć.
              <br />
              <br />Z jakimi problemami można się do mnie zgłosić?
              <br />
              <br />
              <ul>
                <li>Załatwianie się i znakowanie poza kuwetą</li>
                <li>Zachowania agresywne</li>
                <li>Konflikty z innymi kotami lub zwierzętami</li>
                <li>
                  Zmiany w otoczeniu kota (dokocenie, remont, przeprowadzka,
                  nowy członek rodziny)
                </li>
                <li>Lęk, stres, fobie</li>
                <li>Inne zaburzenia zachowania</li>
              </ul>
            </p>
          </div>
          <Image
            src={'/images/cat.png'}
            alt="Top image"
            width={200}
            height={200}
            className="behavioral-problems__image"
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default BehavioralProblems
