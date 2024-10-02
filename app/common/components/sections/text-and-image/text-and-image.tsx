// @ts-nocheck
import Image from 'next/image'
import Wrapper from '../../partials/wrapper/wrapper'
import Heading from '../../partials/heading/heading'
import { PortableText } from 'next-sanity'
import './text-and-image.scss'

import kreskaTop1 from '@/public/images/kreski/text-and-image-top-1.svg'
import kreskaTop2 from '@/public/images/kreski/text-and-image-top-2.svg'
import kreskaBottom from '@/public/images/kreski/text-and-image-bottom.svg'

const TextAndImage = ({ content }) => {
  const { textAndImageHeading, textAndImageContent, textAndImageImage, textAndImageList } = content

  return (
    <section className="text-and-image" id="behavioral-problems">
      <Image
        src={kreskaTop1}
        width={220}
        height={75}
        alt="Kreska"
        className="text-and-image__kreska-top--mobile"
      />

      <Image
        src={kreskaTop2}
        width={424}
        height={512}
        alt="Kreska"
        className="text-and-image__kreska-top--desktop"
      />

      <Wrapper>
        <div className="text-and-image__top">
            <Image
              src={textAndImageImage}
              alt="Cat photo"
              width={1000}
              height={1000}
              className="text-and-image__image"
            />

            <div className="header">
              <Heading
                type="h2"
                text={textAndImageHeading}
              />

              <PortableText value={textAndImageContent} />

              <ul>
                {textAndImageList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
      </Wrapper>

      <Image
        src={kreskaBottom}
        width={370}
        height={90}
        alt="Kreska"
        className="text-and-image__kreska-bottom"
      />
    </section>
  )
}

export default TextAndImage