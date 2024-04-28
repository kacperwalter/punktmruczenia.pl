import Image from 'next/image'
import './hero.scss'
import type { HeroProps } from './hero.types'
import { PortableText } from 'next-sanity'
import Heading from '../../partials/heading/heading'
import Button from '../../partials/button/button'
import Wrapper from '../../partials/wrapper/wrapper'

const Hero = ({ content }: HeroProps) => {
  return (
    <section className="hero pt-20 md:pt-14">
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
            // TODO add proper href when will be ready
            href="#"
          />
        </article>

        <div className="relative">
          <Image
            className="hidden xl:block md:absolute z-0 translate-x-1/4"
            src={'/icons/gradient-img.svg'}
            width={1000}
            height={1000}
            alt=""
          />
          <Image
            className="hero__hero-image relative z-10"
            src={content.homepageHeroImage}
            width={700}
            height={500}
            alt=""
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero
