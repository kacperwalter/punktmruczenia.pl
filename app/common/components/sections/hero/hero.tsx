import Image from "next/image"
import "./hero.scss"
import type { HeroProps } from "./hero.types"
import Header from "../../partials/header/header"

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

      {/* <Header
        headingType="h1"
        heading={content.homepageHeroHeading}
        // caption={content.homepageHeroContent}
        /> */}
    </section>
  )
}

export default Hero