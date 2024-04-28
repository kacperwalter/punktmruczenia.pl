import Image from 'next/image'
import Wrapper from '../../partials/wrapper/wrapper'
import Heading from '../../partials/heading/heading'
import './contact.scss'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className="contact-me" id="kontakt">
      <div className="contact-me__top">
        <Image
          src={'/icons/footer-logo.svg'}
          alt="Top image"
          width={200}
          height={200}
          className="contact-me__image hidden lg:block"
        />
        <div className="header flex items-center justify-center">
          <Heading type="h1" text="Kontakt" />
          <Image
            src={'/icons/logo2.svg'}
            alt="Top image"
            width={200}
            height={200}
            className="contact-me__image block lg:hidden"
          />
          <div className="hidden lg:block items-start">
            {' '}
            <p className="mb-16">Punkt Mruczenia</p>
            <span> Natalia Szajowska-Tomczak</span>
          </div>

          <ul className="flex flex-col items-center md:items-start text-center md:text-left">
            <li className="flex items-center">
              <Image
                src={'/icons/phone-icon.svg'}
                alt="phone icon"
                width={50}
                height={50}
              />{' '}
              +48 609 198 974
            </li>
            <li className="flex items-center">
              {' '}
              <Image
                src={'/icons/mail.svg'}
                alt="phone icon"
                width={50}
                height={50}
              />{' '}
              kontakt@punktmruczenia.pl
            </li>
          </ul>
          <div className="flex flex-col ">
            {' '}
            <p>Znajdziesz mnie:</p>
            <br />
            <div className="mt-4 flex justify-center" aria-hidden>
              <Link href={'#'}>
                <Image
                  src={'/icons/facebook.svg'}
                  alt="facebook"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href={'#'}>
                <Image
                  src={'/icons/instagram.svg'}
                  alt="instagram"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-me__bottom"></div>
    </section>
  )
}

export default Contact
