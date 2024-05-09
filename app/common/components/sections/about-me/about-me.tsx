import Image from "next/image"
import Wrapper from "../../partials/wrapper/wrapper"
import Heading from "../../partials/heading/heading"
import "./about-me.scss"
import type { AboutMeProps } from "./about-me.types"

import kreskaTop1 from "@/public/images/kreski/about-me-top-1.svg"
import kreskaTop2 from "@/public/images/kreski/about-me-top-2.svg"
import kreskaMiddle from "@/public/images/kreski/about-me-middle.svg"
import kreskaBottom1 from "@/public/images/kreski/about-me-bottom-1.svg"
import kreskaBottom2 from "@/public/images/kreski/about-me-bottom-2.svg"

// TODO CMS - content from CMS
const AboutMe = ({ content }: AboutMeProps) => {
  return (
    <section className="about-me" id="about-me">
      <Image
        src={kreskaTop1}
        width={100}
        height={130}
        alt="Kreska"
        className="about-me__kreska-top--mobile"
      />

      <Image
        src={kreskaTop2}
        width={560}
        height={240}
        alt="Kreska"
        className="about-me__kreska-top--desktop"
      />

      <Wrapper>
        <div className="about-me__top">
          <Image
            src={content.aboutMeTopImage}
            alt="Top image"
            width={1000} 
            height={1000}
            className="about-me__image"
          />

          <div className="header">
            <Heading
              type="h2"
              text={content.aboutMeHeading}
            />

            <p>
              Punkt Mruczenia powstał z miłości do zwierząt i przekonania, że bez kotów nic nie byłoby takie samo. W mojej pracy kieruję się empatią, stawiam na pozytywne wzmocnienia, korzystam z fachowej wiedzy i literatury ekspertów z zakresu zoopsychologii oraz kociego behawioru. 
                <br /><br />
                <strong>
                Jestem absolwentką studiów podyplomowych na kierunku psychologia zwierząt na Uniwersytecie SWPS w Poznaniu. Ukończyłam zaawansowany kurs dla behawiorystów kotów prowadzony przez lek. wet. Martynę Woszczyło. Biorę udział w szkoleniach i kursach, które pozwalają lepiej zrozumieć złożoność zachowania kotów.
                </strong>
            </p>
          </div>
        </div>

        <Image
          src={kreskaMiddle}
          width={560}
          height={240}
          alt="Kreska"
          className="about-me__kreska-middle"
        />

        <div className="about-me__bottom">
          <Image 
            src={content.aboutMeFirstContentImage}
            alt="Top image"
            width={1000} 
            height={1000}
            className="about-me__image about-me__image--centered"
          />

          <p>
            Kocham wszystkie zwierzęta, ale to właśnie kotom oddałam największy kawałek mojego futrzastego serca. Przez moje ręce przewinęło się sporo bezdomnych kotów i psów. Nie wszystkim udało się pomóc na czas, ale każdy z nich odcisnął swoją łapkę na ścieżce, która prowadzi tutaj, do Punktu Mruczenia.

            <br /><br />

            Na co dzień jestem kocią mamą Uli, adoptowanej, niesłyszącej trikolorki ze zwyrodnieniem kręgosłupa szyjnego. To Ula dała mi najważniejszą lekcję życia ze zwierzakiem: nie wychodź z oczekiwaniami, daj przestrzeń, wesprzyj w zapewnieniu komfortu, a być może wydarzy się magia.
          </p>

          <Image 
            src={content.aboutMeSecondContentImage}
            alt="Top image"
            width={1000} 
            height={1000}
            className="about-me__image about-me__image--centered about-me__image--second"
          />
        </div>
      </Wrapper> 

      <Image
        src={kreskaBottom1}
        width={270}
        height={110}
        alt="Kreska"
        className="about-me__kreska-bottom--mobile"
      />

      <Image
        src={kreskaBottom2}
        width={170}
        height={250}
        alt="Kreska"
        className="about-me__kreska-bottom--desktop"
      />
    </section>
  )
}

export default AboutMe