// about-me.tsx

import Image from "next/image"
import Wrapper from "../../partials/wrapper/wrapper"
import Heading from "../../partials/heading/heading"
import "./about-me.scss"
import type { AboutMeProps } from "./about-me.types"

import kreskaTop1 from "@/public/images/kreski/about-me-top-1.svg"
import kreskaTop2 from "@/public/images/kreski/about-me-top-2.svg"
import kreskaMiddle from "@/public/images/kreski/about-me-middle.svg"
import kreskaBottom1 from "@/public/images/kreski/about-me-bottom-1.svg"
import kreskaBottom2 from "@/public/images/kreski/about-me-bottom-2.svg"

const AboutMe = ({ content }: AboutMeProps) => {
  const {
    aboutMeTopImage,
    aboutMeHeading,
    aboutMeCaption,
    aboutMeFirstContentImage,
    aboutMeContent,
    aboutMeSecondContentImage,
  } = content

  return (
    <section className="about-me" id="about-me">
      <Image
        src={kreskaTop1}
        width={100}
        height={130}
        alt="Kreska"
        className="about-me__kreska-top--mobile"
      />

      <Image
        src={kreskaTop2}
        width={560}
        height={240}
        alt="Kreska"
        className="about-me__kreska-top--desktop"
      />

      <Wrapper>
        <div className="about-me__top">
          <Image
            src={aboutMeTopImage}
            alt="Top image"
            width={1000}
            height={1000}
            className="about-me__image"
          />

          <div className="header">
            <Heading type="h2" text={aboutMeHeading} />
            <p dangerouslySetInnerHTML={{ __html: aboutMeCaption }} /> {/* Render caption as HTML */}
          </div>
        </div>

        <Image
          src={kreskaMiddle}
          width={560}
          height={240}
          alt="Kreska"
          className="about-me__kreska-middle"
        />

        <div className="about-me__bottom">
          <Image
            src={aboutMeFirstContentImage}
            alt="First content image"
            width={1000}
            height={1000}
            className="about-me__image about-me__image--centered"
          />

          <p dangerouslySetInnerHTML={{ __html: aboutMeContent }} /> {/* Render content as HTML */}

          <Image
            src={aboutMeSecondContentImage}
            alt="Second content image"
            width={1000}
            height={1000}
            className="about-me__image about-me__image--centered about-me__image--second"
          />
        </div>
      </Wrapper>

      <Image
        src={kreskaBottom1}
        width={270}
        height={110}
        alt="Kreska"
        className="about-me__kreska-bottom--mobile"
      />

      <Image
        src={kreskaBottom2}
        width={170}
        height={250}
        alt="Kreska"
        className="about-me__kreska-bottom--desktop"
      />
    </section>
  )
}

export default AboutMe