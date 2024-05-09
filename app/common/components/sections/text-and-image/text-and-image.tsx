import Image from "next/image"
import Wrapper from "../../partials/wrapper/wrapper"
import Heading from "../../partials/heading/heading"
import kot from "@/public/images/kot-2.jpeg"
import "./text-and-image.scss"

import kreskaTop1 from "@/public/images/kreski/text-and-image-top-1.svg"
import kreskaTop2 from "@/public/images/kreski/text-and-image-top-2.svg"

const TextAndImage = () => {
  return (
    <section className="text-and-image" id="behavioral-problems">
      <Image
        src={kreskaTop1}
        width={220}
        height={75}
        alt="Kreska"
        className="text-and-image__kreska-top--mobile"
      />

      <Image
        src={kreskaTop2}
        width={424}
        height={512}
        alt="Kreska"
        className="text-and-image__kreska-top--desktop"
      />

      <Wrapper>
        <div className="text-and-image__top">
            <Image
              src={kot}
              alt="Cat photo"
              width={1000} 
              height={1000}
              className="text-and-image__image"
            />

            <div className="header">
              <Heading
                type="h2"
                text="Problemy behawioralne"
              />

              <p>
                Co na pewno wiemy o kotach? To, że każdy jest zupełnie inny – od rozmruczanych kanapowców potrzebujących bliskości po kocich indywidualistów żyjących wyłącznie na własnych zasadach. Koty mają różne charaktery i preferencje, ale podobne potrzeby gatunkowe. Zdarza się, że opiekunowie nie potrafią ich zrozumieć.
              </p>

              <p>Z jakimi problemami można się do mnie zgłosić?</p>

              <ul>
                <li>Załatwianie się i znakowanie poza kuwetą</li>
                <li>Zachowania agresywne</li>
                <li>Konflikty z innymi kotami lub zwierzętami</li>
                <li>Zmiany w otoczeniu kota (dokocenie, remont, przeprowadzka, nowy członek rodziny)</li>
                <li>Lęk, stres, fobie</li>
                <li>Inne zaburzenia zachowania</li>
              </ul>
            </div>
          </div>
      </Wrapper>
    </section>
  )
}

export default TextAndImage