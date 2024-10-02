// @ts-nocheck
import Image from 'next/image'
import Heading from '../../partials/heading/heading'
import './qualifications.scss'

const Qualifications = ({ content }) => {
  const { qualificationsImage, qualificationsHeading, qualificationsContent } = content

  return (
    <section className="qualifications" id="qualifications">
      <div className="qualifications__img-container">
        <Image
          src={qualificationsImage}
          alt="Top image"
          width={1000}
          height={1000}
          className="qualifications__image"
        />
      </div>

      <div className="qualifications__content">
        <Heading type="h2" text={qualificationsHeading} />

        <div className="qualifications__text">
          {qualificationsContent.map((yearItem, index) => (
            <div key={index}>
              <h3>{yearItem.year}</h3>
              <ul>
                {yearItem.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Qualifications