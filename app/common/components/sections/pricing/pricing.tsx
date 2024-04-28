import Image from 'next/image'
import Wrapper from '../../partials/wrapper/wrapper'
import './pricing.scss'
import Heading from '../../partials/heading/heading'

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing__top">
        <div className="image-container">
          <Image
            src={'/images/consultation-stac.png'}
            alt="Top image"
            width={300}
            height={300}
            className="pricing__image"
          />
          <div className="image-text">
            <Heading type="h3" text="Konsultacja stacjonarna" />
            <Heading type="h3" text="160-200zł" />
          </div>
        </div>
        <div className="image-container">
          <Image
            src={'/images/consultation-online.png'}
            alt="Top image"
            width={300}
            height={300}
            className="pricing__image"
          />
          <div className="image-text">
            <Heading type="h3" text="Konsultacja online" />
            <Heading type="h3" text="150zł" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
