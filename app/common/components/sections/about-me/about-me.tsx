import Image from "next/image"
import Wrapper from "../../partials/wrapper/wrapper"
import Heading from "../../partials/heading/heading"
import "./about-me.scss"
import type { AboutMeProps } from "./about-me.types"

// TODO CMS - content from CMS
const AboutMe = ({ content }: AboutMeProps) => {
  return (
    <section className="about-me">
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

        <div className="about-me__bottom">
          <Image 
            src={content.aboutMeFirstContentImage}
            alt="Top image"
            width={1000} 
            height={1000}
            className="about-me__image"
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
            className="about-me__image"
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default AboutMe