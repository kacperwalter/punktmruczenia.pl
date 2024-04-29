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
          <div className="hidden lg:block md:flex flex-start items-start">
            {' '}
            <p className="mb-16 -ml-12">Punkt Mruczenia</p>
            <span className="-ml-12"> Natalia Szajowska-Tomczak</span>
          </div>

          <ul className="flex flex-col items-center md:items-start md:-ml-4">
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
          <div className="flex flex-col md:mb-12 ">
            {' '}
            <div
              className="mt-4 flex justify-center ml-12 flex-col md:flex-row"
              aria-hidden
            >
              <p className="md:mr-4">Znajdziesz mnie:</p>
              <br />
              <div>
                <Link
                  href={
                    'https://www.facebook.com/profile.php?id=61558144896025'
                  }
                >
                  <Image
                    src={'/icons/facebook.svg'}
                    alt="facebook"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href={'https://www.instagram.com/punktmruczenia'}>
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
      </div>
    </section>
  )
}

export default Contact
