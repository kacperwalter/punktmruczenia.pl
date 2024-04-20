import Image from "next/image"
import { PortableText } from "next-sanity"
import "./about-me.scss"
import type { AboutMeProps } from "./about-me.types"

const AboutMe = ({ content }: AboutMeProps) => {
  return (
    <section className="about-me">
      <Image
        src={content.aboutMeTopImage}
        alt="Top image"
        width={400} // Adjust the width as needed
        height={250} // Adjust the height as needed
      />
      <h2>{content.aboutMeHeading}</h2>
      <p>{content.aboutMeCaption}</p>
      <Image
        src={content.aboutMeFirstContentImage}
        alt="First content image"
        width={400} // Adjust the width as needed
        height={250} // Adjust the height as needed
      />
      <PortableText value={content.aboutMeContent} />
      <Image
        src={content.aboutMeSecondContentImage}
        alt="Second content image"
        width={400} // Adjust the width as needed
        height={250} // Adjust the height as needed
      />
    </section>
  )
}

export default AboutMe