import Benefit from "../../partials/benefit/benefit"
import Heading from "../../partials/heading/heading"
import Wrapper from "../../partials/wrapper/wrapper"
import icons from "@/public/icons"
import "./benefits-grid.scss"

const BenefitsGrid = () => {
  // TODO that should come from CMS
  const benefits = [
    { icon: 'icon-1', text: 'nauczysz się rozumieć koci język' },
    { icon: 'icon-2', text: 'dowiesz się, jak zaspokoić kluczowe potrzeby Twojego kota' },
    { icon: 'icon-3', text: 'zadbasz o jego komfort i kondycję' },
    { icon: 'icon-4', text: 'wyeliminujesz lub zredukujesz niepożądane zachowania' },
    { icon: 'icon-5', text: 'rozwiążesz problem behawioralny' },
    { icon: 'icon-6', text: 'odnajdziesz punkt mruczenia Twojego kota' },
  ]

  return (
    <section className="benefits-grid">
      <Wrapper>
        <Heading
          type="h2"
          text="Z moim wsparciem:"
        />

        <div className="benefits-grid__list">
          {benefits.map((benefit, index) => (
            // @ts-ignore - well there is no much time for TS in low budget project
            <Benefit key={index} icon={icons[benefit.icon]} text={benefit.text} />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default BenefitsGrid