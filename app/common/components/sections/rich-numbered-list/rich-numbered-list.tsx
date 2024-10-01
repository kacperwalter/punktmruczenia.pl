// @ts-nocheck
import Wrapper from "../../partials/wrapper/wrapper"
import Heading from "../../partials/heading/heading"
import "./rich-numbered-list.scss"
import Image from "next/image"

import kreska from "@/public/images/kreski/behavioral-problems.svg"
import kreskaBottom from "@/public/images/kreski/behavioral-problems-bottom.svg"

const RichNumberedList = ({ content }) => {
  const { richNumberedListHeading, richNumberedListSections = [] } = content

  return (
    <section className="rich-numbered-list" id="consultation">
      <Wrapper>
        <div className="rich-numbered-list__extended-heading">
          <Heading
            type="h2"
            text={richNumberedListHeading} // Render heading from CMS
          />

          <Image
            src={kreska}
            width={271}
            height={15}
            alt="Kreska"
            className="rich-numbered-list__kreska-top"
          />
        </div>

        <div className="rich-numbered-list__list">
          {richNumberedListSections.map((section, index) => (
            <article className="rich-numbered-list__element" key={index}>
              <Heading
                type="h3"
                text={(index + 1).toString()}
              />

              <p>{section.text}</p> {/* Render section text from CMS */}
            </article>
          ))}
        </div>
      </Wrapper>

      <Image
        src={kreskaBottom}
        width={290}
        height={60}
        alt="Kreska"
        className="rich-numbered-list__kreska-bottom"
      />
    </section>
  )
}

export default RichNumberedList