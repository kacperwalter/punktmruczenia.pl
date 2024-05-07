import Wrapper from "../../partials/wrapper/wrapper"
import Tile from '../../partials/tile/tile'
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
          <li>Konsultacja online za pomocą wybranej platformy (Skype, WhatsApp, Zoom lub Google Meet) spotkanie trwa ok. 45 minut, zazwyczaj proszę opiekuna o wirtualny spacer po miejscu zamieszkania kota, chcę zobaczyć, jak wygląda jego codzienne środowisko</li>
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
          <Tile 
            key={index}
            heading={tile.heading}
            additionalInfo={tile.additionalInfo}
            image={tile.image}
          />
        ))}
      </Wrapper>
    </section>
  )
}

export default Tiles