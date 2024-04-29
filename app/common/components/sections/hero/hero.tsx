import Image from 'next/image'
import './hero.scss'
import type { HeroProps } from './hero.types'
import { PortableText } from 'next-sanity'
import Heading from '../../partials/heading/heading'
import Button from '../../partials/button/button'
import Wrapper from '../../partials/wrapper/wrapper'

const Hero = ({ content }: HeroProps) => {
  return (
    <section className="hero pt-20 xl:pt-14" id="top">
      <Wrapper>
        <article className="hero__content">
          <Image
            src={content.homepageHeroLogo}
            width={100}
            height={100}
            alt=""
          />

          <div className="header">
            <Heading type="h1" text={content.homepageHeroHeading} />

            <PortableText value={content.homepageHeroContent} />
          </div>

          <Button
            arrow
            arrowDirection="down"
            text={content.homepageHeroButton}
            as="link"
            href="#o-mnie"
            className="text-white"
          />
        </article>

        <div className="relative">
          <img
            className="hidden xl:block md:absolute z-0 pb-4"
            src={'/icons/gradient-img.svg'}
            alt=""
            style={{ width: '300px', height: '300px', right: 30, bottom: -28 }}
          />

          <img
            className="hero__hero-image relative z-10"
            src={content.homepageHeroImage}
            width={700}
            height={500}
            alt=""
          />
          <img
            className="block xl:hidden absolute z-0 pb-4"
            src={'/icons/gradient-img.svg'}
            alt=""
            style={{
              width: '120px',
              height: '130px',
              right: '-5px',
              bottom: '-1px',
            }}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero
