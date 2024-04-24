import Image from "next/image"
import Heading from "../../partials/heading/heading"
import Wrapper from "../../partials/wrapper/wrapper"
import icons from "@/public/icons"

const BenefitsGrid = () => {
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
          type="h1"
          text="Z moim wsparciem:"
        />

        <div className="benefits-grid__list">
        {benefits.map((benefit, index) => (
            <article className="benefit" key={index}>
              <Image
                src={icons[benefit.icon]}
                alt={benefit.text}
                width={100}
                height={100}
                unoptimized // Use this if your SVGs are local and optimizations are not needed
              />
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>  
      </Wrapper>
    </section>
  )
}

export default BenefitsGrid