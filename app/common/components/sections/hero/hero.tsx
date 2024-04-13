import Image from "next/image"
import "./hero.scss"
import type { HeroProps } from "./hero.types"
import { PortableText } from "next-sanity"
import Heading from "../../partials/heading/heading"

const Hero = ({ content }: HeroProps) => {
  return (
    <section className="hero">
      <Image
        src={content.homepageHeroImage}
        width={100}
        height={100}
        alt=""
      />

      <Image
        src={content.homepageHeroLogo}
        width={100}
        height={100}
        alt=""
      />

      <div className="hero__header">
        <Heading
          type="h1"
          text={content.homepageHeroHeading}
        />

        <PortableText value={content.homepageHeroContent} />
      </div>

      
    </section>
  )
}

export default Hero