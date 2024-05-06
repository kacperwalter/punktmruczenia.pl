import Image from "next/image"
import Link from "next/link"
import Heading from "../../partials/heading/heading"

import bigLogo from "@/public/images/logos/punkt_mruczenia_logo_big.svg"
import smallLogo from "@/public/images/logos/punt_mruczenia_logo_small.svg"

import "./contact.scss"

const Contact = () => {
  const contactElements = [
    {
      icon: "/icons/contact/phone.svg",
      text: "+48 609 198 974",
    },
    {
      icon: "/icons/contact/email.svg",
      text: "kontakt@punktmruczenia.pl",
    },
  ]

  const socials = [
    {
      icon: "/icons/social/facebook.svg",
      href: "https://www.facebook.com/profile.php?id=61558144896025",
    },
    {
      icon: "/icons/social/instagram.svg",
      href: "https://www.instagram.com/punktmruczenia/",
    },
  ]
  
  return (
    <section className="contact">
      <Heading
        type="h2"
        text="Kontakt"
      />
      
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
        <div className="contact-hardwritten-logo">
          <Heading
            type="h3"
            text="Punk Mruczenia"
          />

          <p>Natalia Szajowska-Tomczak</p>
        </div>

        <div className="contact__info">
          {contactElements.map((element, index) => (
            <div key={index} className="contact__info-element">
              <Image
                src={element.icon}
                alt=""
                width={200}
                height={200}
               />

               <p>{element.text}</p>
            </div>
          ))}
        </div>

        <div className="contact__socials">
            {socials.map((social, index) => (
              <Link key={index} href={social.href}>
                <Image
                  src={social.icon}
                  width={200}
                  height={200}
                  alt=""
                />
              </Link>
            ))}
        </div>

      </div>
    </section>
  )
}

export default Contact