import Image from "next/image"
import "./hero.scss"
import type { HeroProps } from "./hero.types"
import { PortableText } from "next-sanity"
import Heading from "../../partials/heading/heading"
import Button from "../../partials/button/button"
import Wrapper from "../../partials/wrapper/wrapper"

const Hero = ({ content }: HeroProps) => {
  return (
    <section className="hero">
      <Wrapper>
        <Image
          className="hero__hero-image"
          src={content.homepageHeroImage}
          width={100}
          height={100}
          alt=""
        />

        <article className="hero__content">
          <Image
            src={content.homepageHeroLogo}
            width={100}
            height={100}
            alt=""
          />

          <div className="header">
            <Heading
              type="h1"
              text={content.homepageHeroHeading}
            />

            <PortableText value={content.homepageHeroContent} />
          </div>

          <Button arrow arrowDirection="down" text={content.homepageHeroButton}/>
        </article>
      </Wrapper>
    </section>
  )
}

export default Hero