import Image from 'next/image'
import Wrapper from '../../partials/wrapper/wrapper'
import Heading from '../../partials/heading/heading'
import './contact.scss'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className="contact-me">
      <div className="contact-me__top">
        <Image
          src={'/icons/footer-logo.svg'}
          alt="Top image"
          width={200}
          height={200}
          className="contact-me__image"
        />
        <div className="header">
          <Heading type="h3" text="Kontakt" />
          <p> Punkt Mruczenia</p>
          <span> Natalia Szajowska-Tomczak</span>
          <ul>
            <li>
              <Image
                src={'/icons/phone-icon.svg'}
                alt="phone icon"
                width={50}
                height={50}
              />{' '}
              +48 609 198 974
            </li>
            <li>
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
          <p>
            {' '}
            Znajdziesz mnie:{' '}
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
          </p>
        </div>
      </div>

      <div className="contact-me__bottom"></div>
    </section>
  )
}

export default Contact
