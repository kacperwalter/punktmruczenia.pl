import Image from "next/image"
import Wrapper from "../../partials/wrapper/wrapper"
import Heading from "../../partials/heading/heading"
import "./about-me.scss"
import type { AboutMeProps } from "./about-me.types"
import { PortableText } from "next-sanity"

const AboutMe = ({ content }: AboutMeProps) => {
  return (
    <section className="about-me">
      <Wrapper>
        <div className="about-me__top">
          <Image
            src={content.aboutMeTopImage}
            alt="Top image"
            width={200} 
            height={200}
            className="about-me__image"
          />

          <div className="header">
            <Heading
              type="h1"
              text={content.aboutMeHeading}
            />

            <p>
              Punkt Mruczenia powstał z miłości do zwierząt i przekonania, że bez kotów nic nie byłoby takie samo. W mojej pracy kieruję się empatią, stawiam na pozytywne wzmocnienia, korzystam z fachowej wiedzy i literatury ekspertów z zakresu zoopsychologii oraz kociego behawioru. 
                <br /><br />
              Jestem absolwentką studiów podyplomowych na kierunku psychologia zwierząt na Uniwersytecie SWPS w Poznaniu. Ukończyłam zaawansowany kurs dla behawiorystów kotów prowadzony przez lek. wet. Martynę Woszczyło. Biorę udział w szkoleniach i kursach, które pozwalają lepiej zrozumieć złożoność zachowania kotów.
            </p>
          </div>
        </div>

        <div className="about-me__bottom">
          <Image 
            src={content.aboutMeFirstContentImage}
            alt="Top image"
            width={200} 
            height={200}
            className="about-me__image"
          />

          {/* @ts-ignore */}
          <p>{content.aboutMeContent}</p>

          <Image 
            src={content.aboutMeSecondContentImage}
            alt="Top image"
            width={200} 
            height={200}
            className="about-me__image"
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default AboutMe