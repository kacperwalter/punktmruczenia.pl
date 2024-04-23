import Image from "next/image"
import Wrapper from "../../partials/wrapper/wrapper"
import Heading from "../../partials/heading/heading"
import "./about-me.scss"
import type { AboutMeProps } from "./about-me.types"
import { PortableText } from "next-sanity"

const AboutMe = ({ content }: AboutMeProps) => {
  return (
    <section className="about-me">
      <Wrapper>
        <div className="about-me__top">
          <Image
            src={content.aboutMeTopImage}
            alt="Top image"
            width={200} 
            height={200}
            className="about-me__image"
          />

          <div className="header">
            <Heading
              type="h1"
              text={content.aboutMeHeading}
            />

            {/* @ts-ignore */}
            <p>{content.aboutMeCaption}</p>
          </div>
        </div>

        <div className="about-me__bottom">
          <Image 
            src={content.aboutMeFirstContentImage}
            alt="Top image"
            width={200} 
            height={200}
            className="about-me__image"
          />

          {/* @ts-ignore */}
          <p>{content.aboutMeContent}</p>

          <Image 
            src={content.aboutMeSecondContentImage}
            alt="Top image"
            width={200} 
            height={200}
            className="about-me__image"
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default AboutMe