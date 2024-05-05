import Wrapper from "../../partials/wrapper/wrapper"
import Heading from "../../partials/heading/heading"
import "./tiles.scss"

const Tiles = () => {
  const tiles = [
    {
      heading: "Konsultacja stacjonarna <br> 160-200 zł",
      additionalInfo: `
        <ul>
          <li>Konsultacja w domu opiekuna (dojazd na terenie Chodzieży/Poznania, spotkanie trwa ok. 1,5-2 h)</li>
          <li>Wywiad</li>
          <li>Ustalenie planu terapii behawioralnej</li>
          <li>Przesłanie raportu z konsultacji wraz z zaleceniami</li>
          <li>Telefoniczna lub mailowa kontrola po konsultacji</li>
        </ul>
      `,
      image: '/images/kot-1.jpeg',
    },
    {
      heading: "Konsultacja online <br> 150 zł",
      additionalInfo: `
        <ul>
          <li>Konsultacja online za pomocą wybranej platformy (Skype, WhatsApp, Zoom lub Google Meet); spotkanie trwa ok. 45 minut, zazwyczaj proszę opiekuna o wirtualny spacer po miejscu zamieszkania kota, chcę zobaczyć, jak wygląda jego codzienne środowisko</li>
          <li>Analiza zachowania kota na podstawie wypełnionego wcześniej formularza i przesłanych materiałów (zdjęcia, filmy)</li>
          <li>Przesłanie pisemnego raportu z konsultacji wraz z zaleceniami</li>
          <li>Telefoniczna lub mailowa kontrola po konsultacji</li>
        </ul>
      `,
      image: '/images/kot-1.jpeg',
    }
  ]

  return (
    <section className="tiles">
      <Wrapper>
        {tiles.map((tile, index) => (
          // TODO move to separate (partial) component when refactoring
          <article className="tile" key={index}>
            <div className="tile__cover">
              <Heading 
                type="h3"
                text={tile.heading}
              />
            </div>
            
            <p dangerouslySetInnerHTML={{ __html: tile.additionalInfo }} />
          </article>
        ))}
      </Wrapper>
    </section>
  )
}

export default Tiles