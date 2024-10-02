// @ts-nocheck

import Image from "next/image"
import Link from "next/link"
import Heading from "../../partials/heading/heading"
import Wrapper from "../../partials/wrapper/wrapper"
import bigLogo from "@/public/images/logos/punkt_mruczenia_logo_big.svg"
import smallLogo from "@/public/images/logos/punt_mruczenia_logo_small.svg"
import "./contact.scss"

const Contact = ({ content }) => {
  const { contactHeading, companyName, contactName, contactInfo = [], socialLinks = [] } = content

  return (
    <section className="contact" id="contact">
      <Wrapper>
        <Heading type="h2" text={contactHeading} />

        <Image
          src={bigLogo}
          className="contact__big-logo"
          width={1000}
          height={1000}
          alt="Logotyp Punkt Mruczenia"
        />

        <Image
          src={smallLogo}
          className="contact__small-logo"
          width={1000}
          height={1000}
          alt="Logotyp Punkt Mruczenia"
        />

        <div className="contact__content">
          <div className="contact__hardwritten-logo">
            <Heading type="h3" text={companyName} />

            <p>{contactName}</p>
          </div>

          <div className="contact__info">
            {contactInfo.map((element, index) => (
              <div key={index} className="contact__info-element">
                <Image src={element.icon} alt="" width={200} height={200} />
                <a href={element.href} className="contact__link">
                  <p>{element.text}</p>
                </a>
              </div>
            ))}
          </div>

          {socialLinks.length > 0 && (
            <div className="contact__socials">
              <p>Znajdziesz mnie:</p>

              <div className="contact__social-links">
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.href}>
                    <Image src={social.icon} width={200} height={200} alt="" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default Contact