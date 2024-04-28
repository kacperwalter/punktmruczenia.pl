import Image from 'next/image'
import Heading from '../../partials/heading/heading'
import './qualifications.scss'

import image from '@/public/images/qualifications.png'

const Qualifications = () => {
  return (
    <section className="qualifications" id="kwalifikacje">
      <div className="qualifications__img-container">
        <Image
          src={image}
          alt="Top image"
          width={200}
          height={200}
          className="qualifications__image"
        />
      </div>

      <div className="qualifications__content">
        <Heading type="h1" text="Kwalifikacje" />

        <div className="qualifications__text">
          <h3>2024</h3>
          <ul>
            <li>Zaawansowany kurs dla behawiorystów kotów / PET IDEA</li>
            <li>
              Terapia kotów z problemami behawioralnymi – poziom zaawansowany /
              Uniqskills
            </li>
            <li>Opieka nad kocią rodziną / Uniqskills</li>
          </ul>

          <h3>2021</h3>
          <ul>
            <li>
              Program doskonalenia umiejętności pracy ze zwierzętami z
              zaburzeniami behawioralnymi / Animal Expert
            </li>
            <li>Behawioryzm kotów / lek. wet. Joanna Iracka / SWPS Poznań</li>
            <li>
               Pierwsza pomoc przedweterynaryjna / Centrum Szkoleń Animalia
            </li>
          </ul>

          <h3>2020</h3>
          <ul>
            <li>Kurs groomingu / Eliza Tomczak</li>
            <li>Tellington TTouch / Zuzanna Rybarczyk</li>
          </ul>

          <h3>2019</h3>
          <ul>
            <li>Studia podyplomowe Psychologia zwierząt / SWPS Poznań</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Qualifications
