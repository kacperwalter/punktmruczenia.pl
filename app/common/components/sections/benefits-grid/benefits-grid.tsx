// @ts-nocheck
import Benefit from "../../partials/benefit/benefit"
import Heading from "../../partials/heading/heading"
import Wrapper from "../../partials/wrapper/wrapper"
import icons from "@/public/icons"
import "./benefits-grid.scss"

const BenefitsGrid = ({ content }) => {
  const { benefitsGridHeading, benefits = [] } = content

  return (
    <section className="benefits-grid">
      <Wrapper>
        <Heading
          type="h2"
          text={benefitsGridHeading} // Render heading from CMS
        />

        <div className="benefits-grid__list">
          {benefits.map((benefit, index) => (
            <Benefit 
              key={index} 
              icon={benefit.icon}
              text={benefit.text}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default BenefitsGrid